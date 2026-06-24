import { Knot } from "./Knot";

export function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-page px-8 pb-[30px] pt-[50px] text-center">
      <Knot name="pinwheel" className="mx-auto mb-[22px] h-16 w-16 text-forest" />
      <h2 className="font-display text-[50px] font-extrabold tracking-[-0.03em]">Bereit, euch zu vernetzen?</h2>
      <p className="mx-auto mb-[30px] mt-[18px] max-w-[32em] text-[19px] text-bodytext">
        Startet in Minuten eine eigene App für eure Community — ohne Programmierkenntnisse, anpassbar an eure
        Bedürfnisse.
      </p>
      <div className="flex flex-wrap justify-center gap-[13px]">
        <a
          href="#hero"
          className="rounded-[14px] bg-terracotta px-[30px] py-4 text-[17px] font-bold text-cream no-underline"
        >
          Community starten
        </a>
        <a
          href="#"
          className="rounded-[14px] border-[1.5px] border-[#CDBfa3] px-[30px] py-4 text-[17px] font-semibold text-ink no-underline"
        >
          Design System ansehen
        </a>
      </div>
    </section>
  );
}
