import type { Metadata } from "next";

const path = "/gallery";
const title = "Construction & Remodeling Gallery | Swift Construction & Painting";
const description = "Explore painting, remodeling and construction project examples across Florida's Nature Coast. Free estimate, no deposit required.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "website" },
};

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "CollectionPage", name: "Swift Construction & Painting Project Gallery", description, url },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" }, { "@type": "ListItem", position: 2, name: "Gallery", item: url }] },
  ];
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
