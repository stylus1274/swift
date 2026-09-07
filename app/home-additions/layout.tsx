import type { Metadata } from "next";

const canonicalUrl = "https://swiftconstructionandpainting.com/home-additions";

export const metadata: Metadata = {
  alternates: { canonical: "/home-additions" },
  title: "Home Additions in Spring Hill, FL | Swift Construction & Painting",
  description: "Home and room additions planned and built by one licensed contractor serving Hernando, Citrus and Pasco Counties.",
  openGraph: {
    title: "Home Additions in Spring Hill, FL | Swift Construction & Painting",
    description: "Room additions and home expansions planned and built by one licensed contractor serving Hernando, Citrus and Pasco Counties.",
    url: "/home-additions",
    type: "website",
  },
};

export default function HomeAdditionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Home Additions",
      serviceType: "Home Additions and Room Additions",
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
        { "@type": "ListItem", position: 2, name: "Home Additions", item: canonicalUrl },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
