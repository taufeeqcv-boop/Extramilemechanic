import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "BEE Certificate",
  description: "Vesani Engineering Services CC B-BBEE verification certificate.",
};

export default function BeeCertificatePage() {
  return (
    <div>
      <PageHeader
        title="B-BBEE Certificate"
        subtitle="Vesani Engineering Services CC is B-BBEE verified. Certificate issued by Emex Trust."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <Image
              src="/bee-certificate.png"
              alt="Vesani Engineering Services CC B-BBEE verification certificate"
              width={800}
              height={1131}
              className="w-full"
              priority
            />
          </div>
          <p className="mt-6 text-sm text-text-muted">
            For current B-BBEE verification status or a copy of the latest
            certificate, please{" "}
            <Link
              href="/contact"
              className="font-medium text-brand underline transition-colors duration-200 hover:text-brand-hover"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
