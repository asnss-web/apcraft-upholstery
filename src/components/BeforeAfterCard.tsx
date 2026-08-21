import BeforeAfterSlider from "./BeforeAfterSlider";
import styles from "./BeforeAfterCard.module.css";

export default function BeforeAfterCard({
  before,
  after,
  title,
  description,
}: {
  before: string;
  after: string;
  title: string;
  description: string;
}) {
  return (
    <article className={styles.card}>
      <BeforeAfterSlider before={before} after={after} title={title} />
      <div className={styles.body}>
        <span className={styles.pill}>Before → After</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
