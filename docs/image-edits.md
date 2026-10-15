# Dashboard privacy edit

Built-in image generation/editing tool used to redact the user-supplied Damla administration screenshot. The original remains private in `private-assets/new-sources/damla-dashboard-original-private.png`; it is never served by the website.

Final public asset: `public/project-uploads/damla-training-enrollment-system/dashboard-private-values-hidden.webp`.

The output was visually inspected: all four operational counts and all four financial amounts read `Private`; financial chart bars and values are removed; the notification total is removed. It is captioned as a privacy-redacted preview. No sample numbers or claimed outcomes were added. The public homepage screenshot is separately optimized without changing its content.

Prompt used:

> Use case: precise-object-edit. Edit target: the attached Damla school administration dashboard screenshot, 1894 by 761 pixels. Create a privacy-redacted copy for a professional portfolio. Change ONLY private data areas; preserve the screenshot's exact layout, colors, navigation, labels, icons, spacing and typography. Replace every numeric count in the four top statistic cards with the word 'Private'. Replace every currency amount in the four Cashflow & Student Balances cards with the word 'Private'. In Monthly Collections remove ALL bars and ALL currency values so the financial pattern cannot be inferred; keep the container and title, and show a plain neutral area with the small text 'Financial data hidden'. Remove the red notification-count badge number. Replace the account name at top right with 'Admin'. Do not add, remove, relabel or invent any other application features or interface elements. Keep the full original screenshot framing and aspect ratio. There must be no visible real counts, financial amounts, graph heights or notification totals anywhere in the output. No artificial sample numbers.

The existing portrait was left unchanged at the user's request. The new portrait attachment was not copied into the site or edited.
