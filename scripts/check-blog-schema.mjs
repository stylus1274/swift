import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

export const root = fileURLToPath(new URL("../", import.meta.url));
const site = "https://swiftconstructionandpainting.com";
const required = ["title", "headline", "description", "author", "image", "datePublished", "dateModified", "category"];

export function validateBlogPost(slug, post) {
  assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase blog slug with hyphens.");
  for (const key of required) {
    assert.ok(typeof post[key] === "string" && post[key].trim(), `${slug}: missing ${key}`);
  }
  assert.ok(post.description.length <= 160, `${slug}: description exceeds 160 characters`);
  assert.match(post.image, /^\/assets\/[a-zA-Z0-9/_-]+\.(?:webp|png|jpe?g|avif)$/);
  assert.ok(!post.image.includes("..") && existsSync(join(root, "public", post.image)), `${slug}: image file is missing`);
  for (const key of ["datePublished", "dateModified"]) {
    assert.match(post[key], /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2}))?$/, `${slug}: ${key} must be an ISO date, with timezone if a time is included`);
    const date = new Date(post[key].slice(0, 10));
    assert.ok(!Number.isNaN(Date.parse(post[key])) && date.toISOString().slice(0, 10) === post[key].slice(0, 10), `${slug}: invalid ${key}`);
  }
  assert.ok(Date.parse(post.dateModified) >= Date.parse(post.datePublished), `${slug}: modification precedes publication`);
}

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

function decodeHtml(value) {
  return value.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([a-f0-9]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&(?:amp|quot|apos|lt|gt|nbsp);/g, (entity) => ({ "&amp;": "&", "&quot;": '"', "&apos;": "'", "&lt;": "<", "&gt;": ">", "&nbsp;": " " })[entity]);
}

function flatten(value) {
  if (Array.isArray(value)) return value.flatMap(flatten);
  return value["@graph"] ? flatten(value["@graph"]) : [value];
}

function checkRendered(slug, post) {
  const html = readFileSync(join(root, ".next/server/app/blog", `${slug}.html`), "utf8");
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => flatten(JSON.parse(match[1])));
  const url = `${site}/blog/${slug}`;
  const articles = schemas.filter((x) => ["Article", "BlogPosting", "NewsArticle"].includes(x["@type"]));
  assert.equal(articles.length, 1, `${slug}: expected exactly one article schema`);
  const article = articles[0];
  assert.equal(article["@type"], "BlogPosting");
  for (const key of ["headline", "description", "datePublished", "dateModified"]) assert.equal(article[key], post[key], `${slug}: wrong ${key}`);
  assert.deepEqual(article.author, { "@type": "Person", name: post.author });
  assert.equal(article.url, url);
  assert.equal(article.mainEntityOfPage["@id"], url);
  assert.deepEqual(article.image, [`${site}${post.image}`]);
  assert.ok(schemas.some((x) => x["@id"] === article.publisher["@id"]), `${slug}: publisher reference does not resolve`);
  assert.ok(!schemas.some((x) => x["@type"] === "CollectionPage"), `${slug}: inherited listing schema`);
  const breadcrumbs = schemas.filter((x) => x["@type"] === "BreadcrumbList");
  assert.equal(breadcrumbs.length, 1, `${slug}: duplicate or missing breadcrumbs`);
  assert.deepEqual(breadcrumbs[0].itemListElement.map((x) => x.position), [1, 2, 3]);
  assert.equal(breadcrumbs[0].itemListElement[2].item, url);
  assert.equal(decodeHtml(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1].replace(/<[^>]*>/g, "").replace(/<!--.*?-->/g, "")), post.headline, `${slug}: headline differs from visible H1`);
  assert.ok(html.includes(`src="${post.image}"`), `${slug}: schema image is not displayed in the article`);
  const canonical = html.match(/<link\b(?=[^>]*rel="canonical")(?=[^>]*href="([^"]+)")[^>]*>/)?.[1];
  assert.equal(canonical, url, `${slug}: canonical and article URL disagree`);
  assert.ok(html.includes(post.author), `${slug}: author is not visible`);
}

export function checkBlogSchema({ rendered = false } = {}) {
  const posts = JSON.parse(readFileSync(join(root, "data/blog-posts.json"), "utf8"));
  const routes = filesIn(join(root, "app/blog")).filter((path) => path.endsWith("/page.tsx") && path !== join(root, "app/blog/page.tsx"));
  const slugs = routes.map((path) => relative(join(root, "app/blog"), dirname(path)));
  assert.deepEqual(Object.keys(posts).sort(), [...slugs].sort(), "Every published blog route must have one article data entry, without stale entries.");
  const listing = readFileSync(join(root, "app/blog/page.tsx"), "utf8");
  for (const path of routes) {
    const slug = relative(join(root, "app/blog"), dirname(path));
    validateBlogPost(slug, posts[slug]);
    assert.ok(listing.includes(`"/blog/${slug}"`), `${slug}: article is missing from the blog listing`);
    const layout = readFileSync(join(dirname(path), "layout.tsx"), "utf8");
    assert.ok(layout.includes('from "@/components/BlogArticleLayout"') && layout.includes('from "@/lib/blog"'), `${slug}: shared article template missing`);
    assert.ok(layout.includes(`const slug = "${slug}";`) && layout.includes("getBlogMetadata(slug)") && layout.includes("<BlogArticleLayout slug={slug}>"), `${slug}: incorrect template or route slug`);
    const source = readFileSync(path, "utf8");
    assert.ok(!/['"]@type['"]\s*:\s*['"](?:Article|BlogPosting|NewsArticle|BreadcrumbList|CollectionPage)['"]/.test(source + layout), `${slug}: remove local article/breadcrumb schema; keep local FAQ schema only`);
    assert.ok(!/TODO: WRITE ARTICLE/.test(source), `${slug}: draft article content is unfinished`);
    if (rendered) checkRendered(slug, posts[slug]);
  }
  if (rendered) {
    const html = readFileSync(join(root, ".next/server/app/blog.html"), "utf8");
    const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => flatten(JSON.parse(match[1])));
    assert.equal(schemas.filter((x) => x["@type"] === "CollectionPage").length, 1, "Blog listing must retain collection schema");
  }
  console.log(`Blog schema ${rendered ? "rendered" : "source"} checks passed: ${routes.length} posts.`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  checkBlogSchema({ rendered: process.argv.includes("--rendered") });
}
