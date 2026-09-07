import type { Metadata } from "next";

const path = "/exterior-painting";
const title = "Exterior Painting in Spring Hill, FL | Swift Construction & Painting";
const description = "Exterior house painting across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "website" },
};

export default function ExteriorPaintingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: "Exterior Painting", provider: { "@id": "https://swiftconstructionandpainting.com/#business" }, areaServed: ["Hernando County, Florida", "Citrus County, Florida", "Pasco County, Florida"], url: `https://swiftconstructionandpainting.com${path}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Exterior Painting", item: `https://swiftconstructionandpainting.com${path}` }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
