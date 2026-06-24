import { Knot } from "./Knot";

export function Footer() {
  return (
    <div className="mt-[50px] border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-5 px-8 py-[34px]">
        <a href="#hero" className="flex items-center gap-[11px] text-ink no-underline">
          <Knot name="pinwheel" className="h-[26px] w-[26px] text-forest" />
          <span className="font-display text-[16px] font-bold tracking-[-0.02em]">
            reallife<span className="text-terracotta">.network</span>
          </span>
        </a>
        <div className="text-[13.5px] text-faint">
          Gemeinsam gestalten wir die Zukunft — lokal vernetzt, global gedacht.
        </div>
      </div>
    </div>
  );
}
