import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PortfolioCard from "@/components/PortfolioCard";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import CtaBanner from "@/components/CtaBanner";
import SectionIntro from "@/components/SectionIntro";
import { portfolioCategories, beforeAfter } from "@/lib/portfolio";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio — A.P Craft Upholstery",
  description: "Sofas, chairs, beds, banquettes and ottomans reupholstered and custom-built by A.P Craft Upholstery.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h1 className={`h-xl ${styles.heading}`}>Recent pieces from the workshop.</h1>
          <p className={`lede ${styles.lede}`}>
            Every piece below was reupholstered or built in our Vaughan workshop —
            real fabric, real frames, no stock photography.
          </p>
        </div>
        <div className={`container ${styles.jump}`}>
          {portfolioCategories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className={styles.jumpLink}>{c.label}</a>
          ))}
          <a href="#before-after" className={styles.jumpLink}>Before &amp; After</a>
        </div>
      </section>

      {portfolioCategories.map((cat, ci) => (
        <section key={cat.id} id={cat.id} className="section" style={{ paddingTop: ci === 0 ? 0 : undefined, background: ci % 2 ? "var(--paper-deep)" : "var(--paper)" }}>
          <div className="container">
            <Reveal>
              <p className="eyebrow">{cat.label}</p>
            </Reveal>
            <div className={styles.grid}>
              {cat.items.map((item, i) => (
                <Reveal key={item.image} delay={i * 60}>
                  <PortfolioCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="before-after" className="section" style={{ background: "var(--ink)" }}>
        <div className="container">
          <Reveal>
            <SectionIntro
              eyebrow="Before & After"
              heading={<span style={{ color: "var(--paper)" }}>A frame worth keeping is worth rebuilding.</span>}
              lede={<span style={{ color: "rgba(246,241,230,0.68)" }}>Vintage frames are usually better built than anything new at the same price. We strip them to the wood, rebuild what&apos;s broken, and re-dress them in fabric that fits how you actually live.</span>}
            />
          </Reveal>
          <div className={styles.baGrid}>
            {beforeAfter.map((item, i) => (
              <Reveal key={item.image} delay={i * 80}>
                <BeforeAfterCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="See something close to your piece?" lede="Send us a photo and we'll tell you what it would take." />
    </>
  );
}
