import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const renderedRoot = join(root, ".next/server/app");
const filesIn = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const path = join(dir, entry.name);
  return entry.isDirectory() ? filesIn(path) : [path];
});
const decode = (text) => text.replace(/<[^>]*>/g, "")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([a-f0-9]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&(?:amp|quot|apos|lt|gt|nbsp);/g, (entity) => ({
    "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " ",
  })[entity]).replace(/\s+/g, " ").trim();
const flatten = (value) => Array.isArray(value) ? value.flatMap(flatten) : value["@graph"] ? flatten(value["@graph"]) : [value];
const routeFile = (pathname) => join(renderedRoot, pathname === "/" ? "index.html" : `${pathname.slice(1)}.html`);
let checked = 0;
let schemaPairs = 0;

for (const file of filesIn(renderedRoot).filter((path) => path.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const sections = [...html.matchAll(/<section\b[^>]*class="site-faq"[^>]*>([\s\S]*?)<\/section>/g)];
  if (!sections.length) continue;
  assert.equal(sections.length, 1, `${file}: duplicated FAQ section`);
  const section = sections[0][1];
  const details = [...section.matchAll(/<details\b([^>]*)>([\s\S]*?)<\/details>/g)];
  assert.ok(details.length, `${file}: FAQ questions were lost`);
  assert.equal(details.filter((x) => /\bopen(?:="[^"]*")?(?:\s|$)/.test(x[1])).length, 1, `${file}: initially open question changed`);
  const groups = new Set(details.map((x) => x[1].match(/\bname="([^"]+)"/)?.[1]));
  assert.equal(groups.size, 1, `${file}: questions must share one accordion group`);
  assert.ok(!groups.has(undefined), `${file}: accordion group is missing`);
  const link = section.match(/<a\b(?=[^>]*class="[^"]*site-faq__estimate)[^>]*href="([^"]+)"/);
  assert.ok(link, `${file}: estimate action missing`);
  assert.ok(decode(section).includes("Have another question? Ask for an estimate."), `${file}: incorrect action text`);
  const target = new URL(link[1], "https://swiftconstructionandpainting.com/");
  const targetHtml = link[1].startsWith("#") ? html : readFileSync(routeFile(target.pathname), "utf8");
  assert.ok(target.hash, `${file}: estimate action must target a form anchor`);
  assert.ok(targetHtml.includes(`id="${target.hash.slice(1)}"`), `${file}: broken estimate anchor ${link[1]}`);

  const questions = details.map((x) => decode(x[2].match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)?.[1] ?? ""));
  const answers = details.map((x) => decode(x[2].match(/<div class="site-faq__answer"><p>([\s\S]*?)<\/p>/)?.[1] ?? ""));
  assert.ok(questions.every(Boolean) && answers.every(Boolean), `${file}: blank FAQ content`);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => flatten(JSON.parse(match[1])));
  for (const faq of schemas.filter((x) => x["@type"] === "FAQPage")) {
    assert.deepEqual(questions, faq.mainEntity.map((q) => decode(q.name)), `${file}: visible questions differ from FAQ schema`);
    assert.deepEqual(answers, faq.mainEntity.map((q) => decode(q.acceptedAnswer.text)), `${file}: visible answers differ from FAQ schema`);
    schemaPairs += questions.length;
  }
  if (file.includes("/blog/") || file.includes("/faq/")) {
    assert.ok(!/<article class="article-body">[\s\S]*<section\b[^>]*class="site-faq"[\s\S]*<\/article>/.test(html), `${file}: article FAQ still constrained to reading column`);
  }
  checked++;
}
assert.ok(checked >= 56, "Not all FAQ routes were rendered");
console.log(`FAQ checks passed: ${checked} rendered routes, ${schemaPairs} question/answer schema pairs; form anchors and full-width article placement verified.`);
