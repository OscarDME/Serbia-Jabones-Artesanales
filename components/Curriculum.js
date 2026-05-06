"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { ChevronDown, BookMarked, GraduationCap } from "lucide-react";

export default function Curriculum() {
  const { curriculum } = copy;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <GraduationCap className="w-10 h-10 mx-auto mb-3 text-[var(--color-brand-dark)]" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)]">
            {curriculum.headline}
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600">{curriculum.subheadline}</p>
        </div>

        <div className="mt-12 space-y-3">
          {curriculum.courses.map((course, i) => {
            const open = openIdx === i;
            const isBonus = course.title.toLowerCase().includes("bonus");
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  open
                    ? isBonus
                      ? "border-[var(--color-accent)]/50 shadow-md bg-[var(--color-cream)]/40"
                      : "border-[var(--color-brand)]/40 shadow-md bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-6 py-5 gap-4"
                  aria-expanded={open}
                >
                  <span className="flex items-center gap-3">
                    <BookMarked
                      className={`w-5 h-5 shrink-0 ${
                        isBonus ? "text-[var(--color-accent-dark)]" : "text-[var(--color-brand-dark)]"
                      }`}
                    />
                    <span className="text-[15px] md:text-base font-extrabold text-[var(--color-ink)]">
                      {course.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      open ? "rotate-180" : ""
                    } ${isBonus ? "text-[var(--color-accent-dark)]" : "text-[var(--color-brand-dark)]"}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <ul className="px-5 md:px-6 pb-5 space-y-2">
                    {course.lessons.map((lesson, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[14px] md:text-[15px] text-slate-700 leading-relaxed"
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            isBonus ? "bg-[var(--color-accent)]" : "bg-[var(--color-brand)]"
                          }`}
                        />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
