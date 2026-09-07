import type { Metadata } from "next";

const canonicalUrl = "https://swiftconstructionandpainting.com/kitchen-remodeling";

export const metadata: Metadata = {
  alternates: { canonical: "/kitchen-remodeling" },
  title: "Kitchen Remodeling Contractor | Hernando, Citrus & Pasco Counties",
  description: "Plan a kitchen remodel with one licensed contractor coordinating the layout, construction and finish work. Request a free project estimate.",
  openGraph: {
    title: "Kitchen Remodeling Contractor | Swift Construction & Painting",
    description: "Kitchen remodeling for homeowners across Hernando, Citrus and Pasco Counties, coordinated by one licensed contractor.",
    url: "/kitchen-remodeling",
    type: "website",
  },
};

export default function KitchenRemodelingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Kitchen Remodeling",
      serviceType: "Kitchen Remodeling",
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
        { "@type": "ListItem", position: 2, name: "Kitchen Remodeling", item: canonicalUrl },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
