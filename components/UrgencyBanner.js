import { copy } from "@/lib/copy";
import { AlarmClock } from "lucide-react";

export default function UrgencyBanner() {
  const { urgencyBanner } = copy;
  return (
    <section className="relative py-12 md:py-14 px-4 md:px-6 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-dark)] to-[var(--color-accent)] text-white overflow-hidden">
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
        <AlarmClock className="w-10 h-10 md:w-12 md:h-12 shrink-0 animate-pulse-soft" />
        <p className="text-base md:text-xl lg:text-2xl font-extrabold leading-snug">
          <span className="inline-block bg-white text-[var(--color-accent-dark)] px-2 py-0.5 rounded mr-1.5 font-black">
            {urgencyBanner.discount}
          </span>{" "}
          {urgencyBanner.plus} {urgencyBanner.middle}{" "}
          <span className="underline decoration-2 decoration-white/70 underline-offset-2">
            {urgencyBanner.deadline}
          </span>{" "}
          {urgencyBanner.or}{" "}
          <span className="inline-block bg-white text-[var(--color-accent-dark)] px-2 py-0.5 rounded font-black">
            {urgencyBanner.slots}
          </span>
        </p>
      </div>
    </section>
  );
}
