import type { Metadata } from "next";

const path = "/blog/20-years-building-trust-hernando-county";
const title = "20 Years of Building Trust in Hernando County | Swift";
const description = "See the local experience, licensing, permit history and project standards behind Swift Construction & Painting in Hernando County.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function BuildingTrustArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "20 Years of Building Trust in Hernando County",
      description,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Swift Construction & Painting" },
      publisher: { "@id": "https://swiftconstructionandpainting.com/#business" },
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" },
        { "@type": "ListItem", position: 3, name: "20 Years of Building Trust in Hernando County", item: url },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
