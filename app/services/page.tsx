import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vesani Engineering: design engineering services, modular building solutions, and training. TC designs, FEA, draughting, R&D; sole agent for TEC in Southern Africa.",
};

const designEngineeringServices = [
  "Designs to all major international TC codes and regulations",
  "TC designs for liquid, gas and solids",
  "R&D and product development",
  "Heat transfer calculations",
  "Finite Element Analysis (FEA)",
  "US DOT exemption application",
  "ASME enquiries",
  "Draughting and engineering services",
  "Operating, maintenance and spare parts manuals",
  "Inspection Authority approval application and liaison",
  "Documentation",
  "Report writing",
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our services"
        subtitle="Design engineering, modular building solutions, and training—all under one roof."
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-12">
          {/* Design engineering (Vesani) */}
          <section className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-brand">
              Design engineering
            </h2>
            <p className="mt-2 text-text-muted">
              We provide specialised design engineering services to local and
              international clients, using 2D and 3D CAD and specialist design
              software. Safety and environmental considerations are at the heart
              of every design.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {designEngineeringServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-main"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link
                href="/contact"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Enquire about design engineering
              </Link>
            </p>
          </section>

          {/* Modular building (Trumod) */}
          <section className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-brand">
              Modular building solutions
            </h2>
            <p className="mt-2 text-text-muted">
              An efficient, cost-effective alternative to traditional
              brick-and-mortar construction. We design, manufacture and supply
              modular building systems with a wide range of finishes and
              structural benefits.
            </p>
            <ul className="mt-6 space-y-2 text-text-main">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Doors, windows, surface textures, cladding, roofing, ceilings and more</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>82mm, 90mm or 110mm wall thickness with fire-retardant polyurethane insulation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Factory-manufactured steel framing and modular walls to strict tolerances</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Single and double storey; interior drywall and exterior wall applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Structural benefits for electrical and plumbing installation; multi-storey reinforcement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Thermal and energy efficiency in line with building regulations; fast programme delivery</span>
              </li>
            </ul>
            <p className="mt-6">
              <Link
                href="/modular-solutions"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Full details: Modular solutions
              </Link>
            </p>
          </section>

          {/* Training (Trumod) */}
          <section className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-brand">
              Training
            </h2>
            <p className="mt-2 text-text-muted">
              Our training campus equips building contractors and their staff
              with the knowledge to install and maintain the systems we
              manufacture and supply.
            </p>
            <ul className="mt-6 space-y-2 text-text-main">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Modular building system installation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Steel frame and panel erection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Lightweight roof structures: assembly and erection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Full roof completion: insulation and roof covering (tiling or sheeting)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>Skills development for the industry</span>
              </li>
            </ul>
            <p className="mt-6">
              <Link
                href="/training"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                Full details: Training
              </Link>
            </p>
          </section>

          {/* Products (Vesani / TEC) */}
          <section className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xl font-semibold text-brand">
              Products
            </h2>
            <p className="mt-2 text-text-main">
              Vesani is the sole agent for <strong>TEC</strong> in Southern
              Africa. We supply TEC products and support across the region.
            </p>
            <p className="mt-6">
              <Link
                href="/about"
                className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
              >
                About us and representation
              </Link>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex px-8 py-3"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
