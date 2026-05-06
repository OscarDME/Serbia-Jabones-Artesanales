"use client";

import { copy } from "@/lib/copy";
import { Zap } from "lucide-react";

export default function ClosingProof() {
  const { closingProof } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[var(--color-brand-light)]/40 via-white to-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
            {closingProof.headlinePre}{" "}
            <span className="text-[var(--color-brand-dark)] underline decoration-4 decoration-[var(--color-accent)]/50 underline-offset-4">
              {closingProof.headlineHighlight}
            </span>
            {closingProof.headlinePost}
          </h2>
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-lg px-8 py-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(225,29,72,0.6)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
          >
            <Zap className="w-5 h-5" />
            {closingProof.ctaLabel}
          </a>
        </div>
        <div className="relative max-w-md mx-auto animate-float-slow">
          <div className="absolute inset-0 -z-10 bg-[var(--color-brand)]/15 blur-3xl rounded-full" />
          <img
            src="/checkout-mockup.webp"
            alt={closingProof.imageAlt}
            className="w-full h-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
