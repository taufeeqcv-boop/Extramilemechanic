import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/modular-solutions", label: "Modular Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

function ContactLine({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  const content = (
    <span className="flex items-center gap-2.5 text-text-muted transition-colors hover:text-brand">
      {children}
      <span>{label}</span>
    </span>
  );
  if (href) {
    return (
      <a href={href} className="inline-flex">
        {content}
      </a>
    );
  }
  return <span className="inline-flex">{content}</span>;
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#f1f5f9]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company — logo + tagline + BEE */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative flex h-14 w-14 shrink-0 items-start justify-center overflow-hidden rounded-lg">
                <Image
                  src="/vesani-logo.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-[200%] w-auto min-w-full object-contain object-top"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold uppercase tracking-tight text-brand">
                  Vesani
                </span>
                <span className="text-xs font-normal uppercase tracking-wide text-text-muted">
                  Engineering
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Quality design engineering and modular building solutions.
            </p>
            <p className="mt-1 text-sm font-medium text-brand">
              Sole agent for TEC in Southern Africa.
            </p>
            <Link
              href="/bee-certificate"
              className="mt-4 inline-flex items-center rounded-md border border-border bg-white px-3 py-1.5 text-xs font-medium text-brand shadow-sm transition-colors hover:border-brand/40 hover:text-brand-hover"
            >
              B-BBEE Certificate
            </Link>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
              Quick links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <ContactLine label="205 Wallace Street, Tygerdal, 7460">
                <svg
                  className="h-4 w-4 shrink-0 text-brand/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </ContactLine>
              <ContactLine href="tel:+27215911617" label="+27 21 591 1617">
                <svg
                  className="h-4 w-4 shrink-0 text-brand/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </ContactLine>
              <ContactLine href="tel:+27828854250" label="+27 82 885 4250">
                <svg
                  className="h-4 w-4 shrink-0 text-brand/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </ContactLine>
              <ContactLine href="mailto:info@vesani.co.za" label="info@vesani.co.za">
                <svg
                  className="h-4 w-4 shrink-0 text-brand/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </ContactLine>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-xs text-text-muted sm:text-left">
            © {new Date().getFullYear()} Vesani Engineering cc
          </p>
          <a
            href="https://www.vesani.co.za"
            className="text-xs font-medium text-brand transition-colors hover:text-brand-hover"
          >
            www.vesani.co.za
          </a>
        </div>
      </div>
    </footer>
  );
}
