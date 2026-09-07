import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/residential-painting" },
  title: "Residential Painting in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Interior and exterior residential painting for homeowners throughout Hernando, Citrus and Pasco Counties.",
};

export default function ResidentialPaintingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
