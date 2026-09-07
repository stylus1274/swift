import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/interior-painting" },
  title: "Interior Painting in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Interior painting across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.",
};

export default function InteriorPaintingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
