import type { Metadata } from "next";

const path = "/blog/compare-remodeling-estimates-spring-hill";
const title = "How to Compare Remodeling Estimates in Spring Hill | Swift";
const description = "Learn how to compare remodeling estimates in Spring Hill by reviewing scope, contractor credentials, materials, timelines, payment terms and value.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type: "article" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
