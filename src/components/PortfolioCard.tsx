import Image from "next/image";
import type { PortfolioItem } from "@/lib/portfolio";
import styles from "./PortfolioCard.module.css";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw" className={styles.image} />
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{item.category}</p>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.description}</p>
        <span className={styles.swatchRow}>
          <span className="tag-swatch" style={{ background: item.swatch }} />
          <span className={styles.swatchLabel}>fabric shown</span>
        </span>
      </div>
    </article>
  );
}
