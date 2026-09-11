import { Resend } from "resend";
import { studio } from "@/lib/content";

// Mirrors the limits in QuoteForm — Vercel rejects function request bodies over 4.5 MB.
const MAX_FILES = 8;
const MAX_TOTAL_BYTES = 4.4 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function safeFilename(name: string, index: number) {
  const cleaned = name.replace(/[^\w.\- ]+/g, "_").slice(-100);
  return cleaned || `photo-${index + 1}.jpg`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  // The form falls back to opening an email draft when this is 503.
  if (!apiKey) return Response.json({ error: "not_configured" }, { status: 503 });

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  // honeypot — report success so bots don't retry
  if (data.get("company")) return Response.json({ ok: true });

  // single-line fields: collapse newlines so nothing leaks into the subject header
  const field = (key: string) =>
    String(data.get(key) ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, 200);

  const firstName = field("firstName");
  const lastName = field("lastName");
  const email = field("email");
  const phone = field("phone");
  const service = field("service");
  const projectType = field("projectType");
  const heardFrom = field("heardFrom");
  const message = String(data.get("message") ?? "").trim().slice(0, 5000);

  if (!firstName || !lastName || !EMAIL_RE.test(email) || !service || !message) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }

  const photos = data
    .getAll("photos")
    .filter((v): v is File => v instanceof File && v.size > 0);
  const totalBytes = photos.reduce((sum, f) => sum + f.size, 0);
  if (photos.length > MAX_FILES || totalBytes > MAX_TOTAL_BYTES) {
    return Response.json({ error: "files_too_large" }, { status: 413 });
  }

  const rows = (
    [
      ["Name", `${firstName} ${lastName}`],
      ["Email", email],
      ["Phone", phone],
      ["Service", service],
      ["Project type", projectType],
      ["Heard about us", heardFrom],
      ["Photos", photos.length ? `${photos.length} attached` : ""],
    ] as const
  ).filter(([, value]) => value);

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${message}`;
  const html = `
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="color:#6b6258;padding-right:16px">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`,
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;font-size:14px;color:#6b6258;margin-top:20px">Message</p>
    <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(message)}</p>
    <p style="font-family:sans-serif;font-size:12px;color:#9a9086;margin-top:28px">Sent from the quote form on apcraftupholstery.ca — reply to this email to answer the customer directly.</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.QUOTE_FROM_EMAIL ?? `"A.P Craft Upholstery Website" <quotes@apcraftupholstery.ca>`,
    to: process.env.QUOTE_TO_EMAIL ?? studio.email,
    replyTo: email,
    subject: `Quote request — ${firstName} ${lastName}`,
    text,
    html,
    attachments: await Promise.all(
      photos.map(async (file, i) => ({
        filename: safeFilename(file.name, i),
        content: Buffer.from(await file.arrayBuffer()),
      })),
    ),
  });

  if (error) {
    console.error("[quote] Resend rejected the email:", error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
