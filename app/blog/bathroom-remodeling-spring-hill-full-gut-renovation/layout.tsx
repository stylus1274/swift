import type { Metadata } from "next";

const path = "/blog/bathroom-remodeling-spring-hill-full-gut-renovation";
const url = `https://swiftconstructionandpainting.com${path}`;
const title = "Bathroom Remodeling Spring Hill FL: Full Gut Renovation | Swift";
const headline = "Bathroom Remodeling in Spring Hill, FL: What a Full Gut Renovation Actually Involves";
const description = "See what a full gut bathroom renovation in Spring Hill involves, from demolition and rough work to waterproofing, tile, fixtures and finishes.";
const image = "https://swiftconstructionandpainting.com/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg";
// Original publication and last content edit, verified against the repository history.
const datePublished = "2026-09-22T20:07:43Z";
const dateModified = "2026-09-28T14:20:22Z";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article", images: [image], publishedTime: datePublished, modifiedTime: dateModified },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [image],
    datePublished,
    dateModified,
    author: { "@type": "Person", name: "William Swift" },
    publisher: { "@id": "https://swiftconstructionandpainting.com/#business" },
    articleSection: "Remodeling",
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" },
      { "@type": "ListItem", position: 3, name: "Bathroom Remodeling in Spring Hill", item: url },
    ],
  },
];

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></>;
}
