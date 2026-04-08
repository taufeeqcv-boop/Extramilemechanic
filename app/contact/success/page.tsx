import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message sent",
  description:
    "Thank you for contacting Extra Mile Mechanic. We will respond as soon as possible.",
};

export default function ContactSuccessPage() {
  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-bg-subtle to-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-inner" aria-hidden>
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-brand sm:text-3xl">
            Message sent
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Thank you for getting in touch with Extra Mile Mechanic. We have received your enquiry and will respond as soon as possible.
          </p>
          <p className="mt-2 text-sm text-text-muted">
            In the meantime, you can explore our{" "}
            <Link href="/services" className="font-medium text-brand underline hover:no-underline hover:text-brand-hover">
              services
            </Link>
            {" "}or read{" "}
            <Link href="/about" className="font-medium text-brand underline hover:no-underline hover:text-brand-hover">
              about
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary inline-block">
              Back to home
            </Link>
            <Link href="/contact" className="btn-secondary inline-block">
              Send another message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
