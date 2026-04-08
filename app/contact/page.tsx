import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book your vehicle with Extra Mile Mechanic. Call, WhatsApp, or send a message.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Book your vehicle, ask a question, or send a quick WhatsApp."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          <section className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Send a message
            </h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Or get in touch directly
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-white p-3">
              <Image
                src="/images/extra-mile-business-card.png"
                alt="Extra Mile Mechanic contact card"
                width={1024}
                height={683}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="mt-4 rounded-xl border border-border bg-bg-subtle p-6">
              <ul className="space-y-4" role="list">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">Service area</p>
                    <p className="mt-0.5 text-text-main">Cape Town and surrounding areas</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">Tel</p>
                    <a href="tel:+27650034437" className="mt-0.5 block font-medium text-brand transition-colors hover:text-brand-hover">+27 65 003 4437</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">WhatsApp</p>
                    <a href="https://wa.me/27650034437" className="mt-0.5 block font-medium text-brand transition-colors hover:text-brand-hover">Chat on WhatsApp</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">Facebook</p>
                    <a href="https://www.facebook.com/julian.hartzenberg" className="mt-0.5 block font-medium text-brand transition-colors hover:text-brand-hover">facebook.com/julian.hartzenberg</a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <p className="text-sm text-text-muted">
          Honest service, clear communication, and long-term care for your vehicle.{" "}
          <Link
            href="/about"
            className="font-medium text-brand underline hover:text-brand-hover transition-colors duration-200"
          >
            Learn more
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
