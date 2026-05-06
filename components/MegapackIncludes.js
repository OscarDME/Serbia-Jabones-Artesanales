import { copy } from "@/lib/copy";
import { Package, Check } from "lucide-react";

export default function MegapackIncludes() {
  const { megapack } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-gradient-to-b from-white via-[var(--color-cream)]/40 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full mb-4">
            <Package className="w-4 h-4" />
            {megapack.kicker}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {megapack.headline}
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <ul className="space-y-3">
            {megapack.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="w-9 h-9 shrink-0 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] flex items-center justify-center">
                  <Check className="w-5 h-5" strokeWidth={3} />
                </span>
                <p className="text-base md:text-lg leading-snug text-slate-700">
                  <span className="font-extrabold text-[var(--color-ink)]">{item.bold}</span>{" "}
                  {item.rest}
                </p>
              </li>
            ))}
          </ul>

          <div className="relative max-w-[360px] mx-auto animate-float-slow">
            <div className="absolute inset-0 -z-10 bg-[var(--color-brand)]/15 blur-3xl rounded-full" />
            <img
              src="/megapack-mockup.webp"
              alt={megapack.imageAlt}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
