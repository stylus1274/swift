import type { Metadata } from "next";
import posts from "@/data/blog-posts.json";

export const BLOG_SITE_URL = "https://swiftconstructionandpainting.com";

export type BlogPost = {
  title: string;
  headline: string;
  description: string;
  author: string;
  image: string;
  datePublished: string;
  dateModified: string;
  category: string;
};

const blogPosts: Readonly<Record<string, BlogPost>> = posts;

export function getBlogPost(slug: string): BlogPost {
  if (!Object.hasOwn(blogPosts, slug)) {
    throw new Error(`Missing blog article data for "${slug}". Register the post before publishing.`);
  }
  return blogPosts[slug];
}

export function getBlogMetadata(slug: string): Metadata {
  const post = getBlogPost(slug);
  const url = `${BLOG_SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: [{ url: `${BLOG_SITE_URL}${post.image}`, alt: post.headline }],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
    },
  };
}

export function getBlogSchema(slug: string) {
  const post = getBlogPost(slug);
  const url = `${BLOG_SITE_URL}/blog/${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.headline,
      description: post.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: [`${BLOG_SITE_URL}${post.image}`],
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: { "@type": "Person", name: post.author },
      publisher: { "@id": `${BLOG_SITE_URL}/#business` },
      articleSection: post.category,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BLOG_SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BLOG_SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.headline, item: url },
      ],
    },
  ];
}
