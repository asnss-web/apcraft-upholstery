"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileStickyCta.module.css";

export default function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname === "/quote") return null;

  return (
    <div className={styles.bar}>
      <Link href="/quote" className={`btn btn-primary ${styles.btn}`}>
        Get a Quote
      </Link>
    </div>
  );
}
