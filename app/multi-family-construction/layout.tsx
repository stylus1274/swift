import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/multi-family-construction" },
  title: "Multi-Family Construction in Hernando, Citrus & Pasco Counties | Swift",
  description: "Multi-family construction and property renovation services for owners and developers across Florida's Nature Coast. Request a project conversation.",
};

export default function MultiFamilyConstructionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
