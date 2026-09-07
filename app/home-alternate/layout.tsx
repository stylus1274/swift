import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/home-alternate" },
  title: "Alternate Homepage Concept | Swift Construction & Painting",
  robots: { index: false, follow: false },
};

export default function AlternateHomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
