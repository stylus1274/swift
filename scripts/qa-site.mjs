const base = new URL(process.env.QA_BASE_URL || "https://swift-nine-wheat.vercel.app");
const timeoutMs = 15000;

const checked = new Map();
const issues = [];
const warnings = [];

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function normalizeInternal(raw, fromUrl) {
  if (!raw) return null;
  const value = decodeHtml(raw).trim();
  if (!value || value === "#" || /^javascript:/i.test(value)) return { invalid: true, value };
  if (/^(mailto:|tel:|sms:|data:)/i.test(value)) return null;
  try {
    const resolved = new URL(value, fromUrl);
    if (resolved.origin !== base.origin) return null;
    return resolved;
  } catch {
    return { invalid: true, value };
  }
}

async function request(url, method = "GET") {
  const key = `${method}:${url}`;
  if (checked.has(key)) return checked.get(key);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "Swift-Site-QA/1.0" },
    });
    const result = {
      ok: res.ok,
      status: res.status,
      finalUrl: res.url,
      contentType: res.headers.get("content-type") || "",
      text: method === "GET" ? await res.text() : "",
    };
    checked.set(key, result);
    return result;
  } catch (error) {
    const result = { ok: false, status: 0, finalUrl: url, contentType: "", text: "", error: String(error) };
    checked.set(key, result);
    return result;
  } finally {
    clearTimeout(timer);
  }
}

function extract(html, attr) {
  const values = [];
  const re = new RegExp(`\\b${attr}\\s*=\\s*["']([^"']*)["']`, "gi");
  let match;
  while ((match = re.exec(html))) values.push(decodeHtml(match[1]));
  return values;
}

function hasAnchor(html, hash) {
  if (!hash) return true;
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:id|name)\\s*=\\s*["']${escaped}["']`, "i").test(html);
}

function toQaUrl(loc) {
  const u = new URL(loc);
  return new URL(`${u.pathname}${u.search}${u.hash}`, base);
}

console.log(`QA target: ${base.origin}`);

const home = await request(base.href);
if (!home.ok) {
  console.error(`FATAL: homepage returned ${home.status || home.error}`);
  process.exit(1);
}

const sitemapUrl = new URL("/sitemap.xml", base);
const sitemap = await request(sitemapUrl.href);
const routeUrls = new Set([new URL("/", base).href]);

if (!sitemap.ok) {
  issues.push(`Sitemap failed: ${sitemapUrl.href} -> ${sitemap.status || sitemap.error}`);
} else {
  const locs = [...sitemap.text.matchAll(/<loc>(.*?)<\/loc>/gi)].map((m) => m[1].trim());
  for (const loc of locs) {
    try { routeUrls.add(toQaUrl(loc).href); }
    catch { issues.push(`Invalid sitemap URL: ${loc}`); }
  }
}

const robotsUrl = new URL("/robots.txt", base);
const robots = await request(robotsUrl.href);
if (!robots.ok) issues.push(`robots.txt failed: ${robots.status || robots.error}`);

const pageHtml = new Map();
const assets = new Set();
const linkTargets = new Map();

for (const pageUrl of [...routeUrls]) {
  const res = await request(pageUrl);
  if (!res.ok) {
    issues.push(`Page failed: ${pageUrl} -> ${res.status || res.error}`);
    continue;
  }
  if (!/text\/html/i.test(res.contentType)) warnings.push(`Unexpected content type for page ${pageUrl}: ${res.contentType}`);
  pageHtml.set(new URL(pageUrl).pathname, res.text);

  for (const raw of extract(res.text, "href")) {
    const normalized = normalizeInternal(raw, pageUrl);
    if (!normalized) continue;
    if (normalized.invalid) {
      issues.push(`Invalid/empty href on ${pageUrl}: ${JSON.stringify(normalized.value)}`);
      continue;
    }
    const target = new URL(normalized.href);
    const key = `${target.pathname}${target.search}`;
    if (!linkTargets.has(key)) linkTargets.set(key, []);
    linkTargets.get(key).push({ from: pageUrl, hash: target.hash, raw });
  }

  for (const raw of extract(res.text, "src")) {
    if (!raw || raw.startsWith("data:")) continue;
    try {
      const target = new URL(raw, pageUrl);
      if (target.origin === base.origin) assets.add(target.href);
    } catch {
      issues.push(`Invalid src on ${pageUrl}: ${raw}`);
    }
  }
}

for (const [pathAndSearch, refs] of linkTargets) {
  const targetUrl = new URL(pathAndSearch, base);
  const res = await request(targetUrl.href);
  if (!res.ok) {
    issues.push(`Broken internal link: ${targetUrl.href} -> ${res.status || res.error}; linked from ${[...new Set(refs.map(r => r.from))].join(", ")}`);
    continue;
  }
  for (const ref of refs.filter(r => r.hash)) {
    if (!hasAnchor(res.text, ref.hash)) issues.push(`Missing anchor ${ref.hash} at ${targetUrl.href}; linked from ${ref.from}`);
  }
}

for (const assetUrl of assets) {
  const res = await request(assetUrl);
  if (!res.ok) issues.push(`Missing asset/image: ${assetUrl} -> ${res.status || res.error}`);
}

const specialChecks = [
  ["/services", "legacy services redirect"],
  ["/home-alternate", "alternate homepage redirect"],
  ["/this-page-should-not-exist-qa", "404 response"],
  ["/favicon.svg", "favicon"],
];

for (const [path, label] of specialChecks) {
  const url = new URL(path, base);
  const res = await request(url.href);
  if (label === "404 response") {
    if (res.status !== 404) issues.push(`Expected 404 but got ${res.status} for ${url.href}`);
  } else if (!res.ok) {
    issues.push(`${label} failed: ${url.href} -> ${res.status || res.error}`);
  }
}

console.log(`\nPages checked: ${pageHtml.size}`);
console.log(`Internal destinations checked: ${linkTargets.size}`);
console.log(`Assets checked: ${assets.size}`);
console.log(`Sitemap: ${sitemap.status}`);
console.log(`Robots: ${robots.status}`);

if (warnings.length) {
  console.log("\nWARNINGS");
  for (const item of [...new Set(warnings)]) console.log(`- ${item}`);
}

if (issues.length) {
  console.log("\nISSUES");
  for (const item of [...new Set(issues)]) console.log(`- ${item}`);
  process.exitCode = 1;
} else {
  console.log("\nPASS: No broken internal routes, images/assets, or anchor targets found.");
}
