import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/commercial-painting" },
  title: "Commercial Painting in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Commercial interior and exterior painting serving businesses and managed properties across Hernando, Citrus and Pasco Counties.",
};

export default function CommercialPaintingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
