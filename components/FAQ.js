"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const { faq } = copy;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <HelpCircle className="w-10 h-10 mx-auto mb-3 text-[var(--color-brand-dark)]" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
            {faq.headline}
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600">{faq.subheadline}</p>
        </div>

        <div className="mt-12 space-y-3">
          {faq.items.map((it, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  open
                    ? "border-[var(--color-brand)]/40 shadow-md bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-6 py-5 gap-4"
                  aria-expanded={open}
                >
                  <span className="text-[15px] md:text-base font-extrabold text-[var(--color-ink)]">
                    {it.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[var(--color-brand-dark)] transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-[400px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 text-slate-600 text-[15px] leading-relaxed">
                    {it.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
