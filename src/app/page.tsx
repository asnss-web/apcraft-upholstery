import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import ScrollGallery from "@/components/ScrollGallery";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import { ShareIcon, SwatchIcon, QuoteIcon, DeliveryIcon, ChairIcon, NeedleIcon, StorefrontIcon } from "@/components/ProcessIcons";
import { beforeAfter } from "@/lib/portfolio";
import styles from "./page.module.css";

const projects = [
  { image: "/images/sofa-gray-sectional-corner.jpg", title: "Corner Sectional", position: "50% 42%" },
  { image: "/images/chair-wingback-burgundy.jpg", title: "Wingback Restored", position: "50% 22%" },
  { image: "/images/banquette-built-in-green.jpg", title: "Breakfast Banquette", position: "50% 68%" },
  { image: "/images/bed-charcoal-chesterfield.jpg", title: "Chesterfield Bed", position: "50% 35%" },
  { image: "/images/chaise-blue-patterned.jpg", title: "Patterned Bench", position: "50% 40%" },
];

const benefits = [
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
    title: "Made to order",
    text: "Every piece is tailored to your preferred size, style, fabric, colour and finishing details.",
  },
  {
    n: "04",
    title: "Reliable service, no surprises",
    text: "Clear estimates, honest timelines and attention to every detail from pickup to delivery.",
  },
];

const services = [
  {
    n: "01",
    title: "Custom Upholstery",
    text: "Custom furniture made to fit your space, style and everyday needs.",
    href: "/services#custom",
    icon: ChairIcon,
  },
  {
    n: "02",
    title: "Reupholstery",
    text: "Professional restoration and reupholstery for furniture worth keeping.",
    href: "/services#reupholstery",
    icon: NeedleIcon,
  },
  {
    n: "03",
    title: "Commercial Upholstery",
    text: "Durable custom seating and upholstery for restaurants, offices, hotels and other commercial interiors.",
    href: "/commercial",
    icon: StorefrontIcon,
  },
];

