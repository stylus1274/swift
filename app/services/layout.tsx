import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction, Remodeling & Painting Services | Swift Construction & Painting",
  description:
    "Explore Swift Construction & Painting services across Hernando, Citrus and Pasco Counties, including painting, remodeling, new homes and commercial construction.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Construction, Remodeling & Painting Services | Swift Construction & Painting",
    description:
      "Painting, remodeling, new-home construction and commercial services across Florida's Nature Coast.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
