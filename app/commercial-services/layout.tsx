import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/commercial-services" },
  title: "Commercial Construction in Spring Hill, FL | Swift Construction",
  description: "Commercial construction and renovation across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.",
};

export default function CommercialServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
