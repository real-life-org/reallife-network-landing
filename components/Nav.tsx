const links = [
  { href: "#vision", label: "Vision" },
  { href: "#wachsen", label: "So wächst es" },
  { href: "#quests", label: "Einladungen" },
  { href: "#", label: "Design System" },
];

export function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-line bg-cream/80 backdrop-blur-[10px] backdrop-saturate-150">
      <div className="mx-auto flex max-w-page items-center gap-[26px] px-8 py-3.5">
        <a href="#hero" className="flex items-center gap-[11px] text-ink no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/triquetra-brand.png" alt="" className="block h-[30px] w-[30px] object-contain" />
          <span className="font-display text-[18px] font-bold tracking-[-0.02em]">
            reallife<span className="text-terracotta">.network</span>
          </span>
        </a>
        <div className="flex-1" />
        <nav className="hidden items-center gap-[26px] md:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[14.5px] font-medium text-muted no-underline hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#mitmachen"
          className="rounded-full bg-terracotta px-4 py-2 text-[14px] font-semibold text-surface no-underline"
        >
          Sei dabei
        </a>
      </div>
    </div>
  );
}
