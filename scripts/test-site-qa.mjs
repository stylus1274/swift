import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("./qa-site.mjs", import.meta.url), "utf8");
const origin = "https://qa.example";
const xml = (root, locations) => `<${root}>${locations.map(path => `<loc>https://production.example${path}</loc>`).join("")}</${root}>`;

async function run({ brokenImage = false, failedSitemap = false, flat = false } = {}) {
  const requests = [];
  const messages = [];
  const process = { env: { QA_BASE_URL: origin } };
  const context = {
    URL, AbortController, setTimeout, clearTimeout, process,
    console: { log: text => messages.push(text), error: text => messages.push(text) },
    fetch: async url => {
      const path = new URL(url).pathname;
      requests.push(path);
      let body = "<html></html>", type = "text/html", status = 200;
      if (path.endsWith(".xml")) {
        type = "application/xml";
        if (path === "/sitemap.xml") body = xml(flat ? "urlset" : "sitemapindex", flat ? ["/deep"] : ["/pages.xml", "/nested.xml"]);
        else if (path === "/pages.xml") body = xml("urlset", ["/deep"]);
        else if (path === "/nested.xml") body = xml("sitemapindex", ["/pages.xml", "/sitemap.xml"]);
        if (failedSitemap && path === "/pages.xml") status = 503;
      }
      if (path === "/deep") body = '<img src="/deep-image.png"><a href="/detail#target">Detail</a>';
      if (path === "/detail") body = '<div id="target"></div>';
      if (path === "/deep-image.png" && brokenImage) status = 404;
      if (path === "/this-page-should-not-exist-qa") status = 404;
      return { ok: status === 200, status, url, headers: { get: () => type }, text: async () => body };
    },
  };
  await vm.runInNewContext(`(async () => { ${source}\n })()`, context);
  return { requests, messages: messages.join("\n"), exitCode: process.exitCode };
}

const nested = await run();
assert.equal(nested.exitCode, undefined);
for (const path of ["/pages.xml", "/nested.xml", "/deep", "/deep-image.png", "/detail"]) assert.ok(nested.requests.includes(path), path);
assert.equal(nested.requests.filter(path => path === "/pages.xml").length, 1);
assert.match(nested.messages, /Pages checked: 2/);
const broken = await run({ brokenImage: true });
assert.equal(broken.exitCode, 1);
assert.match(broken.messages, /Missing asset\/image/);
const failed = await run({ failedSitemap: true });
assert.equal(failed.exitCode, 1);
assert.match(failed.messages, /Sitemap failed/);
assert.equal((await run({ flat: true })).exitCode, undefined);
console.log("Site QA regression checks passed: nested and flat sitemaps, cycles, page assets, and child sitemap failures.");
