import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Life Network — Ein Netz aus echten Verbindungen",
  description:
    "Werkzeuge für Gruppen, die vor Ort gemeinsam etwas bewegen. Karte, Kalender, Feed und Gruppen — selbst gehostet, dezentral, vertrauensbasiert.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${bricolage.variable} ${hanken.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
