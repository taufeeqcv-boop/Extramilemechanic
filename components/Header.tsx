import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/modular-solutions", label: "Modular Solutions" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-slate-900 hover:text-slate-700"
        >
          Vesani Engineering
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
