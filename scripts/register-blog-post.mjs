import assert from "node:assert/strict";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { root, validateBlogPost } from "./check-blog-schema.mjs";

// Register reviewed article metadata and generate its shared schema layout.
// This does not create or publish article content.
const dataFile = process.argv[2];
assert.ok(dataFile, "Usage: npm run blog:register -- /path/to/post-data.json");
const { slug, ...post } = JSON.parse(readFileSync(dataFile, "utf8"));
validateBlogPost(slug, post);
const registryPath = join(root, "data/blog-posts.json");
const posts = JSON.parse(readFileSync(registryPath, "utf8"));
assert.ok(!Object.hasOwn(posts, slug), `Post "${slug}" is already registered. Edit its existing article data instead.`);
const route = join(root, "app/blog", slug);
assert.ok(!existsSync(join(route, "layout.tsx")), "An existing layout must be reviewed before replacement.");
mkdirSync(route, { recursive: true });
writeFileSync(join(route, "layout.tsx"), `import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogMetadata } from "@/lib/blog";

const slug = ${JSON.stringify(slug)};

export const metadata = getBlogMetadata(slug);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <BlogArticleLayout slug={slug}>{children}</BlogArticleLayout>;
}
`);
posts[slug] = post;
writeFileSync(registryPath, JSON.stringify(posts, null, 2) + "\n");
console.log(`Registered ${slug} with automatic article schema, breadcrumbs, and sitemap inclusion. Add page.tsx and link it from the blog listing before publishing.`);
