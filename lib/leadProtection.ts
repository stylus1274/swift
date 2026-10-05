import { createHash } from "node:crypto";

export type LeadField = { label: string; value: string };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLead(fields: LeadField[]): string | null {
  const name = fields.find((field) => /(^|\s)name($|\s)/i.test(field.label))?.value;
  const phone = fields.find((field) => /phone/i.test(field.label))?.value;
  if (!name || !/\p{L}/u.test(name) || name.length > 120) return "Please enter your name.";
  const digits = phone?.replace(/\D/g, "") || "";
  if (!/^(?:1)?\d{10}$/.test(digits) || /^(\d)\1+$/.test(digits)) return "Please enter a valid phone number.";
  for (const field of fields) {
    if (/email/i.test(field.label) && (!EMAIL.test(field.value) || field.value.length > 254)) return "Please enter a valid email address.";
    if (/zip/i.test(field.label) && !/city|location/i.test(field.label) && !/^\d{5}(?:-\d{4})?$/.test(field.value)) return "Please enter a valid ZIP code.";
    if (/details|description/i.test(field.label) && !/\p{L}/u.test(field.value)) return "Please describe the work you need.";
  }
  return null;
}

// Best-effort per-instance throttling. Vercel instances do not share this map.
// BotID is the primary protection; Resend idempotency works across instances.
const attempts = new Map<string, { count: number; expires: number }>();
export function allowLeadAttempt(ip: string, now = Date.now()) {
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const key = createHash("sha256").update(ip).digest("hex");
  const current = attempts.get(key);
  if (current) {
    current.count++;
    return current.count <= 5;
  }
  if (attempts.size >= 5000) attempts.delete(attempts.keys().next().value!);
  attempts.set(key, { count: 1, expires: now + 10 * 60 * 1000 });
  return true;
}

export function leadIdempotencyKey(fields: LeadField[], now = Date.now()) {
  // Include the exact email inputs: Resend requires an identical body for retries.
  // Resend retains these keys for 24 hours; UTC day buckets bound suppression.
  return "swift-lead-" + createHash("sha256").update(JSON.stringify([Math.floor(now / 86400000), fields])).digest("hex");
}
