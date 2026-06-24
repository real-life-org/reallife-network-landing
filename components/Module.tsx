import { Knot, type KnotName } from "./Knot";

const modules: { title: string; icon: KnotName; color: string; bg: string; desc: string }[] = [
  {
    title: "Karte",
    icon: "square-interlace",
    color: "text-sage",
    bg: "bg-[#8C9A5B22]",
    desc: "Lokale Orte, Ressourcen und Aktivitäten auf einer Karte sichtbar machen.",
  },
  {
    title: "Kalender",
    icon: "triquetra",
    color: "text-ocker",
    bg: "bg-[#D89B3622]",
    desc: "Events planen, Termine koordinieren, Einladungen verwalten.",
  },
  {
    title: "Feed",
    icon: "triskele",
    color: "text-terracotta",
    bg: "bg-[#C15F3C22]",
    desc: "Aktivitäten-Stream: Was passiert gerade in der Community?",
  },
  {
    title: "Kanban",
    icon: "pinwheel",
    color: "text-forest",
    bg: "bg-[#3E5E2E22]",
    desc: "Aufgaben und Workflows innerhalb eines Space organisieren.",
  },
  {
    title: "Gruppen",
    icon: "square-interlace",
    color: "text-sage",
    bg: "bg-[#8C9A5B22]",
    desc: "Profile, Rollen und Mitgliedschaften pro Space verwalten.",
  },
];

export function Module() {
  return (
    <section id="module" className="mx-auto max-w-page px-8 pb-[30px] pt-[60px]">
      <div className="mb-[34px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-terracotta">
            <Knot name="pinwheel" className="h-[22px] w-[22px] text-sage" />
            Module
          </div>
          <h2 className="mt-3.5 font-display text-[46px] font-extrabold tracking-[-0.03em]">Ein Baukasten, eure Wahl</h2>
        </div>
        <p className="max-w-[24em] text-[16px] text-bodytext">
          Jede Gruppe aktiviert nur die Flächen, die sie braucht — modular und sofort einsatzbereit.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <div key={m.title} className="rounded-[20px] border border-line bg-surface p-[26px]">
            <div className={`mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] ${m.bg}`}>
              <Knot name={m.icon} className={`h-7 w-7 ${m.color}`} />
            </div>
            <div className="font-display text-[20px] font-bold">{m.title}</div>
            <div className="mt-1.5 text-[14.5px] leading-[1.55] text-muted">{m.desc}</div>
          </div>
        ))}

        {/* Marketplace — dark, "geplant" */}
        <div className="relative overflow-hidden rounded-[20px] border border-forest bg-forest p-[26px]">
          <Knot
            name="square-interlace"
            className="absolute bottom-[-30px] right-[-30px] h-[140px] w-[140px] text-cream opacity-[0.18]"
          />
          <div className="relative">
            <div className="font-display text-[20px] font-bold text-cream">Marketplace</div>
            <div className="mt-1.5 text-[14.5px] leading-[1.55] text-[#cdd6bb]">
              Angebote, Bedürfnisse &amp; Matches — bald verfügbar.
            </div>
            <span className="mt-3.5 inline-block rounded-full bg-ocker px-[11px] py-[5px] text-[12px] font-bold text-darkbg">
              Geplant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
