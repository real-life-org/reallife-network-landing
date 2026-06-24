import { Knot, type KnotName } from "./Knot";

const ways: { title: string; icon: KnotName; color: string; bg: string; desc: string }[] = [
  {
    title: "Begegnen",
    icon: "triquetra",
    color: "text-sage",
    bg: "bg-[#8C9A5B22]",
    desc: "Menschen kennenlernen, einander vorstellen, in Verbindung bleiben — wenn es sich stimmig anfühlt.",
  },
  {
    title: "Vertrauen",
    icon: "shield",
    color: "text-terracotta",
    bg: "bg-[#C15F3C22]",
    desc: "Echte Begegnungen bestätigen. Jede Verbindung beruht auf einem realen Treffen, jede Anerkennung auf einer echten Tat.",
  },
  {
    title: "Zusammenkommen",
    icon: "triskele",
    color: "text-ocker",
    bg: "bg-[#D89B3622]",
    desc: "Gemeinsam essen, Vollmondfeuer, Redekreis, Workshop. Aus wiederkehrenden Treffen werden Kreise.",
  },
  {
    title: "Teilen",
    icon: "square-interlace",
    color: "text-forest",
    bg: "bg-[#3E5E2E22]",
    desc: "Werkzeug, Raum, Wissen, Zeit anbieten und finden. Aus geteilten Ressourcen werden Commons.",
  },
  {
    title: "Gemeinsam handeln",
    icon: "pinwheel",
    color: "text-sage",
    bg: "bg-[#8C9A5B22]",
    desc: "Ein erster Schritt, zusammen getan. Projekte starten, Orte gründen und pflegen — klein beginnen, lebendig wachsen.",
  },
];

export function Wachsen() {
  return (
    <section id="wachsen" className="mx-auto max-w-page px-8 pb-5 pt-16">
      <div className="mx-auto mb-11 max-w-[42em] text-center">
        <div className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-terracotta">
          <Knot name="pinwheel" className="h-[22px] w-[22px] text-sage" />
          So wächst das Netz
        </div>
        <h2 className="mt-3.5 font-display text-[46px] font-extrabold tracking-[-0.03em]">
          Sechs Wege, in Beziehung zu treten
        </h2>
        <p className="mt-4 text-[18px] text-bodytext">
          Lauter kleine, freiwillige Gesten. Jede knüpft einen neuen Faden ins Geflecht.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {ways.map((w) => (
          <div key={w.title} className="rounded-[20px] border border-line bg-surface p-7">
            <div className={`mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] ${w.bg}`}>
              <Knot name={w.icon} className={`h-[30px] w-[30px] ${w.color}`} />
            </div>
            <div className="font-display text-[21px] font-bold">{w.title}</div>
            <div className="mt-1.5 text-[15px] leading-[1.55] text-muted">{w.desc}</div>
          </div>
        ))}

        {/* Sichtbar machen — dark */}
        <div className="relative overflow-hidden rounded-[20px] border border-forest bg-forest p-7">
          <Knot
            name="star-medallion"
            className="absolute bottom-[-30px] right-[-30px] h-[150px] w-[150px] text-cream opacity-[0.16]"
          />
          <div className="relative">
            <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[#ffffff22]">
              <Knot name="rosette" className="h-[30px] w-[30px] text-cream" />
            </div>
            <div className="font-display text-[21px] font-bold text-cream">Sichtbar machen</div>
            <div className="mt-1.5 text-[15px] leading-[1.55] text-[#cdd6bb]">
              Festhalten, was lebt — mit Zustimmung. Geschichten, Bilder, Orte. Damit andere lernen und andocken können.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
