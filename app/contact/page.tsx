import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Vesani Engineering for modular building solutions, design engineering and training. Enquiries welcome.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact us"
        subtitle="Get in touch for enquiries about our modular building solutions, design engineering services or training."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          <section className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Send a message
            </h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Or get in touch directly
            </h2>
            <div className="mt-4 rounded-lg border border-border bg-bg-subtle p-6">
          <dl className="grid gap-4 sm:grid-cols-1">
            <div>
              <dt className="text-sm font-medium text-text-muted">Address</dt>
              <dd className="text-text-main">
                205 Wallace Street, Tygerdal, 7460, Western Cape, South Africa
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-text-muted">Tel</dt>
              <dd>
                <a
                  href="tel:+27215911617"
                  className="text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
                >
                  +27 21 591 1617
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-text-muted">Fax</dt>
              <dd>
                <a
                  href="tel:+2788215911617"
                  className="text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
                >
                  +27 882 1591 1617
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-text-muted">Cell</dt>
              <dd>
                <a
                  href="tel:+27828854250"
                  className="text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
                >
                  +27 82 885 4250
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-text-muted">Email</dt>
              <dd>
                <a
                  href="mailto:info@vesani.co.za"
                  className="text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
                >
                  info@vesani.co.za
                </a>
              </dd>
            </div>
          </dl>
            </div>
          </section>

          <p className="text-sm text-text-muted">
          Vesani Engineering is BEE compliant.{" "}
          <Link
            href="/bee-certificate"
            className="font-medium text-brand underline hover:text-brand-hover transition-colors duration-200"
          >
            View BEE certificate
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
