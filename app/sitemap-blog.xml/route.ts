import posts from "@/data/blog-posts.json";
import { BLOG_SITE_URL } from "@/lib/blog";

export function GET() {
  const routes = [
    { path: "/blog", dateModified: undefined },
    ...Object.entries(posts).map(([slug, post]) => ({
      path: `/blog/${slug}`,
      dateModified: post.dateModified,
    })),
  ];
  const urls = routes
    .map(({ path, dateModified }) => {
      const priority = path === "/blog" ? "0.8" : "0.7";
      const lastmod = dateModified ? `\n    <lastmod>${dateModified}</lastmod>` : "";
      return `  <url>\n    <loc>${BLOG_SITE_URL}${path}</loc>${lastmod}\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
