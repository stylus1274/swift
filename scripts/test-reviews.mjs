import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const temp = mkdtempSync(join(tmpdir(), "swift-reviews-"));
function compile(source, name) {
  let code = ts.transpileModule(readFileSync(new URL(source, root), "utf8"), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
  code = code.replace('import topicAssignments from "../data/review-topics.json";', "const topicAssignments = {};")
    .replaceAll('"./review-data"', '"./review-data.mjs"')
    .replaceAll('"@/lib/google-reviews"', '"./google-reviews.mjs"')
    .replaceAll('"@/lib/review-data"', '"./review-data.mjs"');
  const file = join(temp, `${name}.mjs`);
  writeFileSync(file, code);
  return pathToFileURL(file).href;
}

const originalFetch = globalThis.fetch;
const names = ["GBP_CLIENT_ID", "GBP_CLIENT_SECRET", "GBP_REFRESH_TOKEN", "GBP_LOCATION_NAME", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "CRON_SECRET"];
const previous = Object.fromEntries(names.map((name) => [name, process.env[name]]));
try {
  const data = await import(compile("lib/review-data.ts", "review-data"));
  const core = await import(compile("lib/google-reviews.ts", "google-reviews"));
  const api = await import(compile("app/api/reviews/route.ts", "api"));
  const cron = await import(compile("app/api/cron/reviews/route.ts", "cron"));
  names.forEach((name) => delete process.env[name]);
  assert.equal((await core.getReviewFeed()).source, "curated");
  assert.equal(data.selectReviews(data.curatedReviews, "painting").length, 0, "Unrelated quotes must not fill Painting");
  assert.equal(data.selectCuratedReviews("painting").length, 4, "Keep the four published Painting testimonials until Google themes are organized");
  assert.equal(data.reviewAuthorTitleCase("CHAD ALAN FORD"), "Chad Alan Ford");
  assert.equal(data.reviewAuthorTitleCase("michael Lopez"), "Michael Lopez");
  assert.equal(data.reviewAuthorTitleCase("ANNE-MARIE O'NEILL"), "Anne-Marie O'Neill");
  const curatedPainting = await (await api.GET(new Request("https://example.test/api/reviews?topic=painting"))).json();
  assert.equal(curatedPainting.reviews.length, 4, "API preserves the same interim Painting reviews as the initial render");
  assert.equal(data.selectReviews(data.curatedReviews, "remodeling").length, 1, "One reviewed remodeling quote uses split layout");
  assert.deepEqual(data.detectReviewTopics("Swift Construction and Painting was professional."), []);
  assert.ok(data.detectReviewTopics("They painted our house exterior.").includes("painting"));
  assert.ok(!data.detectReviewTopics("They remodeled my kitchen.").includes("painting"));
  assert.equal((await api.GET(new Request("https://example.test/api/reviews?topic=unknown"))).status, 400);
  assert.equal((await cron.GET(new Request("https://example.test/api/cron/reviews"))).status, 401);

  Object.assign(process.env, { GBP_CLIENT_ID: "test-client", GBP_CLIENT_SECRET: "test-secret", GBP_REFRESH_TOKEN: "test-refresh", GBP_LOCATION_NAME: "accounts/123/locations/456", UPSTASH_REDIS_REST_URL: "https://example.upstash.io", UPSTASH_REDIS_REST_TOKEN: "test-store", CRON_SECRET: "test-cron" });
  let stored = null, googleCalls = 0, googleFails = false, generation = 1, expiry;
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (url === "https://oauth2.googleapis.com/token") {
      assert.ok(init.body instanceof URLSearchParams);
      assert.equal(init.body.get("refresh_token"), "test-refresh");
      return Response.json({ access_token: "test-access" });
    }
    if (url === "https://example.upstash.io") {
      const command = JSON.parse(init.body);
      if (command[0] === "GET") return Response.json({ result: stored });
      if (command[0] === "DEL") stored = null;
      if (command[0] === "SET") { stored = command[2]; expiry = command[4]; }
      return Response.json({ result: "OK" });
    }
    assert.ok(url.startsWith("https://mybusiness.googleapis.com/v4/accounts/123/locations/456/reviews?"));
    assert.equal(init.headers.Authorization, "Bearer test-access");
    googleCalls++;
    if (googleFails) return new Response("Unavailable", { status: 503 });
    if (generation === 2) return Response.json({ averageRating: 4, totalReviewCount: 1, reviews: [{ reviewId: "new", reviewer: { displayName: "New reviewer" }, starRating: "FOUR", comment: "They painted our exterior walls." }] });
    if (new URL(url).searchParams.has("pageToken")) return Response.json({ reviews: [{ reviewId: "kitchen", reviewer: { displayName: "Kitchen customer" }, starRating: "TWO", comment: "The kitchen remodeling took too long." }] });
    return Response.json({ averageRating: 3.5, totalReviewCount: 2, nextPageToken: "page-two", reviews: [{ reviewId: "paint", reviewer: { displayName: "Painting customer" }, starRating: "FIVE", comment: "They painted my house." }] });
  };
  const first = await core.getReviewFeed();
  assert.equal(first.reviews.length, 2, "Fetch every review page");
  assert.equal(first.reviews[1].rating, 2, "Do not change ratings or filter out critical reviews");
  assert.equal(first.averageRating, 3.5);
  assert.equal(expiry, 30 * 86400, "Raw Google data expires in Redis within 30 days");
  await core.getReviewFeed();
  assert.equal(googleCalls, 2, "Reuse monthly snapshot");
  const painting = await (await api.GET(new Request("https://example.test/api/reviews?topic=painting"))).json();
  assert.deepEqual(painting.reviews.map((r) => r.id), ["paint"]);
  assert.ok(!JSON.stringify(painting).includes("test-secret"));
  generation = 2;
  const refreshed = await core.getReviewFeed(true);
  assert.deepEqual(refreshed.reviews.map((r) => r.id), ["new"], "Refresh removes deleted/changed old reviews");
  const validStored = stored;
  googleFails = true;
  await assert.rejects(() => core.getReviewFeed(true));
  assert.equal(stored, validStored, "Failed refresh does not replace a valid snapshot");
  const expired = JSON.parse(stored);
  expired.fetchedAt = new Date(Date.now() - 31 * 86400000).toISOString();
  stored = JSON.stringify(expired);
  const unavailable = await (await api.GET(new Request("https://example.test/api/reviews"))).json();
  assert.equal(unavailable.source, "unavailable");
  assert.deepEqual(unavailable.reviews, [], "Never serve expired content after a failed fetch");
  assert.equal((await cron.GET(new Request("https://example.test/api/cron/reviews", { headers: { authorization: "Bearer wrong" } }))).status, 401);
  assert.equal((await cron.GET(new Request("https://example.test/api/cron/reviews", { headers: { authorization: "Bearer test-cron" } }))).status, 503);
  googleFails = false;
  assert.equal((await cron.GET(new Request("https://example.test/api/cron/reviews", { headers: { authorization: "Bearer test-cron" } }))).status, 200);
  console.log("Review checks passed: topic matching, pagination, monthly caching, expiry, edited/deleted reviews, error handling and cron authorization.");
} finally {
  globalThis.fetch = originalFetch;
  names.forEach((name) => { if (previous[name] === undefined) delete process.env[name]; else process.env[name] = previous[name]; });
  rmSync(temp, { recursive: true, force: true });
}
