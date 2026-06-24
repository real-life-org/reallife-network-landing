import { Knot } from "./Knot";

const trust = [
  { color: "text-sage", label: "Open Source" },
  { color: "text-ocker", label: "Local-first & E2E-verschlüsselt" },
  { color: "text-terracotta", label: "Web of Trust" },
];

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto max-w-page px-8 pb-[70px] pt-[90px]">
      {/* watermark */}
      <Knot
        name="square-interlace"
        className="pointer-events-none absolute right-[-120px] top-0 h-[620px] w-[620px] text-forest opacity-[0.07]"
      />

      <div className="relative max-w-[760px]">
        <div className="inline-flex items-center gap-[9px] rounded-full border border-line bg-surface py-1.5 pl-[9px] pr-[15px] text-[13.5px] font-semibold text-[#5a6536]">
          <Knot name="triskele" className="h-[18px] w-[18px] text-sage" />
          Baukasten für lokale Vernetzung
        </div>

        <h1 className="mt-6 font-display text-[72px] font-extrabold leading-[0.96] tracking-[-0.035em]">
          Ein Netz aus
          <br />
          <span className="text-terracotta">echten</span> Verbindungen
        </h1>

        <p className="mt-6 max-w-[32em] text-pretty text-[21px] leading-[1.55] text-bodytext">
          Werkzeuge für Gruppen, die vor Ort gemeinsam etwas bewegen. Karte, Kalender, Feed und Gruppen — selbst
          gehostet, dezentral, vertrauensbasiert.
        </p>

        <div className="mt-[34px] flex flex-wrap gap-[13px]">
          <a
            href="#cta"
            className="rounded-[13px] bg-forest px-[26px] py-[15px] text-[16px] font-semibold text-cream no-underline"
          >
            Community starten
          </a>
          <a
            href="#module"
            className="rounded-[13px] border-[1.5px] border-[#CDBfa3] px-[26px] py-[15px] text-[16px] font-semibold text-ink no-underline"
          >
            Module ansehen
          </a>
        </div>

        <div className="mt-[34px] flex flex-wrap items-center gap-5">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-[14px] text-muted">
              <Knot name="triquetra" className={`h-4 w-4 ${t.color}`} />
              {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* floating logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/pinwheel.png"
        alt=""
        className="absolute right-10 top-[130px] hidden h-[200px] w-[200px] animate-floaty object-contain drop-shadow-[0_16px_36px_rgba(62,94,46,0.2)] lg:block"
      />
    </section>
  );
}
