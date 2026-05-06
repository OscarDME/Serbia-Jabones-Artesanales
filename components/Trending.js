import { copy } from "@/lib/copy";
import { Flame } from "lucide-react";

export default function Trending() {
  const { trending } = copy;
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-[var(--color-ink)] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[var(--color-accent)]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[var(--color-brand)]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full mb-5">
            <Flame className="w-4 h-4" />
            {trending.kicker}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {trending.headline}
          </h2>
        </div>
        <div className="relative animate-float-slow">
          <img
            src="/trending-soaps.webp"
            alt={trending.imageAlt}
            className="w-full max-w-[520px] mx-auto rounded-3xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
