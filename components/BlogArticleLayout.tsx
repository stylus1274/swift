import { getBlogSchema } from "@/lib/blog";

export default function BlogArticleLayout({
  slug,
  children,
}: Readonly<{ slug: string; children: React.ReactNode }>) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema(slug)).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
