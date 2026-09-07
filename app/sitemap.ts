import type { MetadataRoute } from "next";

const siteUrl = "https://swiftconstructionandpainting.com";
const siteLastModified = new Date("2026-09-07T00:00:00-04:00");

const routes = [
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
  "/new-home-construction",
  "/pressure-washing",
  "/residential-painting",
  "/residential-remodeling",
  "/windows-doors",
  "/blog",
  "/blog/custom-home-building-hernando-county",
  "/blog/kitchen-remodeling-spring-hill-fl-adds-value",
  "/blog/realistic-bathroom-remodel-budget",
  "/blog/realistic-kitchen-remodel-budget",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: siteLastModified,
    changeFrequency: route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/blog" ? 0.8 : 0.7,
  }));
}
