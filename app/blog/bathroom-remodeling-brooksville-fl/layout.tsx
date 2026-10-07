import type { Metadata } from "next";

const path = "/blog/bathroom-remodeling-brooksville-fl";
const url = `https://swiftconstructionandpainting.com${path}`;
const title = "Bathroom Remodeling in Brooksville, FL | Swift";
const headline = "Bathroom Remodeling in Brooksville, FL: Small Update vs. Full Renovation";
const description = "Small bathroom update or full renovation? Learn what changes the scope of a Brooksville bathroom remodel and when each approach makes sense.";
const image = "https://swiftconstructionandpainting.com/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg";
// Original publication and last content edit, verified against the repository history.
const datePublished = "2026-09-21T19:25:21Z";
const dateModified = "2026-09-27T12:26:03Z";

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
      { "@type": "ListItem", position: 3, name: "Bathroom Remodeling in Brooksville", item: url },
    ],
  },
];

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></>;
}
