import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/realistic-bathroom-remodel-budget" },
  title: "Bathroom Remodel Budget in Florida | Swift Construction",
  description:
    "What should you budget for a bathroom remodel in Florida? Compare realistic ranges, cost factors, permits and planning tips from Swift Construction.",
};

export default function BathroomRemodelBudgetArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
