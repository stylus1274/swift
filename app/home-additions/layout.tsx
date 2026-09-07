import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/home-additions" },
  title: "Home Additions in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Home and room additions planned and built by one licensed contractor serving Hernando, Citrus and Pasco Counties.",
};

export default function HomeAdditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
