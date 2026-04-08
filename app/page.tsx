import Link from "next/link";
import Image from "next/image";

const serviceCards = [
  {
    title: "Precision servicing",
    description:
      "Routine and major services done properly so your engine stays healthy and reliable.",
  },
  {
    title: "Diagnostic scans",
    description:
      "Proper fault finding with real diagnostics. No guesswork and no unnecessary part swaps.",
  },
  {
    title: "Reliable repairs",
    description:
      "From small fixes to bigger jobs, done with honest advice and workmanship that lasts.",
  },
];

const proofCards = [
  {
    title: "Transparent pricing",
    description:
      "Clear communication before work starts so you know what is needed and why.",
  },
  {
    title: "Free extra checks",
    description:
      "After every job, your car gets additional checks for small issues before they become expensive.",
  },
  {
    title: "Long-term relationships",
    description:
      "The goal is not one invoice. The goal is your car running strong for years.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[32rem] overflow-hidden bg-[#0b0b0b] sm:min-h-[36rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(227,30,36,0.22),_transparent_50%)]" aria-hidden />
        <div className="relative mx-auto flex min-h-[32rem] max-w-4xl flex-col justify-start px-4 pb-24 pt-10 text-center text-white sm:min-h-[36rem] sm:px-6 sm:pt-16">
          <p className="mx-auto rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-200">
            Cape Town&apos;s honest mechanic
          </p>
          <h1 className="text-4xl font-bold tracking-tight drop-shadow-md sm:text-5xl lg:text-6xl">
            I&apos;m the mechanic on your mom&apos;s wish list
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-slate-200 drop-shadow-sm sm:text-xl">
            The kind they say does not exist. A myth, a legend, fantasy or folklore.
            But right at the other end of this number is an honest mechanic with integrity.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/27650034437"
              className="btn-primary inline-block px-8 py-3.5 text-base"
            >
              Believe the impossible
            </Link>
            <Link
              href="/#services"
              className="btn-secondary inline-block border-white/50 bg-white/10 px-8 py-3.5 text-base text-white transition-all duration-300 hover:bg-white/20 hover:border-white/70 hover:-translate-y-0.5"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <h2 className="sr-only">Why choose Extra Mile Mechanic</h2>
        <div className="rounded-2xl border border-border bg-bg-subtle px-6 py-10 shadow-sm sm:px-10 sm:py-12 border-l-4 border-l-brand">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            I. Shit. You. Not.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-text-main">
            In a world of hidden costs and phantom repairs, I do things differently.
            I am a reliable mechanic with integrity. I do not chase quick money and
            disappear. I build long-term relationships based on trust and real workmanship.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Every job includes free extra checks before I hand your keys back.
            The goal is simple: catch problems early so your car lasts longer.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="tel:+27650034437" className="btn-primary inline-block px-8 py-3">
              Call now
            </Link>
            <Link href="https://wa.me/27650034437" className="btn-secondary">
              WhatsApp
            </Link>
            <Link href="https://www.facebook.com/julian.hartzenberg" className="btn-secondary">
              Facebook
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-border bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-muted">
            The same quality standard on every booking.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map(({ title, description }) => (
              <article
                key={title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="h-2 bg-brand" />
                <div className="flex flex-1 flex-col border-t border-border bg-white px-5 py-5">
                  <h3 className="font-semibold text-text-main transition-colors duration-200 group-hover:text-brand">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="bg-bg-subtle px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            Legendary proof
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-main">
            &quot;I thought honest mechanics were a myth. Julian fixed the issue,
            explained everything clearly, and even checked extra items for free.&quot;
          </p>
          <p className="mt-6 text-text-muted">
            &quot;Fair price, no nonsense, and my car runs better than it has in years.
            This is the mechanic you save in your favorites.&quot;
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proofCards.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-brand">{title}</h3>
                <p className="mt-2 text-sm text-text-muted">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-sm">
            <Image
              src="/images/extra-mile-business-card.png"
              alt="Extra Mile Mechanic business card"
              width={1024}
              height={683}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-black py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stop searching. Start driving.
          </h2>
          <p className="mt-4 text-zinc-300">
            Call or WhatsApp now. Reliable, honest, and built on integrity.
          </p>
          <p className="mt-6 text-4xl font-bold text-brand sm:text-5xl">065 003 4437</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="tel:+27650034437" className="btn-primary inline-block px-8 py-3.5 text-base">
              Call now
            </Link>
            <Link href="https://wa.me/27650034437" className="btn-secondary inline-block border-white/40 bg-white/10 px-8 py-3.5 text-base text-white hover:bg-white/20">
              WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 p-3 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-center gap-3">
          <Link href="tel:+27650034437" className="btn-primary flex-1 text-center">
            Call now
          </Link>
          <Link href="https://wa.me/27650034437" className="btn-secondary flex-1 border-white/30 bg-white/10 text-center text-white hover:bg-white/20">
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
