import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import CtaBanner from "@/components/CtaBanner";
import styles from "./commercial.module.css";

export const metadata: Metadata = {
  title: "Commercial Upholstery — A.P Craft Upholstery",
  description: "Booths, banquettes and seating for restaurants, salons, hotels and offices across the GTA — built for daily use.",
};

const points = [
  { n: "01", title: "Craftsmanship & durability", text: "Built for everyday use with commercial-grade materials and attention to detail." },
  { n: "02", title: "Custom solutions", text: "Custom banquettes, booths, headboards and seating tailored to your space and design vision." },
  { n: "03", title: "Reliable turnaround", text: "Clear timelines, consistent communication, and on-time delivery for every project." },
  { n: "04", title: "Premium materials", text: "We work with high-quality fabrics, vinyls and foams selected for both comfort and durability." },
  { n: "05", title: "Installation & support", text: "From production to final installation, we make the process smooth and stress-free." },
];

const gallery = [
  { image: "/images/commercial-booth-red-vinyl.jpg", label: "Restaurant booths" },
  { image: "/images/banquette-pink-tufted.jpg", label: "Custom tufted banquette" },
  { image: "/images/commercial-salon-leather-booth.jpg", label: "Salon waiting bench" },
  { image: "/images/commercial-lounge-orange.jpg", label: "Lounge seating" },
  { image: "/images/bench-green-leather-retail.jpg", label: "Retail bench" },
  { image: "/images/banquette-construction-progress.jpg", label: "In production — Vaughan workshop" },
];

export default function CommercialPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Commercial</p>
            <h1 className={`h-xl ${styles.heading}`}>Banquettes built for the night-after-night.</h1>
            <p className={`lede ${styles.lede}`}>
              Restaurants, salons, hotels and offices — booths, banquettes and
              seating built in contract-grade materials, to handle a full
              service and keep looking sharp.
            </p>
            <div className={styles.actions}>
              <Link href="/quote" className="btn btn-primary">Request a Quote <span className="btn-arrow">→</span></Link>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            <Image src="/images/banquette-curved-gold-trim.jpg" alt="Commercial banquette seating built by A.P Craft" fill sizes="(max-width: 900px) 92vw, 46vw" style={{ objectFit: "cover" }} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionIntro
              eyebrow="What we build for businesses"
              heading="Seating built for the volume a business puts on it."
              lede="Restaurant booths, salon benches, hotel lounges and office seating — each piece is built to your layout in contract-grade materials, so it still looks sharp after a full season of daily use."
            />
          </Reveal>
          <div className={styles.gallery}>
            {gallery.map((g, i) => (
              <Reveal key={g.image} delay={i * 60}>
                <div className={styles.galleryItem}>
                  <div className={styles.galleryFrame}>
                    <div className={styles.galleryImageWrap}>
                      <Image src={g.image} alt={g.label} fill sizes="(max-width: 760px) 92vw, 30vw" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <p className={styles.galleryLabel}>{g.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-deep)" }}>
        <div className="container">
          <Reveal>
            <div className={styles.ctaHead}>
              <h2 className="h-lg">Commercial Upholstery, done right.</h2>
              <Link href="/quote" className="btn btn-primary">Request a Quote <span className="btn-arrow">→</span></Link>
            </div>
          </Reveal>
          <div className={styles.pointsGrid}>
            {points.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <div className={styles.point}>
                  <span className={styles.pointNum}>{p.n}</span>
                  <h3 className={styles.pointTitle}>{p.title}</h3>
                  <p className={styles.pointText}>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Fitting out a restaurant, salon or hotel?" lede="Tell us about the space and the timeline — we'll follow up with next steps." />
    </>
  );
}
