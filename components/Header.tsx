"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#proof", label: "Proof" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      {/* Top bar — desktop only */}
      <div className="hidden border-b border-brand/20 bg-black px-4 py-1.5 text-sm text-white md:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="tel:+27650034437"
              className="flex items-center gap-1.5 hover:opacity-90"
            >
              <span aria-hidden>📞</span>
              <span>+27 65 003 4437</span>
            </a>
            <a
              href="https://wa.me/27650034437"
              className="flex items-center gap-1.5 hover:opacity-90"
            >
              <span aria-hidden>💬</span>
              <span>WhatsApp available</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/90">
              <span aria-hidden>📍</span>
              <span>Cape Town and surrounds</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav: logo block (with right line) | centered links | CTA */}
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        {/* Logo + wording block: emblem only (no bottom text), line on right like Trumod */}
        <div className="flex shrink-0 pr-2 sm:pr-4 md:border-r md:border-border md:pr-6">
          <Link href="/" className="flex items-center hover:opacity-90">
            <span className="flex h-14 w-48 shrink-0 items-center justify-center overflow-hidden sm:h-20 sm:w-72">
              <Image
                src="/images/extra-mile-logo.png"
                alt="Extra Mile Mechanic"
                width={400}
                height={160}
                priority
                className="h-[145%] w-[145%] max-w-none object-cover"
              />
            </span>
          </Link>
        </div>

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
                className={`relative whitespace-nowrap text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-offset-2 ${
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
            href="/#contact"
            className="btn-primary hidden whitespace-nowrap md:inline-block"
          >
            Call now
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
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 inline-block text-center"
            >
              Call now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
