# Portfolio asset review

Reviewed on 15 October 2026. The website's `public/` folder is a public download directory. A file does not become private when it is unlinked from a page or added to `.gitignore`.

## Preserved originals

55 files were moved, without deletion or conversion, from `public/` into `private-assets/public-originals/`. Each original relative path is preserved. SHA-256 hashes were compared before and after every move. The archive is ignored by Git and is outside Next.js's public directory. Do not add a route, file server, deployment copy rule, or downloadable archive that exposes this directory. Keep a private backup separately before removing a local checkout.

The archive contains:

- All raw PNG screenshots, including copies of otherwise approved public screenshots.
- Old private-dashboard or QA covers in `project-shots/`: `damla-training-enrollment-system`, `dental-clinic-system`, `development-page-qa`, and `mosses-and-vanesa-rsvp-dashboard` (PNG and WebP versions).
- Damla's raw `1` dashboard screenshots and `1-redacted` screenshots.
- All RSVP/event screenshots, including their redacted versions and `ONLINE INITATION` copies.
- Dental's unredacted `1` and `4.` screenshots; redacted WebP copies remain public.
- The two unrelated CSS NC II service-report PDFs and the unrelated Microsoft Office torrent.
- The screenshot-upload README and `.gitkeep` markers, which belong with private source material rather than the public download set.

## Current public allowlist

These are the 15 existing assets retained in `public/` after the review. New website assets, such as a social preview or professional portrait, should be reviewed before adding them.

| Relative path under `public/` | Review evidence and use |
| --- | --- |
| `resume.pdf` | Existing intended resume download. Retained for continuity; review personal contact details and employment/credential accuracy before deployment. |
| `project-shots/calabogie-peaks.webp` | Public-facing resort website screenshot; no internal records visible. |
| `project-shots/canadian-cold-plunge.webp` | Public-facing product website screenshot; no account data visible. |
| `project-shots/canadian-hot-tub.webp` | Public-facing product website screenshot; no account data visible. |
| `project-shots/chauffeur-mobile-booking-app.webp` | Designed interface concept. Must remain explicitly labeled a concept, never completed client work. |
| `project-shots/cottage-dream-vacations.webp` | Public-facing hospitality website screenshot. |
| `project-shots/investors-growth-syndicate.webp` | Public-facing website screenshot. |
| `project-shots/ken-dunn.webp` | Public-facing personal-brand website screenshot. |
| `project-uploads/damla-training-enrollment-system/live-site.webp` | Public homepage screenshot; contains the site's group photograph, not learner records. |
| `project-uploads/dreamtripclub-booking-system/live-site.webp` | Public homepage screenshot; no logged-in member records visible. |
| `project-uploads/dreamtripclub-booking-system/1.webp` | Public booking-search homepage screenshot; no personal booking records visible. |
| `project-uploads/dental-clinic-system/1-redacted.webp` | Empty appointments calendar; account identity and support details blurred, no patient appointments visible. |
| `project-uploads/dental-clinic-system/2..webp` | Public clinic homepage screenshot. |
| `project-uploads/dental-clinic-system/3..webp` | Public clinic homepage screenshot; appears duplicated with `2..webp`. |
| `project-uploads/dental-clinic-system/4-redacted.webp` | Public clinic homepage and assistant interface; signed-in identity blurred and no patient conversation present. |

This is a content-confidentiality review of the files in this checkout. It does not verify project ownership, employer/client permission, image licenses, or claims about implementation and outcomes. Existing project descriptions and live URLs are source material supplied by the repository; confirm the owner's exact role and permission before publishing a case study.

## Why the private screenshots are excluded

Damla's redacted dashboard hides names but still exposes internal student/enrollment/payment counts and application dates. RSVP's redacted administration screenshots still expose invitation/attendance counts and submission timestamps. The redacted invitation also retains a third party's contact name, a private event date, and a couple's photograph. Blurring a name alone does not turn operational or event records into an appropriate public demo.

Use synthetic demo records and neutral operational totals for future dashboard previews. Remove guest links/tokens, browser addresses, names, email addresses, private messages, account identities, and support details from the source screenshot before export. Do not publish a private dashboard simply because authentication was needed to capture it.

The remaining public screenshots establish what the interfaces look like; they do not prove metrics, performance gains, authorship, or the owner's contribution. Keep outcome statements descriptive until verified evidence is available. Keep the dental application labeled as a demo and the chauffeur interface as a concept. Existing credential identifiers and dates should be confirmed against current records; do not display a generic label such as `Professional credential` as a credential ID.

## References that must not be restored accidentally

The following previously referenced WebP assets were moved out of public delivery:

```text
/project-uploads/damla-training-enrollment-system/1-redacted.webp
/project-uploads/mosses-and-vanesa-rsvp-dashboard/online-invitation-redacted.webp
/project-uploads/mosses-and-vanesa-rsvp-dashboard/1-redacted.webp
/project-uploads/mosses-and-vanesa-rsvp-dashboard/2-redacted.webp
/project-uploads/mosses-and-vanesa-rsvp-dashboard/3-redacted.webp
```

Do not restore these originals into `public/` to repair an image URL. Damla now uses the separately reviewed replacement below; the RSVP gallery remains empty.

## October 2026 portfolio additions

- `project-uploads/damla-training-enrollment-system/homepage-2026.webp`: user-supplied public homepage, optimized without changing its content.
- `project-uploads/damla-training-enrollment-system/dashboard-private-values-hidden.webp`: privacy-edited replacement approved by the user after confirming the source contains real totals. All operational counts, currency amounts, chart bars and values, and notification totals are hidden. See `docs/image-edits.md` for the prompt and review. Original is in ignored `private-assets/new-sources/`, outside public delivery.
- `project-shots/custom-erp-workflow.svg`: original illustrative workflow diagram with no company records or metrics. Clearly labeled as a diagram.
- `project-shots/kreads.webp`: unauthenticated public login screenshot, previously reviewed.
- `images/karl-mosses-portrait.webp`: existing portrait retained unchanged. The later portrait attachment was not used, following the owner's correction.
