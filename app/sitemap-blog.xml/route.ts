const siteUrl = "https://swift-nine-wheat.vercel.app";

const blogRoutes = [
  "/blog",
  "/blog/20-years-building-trust-hernando-county",
  "/blog/custom-home-building-hernando-county",
  "/blog/energy-efficient-windows-spring-hill",
  "/blog/how-long-home-addition-florida",
  "/blog/how-often-repaint-home-florida-humidity",
  "/blog/how-to-verify-florida-contractor-license-insurance-permit-history",
  "/blog/kitchen-remodeling-spring-hill-fl-adds-value",
  "/blog/realistic-bathroom-remodel-budget",
  "/blog/realistic-kitchen-remodel-budget",
  "/blog/why-local-contractor-licensing-matters-hernando-county",
  "/blog/multi-family-construction-hernando-county-duplex-to-10-plex",
  "/blog/what-not-to-do-kitchen-remodel",
  "/blog/best-of-florida-regional-winner-swift",
  "/blog/bathroom-remodeling-brooksville-fl",
  "/blog/what-not-to-do-bathroom-remodel",
  "/blog/swift-no-deposit-invoice-on-completion",
  "/blog/commercial-painting-contractor-spring-hill-fl",
  "/blog/how-to-choose-commercial-painter",
  "/blog/swift-service-area-spring-hill-citrus-county",
  "/blog/commercial-construction-facility-services-hernando-county",
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
