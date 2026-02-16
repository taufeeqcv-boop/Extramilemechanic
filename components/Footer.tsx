import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/modular-solutions", label: "Modular Solutions" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-900">
              Vesani Engineering
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Quality design engineering and modular building solutions.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <Link
                href="/bee-certificate"
                className="font-medium text-slate-700 underline hover:text-slate-900"
              >
                BEE Compliant — View certificate
              </Link>
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6 text-sm"
            aria-label="Footer navigation"
          >
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-600 hover:text-slate-900"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Vesani Engineering. www.vesani.co.za
        </p>
      </div>
    </footer>
  );
}
