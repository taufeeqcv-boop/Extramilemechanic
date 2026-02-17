import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/modular-solutions", label: "Modular Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-brand">Vesani Engineering</p>
            <p className="mt-0.5 text-sm text-text-muted">
              Design engineering and modular building solutions. Sole agent for TEC in Southern Africa.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-text-muted transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <a href="tel:+27215911617" className="transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2">+27 21 591 1617</a>
            {" · "}
            <a href="mailto:info@vesani.co.za" className="transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2">info@vesani.co.za</a>
          </p>
          <p>
            <Link href="/bee-certificate" className="transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2">B-BBEE Certificate</Link>
            {" · "}
            © {new Date().getFullYear()} Vesani Engineering cc
          </p>
        </div>
      </div>
    </footer>
  );
}
