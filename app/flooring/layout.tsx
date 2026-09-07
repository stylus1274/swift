import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/flooring" },
  title: "Flooring Installation in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Flooring installation across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.",
};

export default function FlooringLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
