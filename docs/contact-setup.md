# Contact form setup

The form posts to `/api/contact`, validates the same fields in the browser and on the server, then calls Resend's email API. There are no delivery credentials or assumed email addresses in the code.

1. Copy `.env.example` to `.env.local`.
2. Create a Resend account, verify a sending domain, and create a sending API key.
3. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a plain address on that verified domain), and `CONTACT_TO_EMAIL` (Karl's confirmed inquiry inbox).
4. Restart the development server. Set the same server-only secrets in the hosting environment before the production build. Rebuild after adding or changing these settings, because the homepage's enabled form state is generated at build time.
5. Submit a controlled inquiry and verify the destination mailbox and Resend event log. Confirm that replies go to the visitor's email address.

See the official [Resend send-email API](https://resend.com/docs/api-reference/emails/send-email) and [domain setup guide](https://resend.com/docs/dashboard/domains/introduction).

Without the three settings, the page indicates that submissions are unavailable, and the endpoint returns HTTP 503 with an explicit “not sent” message. The client only clears fields and shows an acceptance confirmation after the server receives a nonempty email ID from Resend. Acceptance means the provider accepted the message for sending; it is not a claim that the recipient has received or read it. A timeout or upstream failure retains the input and never reports success. If a request times out after provider acceptance, retrying may send a duplicate; check the provider log when investigating delivery.

The route enforces a same-origin JSON request, service allowlist, hidden spam field, 24 KB body limit, field limits, and a 12-second provider timeout. Provider error bodies and secrets are not sent to the browser, and inquiry contents are not logged or stored by the app. Cross-origin integrations must use a separately designed endpoint.

Before a public launch, configure host-level rate limiting for `/api/contact` and monitor sending quotas and spam. The hidden field and origin check reduce basic abuse but do not stop direct automated requests. Review Resend's data handling and configure retention appropriate to business inquiries. If future requirements include confirmed mailbox delivery, add a verified provider webhook and delivery tracking rather than changing the current acceptance message.

Reverse proxies must preserve the public `Host` and provide Next.js with the correct request scheme; this endpoint does not trust `X-Forwarded-Host`.
