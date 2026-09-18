import type { Metadata } from "next";

const path = "/projects/custom-farmhouse-home-brooksville-fl";
const title = "Custom Farmhouse Home in Brooksville, FL | Swift";
const description = "See a completed Swift custom farmhouse new-construction project in Brooksville, Florida, including exterior, kitchen, living room and bathroom photos.";

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

export default function BrooksvilleCustomFarmhouseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Custom Farmhouse Home in Brooksville, FL",
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
        { "@type": "ListItem", position: 3, name: "Custom Farmhouse Home in Brooksville, FL", item: url },
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
