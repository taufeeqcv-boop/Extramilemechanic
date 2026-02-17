import Link from "next/link";
import Image from "next/image";

// Set a real project here to show on the home page. Use null to keep the generic text.
const featuredProject: {
  title: string;
  description: string;
  image?: string;
  linkUrl?: string;
} | null = null;

const workImages = [
  {
    src: "/images/hero-construction.png",
    alt: "Steel framework construction with skilled workers and crane",
    title: "Steel & structure",
    href: "/modular-solutions",
  },
  {
    src: "/images/project-harbor.png",
    alt: "Large-scale industrial construction at harbor",
    title: "Industrial & infrastructure",
    href: "/projects",
  },
  {
    src: "/images/hero-industrial.png",
    alt: "Modern industrial complex with metal roofing",
    title: "Commercial & facilities",
    href: "/modular-solutions",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero with background image */}
      <section className="relative min-h-[28rem] overflow-hidden bg-slate-900 sm:min-h-[32rem]">
        <Image
          src="/images/hero-construction.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
        <div className="relative mx-auto flex min-h-[28rem] max-w-4xl flex-col justify-center px-4 py-20 text-center text-white sm:min-h-[32rem] sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight drop-shadow-sm sm:text-4xl lg:text-5xl">
            The smarter alternative for your next build
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-200 drop-shadow-sm">
            Customise your next project with the ultimate alternative to
            traditional construction. Modern modular building solutions,
            delivered faster and built to last.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="btn-primary inline-block px-8 py-3"
            >
              View solutions
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-block border-white/60 bg-white/10 px-8 py-3 text-white hover:bg-white/20"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="sr-only">Why choose modular building</h2>
        <div className="rounded-2xl border border-border bg-bg-subtle px-6 py-10 shadow-sm sm:px-10">
          <p className="text-sm font-medium text-brand">
            Vesani is the sole agent for TEC in Southern Africa.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-text-main">
            Our modular building solutions give you a more efficient and
            cost-effective option than conventional brick-and-mortar builds,
            without compromising on quality. Choose from a wide range of
            finishes—doors, windows, surface textures, cladding, roofing,
            ceilings and more—and benefit from structural design that simplifies
            electrical and plumbing installation and supports multi-storey
            applications. We tailor your build to your taste and budget in a
            fraction of the time required by traditional methods.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            <Link href="/about" className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover">
              About us & representation
            </Link>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary inline-block px-8 py-3">
              Our services
            </Link>
            <Link href="/modular-solutions" className="btn-secondary">
              Modular solutions
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Our work - image strip */}
      <section className="border-y border-border bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-semibold text-brand">
            Our work
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-text-muted">
            Engineering and modular solutions for industrial, commercial and
            infrastructure projects.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workImages.map(({ src, alt, title, href }) => (
              <Link
                key={href + title}
                href={href}
                className="group overflow-hidden rounded-xl border border-border shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] bg-bg-subtle">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="border-t border-border bg-white px-4 py-3">
                  <span className="font-medium text-text-main transition-colors duration-200 group-hover:text-brand">
                    {title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/projects"
              className="text-sm font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
            >
              View all projects
            </Link>
          </p>
        </div>
      </section>

      {/* Featured project */}
      <section className="bg-bg-subtle px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-brand">
            {featuredProject ? featuredProject.title : "Featured project"}
          </h2>
          {featuredProject?.image && (
            <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-sm">
              <Image
                src={`/${featuredProject.image}`}
                alt=""
                width={800}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          )}
          <p className="mt-6 text-lg leading-relaxed text-text-main">
            {featuredProject
              ? featuredProject.description
              : "Major healthcare and infrastructure projects rely on alternative building systems for speed and reliability. Our modular and light-steel framing systems are designed to deliver consistent quality and rapid deployment—enabling large-scale extensions and new facilities to be completed in a fraction of the time of traditional construction. From hospital expansions to commercial and industrial builds, we support projects that demand precision, efficiency and compliance with the latest standards."}
          </p>
          <p className="mt-6 text-text-muted">
            If you have a project in mind, we can help you explore how modular
            solutions can meet your programme and budget.{" "}
            {featuredProject?.linkUrl ? (
              <>
                <Link
                  href={featuredProject.linkUrl}
                  className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
                >
                  Read more
                </Link>
                {" · "}
              </>
            ) : null}
            <Link
              href="/contact"
              className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
            >
              Contact us
            </Link>{" "}
            to discuss your requirements.
          </p>
        </div>
      </section>
    </div>
  );
}
