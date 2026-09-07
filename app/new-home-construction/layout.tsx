import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/new-home-construction" },
  title: "New Home Construction in Spring Hill, FL | Swift Construction",
  description: "New home construction across Hernando, Citrus and Pasco Counties. Licensed and insured with free estimates.",
};

export default function NewHomeConstructionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
