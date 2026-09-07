import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Construction, Painting & Remodeling Blog | Swift Construction",
  description:
    "Practical painting, remodeling, construction and property improvement guidance for Florida homeowners and businesses.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
