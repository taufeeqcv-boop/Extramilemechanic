import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mechanic services from Extra Mile Mechanic: precision servicing, diagnostics, repairs, and free extra checks.",
};

const mechanicServices = [
  "Minor and major servicing",
  "Computer diagnostics and fault finding",
  "Brake, suspension and steering repairs",
  "Battery and charging system checks",
  "Cooling system and overheating diagnosis",
  "General repairs and replacement parts",
  "Pre-trip and safety checks",
  "Post-job free extra checks",
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our services"
        subtitle="Honest mechanical work done properly, with no guesswork and no nonsense."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-12">
          <section className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10 transition-shadow duration-300 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-brand">
              Mechanical services
            </h2>
            <p className="mt-2 text-text-muted">
              I focus on practical, reliable workmanship for daily-driven vehicles.
              You get clear communication, proper diagnostics, and work that is done
              to keep your car on the road longer.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {mechanicServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-main"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                href="/contact"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Book your car in
              </Link>
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10 transition-shadow duration-300 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-brand">
              The Extra Mile standard
            </h2>
            <p className="mt-2 text-text-muted">
              Every car gets attention beyond the job card. After repairs are completed,
              I perform extra checks to spot early issues before they become breakdowns.
            </p>
            <ul className="mt-6 space-y-2 text-text-main">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Honest recommendations on what needs fixing now and what can wait</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Clear pricing before work starts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Free extra checks after completion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Long-term support for the same vehicle over time</span>
              </li>
            </ul>
            <p className="mt-6">
              <Link
                href="/projects"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                See customer proof
              </Link>
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10 transition-shadow duration-300 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-brand">
              Working relationship
            </h2>
            <p className="mt-2 text-text-main">
              You are not just another job card. I keep service history in mind,
              explain recurring issues, and help you plan maintenance so costs are
              managed over time.
            </p>
            <p className="mt-6">
              <Link
                href="/about"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Learn more about how I work
              </Link>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex px-8 py-3"
          >
            Contact now
          </Link>
        </div>
      </div>
    </div>
  );
}
