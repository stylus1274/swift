"use client";

import { useEffect, useId, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import { selectCuratedReviews, type ReviewFeed, type ReviewTopic } from "@/lib/review-data";

export function useReviews(topic: ReviewTopic) {
  const [feed, setFeed] = useState<ReviewFeed>({ reviews: selectCuratedReviews(topic), source: "curated", refreshedAt: null });
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/reviews?topic=${encodeURIComponent(topic)}`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Reviews unavailable");
        return response.json() as Promise<ReviewFeed>;
      })
      .then(setFeed)
      .catch(() => { if (!controller.signal.aborted) setFeed({ reviews: [], source: "unavailable", refreshedAt: null }); });
    return () => controller.abort();
  }, [topic]);
  return feed;
}

export default function Testimonials({ topic = "all", title = "Chosen for the Details. Recommended for the Experience.", estimateHref = "/contact#contact-form" }: { topic?: ReviewTopic; title?: string; estimateHref?: string }) {
  const feed = useReviews(topic);
  const id = useId();
  const single = feed.reviews.length === 1;
  const layout = single ? "single" : feed.reviews.length ? "multiple" : "empty";
  return <section className="site-testimonials" data-layout={layout} aria-labelledby={id}>
    <div className="site-testimonials__inner">
      <div className="site-testimonials__intro">
        {!single && <p className="site-testimonials__eyebrow">CUSTOMER REVIEWS</p>}
        <h2 id={id}>{title}</h2>
        {single ? <a className="button cta-primary" href={estimateHref}>Get a free estimate</a> : <a className="text-action" href="/reviews"><span className="text-action-label">Read more reviews</span><span className="text-action-arrow" aria-hidden="true">→</span></a>}
      </div>
      {feed.reviews.slice(0, 4).map((review) => <ReviewCard key={review.id} review={review} variant={single ? "featured" : "standard"} />)}
      {!feed.reviews.length && <p className="site-testimonials__empty">Read customer feedback and learn more about working with Swift on our reviews page.</p>}
    </div>
  </section>;
}
