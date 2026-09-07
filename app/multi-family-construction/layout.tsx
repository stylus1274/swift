import type { Metadata } from "next";

const path = "/multi-family-construction";
const title = "Multi-Family Construction in Hernando, Citrus & Pasco Counties | Swift";
const description = "Multi-family construction and property renovation services for owners and developers across Florida's Nature Coast. Request a project conversation.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "website" },
};

export default function MultiFamilyConstructionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: "Multi-Family Construction and Renovation", provider: { "@id": "https://swiftconstructionandpainting.com/#business" }, areaServed: ["Hernando County, Florida", "Citrus County, Florida", "Pasco County, Florida"], url: `https://swiftconstructionandpainting.com${path}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Multi-Family Construction", item: `https://swiftconstructionandpainting.com${path}` }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
