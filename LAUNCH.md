# Launch checklist â€” www.vesani.co.za

Use this list before pushing the site live.

## Hosting & repo

- [ ] Code pushed to GitHub (or your Git provider)
- [ ] Project connected to Vercel (or chosen host)
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` set in the host's Environment Variables
- [ ] Domain www.vesani.co.za added and DNS pointed (e.g. Vercel â†’ Domains)

## Content

- [ ] Formspree form created and notification email set to info@vesani.co.za
- [ ] Real project photos added to `/public/images/` (optional)
- [ ] `featuredProject` in `app/page.tsx` updated if you have a featured project (optional)
- [ ] BEE certificate: replace `public/bee-certificate.png` with current certificate if you have a newer one
- [ ] **Images:** The seven sub-box PNGs in `public/images/` are web-optimized (small files; Next.js serves them in modern formats). To re-run optimization: `npm run optimize-images` (only overwrites when the result is smaller).

## Launching today

- [ ] **Sub-box links:** Click each of the seven "Our solutions" cards on the home page and confirm: Engineering services & Roofing â†’ `/services`; Light steel framing, Green warehouse, Hybrid modular, Warehouse in a box, Modular solution â†’ `/modular-solutions`.
- [ ] **Mobile:** Check the site on a phone; the top bar (Tel + email) stays hidden so the logo and nav have room. Tap through all main pages.
- [ ] **Formspree:** Send a test message via the contact form and confirm it arrives at info@vesani.co.za. Optionally set Formspree's "Redirect" to `https://www.vesani.co.za/contact/success` so users see the dedicated success page after submitting.
- [ ] **Share:** Send the link to your father, Precision LGS, Al-Ameen Caps., and other partners.

## After launch

- [ ] Visit https://www.vesani.co.za and click through all main pages
- [ ] Check https://www.vesani.co.za/sitemap.xml and https://www.vesani.co.za/robots.txt
- [ ] **Google Search Console:** Go to [Search Console](https://search.google.com/search-console), add property `https://www.vesani.co.za`, choose "HTML tag" verification. Copy the `content` value from the meta tag (the long string). In Vercel/Netlify, add env var **`GOOGLE_SITE_VERIFICATION`** = that value. Redeploy. In Search Console, click "Verify". You can then track search performance and submit the sitemap (`https://www.vesani.co.za/sitemap.xml`).

---

## Phase 2 (when ready)

- **Case study:** When the "Wealth Garden" at Glengrove Lodge (or another project) is ready, add a dedicated project page or feature it in `featuredProject` in `app/page.tsx` and add the image to `public/images/`.
- **Client portal:** If you add a login or file-sharing portal for international clients (e.g. USA, Australia), add a "Client portal" or "Client login" link to the header/footer.

---

**Quick deploy (Vercel):** New Project â†’ Import repo â†’ Add env var â†’ Deploy â†’ Add domain in Settings.
