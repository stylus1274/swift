import type { Metadata } from "next";

const path = "/commercial-painting";
const title = "Commercial Painting in Spring Hill, FL | Swift Construction & Painting";
const description = "Commercial interior and exterior painting serving businesses and managed properties across Hernando, Citrus and Pasco Counties.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "website" },
};

export default function CommercialPaintingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: "Commercial Painting", provider: { "@id": "https://swiftconstructionandpainting.com/#business" }, areaServed: ["Hernando County, Florida", "Citrus County, Florida", "Pasco County, Florida"], url: `https://swiftconstructionandpainting.com${path}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Commercial Painting", item: `https://swiftconstructionandpainting.com${path}` }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
