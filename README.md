# NextWave Digital — Corporate Website

Public corporate website for **NextWave Digital**: four pages built with Next.js and deployed on Vercel. It is completely separate from the internal NextWave Performance Hub and does not link to it.

- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and Lucide icons. There is no animation library: motion uses CSS keyframes and IntersectionObserver, and it respects `prefers-reduced-motion`.
- **Output:** every page is static.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero with dashboard mockups, the three product lines, Why NextWave?, NextWave at a Glance (animated counters), Our Direction |
| `/about` | About Us: who we are, our story (2017 → today → 2027), at a glance, mission and vision, interactive values, expandable core competencies |
| `/solutions` | Our Solutions: NextWave One, NextWave Insights and NextWave Solutions on one page, with alternating layouts, clickable feature tabs that change the interface preview, and a sticky product navigator |
| `/strategy` | Our Strategy: 2027 strategy hero, interactive strategy map (a stacked grid on phones), expandable dashboard for Grow / Retain / Scale / Build, competitive context |

Earlier URLs (`/solutions/flowops`, `/industries`, `/insights/*`, `/careers`, `/contact`) permanently redirect to the closest page. The redirects are in `next.config.ts`.

## Where things live

```
src/lib/content.ts          ALL company content: facts, mission, vision, products (+ feature tabs),
                            values, competencies, strategy priorities and targets
src/app/globals.css         Design tokens (colors, radii, motion) and the type scale
src/components/mockups.tsx  Interface mockups (app frame + 9 product screens + hero composition)
src/components/             Header, Footer, ValuesExplorer, Competencies, ProductShowcase,
                            ProductNav, StrategyMap, StrategyDashboard, FactsGrid, Counter…
src/lib/useTabs.ts          Keyboard support (arrow keys / Home / End) for all tab-style controls
```

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deploy

The Vercel project imports this repository with the default Next.js settings (`vercel.json` pins the framework). Every push to `main` redeploys automatically. You can optionally set `NEXT_PUBLIC_SITE_URL` to the final domain, which is used for canonical URLs, the sitemap and Open Graph.

Content that still needs approval is listed in `APPROVALS.md`.
