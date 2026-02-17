import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Vesani Training Academy: comprehensive training for building contractors and staff on modular systems, steel frames, panels and roofing. Skills development for the industry.",
};

const trainingLevels = [
  { level: 1, label: "Level 1 — Foundation" },
  { level: 2, label: "Level 2 — Installation" },
  { level: 3, label: "Level 3 — Advanced" },
];

export default function TrainingPage() {
  return (
    <div>
      <PageHeader
        title="Vesani Training Academy"
        subtitle="Adding value to the industry"
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8 flex flex-wrap gap-2">
            {trainingLevels.map(({ level, label }) => (
              <span
                key={level}
                className="rounded bg-brand px-2 py-1 text-xs font-medium text-white"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="space-y-6 text-text-main">
            <p className="text-lg leading-relaxed">
              Vesani operates a comprehensive training campus that specialises
              in training building contractors and their staff, equipping them
              with the knowledge they need to work with the building systems we
              manufacture and supply. This helps ensure our systems are used to
              maximum effect on site.
            </p>
            <p className="leading-relaxed">
              Attendees are trained across the full installation process: from
              installing the modular building system and erecting steel frames,
              to handling the various panels and assembling and erecting
              lightweight roof structures. We also train on completing a full
              roof—including insulation and roof covering, whether tiling or
              sheeting. While we do not provide a contracting service
              ourselves—our focus is on manufacture and supply—we believe our
              training campus fulfils an important role in the market by
              supporting skills development.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Enquire about training
            </Link>
            <a
              href="/documents/training-prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              Download prospectus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
