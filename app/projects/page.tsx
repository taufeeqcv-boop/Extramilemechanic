import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and case studies from Vesani Engineering: modular building solutions and design engineering.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="A selection of projects we have delivered using our modular building systems and design engineering services."
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-md sm:p-10">
          <p className="leading-relaxed text-text-main">
            Case studies and project details will be added here. In the
            meantime, see our{" "}
            <Link
              href="/"
              className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
            >
              home page
            </Link>{" "}
            for an overview of what we offer, or{" "}
            <Link
              href="/contact"
              className="font-medium text-brand underline hover:no-underline transition-colors duration-200 hover:text-brand-hover"
            >
              contact us
            </Link>{" "}
            to discuss your project.
          </p>
        </div>
      </div>
    </div>
  );
}
