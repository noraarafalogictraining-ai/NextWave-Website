# NextWave Digital — Corporate Website

Public corporate website for **NextWave Digital**. It is a standalone Next.js project, separate from the internal NextWave Performance Hub, and it deploys on Vercel as its own project.

- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Lucide icons. There is no other UI or animation library. Transitions use CSS and an IntersectionObserver.
- **Output:** every page is prerendered as static HTML (21 routes). There is no server or database.
- **Employee Portal:** a plain HTTPS link to `https://score-simulation.vercel.app/` that opens in a new tab. It appears in the header (desktop and mobile) and in the footer under "Employee Access". It has no iframe and no shared authentication. The URL is set in `src/lib/site.ts` (`EMPLOYEE_PORTAL_URL`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Structure

```
src/app/
  page.tsx                     Home
  about/                       About NextWave (who we are, mission, vision, values, approach, organization, culture)
  solutions/                   Solutions overview + comparison + how the products work together
  solutions/[slug]/            FlowOps, Customer360, InsightIQ detail pages
  industries/                  Four industry sections
  insights/ , insights/[slug]  Articles list + five article pages
  careers/                     Life at NextWave + "Explore Opportunities" (no vacancies listed)
  contact/                     Validated contact form
  sitemap.ts, robots.ts, icon.png, apple-icon.png, not-found.tsx, template.tsx (page transition)
src/components/                Header, Footer, Logo, product cards, visuals, contact form…
src/lib/                       All content: site.ts (company, values, departments, portal URL),
                               products.ts, industries.ts, articles.ts
public/brand/                  Official NextWave logo (on-dark / on-light), Open Graph image
```

All copy lives in `src/lib/*.ts`, so content changes and approvals do not touch the components.

## Contact form

The form checks every field in the browser: name, business email (free webmail addresses are rejected), company, area of interest, and a message of 20–2,000 characters.

- **Without configuration** (the default), the form runs in demonstration mode. After validation it tells the visitor plainly that the message **has not been sent**. It never shows a false "delivered" message.
- **To connect a real inbox**, set `NEXT_PUBLIC_CONTACT_ENDPOINT` to an HTTPS endpoint that accepts a JSON `POST`, such as Formspree, Basin or your own API. The form then shows "sent" only after the endpoint returns a 2xx response. See `.env.example`.

## Deploy to Vercel

1. In Vercel, choose **Add New → Project** and import `noraarafalogictraining-ai/NextWave-Website`. Keep the detected **Next.js** preset and the default Root Directory (`./`).
2. Optional environment variables: `NEXT_PUBLIC_SITE_URL` (the final domain, used for canonical URLs, the sitemap and Open Graph) and `NEXT_PUBLIC_CONTACT_ENDPOINT`.
3. Click **Deploy**. Every later push to `main` redeploys the site automatically.

This is its own Vercel project. It is separate from the internal Performance Hub project.

Content that still needs approval is listed in `APPROVALS.md`.