const processSteps = [
  {
    n: "01",
    title: "Share your project",
    text: "Send photos, rough dimensions and a few words on what you'd like to change.",
    icon: ShareIcon,
  },
  {
    n: "02",
    title: "Materials & measurements",
    text: "We visit your space, bring fabric samples, and talk through finish and comfort.",
    icon: SwatchIcon,
  },
  {
    n: "03",
    title: "Quote & approval",
    text: "A clear, written estimate before any work begins — no surprises later.",
    icon: QuoteIcon,
  },
  {
    n: "04",
    title: "Production & delivery",
    text: "Built start to finish by one upholsterer, then delivered to your door.",
    icon: DeliveryIcon,
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/bed-beige-tufted-panel.jpg"
          alt="Custom channel-tufted headboard and platform bed, upholstered by A.P Craft"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
          style={{ objectPosition: "50% 62%" }}
        />
        <div className={styles.heroScrimTop} />
        <div className={styles.heroScrimBottom} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>A.P Upholstery</h1>
          <p className={styles.heroSubhead}>Furniture made around your space, your style, your life.</p>
          <Link href="/quote" className={styles.heroCta}>
            Get a Quote <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <Reveal className={styles.introText}>
              <p className="eyebrow">What we do</p>
              <h2 className={styles.introHeading}>
                Furniture should fit the client — not the other way around.
              </h2>
              <p className={styles.introLede}>
                From custom-built pieces to complete reupholstery, every project starts
                with your space, not a showroom floor. We visit your home or job site,
                bring fabric and leather samples, and help you choose finishes that hold
                up to real, everyday life.
              </p>
              <ul className={styles.introList}>
                <li>Custom furniture, built to your exact dimensions</li>
                <li>Reupholstery that keeps the frame you already love</li>
                <li>In-home consultation, with samples brought to you</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className={styles.introArt}>
              <div className={styles.introImageWrap}>
                <Image
                  src="/images/home-antique-armchair.jpg"
                  alt="Antique armchair reupholstered in a patterned damask, beside a sunlit window"
                  fill
                  sizes="(max-width: 900px) 100vw, 38vw"
                  className={styles.introImage}
                  style={{ objectPosition: "60% 40%" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why work with us</p>
            <h2 className={styles.benefitsHeading}>Built around how you actually live.</h2>
          </Reveal>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <Reveal key={b.n} delay={i * 60} className={styles.benefit}>
                <span className={styles.benefitNum}>{b.n}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitText}>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">What we build</p>
            <h2 className={styles.servicesHeading}>Three ways we work.</h2>
          </Reveal>
          <div className={styles.previewGrid}>
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className={styles.previewCard}>
                <Link href={s.href} className={styles.previewLink}>
                  <span className={styles.previewIcon}>
                    <s.icon />
                  </span>
                  <h3 className={styles.previewTitle}>{s.title}</h3>
                  <p className={styles.previewText}>{s.text}</p>
                  <span className={styles.previewCta}>
                    Learn more <span className="btn-arrow">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <Reveal>
            <ScrollGallery
              eyebrow="Featured portfolio"
              heading="Crafted for real spaces."
              items={projects}
              viewAllHref="/portfolio"
            />
          </Reveal>
          <Reveal className={styles.projectsFoot}>
            <Link href="/portfolio" className="btn btn-outline">
              View full portfolio <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.beforeAfter}>
        <div className="container">
          <Reveal>
            <p className="eyebrow">Before &amp; after</p>
            <h2 className={styles.beforeAfterHeading}>A frame worth keeping is worth rebuilding.</h2>
            <p className={`lede ${styles.beforeAfterLede}`}>
              Vintage frames are usually better built than anything new at
              the same price. We strip them to the wood, rebuild what&apos;s
              broken, and re-dress them in fabric that fits how you actually live.
            </p>
          </Reveal>
          <div className={styles.beforeAfterGrid}>
            {beforeAfter.slice(0, 2).map((item, i) => (
              <Reveal key={item.image} delay={i * 90}>
                <BeforeAfterCard {...item} />
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.projectsFoot}>
            <Link href="/portfolio#before-after" className="btn btn-outline">
              See more transformations <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <Reveal className={styles.processHead}>
            <p className="eyebrow">Made for you</p>
            <h2 className={styles.processHeading}>Not limited to what&apos;s in a showroom.</h2>
          </Reveal>
          <div className={styles.processRow}>
            {processSteps.map((step, i) => (
              <div key={step.n} className={styles.processStepWrap}>
                <Reveal delay={i * 80} className={styles.processStep}>
                  <span className={styles.processIcon}>
                    <step.icon />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
                {i < processSteps.length - 1 && (
                  <span className={styles.processArrow} aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.collab}>
        <Image
          src="/images/commercial-salon-leather-booth.jpg"
          alt="Black upholstered commercial bench seating built for a salon interior"
          fill
          sizes="100vw"
          className={styles.collabImage}
          style={{ objectPosition: "35% 55%" }}
        />
        <div className={styles.collabScrim} />
        <div className={`container ${styles.collabContent}`}>
          <Reveal>
            <p className={styles.collabEyebrow}>Commercial</p>
            <h2 className={styles.collabHeading}>Commercial Upholstery, Done Right.</h2>
            <p className={styles.collabLede}>
              Custom banquettes, booths, seating and upholstered furniture made
              for daily use and tailored to your space.
            </p>
            <div className={styles.collabActions}>
              <Link href="/commercial" className="btn btn-ghost-light">
                Explore Commercial Work <span className="btn-arrow">→</span>
              </Link>
              <Link href="/quote" className={styles.collabLink}>
                Discuss a Commercial Project <span className="btn-arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading="Have a piece in mind?"
        lede="Send a few photos, rough measurements and a short description — we'll review the project and get back to you."
        showWhatsapp
        note="Free, no-obligation quote — we reply personally, not with a form letter."
      />
    </>
  );
}
