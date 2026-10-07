import type { Metadata } from "next";

const path = "/blog";
const title = "Construction, Painting & Remodeling Blog | Swift Construction";
const description = "Practical painting, remodeling, construction and property improvement guidance for Florida homeowners and businesses.";

export const metadata: Metadata = {
  alternates: { canonical: path },
  title,
  description,
  openGraph: { title, description, url: path, type: "website" },
};

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
