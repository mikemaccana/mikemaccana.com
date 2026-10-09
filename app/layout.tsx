import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "./nav";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mike MacCana",
  description: "I teach finance concepts, and I am available as a speaker.",
  openGraph: {
    title: "Mike MacCana",
    description: "I teach finance concepts, and I am available as a speaker.",
    images: [{ url: "/images/mike.jpg", width: 1200, height: 1200, alt: "Mike MacCana" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="wrap">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
