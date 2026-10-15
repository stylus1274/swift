# Four-keyword ranking and content review

Reviewed October 13, 2026 against production and main commit `42a449ea81008cdddfb947eada4d70cd2184028e` in `stylus1274/swift`.

## Ranking evidence

The October 13 SE Ranking email covers October 7-13. The connected Swift project is 12786404, with engine 1551907: Google USA, Spring Hill, Florida, English, depth 100, with map results separate. All four keywords currently have no assigned target URL.

| Keyword | October 12 | October 13 | Ranking URL reported by SE Ranking | Preferred service page |
| --- | --- | --- | --- | --- |
| interior painting spring hill fl | 29 | Not found within tracked depth | `/interior-painting` | `/interior-painting` |
| house painters spring hill fl | 30 | Not found within tracked depth | `/exterior-painting` | `/residential-painting` |
| exterior painting spring hill fl | 30 | Not found within tracked depth | `/exterior-painting` | `/exterior-painting` |
| custom home builders brooksville fl | 49 | Not found within tracked depth | `/projects/custom-farmhouse-home-brooksville-fl` | `/brooksville-fl/new-construction` |

The first three report drops are 71, 70 and 70 positions, based on SE Ranking's depth-100 calculation. The custom-home term was absent October 7-11, appeared at 49 on October 12, then disappeared. That is a brief appearance followed by volatility, rather than a demonstrated loss of a long-held ranking.

SE Ranking's saved SERPs need corroboration. On October 13 its top-10 lists contain unrelated results, including a mental-health licensing site for exterior painting, government/political pages for house painters, and a makeup channel for interior painting. Its exterior-painting top-100 endpoint returns only 19 results. For October 12 it returns 38 results without Swift, even though the position-history endpoint reports Swift at 30 that day. These observations suggest collection or interpretation uncertainty; they do not prove the entire report is wrong.

No ranking absence in this report proves deindexing. The GSC query endpoint returned that Swift is not connected to GSC within this SE Ranking project, so independent Google impression, indexing and query-to-page evidence was unavailable. The engine is geographically set to Spring Hill, including for the Brooksville phrase; this review did not change that location or spend quota on new checks.

## Technical checks

Live HTTP checks returned 200 for the three painting pages, `/custom-home-building`, `/brooksville-fl/new-construction`, the farmhouse project, and `/locations/brooksville-fl`. Each had one matching production canonical and no meta or HTTP `noindex` directive. The sampled content is available in the HTML response. These observations establish current accessibility and canonical consistency, not Google's indexing or quality decisions.

Existing URLs and redirect policy remain intact. The general custom-home route still serves the component in `app/new-home-construction/page.tsx`; the old `/new-home-construction` request redirects to `/custom-home-building`. This review does not introduce new city pages, merge distinct services, or change URL structure.

## Similarity and templated-content assessment

Interior and exterior painting are legitimate separate services. Their main paragraphs are not wholesale literal copies, but their original presentation follows the same order: four service cards, three preparation cards, three surface/room cards, a four-step process, a contractor CTA, FAQs and the estimate form. Several headings differ mainly by the service noun. Repeated abstract language about clear scope, coordination and final details provides little evidence specific to Swift.

The house-painting page repeats that broad preparation/process message rather than acting as a clear hub for interior and exterior work. Its service-card links originally led only to an estimate anchor, rather than their detail pages. Google reporting the exterior page for the broader house-painters query is a possible intent/landing-page ambiguity, not proven harmful cannibalization.

The original Brooksville service page has the same local-page structure as the Hernando construction and Brooksville location pages. It is comparatively brief and contains internal business strategy language about revenue and growth. The farmhouse project has genuine local project details and photographs according to existing repository records, but it is a case study, not a complete explanation of hiring a Brooksville builder.

The residential-painting page also publishes a prelaunch mockup note and unverified project/location labels. These are concrete editorial and trust problems. Merely removing the note while retaining invented project proof would not solve them.

Editorial judgment: the painting service copy reads strongly templated; the Brooksville service copy reads templated and insufficiently developed; the farmhouse case study has stronger original proof but limited buyer guidance. Text or layout cannot reliably establish AI authorship. The shared visual design itself is not the problem, and none of this proves an AI penalty or explains the timing of today's ranking report.

Google's guidance emphasizes original, helpful content rather than penalizing appropriate AI use by default:

- https://developers.google.com/search/blog/2023/02/google-search-and-ai-content
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

## Competitive context

The relevant businesses in SE Ranking's saved results include All American Painting Team, Island Accents and 360 Painting for the painting searches; Palmwood, Covenant Homes and Southern Crown for the builder search. These are observations from saved results, not a fresh controlled Google ranking test.

360 Painting's Spring Hill service page explains occupied-home logistics, finishes, scope and weather. Covenant's Brooksville page directly addresses custom-home buyers; Palmwood exposes home plans. This suggests a buyer-information gap for Swift, but competitor pages also contain generic marketing language. Matching their word count or copying that language is not the objective.

## Prepared changes

1. Interior painting: explicit service/location heading, distinct content on room access, drywall preparation, sheen, cabinetry, exclusions and estimate comparison; link to the existing interior cost guide.
2. Exterior painting: explicit service/location heading, content on chalking/peeling, cleaning/drying, coating compatibility, weather, access, HOA colors and cost factors; link to the existing exterior cost guide.
3. House painters: explicit heading/title for the general query; a hub with contextual links to both painting services. Replace unverified local-project claims with clearly identified illustrative scope examples, retaining the existing design and estimate access.
4. Brooksville builders: improve the existing service page rather than create another location URL. Remove internal revenue/growth language. Add property review, scope/allowance comparison and realistic scheduling context, using only existing project dates and photos for project proof.
5. Supporting links: link from the farmhouse case study and general custom-home service to the Brooksville service page; link to the existing Brooksville planning article.
6. Metadata/schema: concise distinct titles/descriptions on the four targets, unchanged matching canonicals; remove duplicate page-level Service objects from interior/exterior while retaining their layout Service and matching FAQ schema.

The edits do not invent warranties, coating brands, customer quotations, new painting case studies, project prices or completion promises. Existing project investment statements outside project pages were not changed. No Google ranking improvement is guaranteed.

## Validation and follow-up

Completed validation: production build and TypeScript passed; all 39 blog posts passed existing source/rendered schema checks; changed-file lint completed with no errors and 20 existing image/link warnings; `git diff --check` passed. Rendered checks passed for the four targets and two supporting pages: exactly one H1, matching canonical, valid JSON-LD, one Service per service target, all local links and fragments present, and descriptions of 132-151 characters. The live production accessibility checks above occurred before edits. A responsive visual pass and successful lead-email delivery were not part of this validation.

This is a reviewable branch, not a production release. Preferred keyword targets above are recommendations; no SE Ranking settings or search-engine location were changed. After publication, compare GSC impressions and ranking URLs for these queries over a meaningful period, and corroborate the report before treating the reported position changes as a confirmed site-wide loss. Real painting-project photographs and job-specific facts would strengthen the painting pages further when verified material is available.
