import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Julian from Extra Mile Mechanic: honest workmanship, transparent advice, and long-term customer relationships.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Who I am"
        subtitle="The mechanic people say does not exist: honest, reliable, and focused on long-term trust."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          <section className="space-y-5 text-text-main">
            <p className="text-lg leading-relaxed">
              I am Julian from Extra Mile Mechanic. I built this business on one
              simple rule: do honest work and treat people properly. No inflated
              quotes, no mystery charges, and no pressure.
            </p>
            <p className="leading-relaxed">
              Most workshops focus on today&apos;s invoice. I focus on your car&apos;s
              long-term health. Every job includes extra checks after the repair,
              because catching small issues early saves you money and stress.
            </p>
            <p className="leading-relaxed">
              I work with private car owners, families, and daily commuters who
              need practical, reliable support. If you value clear communication
              and workmanship with integrity, you are in the right place.
            </p>
            <p className="leading-relaxed">
              See my{" "}
              <Link
                href="/projects"
                className="font-medium text-brand underline decoration-brand/40 underline-offset-2 hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                customer proof
              </Link>{" "}
              or go straight to{" "}
              <Link
                href="/contact"
                className="font-medium text-brand underline decoration-brand/40 underline-offset-2 hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                contact
              </Link>{" "}
              to book in.
            </p>
          </section>

          <section className="mt-12 border-t border-border pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              What you can expect
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text-main">
              <li>Transparent pricing before work starts.</li>
              <li>Proper diagnostics instead of replacing random parts.</li>
              <li>Free extra checks after the booked job is done.</li>
              <li>Advice you can trust, even when that means less work for me today.</li>
            </ul>
          </section>

          <div className="mt-12 pt-6 flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary">
              View services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
