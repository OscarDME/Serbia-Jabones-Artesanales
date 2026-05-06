"use client";

import { copy } from "@/lib/copy";
import { Award, ShieldCheck, Lock, BadgeCheck } from "lucide-react";

const ICONS = { Award, ShieldCheck, Lock, BadgeCheck };

export default function Guarantee() {
  const { guarantee } = copy;
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[var(--color-brand-light)]/50 via-white to-[var(--color-cream)] rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <img
              src="/guarantee-badge.webp"
              alt={guarantee.badgeAlt}
              className="w-32 md:w-40 h-auto mx-auto drop-shadow-xl"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span className="inline-block text-xs md:text-sm font-extrabold tracking-wider text-[var(--color-brand-dark)] bg-[var(--color-brand-light)] px-3 py-1 rounded-full uppercase">
              {guarantee.badgeLabel}
            </span>
          </div>

          <h2 className="mt-6 text-2xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)] uppercase leading-tight max-w-3xl mx-auto">
            {guarantee.headline}
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto">
            {guarantee.text}
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {guarantee.certs.map((c, i) => {
              const Icon = ICONS[c.icon] || Award;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-4 md:p-5 shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <p className="text-xs md:text-sm font-bold text-[var(--color-ink)] text-center leading-tight">
                    {c.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
