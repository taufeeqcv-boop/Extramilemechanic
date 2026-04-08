import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#proof", label: "Proof" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-brand">Extra Mile Mechanic</p>
            <p className="mt-0.5 text-sm text-text-muted">
              Honest, reliable repairs with free extra checks after every job.
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
            <a href="tel:+27650034437" className="transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2">+27 65 003 4437</a>
            {" · "}
            <a href="https://wa.me/27650034437" className="transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2">WhatsApp</a>
            {" · "}
            <a href="https://www.facebook.com/julian.hartzenberg" className="transition-colors duration-200 hover:text-brand focus-visible:outline-offset-2">Facebook</a>
          </p>
          <p>
            © {new Date().getFullYear()} Extra Mile Mechanic
          </p>
        </div>
      </div>
    </footer>
  );
}
