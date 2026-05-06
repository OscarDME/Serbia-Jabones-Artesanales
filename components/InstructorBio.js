import { copy } from "@/lib/copy";
import { Sparkles } from "lucide-react";

export default function InstructorBio() {
  const { instructorBio } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-[var(--color-cream)]/40 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            {instructorBio.title}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {instructorBio.name}
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed">
            {instructorBio.bio}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-[var(--color-brand)] text-white rounded-2xl p-5 text-center shadow-md">
            <p className="text-3xl md:text-4xl font-black">{instructorBio.yearsLabel}</p>
            <p className="text-xs md:text-sm font-semibold opacity-90 mt-1">{instructorBio.yearsText}</p>
          </div>
          <div className="bg-[var(--color-accent)] text-white rounded-2xl p-5 text-center shadow-md">
            <p className="text-3xl md:text-4xl font-black">{instructorBio.studentsLabel}</p>
            <p className="text-xs md:text-sm font-semibold opacity-90 mt-1">{instructorBio.studentsText}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {instructorBio.portfolioImages.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <img
                src={src}
                alt={instructorBio.portfolioAlts[i]}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
