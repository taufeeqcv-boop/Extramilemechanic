import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Customer Proof",
  description:
    "Customer proof and real-world outcomes from Extra Mile Mechanic clients.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Customer proof"
        subtitle="Real feedback from people who needed an honest mechanic and found one."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          <div className="space-y-6 text-text-main">
            <blockquote className="rounded-xl border border-border bg-bg-subtle p-5">
              &quot;I was expecting hidden costs, but everything was explained up front.
              The repair was solid and the extra checks picked up another issue early.&quot;
            </blockquote>
            <blockquote className="rounded-xl border border-border bg-bg-subtle p-5">
              &quot;Fast turnaround, fair pricing, and proper diagnostics. My car has been
              running great since.&quot;
            </blockquote>
            <blockquote className="rounded-xl border border-border bg-bg-subtle p-5">
              &quot;This is the first time I felt I could fully trust a mechanic.
              Straight answers and excellent workmanship.&quot;
            </blockquote>
            <p className="text-sm text-text-muted">
              More proof and workshop photos can be added anytime. For now, you can also
              see updates on{" "}
              <a
                href="https://www.facebook.com/julian.hartzenberg"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Facebook
              </a>
              .
            </p>
            <p>
              <Link
                href="/contact"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Book in now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
