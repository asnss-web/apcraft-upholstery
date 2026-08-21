import Image from "next/image";
import styles from "./BeforeAfterCard.module.css";

export default function BeforeAfterCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <div className={styles.imageWrap}>
          <Image src={image} alt={`${title} — before and after`} fill sizes="(max-width: 760px) 92vw, 46vw" className={styles.image} />
        </div>
      </div>
      <div className={styles.body}>
        <span className={styles.pill}>Before → After</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
