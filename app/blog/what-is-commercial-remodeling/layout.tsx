import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogMetadata } from "@/lib/blog";

const slug = "what-is-commercial-remodeling";

export const metadata = getBlogMetadata(slug);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <BlogArticleLayout slug={slug}>{children}</BlogArticleLayout>;
}
