import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
