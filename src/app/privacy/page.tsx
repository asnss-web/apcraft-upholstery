import type { Metadata } from "next";
import { studio } from "@/lib/content";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — A.P Craft Upholstery",
  description: "How A.P Craft Upholstery handles the information you share through this website.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <p className="eyebrow">Privacy Policy</p>
        <h1 className={`h-lg ${styles.heading}`}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long" })}</p>

        <div className={styles.body}>
          <p>
            A.P Craft Upholstery (&quot;we&quot;, &quot;us&quot;) collects only the
            information you choose to share with us — through the Get a Quote
            form, by email, by phone or through Instagram — to respond to your
            enquiry and, where a project goes ahead, to plan and deliver the work.
          </p>
          <p>
            This typically includes your name, contact details, project
            description and any photos you upload. We do not sell or share
            your information with third parties, and we only use it to
            communicate with you about your project.
          </p>
          <p>
            We may use privacy-respecting analytics tools to understand how
            visitors use this website, which does not identify you personally.
          </p>
          <p>
            If you would like your information removed from our records,
            contact us at{" "}
            <a href={`mailto:${studio.email}`}>{studio.email}</a> and we will
            action your request.
          </p>
        </div>
      </div>
    </section>
  );
}
