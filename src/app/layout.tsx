import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import { siteUrl, studio } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "A.P Craft Upholstery — Custom Upholstery & Reupholstery in Vaughan & the GTA",
  description:
    "Hand-built reupholstery, custom furniture and commercial seating out of our Vaughan workshop. Serving Toronto and the GTA — homes, restaurants, salons and hotels.",
  openGraph: {
    title: "A.P Craft Upholstery",
    description:
      "Custom upholstery, reupholstery and commercial seating — built by hand in Vaughan, for Toronto and the GTA.",
    type: "website",
    siteName: studio.name,
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: studio.name,
  url: siteUrl,
  logo: `${siteUrl}/images/logo-v2.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  telephone: studio.phone,
  email: studio.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "299 Applewood Cres",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Toronto and the Greater Toronto Area",
  sameAs: [studio.instagramUrl],
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
