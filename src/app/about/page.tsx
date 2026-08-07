import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — A.P Craft Upholstery",
  description: "European craftsmanship and Canadian industry experience creating quality upholstery for Toronto and the GTA.",
};

const bio = [
  "With over 10 years of experience in upholstery and custom furniture, our work is built on craftsmanship, precision, and hands-on experience.",
  "Our journey started in Europe, working in furniture manufacturing and learning every stage of the process — from raw materials to the final finished piece. That experience developed into a deep understanding of upholstery, furniture construction, and custom commercial seating.",
];

const bioRest = [
  "Today, we bring together European craftsmanship and Canadian industry experience to create durable, high-quality upholstery for restaurants, commercial spaces, and residential interiors across the GTA.",
  "We believe great furniture is not only about appearance — it should be comfortable, functional, and built to last. Every project is approached with attention to detail, clear communication, and genuine care for the final result.",
];

const workPhotos = [
  "/images/chair-wingback-burgundy.jpg",
  "/images/banquette-built-in-green.jpg",
  "/images/bed-blue-tufted-nightstand.jpg",
  "/images/commercial-booth-red-vinyl.jpg",
];

const highlights = [
  { title: "10 years in the trade", text: "Trained in Europe, working across Canada." },
  { title: "One set of hands", text: "The same upholsterer sees a piece through, start to finish." },
  { title: "Made to order", text: "Every piece built to your size, fabric and finish." },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">About Us</p>
            <h1 className={`h-xl ${styles.heading}`}>Craftsmanship built through experience.</h1>
            <p className={`lede ${styles.lede}`}>
              A Vaughan workshop built on European training and Canadian
              industry experience — every piece made by hand, start to finish.
            </p>
            <Link href="/quote" className="btn btn-primary" style={{ marginTop: 28 }}>
              Get a Quote <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/banquette-construction-progress.jpg"
              alt="A commercial banquette under construction in the A.P Craft workshop"
              fill
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.layout}`}>
          <Reveal className={styles.bioCol}>
            <div>
              {bio.map((p) => (
                <p key={p} className={styles.bioP}>{p}</p>
              ))}
              <blockquote className={styles.pullQuote}>
                &ldquo;Great furniture is not only about appearance — it should
                be comfortable, functional and built to last.&rdquo;
              </blockquote>
              {bioRest.map((p) => (
                <p key={p} className={styles.bioP}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className={styles.photoCol}>
            <div className={styles.photoGrid}>
              {workPhotos.map((src) => (
                <div key={src} className={styles.photoWrap}>
                  <Image src={src} alt="A.P Craft Upholstery project" fill sizes="(max-width: 760px) 45vw, 22vw" className={styles.photoImg} style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.highlights}`}>
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70} className={styles.highlight}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Let's Discuss Your Project"
        lede="Send us a few photos and a brief description — we'll get back to you with the next steps."
      />
    </>
  );
}
