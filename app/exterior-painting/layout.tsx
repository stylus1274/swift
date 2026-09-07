import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/exterior-painting" },
  title: "Exterior Painting in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Exterior house painting across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.",
};

export default function ExteriorPaintingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
