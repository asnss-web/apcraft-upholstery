"use client";

import { useState } from "react";
import { studio } from "@/lib/content";
import styles from "./quote.module.css";

type Service = "Custom Upholstery" | "Reupholstery" | "Commercial Upholstery" | "Not Sure" | "";
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const projectTypes = [
  "Sofa / Sectional",
  "Chair",
  "Bed / Headboard",
  "Bench / Banquette",
  "Ottoman",
  "Restaurant / Commercial Seating",
  "Other",
];

const referralSources = [
  "Instagram",
  "Google",
  "Referral",
  "Interior Designer",
  "Previous Client",
  "Other",
];

// Vercel caps a function's request body at 4.5 MB, so photos are resized in the
// browser and the whole batch has to fit under this budget.
const MAX_FILES = 8;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const MAX_EDGE = 1800;

async function shrinkImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.82));
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], `${file.name.replace(/\.[^.]+$/, "")}.jpg`, { type: "image/jpeg" });
  } catch {
    // formats the browser can't decode (e.g. HEIC outside Safari) are sent as-is
    return file;
  }
}

// Used when the server can't send (no RESEND_API_KEY, or Resend refuses) — hands the request to the visitor's mail app.
function openMailDraft(data: FormData, fileCount: number) {
  const get = (key: string) => String(data.get(key) ?? "");
  const subject = `Quote request — ${get("firstName")} ${get("lastName")}`.trim();
  const bodyLines = [
    `Name: ${get("firstName")} ${get("lastName")}`,
    `Email: ${get("email")}`,
    get("phone") ? `Phone: ${get("phone")}` : null,
    get("service") ? `Service: ${get("service")}` : null,
    get("projectType") ? `Project type: ${get("projectType")}` : null,
    get("heardFrom") ? `How they heard about us: ${get("heardFrom")}` : null,
    "",
    "Message:",
    get("message"),
    fileCount ? `\n(${fileCount} photo${fileCount > 1 ? "s" : ""} selected — please attach them to this email before sending.)` : null,
  ].filter((line) => line !== null);

  window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

export default function QuoteForm() {
  const [service, setService] = useState<Service>("");
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function fail(message: string) {
    setStatus("error");
    setError(message);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot — if this hidden field is filled, a bot filled the form
    if (data.get("company")) return;

    if (files.length > MAX_FILES) {
      fail(`Please attach up to ${MAX_FILES} files — you can send the rest to ${studio.email}.`);
      return;
    }

    setStatus("sending");
    setError("");

    const photos = await Promise.all(files.map(shrinkImage));
    const totalBytes = photos.reduce((sum, f) => sum + f.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      fail(`Those files are too large to send together. Remove a few, then email the rest to ${studio.email}.`);
      return;
    }
    photos.forEach((photo) => data.append("photos", photo));

    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      // 503: sending not configured, 502: Resend refused (e.g. domain not verified yet) —
      // either way hand the request to the visitor's mail app so the lead isn't lost
      if (res.status === 503 || res.status === 502) {
        openMailDraft(data, files.length);
        setStatus("mailto");
        return;
      }
      if (!res.ok) throw new Error(`Quote request failed with ${res.status}`);
      form.reset();
      setService("");
      setFiles([]);
      setStatus("sent");
    } catch {
      fail(`Something went wrong sending your request. Please try again, or call ${studio.phone} or email ${studio.email}.`);
    }
  }

  if (status === "sent") {
    return (
      <div className={`${styles.form} ${styles.thanks}`} role="status">
        <p className="eyebrow">Request received</p>
        <h2 className={`h-md ${styles.thanksHeading}`}>Thank you — your request is in.</h2>
        <p className="body-copy">
          We&apos;ll review the details and photos and contact you as soon as
          possible. If anything is urgent, call us at{" "}
          <a href={studio.phoneHref}>{studio.phone}</a>.
        </p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* spam trap — hidden from real visitors via CSS, left empty by them */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span>First Name <em>(required)</em></span>
          <input name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label className={styles.field}>
          <span>Last Name <em>(required)</em></span>
          <input name="lastName" type="text" autoComplete="family-name" required />
        </label>
      </div>

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span>Email <em>(required)</em></span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className={styles.field}>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <fieldset className={styles.radioGroup}>
        <legend>What service are you interested in? <em>(required)</em></legend>
        {(["Custom Upholstery", "Reupholstery", "Commercial Upholstery", "Not Sure"] as const).map((opt) => (
          <label key={opt}>
            <input
              type="radio"
              name="service"
              value={opt}
              required
              checked={service === opt}
              onChange={() => setService(opt)}
            />
            {opt}
          </label>
        ))}
      </fieldset>

      <label className={styles.field}>
        <span>Project Type</span>
        <select name="projectType" defaultValue="">
          <option value="" disabled>Select an option</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Message <em>(required)</em></span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Please briefly describe what you need, including the type of furniture, approximate size, condition, preferred material or style, and any project goals."
        />
      </label>

      <div className={styles.uploadField}>
        <span className={styles.photoLabel}>Photo Upload</span>
        <p className={styles.uploadHelp}>
          Upload clear photos of the furniture, space, damage, inspiration or
          measurements. Photos help us assess the project and provide a more
          accurate estimate. Accepted: JPG, PNG, HEIC, PDF.
        </p>

        <label className={styles.uploadDrop}>
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.heic,.pdf,image/*,application/pdf"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <span>Choose photos or files <span className="btn-arrow">→</span></span>
        </label>

        {files.length > 0 && (
          <ul className={styles.fileList}>
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className={styles.fileItem}>
                <span className={styles.fileName}>{f.name}</span>
                <button type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className={styles.uploadNote}>
          Up to {MAX_FILES} files — photos are resized automatically before
          sending. Have more? Send them to{" "}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
      </div>

      <label className={styles.field}>
        <span>How did you hear about us?</span>
        <select name="heardFrom" defaultValue="">
          <option value="" disabled>Select an option</option>
          {referralSources.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>I agree to be contacted by A.P Craft Upholstery about my project.</span>
      </label>

      <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }} disabled={sending}>
        {sending ? "Sending…" : <>Request My Quote <span className="btn-arrow">→</span></>}
      </button>

      <div aria-live="polite">
        {status === "error" && <p className={styles.errorNote} role="alert">{error}</p>}
        {status === "mailto" && (
          <p className={styles.sentNote}>
            Your email app should now be open with the request filled in —
            attach any photos and press send. If it didn&apos;t open, reach us
            directly at <a href={`mailto:${studio.email}`}>{studio.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
