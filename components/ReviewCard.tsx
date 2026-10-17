import type { SiteReview } from "@/lib/review-data";

export function ReviewStars({ rating = 5 }: { rating?: number }) {
  const value = Math.max(0, Math.min(5, Math.round(rating)));
  return <div className="review-stars" role="img" aria-label={`${rating} out of 5 stars`}>{"★".repeat(value)}{"☆".repeat(5 - value)}</div>;
}

export function GoogleReviewMark() {
  return <span className="review-google-mark">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.35Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.51c-.9.6-2.04.95-3.38.95-2.61 0-4.82-1.76-5.61-4.13H3.05v2.59A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.39 13.89A6 6 0 0 1 6.08 12c0-.66.11-1.3.31-1.89V7.52H3.05A10 10 0 0 0 2 12c0 1.61.39 3.13 1.05 4.48l3.34-2.59Z" />
      <path fill="#EA4335" d="M12 5.98c1.47 0 2.79.51 3.83 1.5l2.87-2.87A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.95 5.52l3.34 2.59C7.18 7.74 9.39 5.98 12 5.98Z" />
    </svg>
    Google Review
  </span>;
}

export default function ReviewCard({ review, variant = "standard" }: { review: SiteReview; variant?: "standard" | "featured" | "listing" }) {
  return <article className={`review-card review-card--${variant}`}>
    <ReviewStars rating={review.rating} />
    <blockquote className="review-card__quote">“{review.quote}”</blockquote>
    <p className="review-card__author">{review.author}</p>
    <GoogleReviewMark />
  </article>;
}
