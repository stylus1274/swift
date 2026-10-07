# Creating and updating blog posts

`data/blog-posts.json` is the single source for each article's SEO metadata and article schema. `lib/blog.ts` generates metadata, one `BlogPosting`, and one complete breadcrumb trail. `components/BlogArticleLayout.tsx` renders the schema on the server so it is available in the initial HTML.

## New article

1. Prepare a JSON file with `slug`, `title`, `headline`, `description`, `author`, `image`, `datePublished`, `dateModified`, and `category`. The headline must match the visible H1. Use the actual displayed author. Images must exist in `public/assets` and be displayed in the article. Descriptions must be 160 characters or fewer.
2. Run `npm run blog:register -- /path/to/post-data.json`. This validates the data, registers the article, and generates its layout using the shared template. The command does not create or publish content.
3. Create `app/blog/<slug>/page.tsx` following the existing article design. `getBlogPost(slug)` can provide the headline, image, author, and dates for the visible content. Use FAQ markup only for questions and answers that appear on the page.
4. Add the article to the blog listing using its canonical URL without a trailing slash. The blog sitemap automatically includes registered articles and their content modification dates.
5. Run `npm run check:blog` and `npm run build`. Build checks fail for missing article data, missing images, incorrect dates, duplicated local article schema, missing shared layouts, or rendered metadata that disagrees with the page.

Dates can be ISO dates (`YYYY-MM-DD`) or ISO timestamps with a timezone. Preserve original publication dates. Advance `dateModified` only after an actual content change, and update the visible date to match. Do not label generated or illustrative images as documented Swift projects.

## Existing article

Update the article's entry in `data/blog-posts.json` when its headline, author, description, image, or substantive content changes. The schema and SEO metadata update through the shared layout automatically. Preserve existing FAQ questions and answers unless the visible FAQ is also being edited.

## Verification

`npm run check:blog` checks every blog route against the data registry and shared layout. It runs automatically before each build. `npm run check:blog:rendered` verifies the final HTML after a successful build, including article uniqueness, headlines, dates, images, author, canonical URL, publisher references, and breadcrumbs. It runs automatically after each build, including Vercel and GitHub CI builds.
