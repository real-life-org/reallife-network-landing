# reallife.network — Landingpage

Marketing-Landingpage für das Real Life Network. Implementiert aus dem
Claude-Design-System „Designsystem mit keltischen Knoten".

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3.4 (Design-Tokens in `tailwind.config.ts`)
- Fonts via `next/font` (Bricolage Grotesque + Hanken Grotesk)
- Knoten-Marken als `currentColor`-SVG-Komponente (`components/Knot.tsx`)

## Entwicklung

```bash
pnpm install      # standalone, nicht Teil des Monorepos
pnpm dev          # http://localhost:3000
pnpm build        # Production-Build (output: standalone)
```

## Deployment

Push auf `main` → GitHub Action baut das Docker-Image und pusht es nach
`ghcr.io/real-life-org/reallife-network-landing:latest`. Watchtower auf dem
NixOS-Server zieht es automatisch, Traefik routet `reallife.network` darauf.
