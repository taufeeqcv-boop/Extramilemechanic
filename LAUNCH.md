# Launch checklist — www.vesani.co.za

Use this list before pushing the site live.

## Hosting & repo

- [ ] Code pushed to GitHub (or your Git provider)
- [ ] Project connected to Vercel (or chosen host)
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` set in the host’s Environment Variables
- [ ] Domain www.vesani.co.za added and DNS pointed (e.g. Vercel → Domains)

## Content

- [ ] Formspree form created and notification email set to info@vesani.co.za
- [ ] Real project photos added to `/public/images/` (optional)
- [ ] `featuredProject` in `app/page.tsx` updated if you have a featured project (optional)
- [ ] BEE certificate: replace `public/bee-certificate.png` with current certificate if you have a newer one

## Launching today

- [ ] **Mobile:** Check the site on a phone; the top bar (Tel + email) stays hidden so the logo and nav have room. Tap through all main pages.
- [ ] **Formspree:** Send a test message via the contact form and confirm it arrives at info@vesani.co.za.
- [ ] **Share:** Send the link to your father, Precision LGS, Al-Ameen Caps., and other partners.

## After launch

- [ ] Visit https://www.vesani.co.za and click through all main pages
- [ ] Check https://www.vesani.co.za/sitemap.xml and https://www.vesani.co.za/robots.txt

---

## Phase 2 (when ready)

- **Case study:** When the “Wealth Garden” at Glengrove Lodge (or another project) is ready, add a dedicated project page or feature it in `featuredProject` in `app/page.tsx` and add the image to `public/images/`.
- **Academy prospectus:** Add your Level 1–3 LGS Foundation and Installation prospectus PDF to `public/documents/training-prospectus.pdf`. The Training page already has a “Download prospectus” button that links to it.
- **Client portal:** If you add a login or file-sharing portal for international clients (e.g. USA, Australia), add a “Client portal” or “Client login” link to the header/footer.

---

**Quick deploy (Vercel):** New Project → Import repo → Add env var → Deploy → Add domain in Settings.
