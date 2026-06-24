import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Wachsen } from "@/components/Wachsen";
import { VertrauenQuote } from "@/components/VertrauenQuote";
import { Quests } from "@/components/Quests";
import { PrinzipienBanner } from "@/components/PrinzipienBanner";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Vision />
      <Wachsen />
      <VertrauenQuote />
      <Quests />
      <PrinzipienBanner />
      <CTA />
      <Footer />
    </>
  );
}
