"use client";

import { useCallback, useRef, useState } from "react";
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
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  // Dragging is driven by pointer events on the frame itself (covers mouse,
  // touch and pen with one code path) — a bare full-size <input type="range">
  // turned out to be unreliable to drag on some browsers/trackpads once its
  // thumb is stretched to fill the whole track. The range input stays, but
  // only as a slim, keyboard-focusable control for accessibility.
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  }
  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return (
    <div className={styles.wrap} style={{ "--pos": `${pos}%` } as React.CSSProperties}>
      <div
        className={styles.frame}
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
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
