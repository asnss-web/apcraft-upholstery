"use client";

import { useState } from "react";
import { studio } from "@/lib/content";
import styles from "./quote.module.css";

type Service = "Custom Upholstery" | "Reupholstery" | "Commercial Upholstery" | "Not Sure" | "";

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

export default function QuoteForm() {
  const [service, setService] = useState<Service>("");
  const [files, setFiles] = useState<File[]>([]);
  const [sent, setSent] = useState(false);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // honeypot — if this hidden field is filled, a bot filled the form
    const honeypot = (e.currentTarget.elements.namedItem("company") as HTMLInputElement)?.value;
    if (honeypot) return;

    const data = new FormData(e.currentTarget);
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const projectType = data.get("projectType") as string;
    const heardFrom = data.get("heardFrom") as string;
    const message = data.get("message") as string;

    const subject = `Quote request — ${firstName} ${lastName}`.trim();
    const bodyLines = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Service: ${service}` : null,
      projectType ? `Project type: ${projectType}` : null,
      heardFrom ? `How they heard about us: ${heardFrom}` : null,
      "",
      "Message:",
      message,
      files.length ? `\n(${files.length} photo${files.length > 1 ? "s" : ""} selected — please attach them to this email before sending.)` : null,
    ].filter(Boolean);

    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* spam trap — hidden from real visitors via CSS, left empty by them */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span>First Name <em>(required)</em></span>
          <input name="firstName" type="text" required />
        </label>
        <label className={styles.field}>
          <span>Last Name <em>(required)</em></span>
          <input name="lastName" type="text" required />
        </label>
      </div>

      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span>Email <em>(required)</em></span>
          <input name="email" type="email" required />
        </label>
        <label className={styles.field}>
          <span>Phone</span>
          <input name="phone" type="tel" />
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
            onChange={(e) => addFiles(e.target.files)}
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
          This form opens an email to send your request — attach the files
          you&apos;ve selected above to that email before sending, or send
          them directly to <a href={`mailto:${studio.email}`}>{studio.email}</a>.
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

      <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>
        Request My Quote <span className="btn-arrow">→</span>
      </button>

      {sent && (
        <p className={styles.sentNote}>
          Thank you. Your request has been received. We will review the
          details and contact you as soon as possible. If your email app
          didn&apos;t open, reach us directly at{" "}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
      )}
    </form>
  );
}
