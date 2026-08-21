"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ScrollGallery.module.css";

export type GalleryItem = {
  image: string;
  title: string;
  href?: string;
  position?: string;
  /** aspect-ratio CSS value, e.g. "3 / 4" — varies the row's rhythm
   *  instead of cropping every photo to the same shape */
  ratio?: string;
};

export default function ScrollGallery({
  eyebrow,
  heading,
  items,
  viewAllHref,
}: {
  eyebrow: string;
  heading: string;
  items: GalleryItem[];
  viewAllHref?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = rowRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 280) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.arrows}>
          <button type="button" aria-label="Scroll left" onClick={() => scroll(-1)}>←</button>
          <button type="button" aria-label="Scroll right" onClick={() => scroll(1)}>→</button>
        </div>
      </div>

      <div className={styles.row} ref={rowRef}>
        {items.map((item) => (
          <Link key={item.image} href={item.href ?? viewAllHref ?? "/portfolio"} className={styles.card} data-card>
            <div className={styles.imageFrame}>
              <div className={styles.imageWrap} style={{ aspectRatio: item.ratio ?? "3 / 4" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 760px) 70vw, 22vw"
                  className={styles.image}
                  style={item.position ? { objectPosition: item.position } : undefined}
                />
              </div>
            </div>
            <p className={styles.caption}>
              {item.title} <span className="btn-arrow">→</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
