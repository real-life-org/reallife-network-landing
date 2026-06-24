import { Knot } from "./Knot";

export function CTA() {
  return (
    <section id="mitmachen" className="mx-auto max-w-page px-8 pb-[30px] pt-10 text-center">
      <Knot name="pinwheel" className="mx-auto mb-[22px] h-16 w-16 text-forest" />
      <h2 className="font-display text-[50px] font-extrabold tracking-[-0.03em]">Knüpf mit am Netz</h2>
      <p className="mx-auto mb-[30px] mt-[18px] max-w-[32em] text-[19px] text-bodytext">
        Du brauchst keine Erlaubnis und keinen Account. Fang dort an, wo du bist: Geh auf einen Menschen zu. Lade
        jemanden ein. Teile etwas. Der Rest wächst von selbst.
      </p>
      <div className="flex flex-wrap justify-center gap-[13px]">
        <a
          href="#hero"
          className="rounded-[14px] bg-terracotta px-[30px] py-4 text-[17px] font-bold text-cream no-underline"
        >
          Sei dabei
        </a>
        <a
          href="#quests"
          className="rounded-[14px] border-[1.5px] border-[#CDBfa3] px-[30px] py-4 text-[17px] font-semibold text-ink no-underline"
        >
          Eine Einladung wählen
        </a>
      </div>
    </section>
  );
}
