# Karl Mosses

Professional business and portfolio website for **karlmosses.com**, built with Next.js App Router, TypeScript, React, and Tailwind CSS. An ivory, charcoal, and olive identity pairs native Georgia headings with readable system sans-serif text; no remote fonts or animation dependencies are required.

## Run locally

Node.js 20.9 or newer is required. Use the committed npm lockfile.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Validate and build with:

```sh
npm run lint
npx tsc --noEmit
node scripts/check-contact.cjs
npm run build
npm start
```

The contact checks use mocked provider responses and send no email. Use a Node-capable host for the API route; a static HTML export cannot deliver inquiries. Deployment and domain changes have not been performed.

## Content and structure

- `app/page.tsx`: homepage sections, including Services, Work, About, Process, and Contact.
- `lib/portfolio.ts`: existing projects, services, contact links, experience, and credentials.
- `lib/site-content.ts`: featured project selections, process, and selected technologies.
- `lib/case-studies.ts`: four explicitly hypothetical samples. Each has a generated `/work/[slug]` detail page.
- `components/FeaturedProjects.tsx`: manual slider with buttons, arrow/Home/End keys, and horizontal touch swipes. No autoplay.
- `components/ContactForm.tsx`, `lib/contact.ts`, `app/api/contact/route.ts`: shared validation and server-only email integration.
- `app/globals.css`: reusable tokens and responsive layouts; `ScrollMotion` adds progressive entrance effects while keeping text visible and respecting reduced motion.
- `app/layout.tsx`, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, `icon.svg`: canonical domain, metadata, social card, confirmed Person schema, and discovery files.

The original `/portfolio`, `/about`, `/work`, and `/development` routes are retained. The new design preserves existing project and career source material; it does not independently verify those claims.

## Email setup

Copy `.env.example` to `.env.local` and configure the three server-only variables. Follow [contact-setup.md](docs/contact-setup.md) for sender verification and a real delivery check. The form explicitly remains unavailable until configured. A provider acceptance receipt is required for a successful submission; errors preserve the visitor's text. Rebuild production after changing the configuration.

## Still needed from Karl

- Your supplied portrait is installed at `public/images/karl-mosses-portrait.webp`. Confirm any future image replacements are approved for public use.
- Confirm the existing `info@karlmosses.com` inbox and LinkedIn URL, plus any additional public social links.
- Confirm each project's exact contribution, permission to name it, safe demo screenshots, repositories/live links, and evidence for any outcomes.
- Confirm career dates, education, credential status, and the personal information included in `public/resume.pdf`. Existing PCNSA is labeled expired.
- Configure the email sender, receiving inbox, and provider credentials; verify a controlled inquiry before launch.

See [portfolio-content.md](docs/portfolio-content.md) for sample editing and [asset-review.md](docs/asset-review.md) for the asset review. Private/raw media and unrelated downloads were preserved in the ignored `private-assets/public-originals/` directory outside public serving. Keep a separate private backup of those originals. Never upload confidential company data to `public/`.
