import { timingSafeEqual } from "node:crypto";
import { getReviewFeed } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const supplied = request.headers.get("authorization") ?? "";
  const expected = `Bearer ${secret}`;
  if (!secret || Buffer.byteLength(supplied) !== Buffer.byteLength(expected) || !timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))) return new Response("Unauthorized", { status: 401 });
  try {
    const feed = await getReviewFeed(true);
    return Response.json({ refreshedAt: feed.refreshedAt, count: feed.reviews.length }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Review refresh failed; check the Google and storage connection." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
