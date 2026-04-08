# Extra Mile Mechanic

Official website for **Extra Mile Mechanic** (Cape Town), built with Next.js.

## What this site includes

- Bold, mobile-first landing page with direct call-to-action
- Services, trust guarantee, customer proof, and contact pages
- Mechanic intake form that can send:
  - **Email enquiry** (via Formspree)
  - **WhatsApp message** with prefilled job details
- SEO essentials: metadata, sitemap, robots, and JSON-LD

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Contact form (Formspree)

To receive contact form submissions by email:

1. Create a free form at [formspree.io](https://formspree.io) and set your notification email.
2. Copy your form ID from the form endpoint (e.g. `https://formspree.io/f/abcde` → `abcde`).
3. Create `.env.local` in the project root and add:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   ```
4. Restart the dev server or redeploy.

Without this variable, the contact page still shows the form and a note to use the listed contact details.

## WhatsApp booking flow

Clients can submit the intake details directly to WhatsApp from the contact form.
The current destination number is configured in:

- `components/ContactForm.tsx` (`WHATSAPP_NUMBER`)

## Branding assets

Place these files in `public/images/`:
- `extra-mile-logo.png`
- `extra-mile-business-card.png`

## Deploy (e.g. Vercel)

1. Push the repo to GitHub (or connect your Git provider).
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Add `NEXT_PUBLIC_FORMSPREE_ID` in Project Settings → Environment Variables.
4. Deploy, then add your domain in Project → Settings → Domains.

## SEO

- **Sitemap:** Generated at `/sitemap.xml` (base URL set in `app/sitemap.ts`).
- **robots.txt:** Generated at `/robots.txt`, allows all crawlers and points to the sitemap.
- **Favicon:** Uses `public/images/extra-mile-logo.png`.
- **Open Graph:** Title, description, and logo image set for social previews.
- **Structured data:** JSON-LD for Organization and LocalBusiness in the root layout.

To use a different live URL, update `baseUrl` in `app/sitemap.ts` and `app/robots.ts`.

## Main business details currently used

- Business: **Extra Mile Mechanic**
- Contact number: **+27 65 003 4437**
- Facebook: `https://www.facebook.com/julian.hartzenberg`

## Project structure

- `app/` — Pages (home, services, about, contact, projects, trust page), sitemap, robots.
- `components/` — Header, Footer, PageHeader, ContactForm.
- `public/` — Branding assets and images.
