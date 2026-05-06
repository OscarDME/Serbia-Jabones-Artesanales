import { copy } from "@/lib/copy";
import { MessageSquare, Check, CheckCheck } from "lucide-react";

const AVATAR_GRADIENTS = [
  "from-rose-400 to-pink-500",
  "from-pink-400 to-fuchsia-500",
  "from-amber-400 to-rose-400",
  "from-rose-300 to-amber-400",
];

function initial(name) {
  return name?.charAt(0).toUpperCase() || "?";
}

export default function ReviewScreenshots() {
  const { reviewScreenshots } = copy;
  return (
    <section className="py-20 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[var(--color-cream)] via-white to-[var(--color-brand-soft)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <MessageSquare className="w-9 h-9 mx-auto text-[var(--color-brand-dark)] mb-3" />
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
            {reviewScreenshots.headline}
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            {reviewScreenshots.subheadline}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviewScreenshots.items.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <header className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-dark)] text-white">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} text-white font-extrabold flex items-center justify-center shadow-sm ring-2 ring-white/30`}
                >
                  {initial(item.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-extrabold leading-tight truncate">{item.name}</p>
                  <p className="text-[11px] opacity-80 leading-tight flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                    {reviewScreenshots.onlineLabel}
                  </p>
                </div>
                <span className="text-[11px] opacity-80 font-semibold">{item.timeLabel}</span>
              </header>

              <div
                className="flex-1 p-4 space-y-2 bg-[var(--color-cream)]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 0%, rgba(225,29,72,0.06), transparent 40%), radial-gradient(circle at 80% 100%, rgba(245,158,11,0.07), transparent 45%)",
                }}
              >
                {item.messages.map((m, j) => (
                  <div key={j} className="flex justify-end">
                    <div className="relative max-w-[85%] bg-white rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm border border-rose-100">
                      <p className="text-[13.5px] text-[var(--color-ink)] leading-snug">{m.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-0.5 text-[10px] text-slate-400">
                        <span>{item.timeLabel}</span>
                        <CheckCheck className="w-3 h-3 text-[var(--color-brand)]" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <footer className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--color-brand)]" strokeWidth={3} />
                <span className="text-[11px] text-slate-400 italic">{reviewScreenshots.typingLabel}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
