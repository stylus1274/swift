import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/bathroom-remodeling" },
  title: "Bathroom Remodeling Contractor | Hernando, Citrus & Pasco Counties",
  description: "Plan a bathroom remodel with one licensed contractor coordinating waterproofing, construction, tile and finish work. Request a free estimate.",
};

export default function BathroomRemodelingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
