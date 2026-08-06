import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { studio } from "@/lib/content";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services — A.P Craft Upholstery",
  description: "Custom upholstery, reupholstery and commercial seating built by hand in our Vaughan workshop.",
};

const services = [
  {
    id: "custom",
    eyebrow: "01 — Custom Upholstery",
    title: "Built from scratch, to your room.",
    lede: "We create custom furniture designed to fit your space perfectly. Combining quality craftsmanship, premium materials, and attention to detail, we make every piece comfortable, stylish, and unique.",
    bullets: ["Beds, Headboards & Rails", "Benches & Banquettes", "Sectionals & Sofas", "Chairs", "Ottomans & Foot Stools"],
    footnote: "Every project is made to order — you choose the style, fabric, colour and finishing details.",
    image: "/images/banquette-built-in-green.jpg",
  },
  {
    id: "reupholstery",
    eyebrow: "02 — Reupholstery",
    title: "The frame you love, brand new again.",
    lede: "Give your furniture a second life with our professional reupholstery services. We completely restore and refresh your furniture so it looks and feels brand new again.",
    bullets: ["New foam and cushioning", "Spring replacement", "New fabric or leather selected by the client"],
    footnote: "We help you choose the perfect material to match your interior and personal style.",
    image: "/images/chair-wingback-burgundy.jpg",
  },
  {
    id: "commercial",
    eyebrow: "03 — Commercial",
    title: "Seating built for daily use.",
    lede: "We provide custom upholstery and furniture solutions for businesses, combining durability, comfort, and modern design.",
    bullets: ["Restaurants", "Beauty salons", "Hotels", "Offices"],
    footnote: "See the full commercial process and project photos on our Commercial page.",
    footnoteHref: "/commercial",
    image: "/images/commercial-salon-leather-booth.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1 className={`h-xl ${styles.heading}`}>One workshop. Every kind of seating.</h1>
          <p className={`lede ${styles.lede}`}>
            Custom upholstery, reupholstery and commercial seating for homes
            and businesses across Toronto and the GTA.
          </p>
          <div className={styles.heroActions}>
            <Link href="/quote" className="btn btn-primary">Get a Quote <span className="btn-arrow">→</span></Link>
            <a href={studio.phoneHref} className="btn btn-outline">Call {studio.phone}</a>
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${styles.row}`} style={{ background: i % 2 ? "var(--paper-deep)" : "var(--paper)" }}>
          <div className={`container ${styles.rowInner} ${i % 2 ? styles.reverse : ""}`}>
            <Reveal className={styles.rowImageWrap}>
              <div className={styles.rowImage}>
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 900px) 92vw, 46vw" style={{ objectFit: "cover" }} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.rowCopy}>
                <p className="eyebrow">{s.eyebrow}</p>
                <h2 className={`h-lg ${styles.rowTitle}`}>{s.title}</h2>
                <p className="body-copy" style={{ marginTop: 16 }}>{s.lede}</p>
                <ul className={styles.bullets}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {s.footnoteHref ? (
                  <a href={s.footnoteHref} className={styles.footnoteLink}>{s.footnote} →</a>
                ) : (
                  <p className={styles.footnote}>{s.footnote}</p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section" style={{ background: "var(--paper-deep)" }}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Materials & Guidance</p>
            <h2 className={`h-lg ${styles.materialsHeading}`}>Materials Chosen for Real Use</h2>
            <p className={`body-copy ${styles.materialsLede}`}>
              We help clients choose fabrics, vinyls, leathers, foams and
              finishes based on appearance, comfort, durability, maintenance
              and everyday use.
            </p>
          </Reveal>
          <div className={styles.materialsGrid}>
            {[
              { src: "/images/hero-boucle-chairs.jpg", label: "Boucle" },
              { src: "/images/chair-dining-navy-velvet.jpg", label: "Velvet" },
              { src: "/images/commercial-salon-leather-booth.jpg", label: "Vinyl & leather" },
            ].map((m, i) => (
              <Reveal key={m.src} delay={i * 70} className={styles.materialItem}>
                <div className={styles.materialImageWrap}>
                  <Image src={m.src} alt={`${m.label} fabric shown on a finished piece`} fill sizes="(max-width: 760px) 92vw, 30vw" style={{ objectFit: "cover" }} />
                </div>
                <p className={styles.materialLabel}>{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Not Sure Which Service You Need?" lede="Send us photos and a short description. We will help you identify the best approach." />
    </>
  );
}
