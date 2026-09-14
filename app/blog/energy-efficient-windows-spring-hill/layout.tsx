import type { Metadata } from "next";

const path = "/blog/energy-efficient-windows-spring-hill";
const title = "Energy-Efficient Windows in Spring Hill, FL | Swift";
const description = "Learn which window ratings matter in Florida, how low-E glass and SHGC affect comfort, and what to compare before replacing windows in Spring Hill.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "article" },
};

export default function EnergyEfficientWindowsArticleLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const url = `https://swiftconstructionandpainting.com${path}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Energy-Efficient Windows: What Spring Hill Homeowners Should Know Before Replacing",
      description,
      datePublished: "2026-09-14",
      dateModified: "2026-09-14",
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Swift Construction & Painting" },
      publisher: { "@id": "https://swiftconstructionandpainting.com/#business" },
      image: "https://swiftconstructionandpainting.com/assets/windows-doors-hero.png",
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://swiftconstructionandpainting.com/blog" },
        { "@type": "ListItem", position: 3, name: "Energy-Efficient Windows in Spring Hill", item: url },
      ],
    },
  ];

  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
