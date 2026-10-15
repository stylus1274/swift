import type { Metadata } from "next";

const canonicalUrl = "https://swiftconstructionandpainting.com/residential-painting";

export const metadata: Metadata = {
  alternates: { canonical: "/residential-painting" },
  title: "House Painters in Spring Hill, FL | Swift",
  description: "House painters in Spring Hill, FL for interior and exterior projects. Compare painting scopes and request a free written estimate from Swift.",
  openGraph: {
    title: "House Painters in Spring Hill, FL | Swift",
    description: "House painters in Spring Hill, FL for interior and exterior projects. Compare painting scopes and request a free written estimate from Swift.",
    url: "/residential-painting",
    type: "website",
  },
};

export default function ResidentialPaintingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Residential Painting",
      serviceType: "Residential Painting",
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
        { "@type": "ListItem", position: 2, name: "Residential Painting", item: canonicalUrl },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
