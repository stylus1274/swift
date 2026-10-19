export type ReviewTopic = "all" | "painting" | "remodeling" | "kitchen" | "bathroom" | "construction" | "flooring" | "windows-doors" | "pressure-washing" | "commercial";
export type SiteReview = { id: string; author: string; quote: string; rating: number; topics: ReviewTopic[]; updatedAt?: string };
export type ReviewFeed = { reviews: SiteReview[]; source: "curated" | "google" | "unavailable"; refreshedAt: string | null; averageRating?: number; totalReviewCount?: number };

// Existing website testimonials, not a live Google feed. Do not infer a service
// from a generic compliment. Add a topic only when the review identifies it.
export const curatedReviews: SiteReview[] = [
  { id: "legacy-chad-alan-ford", author: "CHAD ALAN FORD", rating: 5, topics: [], quote: "We are beyond happy with the work William and his crew did for us. They are extremely professional, punctual and efficient! Highly recommend and will be using them from here on out!" },
  { id: "legacy-suanny-mercedes", author: "Suanny Mercedes", rating: 5, topics: ["remodeling", "kitchen"], quote: "I highly recommend Swift Construction for any home remodeling project. They did an excellent job remodeling my kitchen, and I am extremely happy with the results. From start to finish, the team was professional, reliable, and paid close attention to detail." },
  { id: "legacy-michael-lopez", author: "michael Lopez", rating: 5, topics: ["construction"], quote: "My family real estate company has used Swift Construction and Painting on multiple projects large and small, including interior renovation all the way up to ground up construction. William has proven to be reliable, reasonable and honest. His attention to detail is impeccable. We look forward to many more projects together." },
  { id: "legacy-kristen-tooley", author: "Kristen Tooley", rating: 5, topics: [], quote: "So glad I found Swift Construction and Painting! Very skilled crew took care of both my home and business. Even fixing an issue that the original builder failed to find or correct. They left the jobsite as clean as it was when they arrived. Great communication throughout the process and prices were very reasonable for quality work. Next time I need anything done at my property, I will be calling Swift again." },
];

export const reviewTopics: ReviewTopic[] = ["all", "painting", "remodeling", "kitchen", "bathroom", "construction", "flooring", "windows-doors", "pressure-washing", "commercial"];
export function selectReviews(reviews: SiteReview[], topic: ReviewTopic) {
  return reviews.filter((review) => topic === "all" || review.topics.includes(topic));
}

// Preserve the testimonials already published on Painting until the Google
// connection is approved and the service themes have been reviewed.
export function selectCuratedReviews(topic: ReviewTopic) {
  return topic === "painting" ? curatedReviews : selectReviews(curatedReviews, topic);
}

export function reviewAuthorTitleCase(author: string) {
  return author.toLocaleLowerCase("en-US").replace(/(^|[\s\-'’])\p{L}/gu, (letter) => letter.toLocaleUpperCase("en-US"));
}

// Specific service phrases only; a business name containing "Painting" is not
// evidence of painting work. Manual assignments can be reviewed by review ID.
export function detectReviewTopics(text: string): ReviewTopic[] {
  const content = text.replace(/swift\s+construction\s*(?:&|and)\s*painting/gi, "Swift");
  const rules: [ReviewTopic, RegExp][] = [
    ["painting", /\b(?:painted|repaint(?:ed|ing)?|painting (?:our|my|the|a|work|project|job|interior|exterior)|(?:interior|exterior|house|home|cabinet|wall|ceiling) paint(?:ing)?|paint job|painters?)\b/i],
    ["remodeling", /\b(?:remodel(?:ing|ed)?|renovat(?:ion|ions|ed|ing))\b/i],
    ["kitchen", /\bkitchen\b/i], ["bathroom", /\b(?:bathroom|bath remodel|shower)\b/i],
    ["construction", /\b(?:ground up|custom home|new home|built (?:our|my|a) (?:house|home)|new construction|home addition)\b/i],
    ["flooring", /\b(?:flooring|tile floors?|vinyl plank)\b/i],
    ["windows-doors", /\b(?:window replacement|new windows|installed windows|replacement doors)\b/i],
    ["pressure-washing", /\b(?:pressure wash(?:ed|ing)?|power wash(?:ed|ing)?)\b/i],
    ["commercial", /\b(?:commercial|office remodel|retail build)\b/i],
  ];
  return rules.filter(([, pattern]) => pattern.test(content)).map(([topic]) => topic);
}
