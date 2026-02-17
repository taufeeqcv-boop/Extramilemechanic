import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Vesani Engineering was formed to meet growing demand for quality design engineering and modular building solutions. Sole agent for TEC in Southern Africa. Clients across major continents; BEE compliant.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="Who we are"
        subtitle="Quality design engineering and modular building solutions, globally."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
          <div className="space-y-6 text-text-main">
            <p className="text-lg leading-relaxed">
              Vesani Engineering was formed in response to growing local and
              international demand for quality design engineering services. We
              provide clients with specialised designs and related engineering
              support, and the company has grown rapidly—today we work with
              clients across all major continents.
            </p>
            <p className="leading-relaxed">
              We draw on a wealth of knowledge to challenge existing designs and
              adapt to a continuously changing environment. Our work makes
              extensive use of 2D and 3D CAD and specialist design software.
              Safety and environmental considerations are at the heart of
              everything we do. Vesani Engineering is BEE compliant.
            </p>
            <p className="leading-relaxed">
              In addition to our design engineering services, we design, supply
              and support{" "}
              <Link
                href="/modular-solutions"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                modular building solutions
              </Link>{" "}
              for the construction industry—efficient, compliant alternatives to
              traditional building methods.
            </p>
          </div>

          {/* TEC / armech representation — framed certificate of authority */}
          <div className="mt-12 border-t border-border pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Representation
            </h2>
            <p className="mt-3 font-medium text-text-main">
              Vesani is the sole agent for TEC in Southern Africa.
            </p>
            <div className="mt-4 rounded-lg border border-border bg-white p-8 shadow-sm">
              <Image
                src="/images/tec-armech-logo.png"
                alt="TEC armech Ltd"
                width={180}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/modular-solutions" className="btn-primary">
              Our modular solutions
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
