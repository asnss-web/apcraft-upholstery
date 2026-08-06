import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { studio } from "@/lib/content";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — A.P Craft Upholstery",
  description: "Reach A.P Craft Upholstery by phone, email or Instagram. Workshop in Vaughan, serving Toronto and the GTA.",
};

const details = [
  { label: "Phone", value: studio.phone, href: studio.phoneHref },
  { label: "Email", value: studio.email, href: `mailto:${studio.email}` },
  { label: "Instagram", value: studio.instagramHandle, href: studio.instagramUrl },
  { label: "Workshop", value: studio.address },
  { label: "Service Area", value: studio.serviceArea },
];

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className={`h-xl ${styles.heading}`}>Contact A.P Craft Upholstery</h1>
          <p className={`lede ${styles.lede}`}>
            Tell us about your furniture or commercial project. We serve
            clients across Toronto and the GTA.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className={`container ${styles.layout}`}>
          <Reveal className={styles.detailsCol}>
            <dl className={styles.detailsList}>
              {details.map((d) => (
                <div key={d.label} className={styles.detailRow}>
                  <dt>{d.label}</dt>
                  <dd>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel={d.href.startsWith("http") ? "noreferrer" : undefined}>
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/quote" className="btn btn-primary" style={{ marginTop: 32 }}>
              Get a Quote <span className="btn-arrow">→</span>
            </Link>
          </Reveal>

          <Reveal delay={100} className={styles.mapCol}>
            <div className={styles.mapWrap}>
              <iframe
                title="A.P Craft Upholstery workshop location"
                src="https://www.google.com/maps?q=299+Applewood+Cres,+Vaughan,+Ontario&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
