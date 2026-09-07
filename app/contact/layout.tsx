import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Swift Construction & Painting | Request a Free Estimate",
  description:
    "Request a free project estimate from Swift Construction & Painting. Serving Hernando, Citrus and Pasco Counties.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
