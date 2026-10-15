# Portfolio review

The brief is strong: it defines a business audience, balances leadership with implementation, and explicitly requires truthful evidence. The main improvement was to make that positioning visible in the existing website and give prospective clients a usable inquiry path.

## Findings and changes

| Existing gap | Implemented response |
| --- | --- |
| Generic IT Solutions identity, gray/blue palette | Personal Karl Mosses wordmark, ivory/charcoal/olive tokens, editorial serif headings |
| Six technical service lists | Four business-oriented service areas matching the brief |
| Email-app-only inquiry links | Validated form and server email route with explicit unconfigured and failure states |
| No featured-project interaction or detail routes | Manual keyboard/touch slider and four clearly hypothetical case-study pages |
| Raw and redacted private dashboards physically in public | Preserved originals outside public serving; removed unsafe gallery references |
| Broad service/company structured claims | Person schema limited to the name, roles, URL, and city confirmed in the brief |

Existing real project descriptions and career history are retained as repository-supplied material. They still need Karl's confirmation of authorship, contribution, publication permission, dates, and current credential status. A screenshot is visual evidence, not proof of an operational improvement. Add measured outcomes only with supporting records and permission.

## Research

- [Nielsen Norman Group: creating a portfolio](https://www.nngroup.com/articles/ux-design-portfolios/) supports selecting content for the intended audience and explaining process rather than showing finished screens alone. Applying that UX-portfolio guidance to IT consulting is an editorial judgment; it is not evidence about this website's conversion rate.
- [W3C WAI carousel tutorial](https://www.w3.org/WAI/tutorials/carousels/) and [ARIA carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) inform keyboard operation, named controls, and announcements. The implemented slider has no autoplay.

The copy includes no new client names, testimonials, certifications, employment dates, or measured results. The four new samples disclose their hypothetical status on both the homepage and detail pages.

## Verification performed

- Production build, including TypeScript: passed.
- Repository ESLint: passed.
- Contact validation/API checks: 28 passed with mocked provider calls; no email sent.
- Live API checks: valid unconfigured inquiry 503 with explicit not-sent state, invalid fields 400, cross-origin requests 403.
- Homepage, existing main pages, all four sample routes, sitemap, robots, and generated social image respond successfully; unknown sample returns 404.
- Production HTML uses `https://karlmosses.com` for canonical/OG URL and generated social image.
- Browser layout inspection at 320, 390, 768, 1024, and 1440 pixels; no horizontal overflow found. Portfolio, About, and sample case study also checked on mobile.
- Slider buttons, ArrowLeft, ArrowRight, End, mobile menu Escape/focus return, image viewer Escape/focus return, and inquiry navigation checked in the browser. No browser errors observed.
- Reduced-motion behavior reviewed in CSS and animation cleanup. Touch swipe handling is implemented; a physical touch-device gesture test and a full screen-reader/Lighthouse audit have not been performed.

Email acceptance/delivery with real credentials remains intentionally untested until Karl configures a verified sender and receiving inbox. Deployment and domain changes remain separate.

## Simpler image-led presentation

The supplied portrait now appears on Home and About. Kreads is first in the manual project slider and has a public-screen screenshot in the portfolio, with a visible development-preview label. The homepage now leads with work; capabilities, sample concepts, full project notes, technical skills, and credentials can be opened when needed. Existing records remain in the centralized content files.

Kreads details were subsequently verified against the local **Review capstone project** conversation and current source at `D:\Kreads\kreads`. The entry now describes the Windows reading-assessment app and connected web portal, using Flutter, Supabase, whisper.cpp, and SQLite. It retains the development-preview label and does not claim measured learning outcomes. No private learner records are shown; the screenshot was taken without signing in.
