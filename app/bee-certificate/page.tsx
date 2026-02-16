import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BEE Certificate | Vesani Engineering",
  description: "Vesani Engineering BEE compliance certificate.",
};

export default function BeeCertificatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-semibold text-slate-900">BEE Compliant</h1>
      <p className="mt-4 text-slate-600">
        Vesani Engineering is BEE compliant. For the current certificate,
        please contact us or refer to the document provided by your account
        manager.
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-block font-medium text-slate-700 underline hover:text-slate-900"
      >
        Contact us
      </Link>
    </div>
  );
}
