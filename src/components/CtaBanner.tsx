import Link from "next/link";
import { studio } from "@/lib/content";
import styles from "./CtaBanner.module.css";

export default function CtaBanner({
  heading,
  lede,
  showWhatsapp = false,
  note,
}: {
  heading: React.ReactNode;
  lede?: string;
  showWhatsapp?: boolean;
  note?: string;
}) {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <h2 className={`h-lg ${styles.heading}`}>{heading}</h2>
        {lede && <p className={styles.lede}>{lede}</p>}
        <div className={styles.actions}>
          <Link href="/quote" className="btn btn-accent">
            Get a Quote <span className="btn-arrow">→</span>
          </Link>
          {showWhatsapp ? (
            <span className={styles.altLinks}>
              <a href={studio.whatsappUrl} target="_blank" rel="noreferrer" className={styles.phoneLink}>
                Message on WhatsApp
              </a>
              <span aria-hidden="true">·</span>
              <a href={studio.phoneHref} className={styles.phoneLink}>
                {studio.phone}
              </a>
            </span>
          ) : (
            <a href={studio.phoneHref} className={styles.phoneLink}>
              or call {studio.phone}
            </a>
          )}
        </div>
        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  );
}
