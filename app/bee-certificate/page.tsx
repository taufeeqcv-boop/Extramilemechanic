import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Trust Guarantee",
  description: "Extra Mile Mechanic trust and service commitment.",
};

export default function BeeCertificatePage() {
  return (
    <div>
      <PageHeader
        title="Trust guarantee"
        subtitle="What you can always expect when you bring your car to Extra Mile Mechanic."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          <div className="rounded-lg border border-border bg-bg-subtle p-6">
            <ul className="space-y-2 text-text-main">
              <li>Clear explanation before any paid work starts.</li>
              <li>No hidden add-ons and no pressure tactics.</li>
              <li>Only necessary repairs are recommended.</li>
              <li>Free extra checks after every job.</li>
              <li>Respect for your time, budget, and safety.</li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            If you want to chat before booking, please{" "}
            <Link
              href="/contact"
              className="font-medium text-brand underline transition-colors duration-200 hover:text-brand-hover"
            >
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
