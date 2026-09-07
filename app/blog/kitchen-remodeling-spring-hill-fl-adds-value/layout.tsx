import type { Metadata } from "next";

const path = "/blog/kitchen-remodeling-spring-hill-fl-adds-value";
const title = "Kitchen Remodeling in Spring Hill, FL | What Adds Value";
const description = "See which kitchen remodeling upgrades add practical and resale value for Spring Hill homeowners, plus where overspending is most likely.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function KitchenRemodelingValueArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, mainEntityOfPage: url, author: { "@type": "Organization", name: "Swift Construction & Painting" }, publisher: { "@id": "https://swiftconstructionandpainting.com/#business" }, url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" }, { "@type": "ListItem", position: 3, name: "Kitchen Remodeling in Spring Hill", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
