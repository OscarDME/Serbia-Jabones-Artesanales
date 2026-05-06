import { copy } from "@/lib/copy";
import { BookOpen, Library } from "lucide-react";

export default function CourseContent() {
  const { courseContent } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
          {courseContent.headline}
        </h2>
        <p className="mt-3 text-lg md:text-xl text-[var(--color-brand-dark)] font-bold">
          {courseContent.subheadline}
        </p>

        <div className="mt-10 inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] text-sm md:text-base font-extrabold px-5 py-2 rounded-full">
          <Library className="w-5 h-5" />
          {courseContent.sectionLabel}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">
          {courseContent.paragraphs.map((p, i) => (
            <article
              key={i}
              className="bg-gradient-to-br from-[var(--color-brand-light)]/40 to-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm hover:shadow-lg transition-all"
            >
              <BookOpen className="w-7 h-7 text-[var(--color-brand-dark)] mb-3" />
              <p className="text-[15px] md:text-base leading-relaxed text-slate-700">
                <span className="font-extrabold text-[var(--color-ink)]">{p.bold}</span>
                {p.rest}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
