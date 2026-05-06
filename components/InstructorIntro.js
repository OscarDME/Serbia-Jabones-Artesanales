import { copy } from "@/lib/copy";
import { Quote } from "lucide-react";

export default function InstructorIntro() {
  const { instructorIntro } = copy;
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-[var(--color-brand-light)]/40 via-white to-[var(--color-cream)] rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">
          <Quote className="w-10 h-10 mx-auto mb-4 text-[var(--color-brand)]" />
          <p className="text-lg md:text-2xl font-bold text-[var(--color-ink)] leading-snug">
            {instructorIntro.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
