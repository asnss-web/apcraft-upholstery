"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, studio } from "@/lib/content";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} aria-label="A.P Craft Upholstery — home">
          <Image src="/images/logo-v2.png" alt="A.P Craft Upholstery" width={168} height={116} priority className={styles.logo} />
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <a href={studio.phoneHref} className={styles.phone}>{studio.phone}</a>
          <Link href="/quote" className="btn btn-primary">Get a Quote</Link>
        </div>

        <button
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}>
        <nav className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileLink}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <a href={studio.phoneHref}>{studio.phone}</a>
          <Link href="/quote" className="btn btn-primary" style={{ marginTop: 16 }}>Get a Quote</Link>
        </div>
      </div>
    </header>
  );
}
