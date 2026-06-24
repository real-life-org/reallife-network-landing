import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Kreislauf } from "@/components/Kreislauf";
import { Module } from "@/components/Module";
import { Banner } from "@/components/Banner";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoCloud />
      <Kreislauf />
      <Module />
      <Banner />
      <CTA />
      <Footer />
    </>
  );
}
