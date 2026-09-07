import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/custom-home-building-hernando-county" },
  title: "Custom Home Building in Hernando County | Swift Construction",
  description:
    "Follow the custom home process from site evaluation and clearing through construction, inspections and certificate of occupancy in Hernando County.",
};

export default function CustomHomeBuildingArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
