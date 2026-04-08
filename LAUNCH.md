# Launch checklist

Use this list before pushing the site live.

## Hosting and repo

- [ ] Code pushed to GitHub (or your Git provider)
- [ ] Project connected to Vercel (or chosen host)
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` set in the host's Environment Variables
- [ ] Domain added and DNS pointed correctly

## Content

- [ ] Formspree form created and notification email set
- [ ] Add logo file: `public/images/extra-mile-logo.png`
- [ ] Add business card file: `public/images/extra-mile-business-card.png`
- [ ] Workshop/customer photos added to `/public/images/` (optional)
- [ ] Run image optimization: `npm run optimize-images`

## Launching today

- [ ] Test all menu links and section anchor links
- [ ] Verify call and WhatsApp buttons open correctly on mobile
- [ ] Submit a test form message and confirm it arrives
- [ ] Check Facebook link opens correctly

## After launch

- [ ] Visit your live domain and click through all main pages
- [ ] Check `/sitemap.xml` and `/robots.txt` on the live domain
- [ ] Add and verify your domain in [Google Search Console](https://search.google.com/search-console)

---

## Phase 2 (when ready)

- **Gallery:** Add workshop and before/after repair photos.
- **Testimonials:** Add real customer testimonials and ratings.
- **Bookings:** Add date/time booking flow if needed.

---

**Quick deploy (Vercel):** New Project -> Import repo -> Add env var -> Deploy -> Add domain in Settings.
