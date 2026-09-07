import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/pressure-washing" },
  title: "Pressure Washing in Spring Hill, FL | Swift Construction & Painting",
  description: "Pressure washing across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.",
};

export default function PressureWashingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
