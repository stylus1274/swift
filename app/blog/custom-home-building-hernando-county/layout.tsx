import type { Metadata } from "next";

const path = "/blog/custom-home-building-hernando-county";
const title = "Custom Home Building in Hernando County | Swift Construction";
const description = "Follow the custom home process from site evaluation and clearing through construction, inspections and certificate of occupancy in Hernando County.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function CustomHomeBuildingArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, mainEntityOfPage: url, author: { "@type": "Organization", name: "Swift Construction & Painting" }, publisher: { "@id": "https://swiftconstructionandpainting.com/#business" }, url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" }, { "@type": "ListItem", position: 3, name: "Custom Home Building in Hernando County", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
