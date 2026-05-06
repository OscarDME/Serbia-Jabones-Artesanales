import { copy } from "@/lib/copy";
import { Leaf, ShieldCheck, Sparkles, TrendingUp, Check } from "lucide-react";

const ICONS = { Leaf, ShieldCheck, Sparkles, TrendingUp };

export default function Benefits() {
  const { benefits } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-[var(--color-brand-light)]/30 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {benefits.headline}
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.items.map((item, i) => {
              const Icon = ICONS[item.icon] || Sparkles;
              return (
                <li
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </div>
                  <p className="text-[15px] md:text-base font-extrabold text-[var(--color-ink)] leading-snug">
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white rounded-3xl p-7 md:p-8 shadow-xl">
            <div className="relative">
              <img
                src="/hands-soap.webp"
                alt={benefits.imageAlt}
                className="w-full h-48 md:h-52 object-cover rounded-2xl mb-5 shadow-md"
              />
            </div>
            <ul className="space-y-3">
              {benefits.checklist.map((c, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-base md:text-lg font-bold">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
