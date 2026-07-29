import styles from "./SectionIntro.module.css";

export default function SectionIntro({
  eyebrow,
  heading,
  lede,
  align = "left",
}: {
  eyebrow: string;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`h-lg ${styles.heading}`}>{heading}</h2>
      {lede && <p className={`lede ${styles.lede}`}>{lede}</p>}
    </div>
  );
}
