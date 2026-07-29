import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  title: "A.P Craft Upholstery — Custom Upholstery & Reupholstery in Vaughan & the GTA",
  description:
    "Hand-built reupholstery, custom furniture and commercial seating out of our Vaughan workshop. Serving Toronto and the GTA — homes, restaurants, salons and hotels.",
  openGraph: {
    title: "A.P Craft Upholstery",
    description:
      "Custom upholstery, reupholstery and commercial seating — built by hand in Vaughan, for Toronto and the GTA.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
