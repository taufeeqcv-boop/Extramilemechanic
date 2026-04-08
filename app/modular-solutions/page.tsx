import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Why Choose Me",
  description:
    "Why choose Extra Mile Mechanic: transparent diagnostics, honest pricing, and free extra checks after every job.",
};

export default function ModularSolutionsPage() {
  return (
    <div>
      <PageHeader
        title="Why choose Extra Mile Mechanic"
        subtitle="A straight-up mechanic experience built on integrity and long-term customer care."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          <div className="space-y-6 text-text-main">
            <p className="text-lg leading-relaxed">
              You should not have to wonder if your mechanic is telling the truth.
              I explain faults in plain language, show what is urgent versus what can wait,
              and keep recommendations realistic for your budget.
            </p>
            <p className="leading-relaxed">
              After each repair or service, I do extra checks at no additional charge
              to pick up early warning signs. That is how breakdowns are prevented and
              how long-term trust is built.
            </p>
            <p className="leading-relaxed">
              If you want a mechanic who treats your car like it has to serve your family
              for years, not just this month, you are in the right place.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Book your vehicle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
