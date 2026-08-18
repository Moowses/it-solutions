# Hosting Strategy

Hosting should be selected based on the application's technical requirements, not branding preference.

## Static Marketing Sites
- Cloudflare Pages
- Netlify
- Vercel

## Next.js with Server Actions
- Vercel
- DigitalOcean App Platform
- VPS (Node + Nginx)

## Advanced Infrastructure Needs
- VPS (Dockerized)
- Kubernetes
- Cloud VM

Guideline:
Choose the simplest infrastructure that satisfies performance and scaling requirements.

## Vercel Deployment Settings

This repository is ready for the normal Vercel Git import flow.

- Framework Preset: Next.js
- Root Directory: `.`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave as the Next.js default
- Node.js: `>=20.9.0`

Do not add a custom `vercel.json` unless the project later needs redirects, headers, or a non-default build command.
