import type { Metadata } from "next";

const canonicalUrl = "https://swiftconstructionandpainting.com/new-home-construction";

export const metadata: Metadata = {
  alternates: { canonical: "/new-home-construction" },
  title: "New Home Construction in Spring Hill, FL | Swift Construction",
  description: "New home construction across Hernando, Citrus and Pasco Counties. Licensed and insured with free estimates.",
  openGraph: {
    title: "New Home Construction in Spring Hill, FL | Swift Construction",
    description: "Ground-up home construction managed by one licensed contractor serving Hernando, Citrus and Pasco Counties.",
    url: "/new-home-construction",
    type: "website",
  },
};

export default function NewHomeConstructionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "New Home Construction",
      serviceType: "New Home Construction",
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
        { "@type": "ListItem", position: 2, name: "New Home Construction", item: canonicalUrl },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
