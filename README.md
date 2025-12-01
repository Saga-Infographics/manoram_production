# Manoram Production — Portfolio (Vite + React + Tailwind)

This repository is a small portfolio website for Manoram Production — a creative company producing theatre and media projects — built with Vite, React 18 and Tailwind CSS.

The site showcases biography, portfolio items (plays, directing credits and film appearances), media and contact information. The project is a lightweight static SPA using client-side routing.

---

## Quick overview

- Framework: React 18 (Vite)
- CSS: Tailwind CSS
- Routing: react-router-dom
- Build tool: Vite

This project is set up for local development using `npm run dev` and production build with `npm run build`.

## SEO setup (what I added)

- Per-page meta component: `src/components/SEO/SEO.tsx` — use this at the top of each page component to set title/description/og image/canonical.
 - Site config: edit `src/lib/seo.ts` and set `siteUrl` to your production domain (important for canonical and sitemap). The default has been updated to `http://manoram-production.com.np`.
- Sitemap: `scripts/generate-sitemap.js` writes `public/sitemap.xml`. It's called automatically by the `build` script. Replace the site URL parameter in `package.json` scripts if needed.
- Robots: `public/robots.txt` already references `/sitemap.xml`.
 # Manoram Production — Frontend (Vite + React + Tailwind)

 This README provides a concise codebase analysis, a summary of recent frontend edits, and clear run/verify instructions.

 ## Overview

 - Frontend: React + TypeScript (Vite)
 - Styling: Tailwind CSS
 - Router: react-router-dom
 - Purpose: marketing/portfolio site for Manoram Production (About, Services, Portfolio, Contact)

 ## Recent edits (high level)

 - Rewrote the About page and added Organization JSON-LD structured data: `frontend/src/screens/Biography/Biography.tsx`.
 - Removed the Partners block from About and removed week-duration labels from the About service cards and accordion headers.
 - Replaced the animated polaroid hero with a plain logo on the Services page (no rotation or hover animation).
 - Standardized card markup across Home and Services so CTAs align by using `items-stretch` on grids and `h-full` + `flex flex-col justify-between` on cards.
 - Added `Learn More` and `Contact Us` parity across Home/Services and prevented wrapping by using `ml-auto`, `shrink-0`, and `whitespace-nowrap`.
 - Centered the Home hero overlay horizontally and nudged it slightly down from the center for better composition.
 - Fixed header/mobile nav overlap and corrected several image paths and fallbacks.

 ## Key files touched

 - `frontend/src/screens/Biography/Biography.tsx` — About page rewrite and cleanup
 - `frontend/src/screens/Home/Home.tsx` — hero centering, CTA alignment, services cards
 - `frontend/src/screens/Services/Services.tsx` — plain hero logo, card layout
 - `frontend/src/components/ui/button.tsx` — button primitives used with `asChild`
 - `frontend/tailwind.css` — `.card` component and theme variables

 ## How to run (frontend)

 1. Install dependencies and start dev server:

 ```powershell
 cd frontend
 npm install
 npm run dev
 ```

 2. Open the site at the address printed by Vite (usually `http://localhost:5173`).

 3. To build for production:

 ```powershell
 npm run build
 ```

 ## Quick verification checklist

 - Home (`/`): hero overlay is centered and offset slightly down; services grid forms 4 columns at `lg` viewport; CTAs align across cards.
 - Services (`/services`): hero shows static logo (no rotation/animation); cards are equal height with aligned CTAs.
 - About (`/about`): Partners block removed; week-duration labels not shown; hero uses `/cover.jpg` and fills the card.

 ## Troubleshooting

 - Missing images: verify files exist in `frontend/public/` or `frontend/public/images/`. The code includes fallbacks in some places (e.g., `/images/pkdai2.jpg`).
 - CTA misalignment: confirm `items-stretch` is present on the grid and each `article` has `h-full` and `flex flex-col justify-between`.
 - Build/type errors: run `npm run build` to surface TypeScript or bundler errors.

 ## Suggested next steps

 - Run visual QA at multiple breakpoints and adjust `translate-y` or card paddings for pixel parity.
 - Replace large images with optimized WebP/responsive variants.
 - Remove unused data fields (for example the `lead` duration fields) where no longer rendered.
 - Commit and open a PR; run production build to validate bundling.

 ## Want me to continue?

 I can:
 - Run the dev server here and capture screenshots for verification,
 - Remove leftover `lead` properties from the services data objects,
 - Further polish `.card` spacing for exact visual parity across cards.

 ---

 Last update: multiple UI/layout patches were applied across Home, Services and Biography screens to improve CTA alignment, responsive behavior and static image handling.
