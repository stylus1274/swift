import type { Metadata } from "next";

const path = "/projects/whole-home-remodel-spring-hill-fl";
const title = "Whole-Home Remodel in Spring Hill, FL | Swift";
const description = "See a four-month Swift whole-home remodel in Spring Hill, Florida, including kitchen and bathroom before-and-after photos and documented project scope.";

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

export default function WholeHomeRemodelSpringHillLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Whole-Home Remodel in Spring Hill, FL",
      description,
      url,
      about: {
        "@type": "Thing",
        name: "Whole-home remodeling project in Spring Hill, Florida",
      },
      isPartOf: { "@id": "https://swiftconstructionandpainting.com/#website" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" },
        { "@type": "ListItem", position: 2, name: "Projects", item: "https://swiftconstructionandpainting.com/gallery" },
        { "@type": "ListItem", position: 3, name: "Whole-Home Remodel in Spring Hill, FL", item: url },
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
