import { getReviewFeed } from "@/lib/google-reviews";
import { reviewTopics, selectReviews, type ReviewTopic } from "@/lib/review-data";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const topic = (new URL(request.url).searchParams.get("topic") ?? "all") as ReviewTopic;
  const headers = { "Cache-Control": "no-store" };
  if (!reviewTopics.includes(topic)) return Response.json({ error: "Unknown review topic" }, { status: 400, headers });
  try {
    const feed = await getReviewFeed();
    return Response.json({ ...feed, reviews: selectReviews(feed.reviews, topic) }, { headers });
  } catch {
    return Response.json({ reviews: [], source: "unavailable", refreshedAt: null }, { headers });
  }
}
