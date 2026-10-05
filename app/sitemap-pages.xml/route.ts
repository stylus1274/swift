const siteUrl = "https://swiftconstructionandpainting.com";

const pages = [
  "",
  "/about",
  "/bathroom-remodeling",
  "/commercial-painting",
  "/commercial-services",
  "/contact",
  "/exterior-painting",
  "/flooring",
  "/gallery",
  "/home-additions",
  "/interior-painting",
  "/kitchen-remodeling",
  "/multi-family-construction",
  "/custom-home-building",
  "/pressure-washing",
  "/reviews",
  "/locations/spring-hill-fl",
  "/locations/brooksville-fl",
  "/locations/hernando-county-fl",
  "/locations/weeki-wachee-fl",
  "/locations/citrus-county-fl",
  "/hernando-county-fl/new-construction",
  "/brooksville-fl/new-construction",
  "/spring-hill-fl/home-remodeling",
  "/cost-guides",
  "/projects/whole-home-remodel-spring-hill-fl",
  "/projects/custom-farmhouse-home-brooksville-fl",
  "/projects/new-construction-duplex-spring-hill-fl",
  "/residential-painting",
  "/home-remodeling",
  "/services",
  "/windows-doors",
  "/faq",
  "/faq/what-home-remodeling-projects-require-permit-hernando-county",
  "/faq/do-i-need-permit-replace-windows-doors-hernando-county",
  "/faq/can-i-build-custom-home-on-my-own-lot-hernando-county",
  "/faq/do-i-need-permit-home-addition-hernando-county",
  "/faq/how-long-does-kitchen-remodel-take-florida",
  "/faq/how-long-does-bathroom-remodel-take-florida",
  "/faq/can-homeowner-pull-own-building-permit-florida",
  "/faq/best-flooring-for-florida-home",
];

export function GET() {
  const urls = pages
    .map((path) => {
      const priority = path === "" ? "1.0" : path === "/services" ? "0.8" : "0.7";
      return `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
