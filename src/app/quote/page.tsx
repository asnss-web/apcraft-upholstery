import type { Metadata } from "next";
import { studio } from "@/lib/content";
import QuoteForm from "./QuoteForm";
import styles from "./quote.module.css";

export const metadata: Metadata = {
  title: "Get a Quote — A.P Craft Upholstery",
  description: "Tell us about your piece — reupholstery, custom furniture or a commercial project.",
};

export default function QuotePage() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <p className="eyebrow">Get a Quote</p>
          <h1 className={`h-lg ${styles.heading}`}>Tell us about the piece on your mind.</h1>
          <p className="body-copy" style={{ marginTop: 18 }}>
            A few details and a couple of photos are usually enough for us to
            give you a realistic idea of cost and timeline. We reply within a
            couple of days.
          </p>
          <div className={styles.contactCard}>
            <p><a href={studio.phoneHref}>{studio.phone}</a></p>
            <p><a href={`mailto:${studio.email}`}>{studio.email}</a></p>
            <p>{studio.address}</p>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
