import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Spectral } from "next/font/google";
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

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const TITLE = "Real Life Network — Ein Netz, das aus echten Begegnungen wächst";
const DESCRIPTION =
  "Ein lebendiges Geflecht aus echten Beziehungen — lokal verwurzelt, freiwillig, von Hand geknüpft. Das Real Life Network wächst dort, wo Menschen aufeinander zugehen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reallife.network"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://reallife.network",
    siteName: "reallife.network",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "reallife.network" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${bricolage.variable} ${hanken.variable} ${spectral.variable}`}>
      <body className="overflow-x-hidden bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
