"use client";

import { useMemo, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import Reveal from "@/components/Reveal";
import type { PortfolioItem } from "@/lib/portfolio";
import styles from "./PortfolioExplorer.module.css";

type Category = { id: string; label: string; items: PortfolioItem[] };
type BeforeAfterItem = { image: string; title: string; description: string };

export default function PortfolioExplorer({
  categories,
  beforeAfter,
}: {
  categories: Category[];
  beforeAfter: BeforeAfterItem[];
}) {
  const [active, setActive] = useState<string>("all");

  const tabs = useMemo(
    () => [
      { id: "all", label: "All" },
      ...categories.map((c) => ({ id: c.id, label: c.label })),
      { id: "before-after", label: "Before & After" },
    ],
    [categories]
  );

  const items = useMemo(() => {
    if (active === "all") return categories.flatMap((c) => c.items);
    if (active === "before-after") return [];
    return categories.find((c) => c.id === active)?.items ?? [];
  }, [active, categories]);

  return (
    <>
      <div className={`container ${styles.tabs}`} role="tablist" aria-label="Filter portfolio by category">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active === t.id}
            className={`${styles.tab} ${active === t.id ? styles.tabActive : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {active !== "before-after" ? (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.grid}>
              {items.map((item, i) => (
                <Reveal key={item.image} delay={(i % 6) * 60}>
                  <PortfolioCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.baGrid}>
              {beforeAfter.map((item, i) => (
                <Reveal key={item.image} delay={i * 80}>
                  <BeforeAfterCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
