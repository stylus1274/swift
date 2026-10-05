import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
function loadTS(path, dependencies = {}, globals = {}) {
  const output = ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const context = { exports: {}, require: (name) => dependencies[name] || require(name), console, Response, Request, URL, TextEncoder, process: { env: { RESEND_API_KEY: 'test-only', CONTACT_FROM_EMAIL: 'test@example.com', CONTACT_TO_EMAIL: 'owner@example.com' } }, ...globals };
  vm.runInNewContext(output, context, { filename: path });
  return context.exports;
}
const protection = loadTS('lib/leadProtection.ts');
const fields = [{ label: 'Name', value: 'Jane Smith' }, { label: 'Phone', value: '(352) 555-1234' }, { label: 'Email', value: 'jane@example.com' }, { label: 'Project ZIP', value: '34609' }, { label: 'Project Details', value: 'Please remodel my kitchen.' }];
assert.equal(protection.validateLead(fields), null);
assert.equal(protection.validateLead(fields.filter(f => f.label !== 'Email')), null, 'email remains optional');
assert.equal(protection.validateLead(fields.map(f => f.label === 'Project ZIP' ? { ...f, value: '90210' } : f)), null, 'out-of-area ZIPs remain allowed');
for (const [label, value] of [['Name', '1234'], ['Phone', '1111111111'], ['Email', 'invalid'], ['Project ZIP', '60369x'], ['Project Details', '3525551234']]) assert.ok(protection.validateLead(fields.map(f => f.label === label ? { ...f, value } : f)), label);
assert.equal(protection.leadIdempotencyKey(fields, 10000), protection.leadIdempotencyKey(fields, 20000));
assert.notEqual(protection.leadIdempotencyKey(fields, 10000), protection.leadIdempotencyKey(fields, 86410000));
for (let i = 0; i < 5; i++) assert.equal(protection.allowLeadAttempt('test', 0), true);
assert.equal(protection.allowLeadAttempt('test', 1000), false);
assert.equal(protection.allowLeadAttempt('test', 600001), true);
let sends = 0, bot = false, unavailable = false, emailFails = false;
const route = loadTS('app/api/contact/route.ts', { '@/lib/leadProtection': protection, 'botid/server': { checkBotId: async (options) => { assert.equal(options.advancedOptions.checkLevel, 'basic'); if (unavailable) throw Error('offline'); return { isBot: bot }; } } }, { fetch: async (_, options) => { sends++; assert.match(options.headers['Idempotency-Key'], /^swift-lead-/); const body = JSON.parse(options.body); assert.equal(body.reply_to[0], 'jane@example.com'); return new Response(emailFails ? 'failed' : '{}', { status: emailFails ? 500 : 200 }); } });
let ip = 0;
const payload = { formName: 'Test', page: 'https://swiftconstructionandpainting.com/contact', fields, website: '', elapsedMs: 5000 };
async function submit(body = payload, headers = {}) {
 return route.POST(new Request('https://swiftconstructionandpainting.com/api/contact', { method: 'POST', headers: { origin: 'https://swiftconstructionandpainting.com', 'content-type': 'application/json', 'x-forwarded-for': `test-${ip++}`, ...headers }, body: typeof body === 'string' ? body : JSON.stringify(body) }));
}
assert.equal((await submit()).status, 200);
assert.equal(sends, 1);
for (const [body, status] of [[{ ...payload, website: 'spam.example' }, 403], [{ ...payload, elapsedMs: 1 }, 400], [{ ...payload, elapsedMs: null }, 400], [{ ...payload, website: undefined }, 403], [null, 400], [[], 400], ['broken json', 400], ['x'.repeat(20001), 413], [{ ...payload, fields: [] }, 400]]) assert.equal((await submit(body)).status, status);
assert.equal((await submit(payload, { origin: 'https://attacker.example' })).status, 403);
assert.equal((await submit(payload, { origin: '' })).status, 403);
assert.equal((await submit(payload, { 'content-type': 'text/plain' })).status, 415);
bot = true; assert.equal((await submit()).status, 403); bot = false;
unavailable = true; assert.equal((await submit()).status, 503); unavailable = false;
assert.equal(sends, 1, 'all rejected requests must skip email delivery');
emailFails = true; assert.equal((await submit()).status, 502);
// Every form, including quick forms, must include the shared protection component.
let forms = 0;
function scan(dir) {
 for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
  const path = `${dir}/${entry.name}`;
  if (entry.isDirectory()) scan(path);
  else if (path.endsWith('.tsx')) {
   const source = fs.readFileSync(path, 'utf8');
   for (const match of source.matchAll(/<form\b[^>]*>([\s\S]*?)<\/form>/g)) { forms++; assert.match(match[1], /<LeadProtection \/>/, path); }
  }
 }
}
scan('app');
console.log(`Contact protection checks passed. ${forms} forms covered. No real emails sent.`);
