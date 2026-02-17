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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Company */}
          <div>
            <Image
              src="/vesani-logo.png"
              alt="Vesani Engineering cc"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-3 text-lg font-semibold text-brand">
              Vesani Engineering cc
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Quality design engineering and modular building solutions.
            </p>
            <p className="mt-1.5 text-sm font-normal text-brand">
              Sole agent for TEC in Southern Africa.
            </p>
            <p className="mt-2 text-sm text-text-muted">
              <Link
                href="/bee-certificate"
                className="font-medium text-brand underline transition-colors duration-200 hover:text-brand-hover"
              >
                BEE Compliant — View certificate
              </Link>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Quick links
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted transition-colors duration-200 hover:text-text-main"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Contact
            </h3>
            <address className="mt-3 not-italic text-sm text-text-muted">
              <p>205 Wallace Street, Tygerdal</p>
              <p>7460, Western Cape, South Africa</p>
              <p className="mt-2">
                <a
                  href="tel:+27215911617"
                  className="transition-colors duration-200 hover:text-text-main"
                >
                  Tel: +27 21 591 1617
                </a>
              </p>
              <p>
                <a
                  href="tel:+27828854250"
                  className="transition-colors duration-200 hover:text-text-main"
                >
                  Cell: +27 82 885 4250
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@vesani.co.za"
                  className="transition-colors duration-200 hover:text-text-main"
                >
                  info@vesani.co.za
                </a>
              </p>
            </address>
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-center text-sm text-text-muted">
          © {new Date().getFullYear()} Vesani Engineering cc · www.vesani.co.za
        </p>
      </div>
    </footer>
  );
}
