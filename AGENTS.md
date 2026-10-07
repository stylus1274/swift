# Blog authoring

All blog articles must use the shared `BlogArticleLayout` and `getBlogMetadata` helpers. Article data lives in `data/blog-posts.json`. Do not add another `Article`, `BlogPosting`, or `BreadcrumbList` object in a post page or layout. Keep FAQ schema only when it matches visible questions and answers.

For a new article, register its reviewed data using `npm run blog:register -- /path/to/post-data.json`, then create the page. See `docs/blog-authoring.md` for the required data and workflow. Use the article's actual headline, displayed author, representative featured image, original publication date, and latest substantive content modification date. Never refresh dates solely for schema, layout, or deployment changes.

Link new articles from the blog listing. The blog sitemap automatically includes registered articles. Keep the visible updated date consistent with the registered content modification date. When revising an existing article, update its registered data if the headline, description, author, image, or content modification date changes.

Run `npm run check:blog` and `npm run build` before publishing. The build automatically verifies source coverage and all rendered article schemas. Do not disable these checks to publish an incomplete article.
