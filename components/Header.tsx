"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/modular-solutions", label: "Modular Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      {/* Top bar — desktop only */}
      <div className="hidden border-b border-brand/20 bg-brand px-4 py-1.5 text-sm text-white md:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="tel:+27215911617"
              className="flex items-center gap-1.5 hover:opacity-90"
            >
              <span aria-hidden>📞</span>
              <span>+27 21 591 1617</span>
            </a>
            <a
              href="mailto:info@vesani.co.za"
              className="flex items-center gap-1.5 hover:opacity-90"
            >
              <span aria-hidden>✉</span>
              <span>info@vesani.co.za</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/90">
              <span aria-hidden>📍</span>
              <span>205 Wallace St, Tygerdal, Cape Town</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav: logo | centered links | CTA */}
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3 hover:opacity-90">
          {/* Logo wrapper: show emblem larger, clip bottom wording */}
          <span className="flex h-20 w-20 shrink-0 items-start justify-center overflow-hidden">
            <Image
              src="/vesani-logo.png"
              alt="Vesani Engineering"
              width={80}
              height={80}
              priority
              className="h-[150%] w-auto min-w-full object-contain object-top"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-bold uppercase tracking-tight text-brand sm:text-2xl">
              Vesani
            </span>
            <span className="text-xs font-normal uppercase tracking-wide text-text-muted sm:text-sm">
              Engineering
            </span>
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <nav
          className="hidden flex-1 items-center justify-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative whitespace-nowrap text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-brand after:absolute after:bottom-[-5px] after:left-0 after:right-0 after:h-[2px] after:bg-brand"
                    : "text-text-main hover:text-brand"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA + mobile menu button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary hidden whitespace-nowrap md:inline-block"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex flex-col gap-1 rounded p-2 text-text-main hover:bg-bg-subtle md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`rounded px-3 py-2 text-sm font-medium ${
                  pathname === href ? "bg-bg-subtle text-brand" : "text-text-main"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 inline-block text-center"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
