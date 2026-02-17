import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Modular Solutions",
  description:
    "Vesani Engineering modular building systems: 82mm, 90mm and 110mm wall thicknesses, fire-retardant insulation, factory-manufactured steel framing. Single and double storey, interior and exterior.",
};

export default function ModularSolutionsPage() {
  return (
    <div>
      <PageHeader
        title="Our modular building solutions"
        subtitle="Efficient, compliant building systems for commercial and industrial applications."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
          <div className="space-y-6 text-text-main">
            <p className="text-lg leading-relaxed">
              Our modular building system is an efficient alternative to
              traditional building methods. It can be clad with a variety of
              external finishes and is available in 82mm, 90mm or 110mm wall
              thickness, insulated with fire-retardant polyurethane. The system
              is lightweight, accurate and straightforward to assemble, and is
              suitable for both interior drywall and exterior wall
              applications, in single and double storey builds. Thermal and
              energy performance align with current building regulations.
            </p>
            <p className="leading-relaxed">
              Steel framing and modular wall panels are manufactured in our
              factory to strict tolerances, ensuring consistent quality, high
              accuracy and fewer errors on site. The composite nature of the
              system makes it easy and efficient to transport and erect on site,
              helping you keep programmes on track.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Discuss your project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
