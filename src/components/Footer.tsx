import Image from "next/image";
import Link from "next/link";
import { footerWork, footerExplore, studio } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Image src="/images/logo-v2.png" alt="A.P Craft Upholstery" width={168} height={116} className={styles.logo} />
          <p className={styles.tag}>Custom upholstery, reupholstery and commercial furniture across Toronto and the GTA.</p>
          <a href={studio.instagramUrl} target="_blank" rel="noreferrer" className={styles.insta}>{studio.instagramHandle}</a>
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>Services</p>
          <ul>
            {footerWork.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>Explore</p>
          <ul>
            {footerExplore.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colHead}>Contact</p>
          <ul className={styles.contactList}>
            <li><a href={studio.phoneHref}>{studio.phone}</a></li>
            <li><a href={`mailto:${studio.email}`}>{studio.email}</a></li>
            <li><a href={studio.instagramUrl} target="_blank" rel="noreferrer">{studio.instagramHandle}</a></li>
            <li>{studio.address}</li>
            <li className={styles.muted}>{studio.serviceArea}</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>&copy; {new Date().getFullYear()} A.P Craft Upholstery</span>
        <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
      </div>
    </footer>
  );
}
