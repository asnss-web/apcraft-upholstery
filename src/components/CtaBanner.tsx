import Link from "next/link";
import { studio } from "@/lib/content";
import styles from "./CtaBanner.module.css";

export default function CtaBanner({
  heading,
  lede,
}: {
  heading: React.ReactNode;
  lede?: string;
}) {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <h2 className={`h-lg ${styles.heading}`}>{heading}</h2>
        {lede && <p className={styles.lede}>{lede}</p>}
        <div className={styles.actions}>
          <Link href="/quote" className="btn btn-ghost-light">
            Get a Quote <span className="btn-arrow">→</span>
          </Link>
          <a href={studio.phoneHref} className={styles.phoneLink}>
            or call {studio.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
