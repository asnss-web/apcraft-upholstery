import type { Metadata } from "next";
import PortfolioExplorer from "@/components/PortfolioExplorer";
import CtaBanner from "@/components/CtaBanner";
import { portfolioCategories, beforeAfter } from "@/lib/portfolio";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio — A.P Craft Upholstery",
  description: "Sofas, chairs, beds, banquettes and commercial upholstery reupholstered and custom-built by A.P Craft Upholstery.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h1 className={`h-xl ${styles.heading}`}>Selected Work</h1>
          <p className={`lede ${styles.lede}`}>
            Explore custom furniture, reupholstery and commercial upholstery
            projects completed for residential and business clients across
            Toronto and the GTA.
          </p>
        </div>
      </section>

      <PortfolioExplorer categories={portfolioCategories} beforeAfter={beforeAfter} />

      <CtaBanner heading="Have Something Similar in Mind?" lede="Send us a photo and we'll tell you what it would take." />
    </>
  );
}
