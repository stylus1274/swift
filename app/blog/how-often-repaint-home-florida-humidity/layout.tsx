import type { Metadata } from "next";

const path = "/blog/how-often-repaint-home-florida-humidity";
const title = "How Often Should You Repaint Your Florida Home? | Swift";
const description = "Learn how Florida humidity, sun and rain affect exterior paint life, plus the warning signs that tell homeowners when it is time to repaint.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function FloridaHumidityRepaintingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: "How Often Should You Repaint Your Home in Florida's Humidity?", description, mainEntityOfPage: url, author: { "@type": "Organization", name: "Swift Construction & Painting" }, publisher: { "@id": "https://swiftconstructionandpainting.com/#business" }, url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" }, { "@type": "ListItem", position: 3, name: "How Often Should You Repaint Your Home in Florida's Humidity?", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
