import { Knot } from "./Knot";

const points: { color: string; text: string }[] = [
  { color: "text-terracotta", text: "Menschen gehen aufeinander zu und lernen sich kennen." },
  { color: "text-sage", text: "Vertrauen wächst — aus echten Begegnungen, nicht aus Profilen." },
  { color: "text-ocker", text: "Wir teilen Ressourcen, essen zusammen, feiern zusammen." },
  { color: "text-forest", text: "Aus Treffen entstehen Kreise, Commons und gemeinsame Orte." },
  { color: "text-terracotta", text: "Regionen werden lebendiger, verbundener und freier." },
];

export function Vision() {
  return (
    <section id="vision" className="mx-auto max-w-page px-8 pb-5 pt-16">
      <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="inline-flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-terracotta">
            <Knot name="triskele" className="h-[22px] w-[22px] text-ocker" />
            Der Nordstern
          </div>
          <h2 className="mt-3.5 font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Wenn das Netz gelingt,
            <br />
            wird das Leben lebendiger
          </h2>
          <p className="mt-[18px] max-w-[30em] text-pretty text-[17px] leading-[1.6] text-bodytext">
            Kein Produkt, keine Plattform, die man „benutzt". Sondern ein wachsendes Geflecht aus echten Beziehungen —
            an vielen Orten zugleich, lokal verwurzelt und miteinander verbunden.
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          {points.map((p, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 border border-line bg-surface px-[18px] py-4 ${
                i === 0
                  ? "rounded-t-[14px] rounded-b-[4px]"
                  : i === points.length - 1
                    ? "rounded-t-[4px] rounded-b-[14px]"
                    : "rounded-[4px]"
              }`}
            >
              <Knot name="triquetra" className={`mt-0.5 h-[26px] w-[26px] flex-none ${p.color}`} />
              <div className="text-[16.5px] leading-[1.5] text-[#3a3730]">{p.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
