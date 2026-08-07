import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import styles from "./page.module.css";

const projects = [
  {
    n: "01",
    title: "Corner sectional, custom build",
    text: "Built to the room's exact corner — squared arms, boxed cushions, a clean architectural line.",
    image: "/images/sofa-gray-sectional-corner.jpg",
    position: "50% 42%",
  },
  {
    n: "02",
    title: "Antique wingback, restored",
    text: "Stripped back to the frame and re-dressed in mustard velvet — the carving was worth keeping.",
    image: "/images/chair-wingback-burgundy.jpg",
    position: "50% 22%",
  },
  {
    n: "03",
    title: "Built-in breakfast-nook banquette",
    text: "Channel-tufted bench built into an existing shelving nook, in a durable olive weave.",
    image: "/images/banquette-built-in-green.jpg",
    position: "50% 68%",
  },
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
    image: "/images/chair-dining-navy-velvet.jpg",
  },
  {
    n: "02",
    title: "Reupholstery",
    text: "Professional restoration and reupholstery for furniture worth keeping.",
    href: "/services#reupholstery",
    image: "/images/sofa-family-room-sectional.jpg",
  },
  {
    n: "03",
    title: "Commercial Upholstery",
    text: "Durable custom seating and upholstery for restaurants, offices, hotels and other commercial interiors.",
    href: "/commercial",
    image: "/images/commercial-booth-red-vinyl.jpg",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Share your project",
    text: "Send photos, rough dimensions and a few words on what you'd like to change.",
  },
  {
    n: "02",
    title: "Materials & measurements",
    text: "We visit your space, bring fabric samples, and talk through finish and comfort.",
  },
  {
    n: "03",
    title: "Quote & approval",
    text: "A clear, written estimate before any work begins — no surprises later.",
  },
  {
    n: "04",
    title: "Production & delivery",
    text: "Built start to finish by one upholsterer, then delivered to your door.",
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
        <div className={styles.heroScrimLeft} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>Custom Upholstery · Toronto &amp; GTA</p>
          <h1 className={styles.heroHeading}>
            Furniture made around
            <br className={styles.heroBreak} />
            {" "}your space, your style,
            <br className={styles.heroBreak} />
            {" "}your life.
          </h1>
          <div className={styles.heroActions}>
            <Link href="/quote" className="btn btn-primary">
              Get a Quote <span className="btn-arrow">→</span>
            </Link>
            <Link href="/portfolio" className={styles.heroSecondary}>
              View Our Work <span className="btn-arrow">→</span>
            </Link>
          </div>
          <p className={styles.heroProof}>
            <span>In-home measurements</span>
            <span>Samples brought to you</span>
            <span>Residential &amp; commercial</span>
          </p>
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
                  <div className={styles.previewImageWrap}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 900px) 92vw, 30vw"
                      className={styles.previewImage}
                    />
                  </div>
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
          <Reveal className={styles.projectsHead}>
            <p className="eyebrow">Featured portfolio</p>
            <h2 className={styles.projectsHeading}>Crafted for real spaces.</h2>
          </Reveal>

          {projects.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 90}
              className={`${styles.projectRow} ${i % 2 === 1 ? styles.projectRowFlip : ""}`}
            >
              <div className={styles.projectImageWrap}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 62vw"
                  className={styles.projectImage}
                  style={{ objectPosition: p.position }}
                />
              </div>
              <div className={styles.projectCopy}>
                <span className={styles.projectNum}>{p.n}</span>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectText}>{p.text}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className={styles.projectsFoot}>
            <Link href="/portfolio" className="btn btn-outline">
              View full portfolio <span className="btn-arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <div className={styles.processGrid}>
            <Reveal className={styles.processArt}>
              <div className={styles.processImageWrap}>
                <Image
                  src="/images/ottoman-boucle-stacked.jpg"
                  alt="Stacked drum ottoman upholstered in ivory boucle"
                  fill
                  sizes="(max-width: 900px) 100vw, 34vw"
                  className={styles.processImage}
                  style={{ objectPosition: "50% 40%" }}
                />
              </div>
            </Reveal>
            <Reveal delay={100} className={styles.processCopy}>
              <p className="eyebrow">Made for you</p>
              <h2 className={styles.processHeading}>Not limited to what&apos;s in a showroom.</h2>
              <p className={styles.processLede}>
                Choose the size, shape, colour, fabric and level of comfort. We review
                the details with you, take measurements where needed, and recommend
                materials suited to the space and how the piece will actually be used.
              </p>
              <ol className={styles.processSteps}>
                {processSteps.map((step) => (
                  <li key={step.n} className={styles.processStep}>
                    <span>{step.n}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
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
      />
    </>
  );
}
