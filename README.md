# Vesani Engineering — www.vesani.co.za

Next.js website for Vesani Engineering cc: modular building solutions, design engineering, and training.

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

1. Create a free form at [formspree.io](https://formspree.io) and set the notification email (e.g. info@vesani.co.za).
2. Copy your form ID from the form endpoint (e.g. `https://formspree.io/f/abcde` → `abcde`).
3. Create `.env.local` in the project root and add:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   ```
4. Restart the dev server or redeploy.

Without this variable, the contact page still shows the form and a note to use the listed contact details.

## Featured project (home page)

To show a real project on the home page, edit the `featuredProject` object in `app/page.tsx`. You can set `title`, `description`, and optionally `image` (path in `public/`) and `linkUrl`. Leave `featuredProject` as `null` to keep the current generic “Featured project” text.

## Deploy (e.g. Vercel)

1. Push the repo to GitHub (or connect your Git provider).
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Add `NEXT_PUBLIC_FORMSPREE_ID` in Project Settings → Environment Variables.
4. Deploy, then add your domain (www.vesani.co.za) in Project → Settings → Domains so the contact form and links use the live URL.

**Launch recap:** Once the domain is connected, the site is live. The header top bar (Tel + email) is hidden on mobile for a cleaner experience. To activate the Training “Download prospectus” button, add your PDF at `public/documents/training-prospectus.pdf`. For a featured case study (e.g. Wealth Garden), set `featuredProject` in `app/page.tsx` or add a project page and link from the Projects section.

## SEO

- **Sitemap:** Generated at `/sitemap.xml` (base URL set to https://www.vesani.co.za).
- **robots.txt:** Generated at `/robots.txt`, allows all crawlers and points to the sitemap.
- **Favicon:** Uses the Vesani logo from `public/vesani-logo.png`.
- **Open Graph:** Title, description, and logo image set for link previews (e.g. social sharing).
- **Structured data:** JSON-LD for Organization and LocalBusiness (name, logo, address, phone, email) in the root layout for search engines.

To use a different base URL (e.g. for staging), update `baseUrl` in `app/sitemap.ts` and `app/robots.ts`.

## Project structure

- `app/` — Pages (home, services, modular-solutions, projects, about, training, contact, bee-certificate), sitemap, robots.
- `components/` — Header, Footer, PageHeader, ContactForm.
- `public/` — Logo, BEE certificate, images; add `documents/training-prospectus.pdf` for the Training prospectus download.
