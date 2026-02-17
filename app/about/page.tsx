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
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          {/* Introduction */}
          <section className="space-y-5 text-text-main">
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
                className="font-medium text-brand underline decoration-brand/40 underline-offset-2 hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                modular building solutions
              </Link>{" "}
              for the construction industry—efficient, compliant alternatives to
              traditional building methods.
            </p>
          </section>

          {/* Leadership */}
          <section className="mt-12 border-t border-border pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Leadership
            </h2>
            <div className="mt-8 space-y-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 sm:items-start">
                <div className="shrink-0 mx-auto sm:mx-0">
                  <Image
                    src="/images/sulaiman-essop.png"
                    alt="Sulaiman Essop, Director & Lead Engineer"
                    width={160}
                    height={200}
                    className="rounded-lg object-cover aspect-[4/5] w-36 sm:w-40"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-text-main">Sulaiman Essop</h3>
                  <p className="text-sm font-medium text-text-muted mt-0.5 mb-4">Director &amp; Lead Engineer</p>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-text-main pl-4 list-disc [&>li]:pl-1">
                    <li><strong>Experience:</strong> Over 40 years of extensive experience in structural design, engineering, and construction.</li>
                    <li><strong>Registration:</strong> ECSA Pr. Tech Eng (200670150) &amp; SAISC Member.</li>
                    <li><strong>Specialization:</strong> Structural Design (Steel/Timber/RC), Light Gauge Steel (LGS) Systems, and Pressure Equipment.</li>
                    <li><strong>Global Impact:</strong> Author of ASME Code Case CC2279; Retired member of ISO TC104 working group.</li>
                    <li><strong>Key Projects:</strong> Structural verification for Kusile Power Plant pressure vessels, Kigali Indoor Arena roof structure, and extensive LGS product development.</li>
                    <li><strong>Role:</strong> Oversees all technical design, verification, and R&amp;D activities for Vesani Engineering and the TEC Armech agency.</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-border pt-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 sm:items-start">
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <Image
                      src="/images/taufeeq-essop.png"
                      alt="Taufeeq Essop, Business Systems Analyst"
                      width={160}
                      height={200}
                      className="rounded-lg object-cover aspect-[4/5] w-36 sm:w-40"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-text-main">Taufeeq Essop</h3>
                    <p className="text-sm font-medium text-text-muted mt-0.5 mb-4">Business Systems Analyst</p>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-text-main pl-4 list-disc [&>li]:pl-1">
                      <li><strong>Education:</strong> BCom in Information Systems &amp; Industrial Psychology.</li>
                      <li><strong>Role:</strong> Bridges the gap between financial strategy and digital infrastructure, ensuring operational scalability.</li>
                      <li><strong>Key Achievement:</strong> Spearheaded the technical architecture and launch of the Vesani corporate platform and lead-generation systems.</li>
                      <li><strong>Expertise:</strong> Process Optimization, Digital Transformation, and Regulatory Compliance (FAIS/POPIA).</li>
                      <li><strong>Approach:</strong> Combines 7+ years of corporate advisory experience with agile systems development to deliver data-driven engineering solutions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Representation */}
          <section className="mt-12 border-t border-border pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Representation
            </h2>
            <p className="mt-3 font-medium text-text-main">
              Vesani is the sole agent for TEC in Southern Africa.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-bg-subtle/50 px-8 py-6">
              <Image
                src="/images/tec-armech-logo.png"
                alt="TEC armech Ltd"
                width={180}
                height={80}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </div>
          </section>

          {/* CTAs */}
          <div className="mt-12 pt-6 flex flex-wrap gap-4">
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
