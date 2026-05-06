"use client";

import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { Tag, ChevronDown } from "lucide-react";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/recepti-za-rucno-pravljene-sapune";

export default function PrimaryPricing() {
  const { primaryPricing } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");
        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");
        if (src || fbclid) {
          let urlObj;
          try {
            urlObj = new URL(BASE_CHECKOUT_URL);
          } catch {
            return;
          }
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (e) {
      console.error("[PrimaryPricing] URL build error", e);
    }
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("final-cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      const cleaned = String(primaryPricing.offerPrice)
        .replace(/[^\d.,]/g, "")
        .replace(",", ".");
      const parsed = parseFloat(cleaned);
      if (Number.isFinite(parsed)) priceNum = parsed;
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "USD",
          items: [
            {
              item_id: "ecoherbal_jabones_primary",
              item_name: copy.testimonials.productLabel,
              price: priceNum,
            },
          ],
        });
      }
      console.log("[PrimaryPricing] begin_checkout fired");
    } catch (e) {
      console.error("[PrimaryPricing] analytics error", e);
    }
  };

  return (
    <section className="relative py-20 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[var(--color-brand-light)]/40 via-white to-[var(--color-cream)]">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-12 text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs md:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide mb-6">
          <Tag className="w-4 h-4" />
          {primaryPricing.discountBadge}
        </div>

        <p className="text-slate-500 text-base md:text-lg font-medium">
          {primaryPricing.valuedAtLabel}{" "}
          <span className="line-through font-bold">{primaryPricing.regularPrice}</span>
        </p>
        <p className="mt-2 text-6xl md:text-7xl font-black text-[var(--color-brand)] tracking-tight drop-shadow-sm italic">
          {primaryPricing.offerPrice}
        </p>
        <p className="mt-3 text-sm md:text-base text-[var(--color-accent-dark)] font-bold">
          {primaryPricing.payInfo}
        </p>

        <a
          href={checkoutUrl}
          onClick={(e) => {
            handleBeginCheckout();
            handleScroll(e);
          }}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold text-base md:text-xl px-6 md:px-10 py-5 md:py-6 rounded-2xl shadow-[0_15px_40px_-15px_rgba(22,163,74,0.7)] border-b-4 border-[var(--color-brand-dark)] transition-all hover:translate-y-0.5"
        >
          {primaryPricing.cta}
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
