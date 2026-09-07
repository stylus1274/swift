import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/windows-doors" },
  title: "Window Installation in Spring Hill, FL | Swift Construction & Painting",
  description:
    "Window and door installation across Hernando, Citrus and Pasco Counties. Free estimate, no deposit required.",
};

export default function WindowsDoorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
