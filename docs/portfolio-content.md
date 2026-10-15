# Portfolio content guide

The site has two distinct sources of project content:

- `lib/portfolio.ts` contains existing owner-provided portfolio material.
- `lib/case-studies.ts` contains four explicitly hypothetical sample concepts. They are not completed client work and do not claim verified outcomes.

## Updating sample concepts

Edit `sampleProjects` in `lib/case-studies.ts`. Each entry supports a title, category, summary, business problem, proposed role, solution steps, illustrative technologies, outcome notes, screenshots, live URL, and repository URL. The `slug` determines its page at `/work/[slug]`.

Keep `verified: false` and the sample disclosure while these remain hypothetical. The disclosure also appears in page metadata so a shared link does not imply completed work. Do not turn a sample into a client case study by only changing the label; prepare a separate confirmed-work model and evidence first.

Screenshots are optional. Use redacted, approved images under `public/project-uploads/`, with accurate alternative text, dimensions, and an optional caption. Never upload employee records, contact details, passwords, access tokens, internal IP plans, or client data. Only add publicly approved live or repository links.

## Material needed for real case studies

For each project, provide:

1. A public project title and permission to name the organization, or an approved anonymous description.
2. The business problem and the people or process it affected.
3. Your exact role, responsibilities, and any collaborators whose work needs attribution.
4. The solution, actual technologies, delivery scope, and confirmed project dates if you want them published.
5. Redacted screenshots, a safe public demo, or approved diagrams.
6. Evidence of outcomes. Qualitative results are useful when no reliable metric exists. Include measurements only with their source, timeframe, and permission to publish.
7. Approved public links and any confidentiality limits.

Before publication, check every claim against your records and remove details the organization has not authorized. Do not add clients, testimonials, certifications, employment dates, or performance metrics based on assumptions.

## Portrait and Kreads update

The supplied professional portrait is optimized as `public/images/karl-mosses-portrait.webp` (960 × 1200, approximately 52 KB). The original file in Downloads is unchanged.

Kreads is featured on the homepage and included in the portfolio. `public/project-shots/kreads.webp` is an actual screenshot of its public login screen, captured without authentication or learner records. It remains labeled **Development preview**, matching the site's visible test/development notice.

Verified sources: the local chat **Review capstone project** identified the current source at `D:\Kreads\kreads`, connected to `Moowses/kreads-reading-system`. Its current README, dependency manifest, and implementation confirm Flutter for Windows and Web, Supabase, SQLite, whisper.cpp, reading materials and reports, and Windows local saving/synchronization. The earlier scratch-folder plan under Documents was outdated. Offline operation is limited to supported Windows reading/material/report flows after online setup; the web app does not provide offline recognition. Accuracy and classroom-device performance still require user testing. The public screenshot remains the unauthenticated [Kreads preview](https://kreads-web.vercel.app/). No private school/student records or repository contents are exposed.

Homepage introductions are shorter; work and imagery appear before services. Capabilities, sample approaches, and longer portfolio text use native, keyboard-accessible disclosures. Existing project data remains available.

## Damla, ERP, and current role

Damla's enrollment, student finance, and classroom features were checked against `C:\Users\Mosses1\enrollment-lms-system`. The portfolio uses the owner's public homepage screenshot and a privacy-edited dashboard. No staff payroll rollout or measured outcomes are claimed.

The custom ERP entry was checked against `D:\xampp\htdocs\Jathnier-Enterprise`. Source confirms purchasing, warehouse and branch workflows, inventory, asset transfers, approvals, and reporting using PHP, MySQL/MariaDB, JavaScript, Bootstrap, and Metronic. Status remains **Implementation in progress**. Its preview is an explicitly labeled workflow diagram; no employer records, application screenshots, public demo, or numerical outcomes are included.

The owner identified the current role as **IT Head at RSB Jathnier** in Davao City and the focus as **digital transformation**. Edit `currentRole` in `lib/portfolio.ts`. No employment dates were added. The existing portrait remains unchanged at the owner's request.
