import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — A.P Craft Upholstery",
  description: "European craftsmanship and Canadian industry experience creating quality upholstery for Toronto and the GTA.",
};

const bio = [
  "With over 10 years of experience in upholstery and custom furniture, our work is built on craftsmanship, precision, and hands-on experience.",
  "The journey started in Europe, where we worked in furniture manufacturing and learned every stage of the process — from raw materials to the final finished piece.",
  "Over the years, that experience evolved into a deep understanding of upholstery, furniture construction, and custom commercial seating.",
  "Today, we bring together both European craftsmanship and Canadian industry experience to create durable, high-quality upholstery for restaurants, commercial spaces, and residential interiors across the GTA.",
  "We believe great furniture is not only about appearance — it should be comfortable, functional, and built to last. Every project is approached with attention to detail, clear communication, and genuine care for the final result.",
];

const workPhotos = [
  "/images/chair-wingback-burgundy.jpg",
  "/images/banquette-built-in-green.jpg",
  "/images/bed-blue-tufted-nightstand.jpg",
  "/images/commercial-booth-red-vinyl.jpg",
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1 className={`h-xl ${styles.heading}`}>Craftsmanship built through experience.</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.layout}`}>
          <Reveal className={styles.bioCol}>
            <div>
              {bio.map((p) => (
                <p key={p} className={styles.bioP}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className={styles.photoCol}>
            <div className={styles.photoGrid}>
              {workPhotos.map((src) => (
                <div key={src} className={styles.photoWrap}>
                  <Image src={src} alt="A.P Craft Upholstery project" fill sizes="(max-width: 760px) 45vw, 22vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Have a project in mind?"
        lede="Send us a few photos and a brief description — we'll get back to you with the next steps."
      />
    </>
  );
}
