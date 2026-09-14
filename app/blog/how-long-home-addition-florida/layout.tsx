import type { Metadata } from "next";

const path = "/blog/how-long-home-addition-florida";
const title = "How Long Does a Home Addition Take in Florida? | Swift Construction";
const description = "Learn how long a Florida home addition can take, including design, permitting, construction, inspections and common schedule delays.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function FloridaHomeAdditionTimelineLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: title, description, mainEntityOfPage: url, author: { "@type": "Organization", name: "Swift Construction & Painting" }, publisher: { "@id": "https://swiftconstructionandpainting.com/#business" }, url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" }, { "@type": "ListItem", position: 3, name: "How Long Does a Home Addition Take in Florida?", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
