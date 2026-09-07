import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/realistic-kitchen-remodel-budget" },
  title: "Realistic Kitchen Remodel Budget | Swift Construction",
  description:
    "See realistic kitchen remodel budget ranges, major cost drivers and planning tips for Hernando County homeowners. Free estimate, no deposit required.",
};

export default function KitchenRemodelBudgetArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
