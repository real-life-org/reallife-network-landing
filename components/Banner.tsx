import { Knot } from "./Knot";

export function Banner() {
  return (
    <div className="mx-auto my-[30px] max-w-page px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-darkbg px-12 py-16">
        <Knot
          name="square-interlace"
          className="absolute left-[-80px] top-[-60px] h-[420px] w-[420px] text-forest opacity-40"
        />
        <Knot
          name="square-interlace"
          className="absolute bottom-[-70px] right-[-50px] h-[300px] w-[300px] animate-spin360-slow text-ocker opacity-50"
        />
        <div className="relative max-w-[30em]">
          <h2 className="font-display text-[42px] font-extrabold leading-[1.04] tracking-[-0.03em] text-cream">
            Eure Daten. Eure Regeln. Euer Netzwerk.
          </h2>
          <p className="mt-[18px] text-[17px] leading-[1.6] text-[#cdd6bb]">
            Backend-agnostisch — von der einfachen Mock-Demo bis zur dezentralen, Ende-zu-Ende-verschlüsselten
            Zusammenarbeit über das Web of Trust. Ihr entscheidet, wo eure Daten leben.
          </p>
          <a
            href="#cta"
            className="mt-[26px] inline-block rounded-[13px] bg-terracotta px-[26px] py-[15px] text-[16px] font-bold text-cream no-underline"
          >
            Mehr über das Web of Trust
          </a>
        </div>
      </div>
    </div>
  );
}
