import type { Metadata } from "next";

const path = "/blog/realistic-kitchen-remodel-budget";
const title = "Realistic Kitchen Remodel Budget | Swift Construction";
const description = "See realistic kitchen remodel budget ranges, major cost drivers and planning tips for Hernando County homeowners. Free estimate, no deposit required.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function KitchenRemodelBudgetArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, mainEntityOfPage: url, author: { "@type": "Organization", name: "Swift Construction & Painting" }, publisher: { "@id": "https://swiftconstructionandpainting.com/#business" }, url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" }, { "@type": "ListItem", position: 3, name: "Realistic Kitchen Remodel Budget", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
