import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import styles from "./process.module.css";

export const metadata: Metadata = {
  title: "Process — A.P Craft Upholstery",
  description: "How a reupholstery or custom furniture project works with A.P Craft Upholstery, from first call to delivery.",
};

const steps = [
  {
    n: "01",
    title: "Conversation",
    text: "A call or a message with a few photos. We talk through what the piece needs and whether it's a good candidate for reupholstery.",
  },
  {
    n: "02",
    title: "Home visit",
    text: "We come to you with measuring tools and a curated set of fabric samples — no showroom trip required.",
  },
  {
    n: "03",
    title: "Written quote",
    text: "A clear, itemized quote with fabric, timeline and cost, before any work begins.",
  },
  {
    n: "04",
    title: "The work",
    text: "Your piece is stripped to the frame, rebuilt where it needs it, and re-covered in our Vaughan workshop by the same set of hands throughout.",
  },
  {
    n: "05",
    title: "Delivery",
    text: "We deliver and place the finished piece, and walk you through care for the new fabric.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Process</p>
            <h1 className={`h-xl ${styles.heading}`}>Five steps, no surprises.</h1>
            <p className={`lede ${styles.lede}`}>
              Most home projects take about four to six weeks from written quote
              to delivery, depending on fabric availability and the scope of the
              rebuild.
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/sofa-modular-taupe.jpg"
              alt="Custom modular sofa by A.P Craft Upholstery"
              fill
              priority
              sizes="(max-width: 860px) 92vw, 46vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className={styles.step}>
                  <span className={styles.stepNum}>{s.n}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Ready to start the conversation?" lede="Tell us about the piece — we'll take it from there." />
    </>
  );
}
