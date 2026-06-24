import { Knot, type KnotName } from "./Knot";

const quests: { icon: KnotName; color: string; text: string }[] = [
  { icon: "triquetra", color: "text-sage", text: "Lerne eine neue Person kennen" },
  { icon: "triskele", color: "text-ocker", text: "Lade jemanden zum Essen ein" },
  { icon: "pinwheel", color: "text-terracotta", text: "Stelle zwei Menschen einander vor" },
  { icon: "square-interlace", color: "text-forest", text: "Teile eine Ressource" },
  { icon: "medallion", color: "text-sage", text: "Gründe mit 3–5 Menschen einen Kreis" },
  { icon: "star-medallion", color: "text-ocker", text: "Lade zum Vollmondfeuer ein" },
];

export function Quests() {
  return (
    <section id="quests" className="mx-auto max-w-page px-8 pb-5 pt-[60px]">
      <div className="mb-[34px] flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-terracotta">
            <Knot name="rosette" className="h-[22px] w-[22px] text-ocker" />
            Einladungen
          </div>
          <h2 className="mt-3.5 font-display text-[46px] font-extrabold tracking-[-0.03em]">Quests — niemals Pflicht</h2>
        </div>
        <p className="max-w-[25em] text-[16px] text-bodytext">
          Kleine Handlungseinladungen, die das Netz nähren. Frei anzunehmen, frei abzulehnen — ganz ohne sozialen
          Druck. Es soll sich anfühlen wie ein schönes Spiel.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {quests.map((q) => (
          <div
            key={q.text}
            className="flex items-center gap-[14px] rounded-[14px] border border-line bg-surface px-5 py-[18px]"
          >
            <Knot name={q.icon} className={`h-[34px] w-[34px] flex-none ${q.color}`} />
            <span className="text-[16px] font-semibold text-[#3a3730]">{q.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
