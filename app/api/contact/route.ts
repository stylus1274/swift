type LeadField = {
  label: string;
  value: string;
};

type LeadPayload = {
  formName?: unknown;
  page?: unknown;
  fields?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanFields(value: unknown): LeadField[] {
  if (!Array.isArray(value)) return [];

  return value
    .slice(0, 40)
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const candidate = item as Record<string, unknown>;
      const label = cleanText(candidate.label, 80);
      const fieldValue = cleanText(candidate.value, 3000);
      if (!label || !fieldValue) return null;
      return { label, value: fieldValue };
    })
    .filter((item): item is LeadField => Boolean(item));
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const recipients = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (!apiKey || !from || recipients.length === 0) {
    console.error("Contact form email environment variables are not configured.");
    return Response.json({ error: "Contact form email is not configured." }, { status: 500 });
  }

  const origin = request.headers.get("origin");
  const requestOrigin = new URL(request.url).origin;
  if (origin && origin !== requestOrigin) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const formName = cleanText(payload.formName, 120) || "Website Contact Form";
  const page = cleanText(payload.page, 500);
  const fields = cleanFields(payload.fields);

  if (fields.length === 0) {
    return Response.json({ error: "No form fields were submitted." }, { status: 400 });
  }

  const emailField = fields.find((field) => /email/i.test(field.label) && EMAIL_PATTERN.test(field.value));
  const nameField = fields.find((field) => /(^|\s)name($|\s)/i.test(field.label));

  const subjectName = nameField?.value ? ` from ${nameField.value.replace(/[\r\n]+/g, " ")}` : "";
  const subject = `New Website Lead: ${formName}${subjectName}`.slice(0, 180);

  const rows = fields
    .map(
      (field) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:600;vertical-align:top;">${escapeHtml(field.label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${escapeHtml(field.value)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#111827;">
      <h1 style="font-size:24px;margin-bottom:8px;">New Swift Website Lead</h1>
      <p style="margin-top:0;color:#4b5563;"><strong>Form:</strong> ${escapeHtml(formName)}</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;">${rows}</table>
      ${page ? `<p style="margin-top:18px;font-size:13px;color:#6b7280;"><strong>Submitted from:</strong> ${escapeHtml(page)}</p>` : ""}
    </div>
  `;

  const text = [
    "New Swift Website Lead",
    `Form: ${formName}`,
    "",
    ...fields.map((field) => `${field.label}: ${field.value}`),
    page ? `\nSubmitted from: ${page}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: recipients,
      subject,
      html,
      text,
      ...(emailField ? { reply_to: [emailField.value] } : {}),
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error("Resend rejected contact form email:", resendResponse.status, errorBody);
    return Response.json({ error: "We could not send your request. Please call us instead." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
