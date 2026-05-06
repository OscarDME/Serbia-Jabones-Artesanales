import { copy } from "@/lib/copy";
import { Users } from "lucide-react";

export default function SocialProof() {
  const { socialProof } = copy;
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-r from-[var(--color-brand-dark)] via-[var(--color-brand)] to-[var(--color-brand-dark)] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <Users className="w-10 h-10 mx-auto mb-3 text-white/80" />
        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
          {socialProof.headline}
        </h2>
        <p className="mt-4 text-base md:text-xl font-semibold text-white/90">
          {socialProof.subheadlinePre}{" "}
          <span className="font-black text-[var(--color-cream)] text-2xl md:text-3xl">
            {socialProof.countHighlight}
          </span>{" "}
          {socialProof.subheadlinePost}
        </p>
      </div>
    </section>
  );
}
