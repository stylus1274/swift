import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/kitchen-remodeling" },
  title: "Kitchen Remodeling Contractor | Hernando, Citrus & Pasco Counties",
  description: "Plan a kitchen remodel with one licensed contractor coordinating the layout, construction and finish work. Request a free project estimate.",
};

export default function KitchenRemodelingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
