import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import PortfolioCard from "@/components/PortfolioCard";
import CtaBanner from "@/components/CtaBanner";
import { portfolioCategories } from "@/lib/portfolio";
import { studio } from "@/lib/content";
import styles from "./page.module.css";

const studioPoints = [
  {
    n: "01",
    title: "Home visits across the GTA",
    text: "Measurements, fabric samples and consultation — all in the comfort of your home or workspace.",
  },
  {
    n: "02",
    title: "Furniture made for real living",
    text: "We help you choose fabrics that look beautiful and stand up to everyday life — kids, pets, sunlight and daily use.",
  },
  {
    n: "03",
    title: "One workshop, one upholsterer per piece",
    text: "Your project doesn't get passed down a line. It's stripped, rebuilt, and finished by the same set of hands.",
  },
  {
    n: "04",
    title: "Reliable service, no surprises",
    text: "Clear estimates, honest timelines and attention to every detail from pickup to delivery.",
  },
];

const services = [
  {
    href: "/services#custom",
    title: "Custom Upholstery",
    text: "Beds, headboards, benches, sectionals and chairs — built to order, in the fabric and finish you choose.",
    image: "/images/bed-charcoal-chesterfield.jpg",
  },
  {
    href: "/services#reupholstery",
    title: "Reupholstery",
    text: "New foam, new springs, new fabric or leather — the frame you love, brought back to brand new.",
    image: "/images/chair-wingback-burgundy.jpg",
  },
  {
    href: "/commercial",
    title: "Commercial",
    text: "Restaurants, salons, hotels and offices — durable, contract-ready seating built for daily use.",
    image: "/images/commercial-booth-red-vinyl.jpg",
  },
];

const featured = [
  portfolioCategories[0].items[0],
  portfolioCategories[1].items[1],
  portfolioCategories[3].items[0],
  portfolioCategories[2].items[1],
  portfolioCategories[1].items[3],
  portfolioCategories[4].items[0],
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">{studio.name} · {studio.serviceArea}</p>
            <h1 className={`h-xl ${styles.heroHeading}`}>
              Furniture worth keeping,
              <br />
              made to last another decade.
            </h1>
            <p className={`lede ${styles.heroLede}`}>
              We reupholster, rebuild and custom-build furniture out of our Vaughan
              workshop — with fabric samples brought to your door across Toronto
              and the GTA.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">Get a Quote <span className="btn-arrow">→</span></Link>
              <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
            </div>
          </div>
          <div className={styles.heroArt}>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/hero-boucle-chairs.jpg"
                alt="A pair of boucle armchairs reupholstered by A.P Craft"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 640px"
                className={styles.heroImage}
              />
            </div>
            <div className={styles.heroCaption}>
              <span className="tag-swatch" style={{ background: "#e7e2d6" }} />
              Reupholstered in boucle — from our Vaughan workshop
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionIntro
              eyebrow="Why clients choose us"
              heading="The studio that comes to you."
              lede="Most upholstery shops ask you to drive across town with a couch in the back of a van. We don't. We arrive at your home or job site with measuring tools and a curated set of samples, and we leave with a clear, written estimate."
            />
          </Reveal>
          <div className={styles.pointsGrid}>
            {studioPoints.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
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

      <section className="section" style={{ background: "var(--paper-deep)" }}>
        <div className="container">
          <Reveal>
            <SectionIntro
              eyebrow="What we build"
              heading="Everything under one roof."
              lede="Custom upholstery, reupholstery and commercial seating for homes and businesses across Toronto and the GTA."
            />
          </Reveal>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <Link href={s.href} className={styles.serviceCard}>
                  <div className={styles.serviceImageWrap}>
                    <Image src={s.image} alt={s.title} fill sizes="(max-width: 760px) 92vw, 30vw" className={styles.serviceImage} />
                  </div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceText}>{s.text}</p>
                  <span className={styles.serviceLink}>Explore <span className="btn-arrow">→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className={styles.portfolioHead}>
              <SectionIntro
                eyebrow="Portfolio"
                heading="Recent pieces from the workshop."
              />
              <Link href="/portfolio" className="btn btn-outline">View full portfolio</Link>
            </div>
          </Reveal>
          <div className={styles.portfolioGrid}>
            {featured.map((item, i) => (
              <Reveal key={item.image} delay={i * 60}>
                <PortfolioCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Tell us about the piece that deserves another life."
        lede="Send a few photos and rough measurements — we'll get back to you within a couple of days with next steps."
      />
    </>
  );
}
