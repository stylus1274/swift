import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/gallery" },
  title: "Construction & Remodeling Gallery | Swift Construction & Painting",
  description: "Explore painting, remodeling and construction project examples across Florida's Nature Coast. Free estimate, no deposit required.",
};

export default function GalleryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
