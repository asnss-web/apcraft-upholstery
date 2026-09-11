import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <p className="eyebrow">Page not found</p>
        <h1 className={`h-lg ${styles.heading}`}>We couldn&apos;t find that page.</h1>
        <p className="body-copy">
          The link may be old or mistyped. Here are a couple of good places to start.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Back to home <span className="btn-arrow">→</span>
          </Link>
          <Link href="/portfolio" className="btn btn-outline">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
