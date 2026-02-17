# Plan: Header, Footer & Theme — Complete and Consistent

## Goal

Make the header, footer, and overall UI/theme complete and consistent across all pages, using Vesani branding and (where appropriate) Trumod-style structure so the site feels like one cohesive product.

---

## 1. Theme & design tokens

**Current:** Brand blue `#1e3a5f` and hover `#152a45` are hardcoded in many components. `globals.css` has minimal tokens.

**Actions:**

- **Define CSS variables** in `app/globals.css`:
  - `--color-brand`: primary (e.g. `#1e3a5f`)
  - `--color-brand-hover`: darken for buttons/links
  - `--color-accent`: optional (e.g. logo orange for highlights, if desired)
  - `--color-page-bg`, `--color-card-bg`, `--color-border`, `--color-muted` for consistency
- **Tailwind theme** (in `@theme` or `tailwind.config` if used): map these so we use e.g. `bg-brand` / `text-brand` instead of raw hex in components.
- **Single source of truth:** All header, footer, and CTA buttons use the theme tokens so a future rebrand is one-place.

**Trumod takeaway:** Trumod uses a clear corporate palette; we keep Vesani blue + white/slate and optionally one accent.

---

## 2. Header

**Current:** Sticky white bar, logo + “Vesani Engineering cc”, 7 nav links, mobile hamburger. No active state, no prominent CTA.

**Actions:**

- **Active nav state:** Pass current path (e.g. via `usePathname()`) and apply a distinct style to the current page link (e.g. `text-brand font-semibold` or underline). Improves orientation.
- **Contact CTA:** Add a “Contact” or “Get in touch” button at the end of the desktop nav (primary style) so the main action is visible in the header (Trumod-style “contact” prominence).
- **Optional top bar (Trumod-style):** Thin strip above the main header with phone + email (e.g. Tel: +27 21 591 1617 | info@vesani.co.za). Improves scannability and matches many B2B sites. If added, keep it minimal and collapsible on small screens.
- **Mobile:** Keep hamburger and slide-down menu; ensure tap targets and spacing match the rest of the site. Optionally add the same Contact CTA in the mobile menu.
- **Max-width:** Align header content with main content (e.g. same `max-w-6xl` as footer so the bar feels aligned).

**Files:** `components/Header.tsx`, optionally a small `HeaderTopBar.tsx` if the strip is added.

---

## 3. Footer

**Current:** Single block: logo, tagline, “Sole agent for TEC”, BEE link, then horizontal nav links, then copyright. No address/phone in footer.

**Actions:**

- **Multi-column layout (Trumod-style):**
  - **Column 1 – Company:** Logo, short tagline, “Sole agent for TEC in Southern Africa”, BEE certificate link.
  - **Column 2 – Quick links:** Same nav links as header (Home, Services, Modular Solutions, Projects, About, Training, Contact) in a vertical or 2-column list.
  - **Column 3 – Contact:** Address (205 Wallace Street, Tygerdal…), Tel, Cell, Email so every page has key contact info without going to /contact.
- **Bottom bar:** Single full-width bar with: “© 2025 Vesani Engineering cc · www.vesani.co.za” (and optional “Sole agent for TEC in Southern Africa” if not in column 1). Keep it minimal.
- **Responsive:** Stack columns on mobile (e.g. Company, then Quick links, then Contact); same spacing and typography scale as the rest of the site.
- **Theme:** Use design tokens for text and border colors so footer matches header and page backgrounds.

**Files:** `components/Footer.tsx`.

---

## 4. Page layout consistency

**Current:** Most inner pages use: (1) a grey strip with `border-b border-slate-200 bg-slate-50 py-12` and `h1` + subtitle, (2) a white card `rounded-2xl border border-slate-200 ... p-8 sm:p-10`. Bee-certificate and a few details differ.

**Actions:**

