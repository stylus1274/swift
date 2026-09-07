import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/residential-remodeling" },
  title: "Residential Remodeling in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Kitchen, bathroom and whole-home remodeling for homeowners throughout Hernando, Citrus and Pasco Counties.",
};

export default function ResidentialRemodelingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
