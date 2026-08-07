import Link from "next/link";
import { navLinks, studio } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.infoRow}>
          <div className={styles.infoCol}>
            <a href={studio.phoneHref}>{studio.phone}</a>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </div>
          <div className={`${styles.infoCol} ${styles.infoColRight}`}>
            <a href={studio.instagramUrl} target="_blank" rel="noreferrer">{studio.instagramHandle}</a>
            <span>{studio.address} &middot; {studio.serviceArea}</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} A.P Craft Upholstery</span>
          <nav className={styles.bottomNav} aria-label="Footer">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
