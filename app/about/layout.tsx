import type { Metadata } from "next";

const path = "/about";
const title = "About Swift Construction & Painting | Florida Nature Coast Contractor";
const description = "Meet Swift Construction & Painting, a licensed and insured local contractor serving Hernando, Citrus and Pasco Counties since 2003.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "website" },
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "AboutPage", name: "About Swift Construction & Painting", url, mainEntity: { "@id": "https://swiftconstructionandpainting.com/#business" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "About", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
