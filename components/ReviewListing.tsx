"use client";

import ReviewCard, { ReviewStars } from "@/components/ReviewCard";
import { useReviews } from "@/components/Testimonials";

export function ReviewListing({ className }: { className: string }) {
  const feed = useReviews("all");
  return <div className={className}>{feed.reviews.map((review) => <ReviewCard key={review.id} review={review} variant="listing" />)}{!feed.reviews.length && <p>Customer reviews are temporarily unavailable. Please check back soon.</p>}</div>;
}

export function ReviewSnapshot({ className }: { className: string }) {
  const feed = useReviews("all");
  return <aside className={className}>
    <p>GOOGLE REVIEW SNAPSHOT</p>
    {feed.source === "google" && feed.averageRating !== undefined ? <>
      <strong>{feed.averageRating.toFixed(1)}</strong><ReviewStars rating={feed.averageRating} />
      <span>{feed.totalReviewCount} Google reviews</span>
      <small>Refreshed {new Date(feed.refreshedAt!).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "America/New_York" })}. Updated monthly.</small>
    </> : <>
      <strong>5.0</strong><ReviewStars /><span>9 Google reviews</span>
      <small>Historical snapshot: September 2026. Current rating and review count may differ.</small>
    </>}
  </aside>;
}
