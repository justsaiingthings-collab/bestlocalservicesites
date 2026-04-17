"use client";
import type { SiteConfig } from "../types/site-config";

export function MobileStickyCTA({ config }: { config: SiteConfig }) {
  const phoneDigits = config.phone.replace(/\D/g, "");

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
      <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden grid grid-cols-2">
        <a
          href={`tel:${phoneDigits}`}
          className={`flex flex-col items-center justify-center py-4 text-white font-black text-xs gap-1 transition-all active:scale-95 ${
            config.isEmergencyService ? 'bg-red-600' : 'bg-orange-500'
          }`}
        >
          <span className="text-xl animate-bounce-subtle">📞</span>
          <span className="uppercase tracking-tighter">
            {config.isEmergencyService ? "Call 24/7" : "Call Now"}
          </span>
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center justify-center py-4 bg-slate-900/90 text-white font-black text-xs gap-1 transition-all active:scale-95 border-l border-white/10"
        >
          <span className="text-xl">📋</span>
          <span className="uppercase tracking-tighter text-slate-300">Get Quote</span>
        </a>
      </div>
    </div>
  );

}
