import type { Metadata } from "next";

const path = "/projects/new-construction-duplex-spring-hill-fl";
const title = "New Construction Duplex in Spring Hill, FL | Swift";
const description = "See the documented details of a Swift new-construction duplex completed in Spring Hill, Florida for a repeat customer.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: {
    title,
    description,
    url: path,
    type: "website",
  },
};

export default function SpringHillDuplexLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "New Construction Duplex in Spring Hill, FL",
      description,
      url,
      isPartOf: { "@id": "https://swiftconstructionandpainting.com/#website" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" },
        { "@type": "ListItem", position: 2, name: "Projects", item: "https://swiftconstructionandpainting.com/gallery" },
        { "@type": "ListItem", position: 3, name: "New Construction Duplex in Spring Hill, FL", item: url },
      ],
    },
  ];

  return (
    <>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
