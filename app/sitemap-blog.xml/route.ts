const siteUrl = "https://swift-nine-wheat.vercel.app";

const blogRoutes = [
  "/blog",
  "/blog/20-years-building-trust-hernando-county",
  "/blog/custom-home-building-hernando-county",
  "/blog/energy-efficient-windows-spring-hill",
  "/blog/how-long-home-addition-florida",
  "/blog/how-often-repaint-home-florida-humidity",
  "/blog/kitchen-remodeling-spring-hill-fl-adds-value",
  "/blog/realistic-bathroom-remodel-budget",
  "/blog/realistic-kitchen-remodel-budget",
];

export function GET() {
  const urls = blogRoutes
    .map((path) => {
      const priority = path === "/blog" ? "0.8" : "0.7";
      return `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>2026-09-14</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
