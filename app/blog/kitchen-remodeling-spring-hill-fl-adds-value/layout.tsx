import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/kitchen-remodeling-spring-hill-fl-adds-value" },
  title: "Kitchen Remodeling in Spring Hill, FL | What Adds Value",
  description:
    "See which kitchen remodeling upgrades add practical and resale value for Spring Hill homeowners, plus where overspending is most likely.",
};

export default function KitchenRemodelingValueArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
