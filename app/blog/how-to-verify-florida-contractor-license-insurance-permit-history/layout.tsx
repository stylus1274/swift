import type { Metadata } from "next";

const path = "/blog/how-to-verify-florida-contractor-license-insurance-permit-history";
const title = "How to Verify a Florida Contractor Before Hiring | Swift";
const description = "Learn how to verify a Florida contractor license, workers' compensation coverage, general liability proof and local permit history before hiring.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function VerifyFloridaContractorArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "How to Verify a Florida Contractor License, Insurance, and Permit History Before Hiring",
      description,
      datePublished: "2026-09-14",
      dateModified: "2026-09-14",
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
        { "@type": "ListItem", position: 3, name: "How to Verify a Florida Contractor Before Hiring", item: url },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
