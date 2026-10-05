const siteUrl = "https://swiftconstructionandpainting.com";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${siteUrl}/sitemap-pages.xml</loc>\n  </sitemap>\n  <sitemap>\n    <loc>${siteUrl}/sitemap-blog.xml</loc>\n  </sitemap>\n</sitemapindex>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
