# Google reviews

## Connection required before enabling monthly updates

The site currently has four manually entered testimonials. These remain the
explicitly labelled curated fallback while no Google connection is configured.
They are not proof of a live Google sync. None explicitly describes painting, so
the painting section links to Reviews without displaying an unrelated quote.
Confirm a customer's actual service before manually assigning a painting topic.

Use an approved Business Profile API project and an OAuth refresh token granted
by an owner/manager of Swift's verified listing with the `business.manage` scope.
Set these **server-only** variables in Vercel (never commit tokens):

- `GBP_CLIENT_ID`
- `GBP_CLIENT_SECRET`
- `GBP_REFRESH_TOKEN`
- `GBP_LOCATION_NAME`: `accounts/<numeric-account-id>/locations/<numeric-location-id>`
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: a dedicated HTTPS Upstash Redis database
- `CRON_SECRET`: a random secret for the Vercel cron endpoint

Google access and a Redis connection are not bundled with this repository.
Provision/configure them separately; do not substitute public Places results,
which do not provide the complete review collection needed for topic selection.

## Refresh and retention

`vercel.json` runs `/api/cron/reviews` at 10:00 UTC on the first of each month.
The handler only refreshes when the exact cron bearer secret is supplied.
Vercel crons run in production, so branch previews do not activate the schedule.
On a cold cache or expired snapshot, the public review endpoint also fetches a
fresh snapshot. The Google API and Redis credentials remain on the server.

All Google review pages are fetched, with pagination and bounded requests. A
successful sync replaces the entire raw snapshot, including edits and removals.
The cache has a Redis-enforced 30-day expiry and the reader rejects expired
content as well. No Google content is committed to Git or cached by the public
API response. Failure never rewrites a valid snapshot or reports success. Once
configured, unavailable Google data does not fall back to stale curated quotes.
Google's content-storage rules: https://developers.google.com/my-business/content/policies

## Topic selection

`lib/review-data.ts` contains conservative text rules. The company name is
excluded before matching so mentioning “Swift Construction and Painting” does
not qualify a review for painting. Reviews are not rewritten or filtered by
star rating. Star-only reviews cannot provide topical quotes.

`data/review-topics.json` accepts reviewed manual assignments by Google review
ID, for example `{ "actual-google-review-id": ["painting"] }`. An empty array
keeps a review on the general Reviews page only. Keep classifications separate
from the unmodified cached Google response. Recheck assignments if a review's
service changes. No classification should be inferred from the reviewer name.

The homepage displays up to four general reviews using the Painting grid.
Service sections display only matching reviews: one uses the Remodeling split
layout; two or more use the Painting grid; none shows a short link to Reviews.
The Reviews page retains its existing section order, two-column grid and photo
sections while sharing stars, author typography and Google attribution.

## Verification

Run `node scripts/test-reviews.mjs`, the production build, and the existing blog
and FAQ checks. After securely configuring the connection, invoke the protected
cron endpoint once, confirm its successful timestamp/count, and verify
`/api/reviews?topic=painting` and `/api/reviews?topic=remodeling`. Do not declare
monthly syncing active until a real authorized sync succeeds.
