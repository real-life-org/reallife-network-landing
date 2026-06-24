import { Knot } from "./Knot";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-page px-8 pb-[60px] pt-[88px]">
      <Knot
        name="medallion"
        className="pointer-events-none absolute right-[-130px] top-[10px] h-[600px] w-[600px] text-forest opacity-[0.06]"
      />

      <div className="relative max-w-[780px]">
        <div className="inline-flex items-center gap-[9px] rounded-full border border-line bg-surface py-1.5 pl-[9px] pr-[15px] text-[13.5px] font-semibold text-[#5a6536]">
          <Knot name="triquetra" className="h-[18px] w-[18px] text-sage" />
          Ein lebendiges Geflecht aus Menschen
        </div>

        <h1 className="mt-6 font-display text-[72px] font-extrabold leading-[0.96] tracking-[-0.035em]">
          Echte Begegnungen,
          <br />
          von Hand <span className="text-terracotta">geknüpft</span>
        </h1>

        <p className="mt-6 max-w-[33em] text-pretty text-[21px] leading-[1.55] text-bodytext">
          Das Real Life Network wächst dort, wo Menschen aufeinander zugehen — sich kennenlernen, Vertrauen aufbauen,
          teilen und gemeinsam etwas Lebendiges schaffen. Vor Ort, freiwillig, Beziehung für Beziehung.
        </p>

        <div className="mt-[34px] flex flex-wrap gap-[13px]">
          <a
            href="#mitmachen"
            className="rounded-[13px] bg-forest px-[26px] py-[15px] text-[16px] font-semibold text-cream no-underline"
          >
            Sei dabei
          </a>
          <a
            href="#wachsen"
            className="rounded-[13px] border-[1.5px] border-[#CDBfa3] px-[26px] py-[15px] text-[16px] font-semibold text-ink no-underline"
          >
            Wie das Netz wächst
          </a>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/triquetra-brand.png"
        alt=""
        className="absolute right-9 top-[120px] hidden h-[210px] w-[210px] animate-floaty object-contain drop-shadow-[0_16px_36px_rgba(62,94,46,0.2)] lg:block"
      />
    </section>
  );
}
