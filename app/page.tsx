import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The smarter alternative for your next build
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Customise your next project with the ultimate alternative to
            traditional construction. Modern modular building solutions,
            delivered faster and built to last.
          </p>
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="sr-only">Why choose modular building</h2>
        <p className="text-lg leading-relaxed text-slate-700">
          Our modular building solutions give you a more efficient and
          cost-effective option than conventional brick-and-mortar builds,
          without compromising on quality. Choose from a wide range of
          finishes—doors, windows, surface textures, cladding, roofing,
          ceilings and more—and benefit from structural design that simplifies
          electrical and plumbing installation and supports multi-storey
          applications. We tailor your build to your taste and budget in a
          fraction of the time required by traditional methods.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/modular-solutions"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Our modular solutions
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Featured project */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Featured project
          </h2>
          <p className="mt-4 text-slate-700">
            Major healthcare and infrastructure projects rely on alternative
            building systems for speed and reliability. Our modular and
            light-steel framing systems are designed to deliver consistent
            quality and rapid deployment—enabling large-scale extensions and
            new facilities to be completed in a fraction of the time of
            traditional construction. From hospital expansions to commercial
            and industrial builds, we support projects that demand precision,
            efficiency and compliance with the latest standards.
          </p>
          <p className="mt-4 text-slate-600">
            If you have a project in mind, we can help you explore how modular
            solutions can meet your programme and budget.{" "}
            <Link href="/contact" className="font-medium text-slate-900 underline hover:no-underline">
              Contact us
            </Link>{" "}
            to discuss your requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
