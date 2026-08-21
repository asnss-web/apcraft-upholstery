"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className={styles.wrap} style={{ "--pos": `${pos}%` } as React.CSSProperties}>
      <div className={styles.frame}>
        <Image src={after} alt={`${title} — after`} fill sizes="(max-width: 760px) 92vw, 46vw" className={styles.image} draggable={false} />
        <div className={styles.beforeLayer}>
          <Image src={before} alt={`${title} — before`} fill sizes="(max-width: 760px) 92vw, 46vw" className={styles.image} draggable={false} />
        </div>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.grip}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M5 3L1.5 7.5L5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 3L13.5 7.5L10 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className={`${styles.tag} ${styles.tagBefore}`}>Before</span>
        <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className={styles.range}
          aria-label={`Drag to compare ${title} before and after`}
        />
      </div>
    </div>
  );
}
