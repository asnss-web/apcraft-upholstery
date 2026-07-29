"use client";

import { useState } from "react";
import { studio } from "@/lib/content";
import styles from "./quote.module.css";

export default function QuoteForm() {
  const [service, setService] = useState<"Upholstery" | "Reupholstery" | "">("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const heardFrom = data.get("heardFrom") as string;
    const message = data.get("message") as string;

    const subject = `Quote request — ${firstName} ${lastName}`.trim();
    const bodyLines = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      service ? `Service: ${service}` : null,
      heardFrom ? `How they heard about us: ${heardFrom}` : null,
      "",
      "Message:",
      message,
    ].filter(Boolean);

    window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

      <label className={styles.field}>
        <span>Email <em>(required)</em></span>
        <input name="email" type="email" required />
      </label>

      <label className={styles.field}>
        <span>Phone</span>
        <input name="phone" type="tel" />
      </label>

      <fieldset className={styles.radioGroup}>
        <legend>What service are you interested in?</legend>
        <label>
          <input type="radio" name="service" value="Upholstery" checked={service === "Upholstery"} onChange={() => setService("Upholstery")} />
          Upholstery
        </label>
        <label>
          <input type="radio" name="service" value="Reupholstery" checked={service === "Reupholstery"} onChange={() => setService("Reupholstery")} />
          Reupholstery
        </label>
      </fieldset>

      <label className={styles.field}>
        <span>How did you hear about us?</span>
        <select name="heardFrom" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option value="Instagram">Instagram</option>
          <option value="Google">Google search</option>
          <option value="Referral">Referral from a friend</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label className={styles.field}>
        <span>Message <em>(required)</em></span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Please share a brief description of what you are looking for — the type of furniture, materials you're considering, and any measurements that will help us understand your vision."
        />
      </label>

      <div className={styles.photoNote}>
        <span className={styles.photoLabel}>Photo Upload</span>
        <p>
          Submitting this form opens an email to us — attach reference photos
          of your furniture there, or send them directly to{" "}
          <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
      </div>

      <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>
        Send request <span className="btn-arrow">→</span>
      </button>

      {sent && (
        <p className={styles.sentNote}>
          Your email app should be opening now. If nothing happened, email us
          directly at <a href={`mailto:${studio.email}`}>{studio.email}</a>.
        </p>
      )}
    </form>
  );
}
