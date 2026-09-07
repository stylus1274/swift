import type { Metadata } from "next";

const canonicalUrl = "https://swiftconstructionandpainting.com/bathroom-remodeling";

export const metadata: Metadata = {
  alternates: { canonical: "/bathroom-remodeling" },
  title: "Bathroom Remodeling Contractor | Hernando, Citrus & Pasco Counties",
  description: "Plan a bathroom remodel with one licensed contractor coordinating waterproofing, construction, tile and finish work. Request a free estimate.",
  openGraph: {
    title: "Bathroom Remodeling Contractor | Swift Construction & Painting",
    description: "Bathroom remodeling coordinated by one licensed contractor serving Hernando, Citrus and Pasco Counties.",
    url: "/bathroom-remodeling",
    type: "website",
  },
};

export default function BathroomRemodelingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Bathroom Remodeling",
      serviceType: "Bathroom Remodeling",
      url: canonicalUrl,
      provider: { "@id": "https://swiftconstructionandpainting.com/#business" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Hernando County, Florida" },
        { "@type": "AdministrativeArea", name: "Citrus County, Florida" },
        { "@type": "AdministrativeArea", name: "Pasco County, Florida" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com" },
        { "@type": "ListItem", position: 2, name: "Bathroom Remodeling", item: canonicalUrl },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
