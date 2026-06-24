export function Footer() {
  return (
    <div className="mt-7">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-5 px-8 pb-[60px] pt-[30px]">
        <a href="#hero" className="flex items-center gap-[11px] text-ink no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/triquetra-brand.png" alt="" className="block h-[26px] w-[26px] object-contain" />
          <span className="font-display text-[16px] font-bold tracking-[-0.02em]">
            reallife<span className="text-terracotta">.network</span>
          </span>
        </a>
        <div className="max-w-[32em] text-right text-[13.5px] text-faint">
          Ein lebendiges Geflecht aus echten Beziehungen — lokal verwurzelt, freiwillig, von Hand geknüpft.
        </div>
      </div>
    </div>
  );
}
