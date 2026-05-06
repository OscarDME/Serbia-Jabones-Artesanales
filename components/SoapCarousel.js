import { copy } from "@/lib/copy";

export default function SoapCarousel() {
  const { soapCarousel } = copy;
  const loop = [...soapCarousel.items, ...soapCarousel.items];
  return (
    <section
      aria-label="galería de jabones"
      className="py-4 md:py-5 px-0 bg-[var(--color-cream)] border-y border-[var(--color-brand-light)]/60 overflow-hidden"
    >
      <div className="no-scrollbar overflow-x-auto">
        <ul className="flex items-center gap-3 md:gap-4 px-4 md:px-6 w-max">
          {loop.map((item, i) => (
            <li
              key={i}
              className="shrink-0 rounded-xl overflow-hidden border border-white/60 shadow-sm bg-white"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="block h-20 md:h-24 w-auto object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
