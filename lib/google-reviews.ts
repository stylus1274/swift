import { curatedReviews, detectReviewTopics, reviewTopics, type ReviewFeed, type ReviewTopic, type SiteReview } from "./review-data";
import topicAssignments from "../data/review-topics.json";

type GoogleReview = { reviewId: string; reviewer?: { displayName?: string }; starRating: string; comment?: string; updateTime?: string };
type ReviewPage = { reviews?: GoogleReview[]; averageRating?: number; totalReviewCount?: number; nextPageToken?: string };
type Snapshot = { fetchedAt: string; pages: ReviewPage[] };
const MAX_AGE_SECONDS = 30 * 24 * 60 * 60;
const ratings: Record<string, number> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

function configuration() {
  const { GBP_CLIENT_ID, GBP_CLIENT_SECRET, GBP_REFRESH_TOKEN, GBP_LOCATION_NAME, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env;
  if (!GBP_CLIENT_ID || !GBP_CLIENT_SECRET || !GBP_REFRESH_TOKEN || !GBP_LOCATION_NAME || !UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) return null;
  if (!/^accounts\/\d+\/locations\/\d+$/.test(GBP_LOCATION_NAME)) throw new Error("Invalid GBP location configuration");
  const store = new URL(UPSTASH_REDIS_REST_URL);
  if (store.protocol !== "https:" || !store.hostname.endsWith(".upstash.io")) throw new Error("Invalid review storage configuration");
  return { clientId: GBP_CLIENT_ID, clientSecret: GBP_CLIENT_SECRET, refreshToken: GBP_REFRESH_TOKEN, location: GBP_LOCATION_NAME, store: store.origin, storeToken: UPSTASH_REDIS_REST_TOKEN };
}

async function jsonRequest(url: string, init: RequestInit) {
  const response = await fetch(url, { ...init, signal: AbortSignal.timeout(15000), cache: "no-store", redirect: "error" });
  if (!response.ok) throw new Error(`Review service request failed (${response.status})`);
  return response.json();
}

async function redis(config: NonNullable<ReturnType<typeof configuration>>, command: (string | number)[]) {
  const data = await jsonRequest(config.store, { method: "POST", headers: { Authorization: `Bearer ${config.storeToken}`, "Content-Type": "application/json" }, body: JSON.stringify(command) });
  if (data.error) throw new Error("Review storage request failed");
  return data.result;
}

export async function fetchGoogleReviewSnapshot(config: NonNullable<ReturnType<typeof configuration>>): Promise<Snapshot> {
  const token = await jsonRequest("https://oauth2.googleapis.com/token", { method: "POST", body: new URLSearchParams({ client_id: config.clientId, client_secret: config.clientSecret, refresh_token: config.refreshToken, grant_type: "refresh_token" }) });
  if (typeof token.access_token !== "string") throw new Error("Google authorization unavailable");
  const pages: ReviewPage[] = [];
  const seenTokens = new Set<string>();
  let pageToken: string | undefined;
  do {
    if (pages.length >= 100 || (pageToken && seenTokens.has(pageToken))) throw new Error("Review pagination incomplete");
    if (pageToken) seenTokens.add(pageToken);
    const url = new URL(`https://mybusiness.googleapis.com/v4/${config.location}/reviews`);
    url.searchParams.set("pageSize", "50");
    url.searchParams.set("orderBy", "updateTime desc");
    if (pageToken) url.searchParams.set("pageToken", pageToken);
    const page: ReviewPage = await jsonRequest(url.toString(), { headers: { Authorization: `Bearer ${token.access_token}` } });
    if (!Array.isArray(page.reviews ?? []) || (page.totalReviewCount !== undefined && !Number.isInteger(page.totalReviewCount))) throw new Error("Invalid Google review response");
    pages.push(page);
    pageToken = page.nextPageToken;
  } while (pageToken);
  return { fetchedAt: new Date().toISOString(), pages };
}

function toFeed(snapshot: Snapshot): ReviewFeed {
  const assignments = topicAssignments as Record<string, ReviewTopic[]>;
  const seen = new Set<string>();
  const reviews: SiteReview[] = snapshot.pages.flatMap((page) => page.reviews ?? []).filter((review) => {
    if (!review.reviewId || seen.has(review.reviewId) || !review.comment?.trim() || !review.reviewer?.displayName || !ratings[review.starRating]) return false;
    seen.add(review.reviewId);
    return true;
  }).map((review) => ({
    id: review.reviewId, author: review.reviewer!.displayName!, quote: review.comment!, rating: ratings[review.starRating], updatedAt: review.updateTime,
    topics: (assignments[review.reviewId] ?? detectReviewTopics(review.comment!)).filter((topic) => topic !== "all" && reviewTopics.includes(topic)),
  }));
  return { source: "google", refreshedAt: snapshot.fetchedAt, reviews, averageRating: snapshot.pages[0]?.averageRating, totalReviewCount: snapshot.pages[0]?.totalReviewCount };
}

export async function getReviewFeed(forceRefresh = false): Promise<ReviewFeed> {
  const config = configuration();
  if (!config) {
    if (forceRefresh) throw new Error("Google review connection is not configured");
    return { source: "curated", refreshedAt: null, reviews: curatedReviews };
  }
  const key = `swift:google-reviews:v1:${config.location}`;
  if (!forceRefresh) {
    const stored = await redis(config, ["GET", key]);
    if (stored) {
      const snapshot: Snapshot = JSON.parse(stored);
      const age = Date.now() - Date.parse(snapshot.fetchedAt);
      if (Array.isArray(snapshot.pages) && age >= 0 && age < MAX_AGE_SECONDS * 1000) return toFeed(snapshot);
      await redis(config, ["DEL", key]);
    }
  }
  // Replace the complete snapshot, so deleted/edited reviews cannot survive a
  // successful sync. Redis expiry removes raw Google content within 30 days.
  const snapshot = await fetchGoogleReviewSnapshot(config);
  await redis(config, ["SET", key, JSON.stringify(snapshot), "EX", MAX_AGE_SECONDS]);
  return toFeed(snapshot);
}
