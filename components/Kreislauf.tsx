import { Knot, type KnotName } from "./Knot";

const steps: { title: string; sub: string; icon: KnotName; color: string }[] = [
  { title: "Vorschlagen", sub: "Ideen einbringen", icon: "triquetra", color: "text-sage" },
  { title: "Planen", sub: "Termine & Aufgaben", icon: "triquetra", color: "text-ocker" },
  { title: "Umsetzen", sub: "Vor Ort handeln", icon: "triquetra", color: "text-terracotta" },
  { title: "Vertrauen", sub: "Web of Trust", icon: "triquetra", color: "text-forest" },
  { title: "Teilen", sub: "Erfolge sichtbar", icon: "square-interlace", color: "text-sage" },
];

export function Kreislauf() {
  return (
    <section id="kreislauf" className="mx-auto max-w-page px-8 pb-[30px] pt-20 text-center">
      <div className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-terracotta">
        <Knot name="triskele" className="h-[22px] w-[22px] text-ocker" />
        Der Aktivierungskreislauf
      </div>
      <h2 className="mt-3.5 font-display text-[46px] font-extrabold tracking-[-0.03em]">
        Von der Idee zur Tat — gemeinsam
      </h2>
      <p className="mx-auto mb-11 mt-4 max-w-[36em] text-[18px] text-bodytext">
        Jeder Schritt baut Vertrauen auf. Aus echter Zusammenarbeit wächst ein Netz, das die Gemeinschaft trägt.
      </p>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
        {steps.map((s) => (
          <div key={s.title} className="rounded-[18px] border border-line bg-surface px-4 py-6">
            <Knot name={s.icon} className={`mx-auto mb-3 h-11 w-11 ${s.color}`} />
            <div className="font-display text-[16px] font-bold">{s.title}</div>
            <div className="mt-1 text-[13px] text-muted">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
