import type { Metadata } from "next";

const path = "/blog/why-local-contractor-licensing-matters-hernando-county";
const title = "Why Local Contractor Licensing Matters in Hernando County | Swift";
const description = "Learn why contractor licensing, local permitting experience and a clear written scope matter before hiring for a Hernando County project.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function ContractorLicensingArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Why Local Contractor Licensing Matters in Hernando County",
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
        { "@type": "ListItem", position: 3, name: "Why Local Contractor Licensing Matters in Hernando County", item: url },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
