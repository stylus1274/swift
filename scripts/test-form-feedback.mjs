import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";
import * as React from "react";
import * as jsx from "react/jsx-runtime";

const require = createRequire(import.meta.url);
const validationSource = ts.transpileModule(fs.readFileSync("lib/leadValidation.ts", "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const validationContext = { exports: {} };
vm.runInNewContext(validationSource, validationContext);
const validFields = [{ label: "Name", value: "Jane Smith" }, { label: "Phone", value: "3525551234" }, { label: "Location", value: "Spring Hill" }];
let state, cursor, fields;
class Input {
  constructor(id, message = "") { Object.assign(this, { id, name: id, type: "text", dataset: {}, validity: { valid: !message }, validationMessage: message }); }
}
class Select {}
class Textarea {}
const hooks = {
  ...React,
  useId: () => "test-form",
  useRef: initial => { const i = cursor++; return state[i] ??= { current: initial }; },
  useState: initial => { const i = cursor++; if (!(i in state)) state[i] = initial; return [state[i], value => { state[i] = value; }]; },
};
const source = ts.transpileModule(fs.readFileSync("components/LeadForm.tsx", "utf8"), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const context = { exports: {}, HTMLInputElement: Input, HTMLSelectElement: Select, HTMLTextAreaElement: Textarea, Error, TypeError, requestAnimationFrame: callback => callback(), require: name => ({ react: hooks, "react/jsx-runtime": jsx, "@/lib/submitLead": { collectFields: () => fields, labelForControl: control => control.name }, "@/lib/leadValidation": validationContext.exports }[name] || require(name)) };
vm.runInNewContext(source, context);
const Form = context.exports.default;
function setup(onSubmit, controls = [new Input("name"), new Input("phone")], step = false) {
  state = []; fields = validFields;
  const props = { onSubmit, step, className: "test", children: jsx.jsx("button", { type: "submit", children: "Send" }) };
  const render = () => { cursor = 0; return Form(props); };
  const event = { preventDefault() {}, currentTarget: { elements: controls } };
  return { render, event };
}
function nodes(element) { return React.Children.toArray(element.props.children); }
function status(element) { return nodes(element).find(node => node.props?.role === "status")?.props.children; }
let sends = 0, release;
let test = setup(() => { sends++; return new Promise(resolve => { release = resolve; }); });
const pending = test.render().props.onSubmit(test.event);
assert.match(status(test.render()), /Sending/);
assert.equal(nodes(test.render()).find(node => node.type === "button").props.disabled, true);
await test.render().props.onSubmit(test.event);
assert.equal(sends, 1, "double submits must not send duplicate requests");
release(); await pending;
assert.match(status(test.render()), /has been sent/);
assert.equal(nodes(test.render()).find(node => node.type === "button").props.disabled, undefined);
test = setup(() => { throw Error("Please enter a valid phone number."); });
await test.render().props.onSubmit(test.event);
assert.match(JSON.stringify(test.render()), /Please enter a valid phone number/);
assert.equal(status(test.render()), "");
test = setup(() => { throw new TypeError("Failed to fetch"); });
await test.render().props.onSubmit(test.event);
assert.match(JSON.stringify(test.render()), /Please try again or call/);
test = setup(() => { sends++; }, [new Input("name", "Please fill out this field.")]);
await test.render().props.onSubmit(test.event);
assert.match(JSON.stringify(test.render()), /name: Please fill out this field/);
assert.equal(sends, 1, "invalid fields must not reach delivery");
test = setup(() => { sends++; });
fields = validFields.map(field => field.label === "Phone" ? { ...field, value: "1111111111" } : field);
await test.render().props.onSubmit(test.event);
assert.equal(sends, 1, "shared server validation rules also run before delivery");
test = setup(() => {}, [], true);
await test.render().props.onSubmit(test.event);
assert.equal(status(test.render()), undefined, "continue steps must not claim that a lead was sent");
console.log("Form feedback checks passed: progress, success, duplicate prevention, field errors, delivery errors, and continue steps. No requests sent.");
