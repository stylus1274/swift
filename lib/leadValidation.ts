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

