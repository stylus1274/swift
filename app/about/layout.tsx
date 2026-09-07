import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Swift Construction & Painting | Florida Nature Coast Contractor",
  description:
    "Meet Swift Construction & Painting, a licensed and insured local contractor serving Hernando, Citrus and Pasco Counties since 2003.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
