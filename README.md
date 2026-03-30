# IT Business Solutions

Consultant-style homepage built with Next.js App Router. The page is composed from section components and uses a shared visual identity system with consistent spacing, typography, and surface styles.

## Structure

- `app/page.tsx`: route-level composition only
- `components/sections/Hero.tsx`
- `components/sections/ProofStrip.tsx`
- `components/sections/Pillars.tsx`
- `components/sections/CaseStudies.tsx`
- `components/sections/Engagement.tsx`
- `components/sections/FinalCTA.tsx`
- `app/globals.css`: design tokens and reusable section/card/button styles

## Development

```bash
npm run dev
npm run lint
npm run build
```

Open `http://localhost:3000` to review the page.