- **Reusable `PageHeader` component:** Accept `title`, optional `subtitle`. Renders the grey strip with consistent padding and typography. Use on every inner page including Bee Certificate so all pages share the same “page title” look.
- **Reusable `PageCard` (optional):** A wrapper for the main content card (rounded, border, shadow, padding). Use on About, Contact, Training, Modular Solutions, Services, Projects so card style is identical. Bee-certificate can use it for the outer wrapper; the certificate image stays inside.
- **Standard widths:** Use one content width for “narrow” pages (e.g. `max-w-4xl`) and one for “wide” (e.g. `max-w-6xl` for home “Our work” grid). Document in this plan or in component comments: e.g. “Inner pages: max-w-4xl”.
- **Bee-certificate:** Add the same `PageHeader` (“B-BBEE Certificate”, subtitle about Emex Trust). Wrap content in the same card style and use `max-w-4xl` to align with other inner pages.

**Files:** `components/PageHeader.tsx`, optional `components/PageCard.tsx`, then `app/about/page.tsx`, `app/contact/page.tsx`, `app/training/page.tsx`, `app/modular-solutions/page.tsx`, `app/services/page.tsx`, `app/projects/page.tsx`, `app/bee-certificate/page.tsx`.

---

## 5. Buttons and links

**Current:** Primary buttons use `bg-[#1e3a5f] hover:bg-[#152a45]`. Links use mix of `text-slate-900`, `text-[#1e3a5f]`, `underline`.

**Actions:**

- **Primary button:** One class (e.g. `btn-primary`) or a small `Button` component using theme tokens. Use everywhere: header CTA, footer (if we add a CTA), contact form, and all “Contact us” / “Discuss your project” / “Our services” CTAs.
- **Secondary button:** One class (e.g. `btn-secondary`) for “Get in touch” outline style or “Modular solutions” secondary actions.
- **Inline links:** Standardise: e.g. `text-brand underline hover:no-underline` (or `hover:text-brand-hover`) and use consistently in body copy. Replace raw `#1e3a5f` and ad‑hoc underlines with the tokenised link style.

**Files:** `app/globals.css` (utility classes) or `components/Button.tsx`; then replace inline button/link classes across pages and `ContactForm.tsx`.

---

## 6. Trumod-inspired elements (summary)

| Element            | Trumod reference        | Vesani implementation                                      |
|--------------------|-------------------------|------------------------------------------------------------|
| Logo in header     | Logo links to home      | Already in place                                           |
| Clear nav          | Home, About, Solutions, Training, Contact | We have Services + Modular Solutions + Projects added      |
| Contact prominence | Contact as key action   | Add CTA button in header; contact in footer column         |
| Footer structure   | Multi-area footer       | Multi-column: Company, Quick links, Contact                |
| Corporate feel     | Clean, structured       | PageHeader + PageCard + tokens for consistent spacing/colour |

No need to copy Trumod’s visual design (e.g. colours or imagery); only structure and clarity.

---

## 7. Implementation order

1. **Theme (globals.css)** — Add CSS variables; optionally extend Tailwind theme. Then replace one or two key usages (e.g. header + one page) to validate.
2. **Header** — Active state, Contact CTA, optional top bar. Use theme tokens.
3. **Footer** — Multi-column layout, contact block, bottom bar. Use theme tokens.
4. **PageHeader + PageCard** — Implement and roll out to all inner pages including bee-certificate.
5. **Buttons/links** — Introduce `btn-primary`, `btn-secondary`, and standard link style; refactor all pages and ContactForm.
6. **Pass** — Quick pass on every route: same header/footer, same page pattern, same button/link styles.

---

## 8. Files to touch (checklist)

- [ ] `app/globals.css` — theme variables (and optional Tailwind)
- [ ] `components/Header.tsx` — active state, CTA, optional top bar, tokens
- [ ] `components/Footer.tsx` — columns, contact, bottom bar, tokens
- [ ] `components/PageHeader.tsx` — new
- [ ] `components/PageCard.tsx` — optional new
- [ ] `components/Button.tsx` or global button/link classes — optional
- [ ] `components/ContactForm.tsx` — use shared button/link styles
- [ ] All `app/**/page.tsx` — use PageHeader (and PageCard where applicable), shared buttons/links
- [ ] `app/bee-certificate/page.tsx` — align with PageHeader + card + max-w-4xl

---

## 9. Out of scope (for later)

- Search (Trumod has search; we can add later if needed).
- Loading animations or page transitions.
- Changing content or copy (this plan is layout and theme only).

This plan keeps the current Vesani look and content while making header, footer, and UI complete and consistent, and reusing Trumod-style structure where it fits.
