import { Knot } from "./Knot";

const principles = [
  "Freiwilligkeit",
  "Leichtigkeit",
  "Beziehung vor Struktur",
  "Lokale Autonomie",
  "Commons statt Besitz",
  "Einladung statt Missionierung",
];

export function PrinzipienBanner() {
  return (
    <div className="mx-auto my-12 max-w-page px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-darkbg px-12 py-14">
        <Knot
          name="medallion"
          className="absolute left-[-70px] top-[-50px] h-[360px] w-[360px] text-forest opacity-40"
        />
        <Knot
          name="star-medallion"
          className="absolute bottom-[-60px] right-[-40px] h-[260px] w-[260px] animate-spin360-slow text-ocker opacity-50"
        />
        <div className="relative">
          <h2 className="max-w-[18em] font-display text-[40px] font-extrabold leading-[1.04] tracking-[-0.03em] text-cream">
            Wie wir miteinander knüpfen
          </h2>
          <p className="mb-7 mt-4 max-w-[34em] text-[16.5px] leading-[1.6] text-[#cdd6bb]">
            Das Netz wächst durch Einladung, Beispiel und Erfahrung — nie durch Druck oder Rekrutierung. Diese
            Haltungen tragen alles, was hier entsteht:
          </p>
          <div className="flex flex-wrap gap-[11px]">
            {principles.map((p) => (
              <span
                key={p}
                className="rounded-full border border-darkline bg-darksurface px-[18px] py-2.5 text-[15px] font-semibold text-darktext"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
