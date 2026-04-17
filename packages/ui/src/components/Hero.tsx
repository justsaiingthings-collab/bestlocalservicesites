import Link from "next/link";
import type { SiteConfig } from "../types/site-config";
import { EmergencyBadge } from "./EmergencyBadge";

interface HeroProps {
  config: SiteConfig;
  /** Override headline for a specific city, e.g. "24/7 Roof Repair in Bellevue" */
  locationOverride?: string;
}

export function Hero({ config, locationOverride }: HeroProps) {
  const headline =
    locationOverride ??
    (config.isEmergencyService
      ? (config.emergencyHeadline ?? config.heroHeadline)
      : config.heroHeadline);

  const phoneDigits = config.phone.replace(/\D/g, "");
  const hasVideo = !!config.heroVideo;

  return (
    <section className="relative min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden bg-slate-950">

      {/* ── Video background ── */}
      {hasVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={config.heroVideo}
          poster={config.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}

      {/* ── Static image fallback (shown when no video) ── */}
      {!hasVideo && config.heroPoster && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.heroPoster})` }}
          aria-hidden="true"
        />
      )}

      {/* ── Dark gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background: hasVideo || config.heroPoster
            ? "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.25) 100%)"
            : "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 max-w-2xl">
            {/* Reviews badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 shadow-xl">
              <div className="flex text-yellow-400 text-sm">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                4.9/5 Rating (500+ Reviews)
              </span>
            </div>

            {config.isEmergencyService && (
              <div className="mb-5 animate-pulse-once">
                <EmergencyBadge available247={config.available247} />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-white mb-6 drop-shadow-2xl">
              {headline}
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl drop-shadow">
              {config.heroSubheadline}
            </p>

            {/* Instant-response badge */}
            <div className="flex items-center gap-2 text-sm text-green-400 font-bold mb-10 bg-green-400/10 self-start px-3 py-1 rounded-lg border border-green-400/20 max-w-max">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              Real people answer – Same day response promise.
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${phoneDigits}`}
                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-black text-xl px-10 py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] transition-all hover:scale-105 hover:-translate-y-1"
              >
                <span className="text-2xl">📞</span>
                {config.isEmergencyService
                  ? `Call Now – ${config.phone}`
                  : `Call ${config.phone}`}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all hover:scale-105 hover:-translate-y-1"
              >
                <span>📋</span>
                {config.isEmergencyService
                  ? "Instant Quote"
                  : "Free Estimate"}
              </Link>
            </div>

            {/* Location pills */}
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-400 text-sm font-bold w-full mb-1">Serving:</span>
              {config.locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${loc.slug}`}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
                >
                  {loc.city}
                </Link>
              ))}
            </div>
          </div>

          {/* Technician Photo (Desktop only or prominent on mobile) */}
          {(config.technicianImage || config.heroPoster) && (
            <div className="hidden lg:block flex-shrink-0 w-1/3 max-w-sm relative">
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full" />
              <img 
                src={config.technicianImage || config.heroPoster} 
                alt={config.heroImageAlt || "Our Technician"}
                className="relative rounded-3xl shadow-2xl border-4 border-white/10 object-cover w-full aspect-[4/5] object-top"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-slate-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <div className="text-slate-900 font-black text-sm">Background Checked</div>
                  <div className="text-slate-500 text-xs font-bold">Safe & Professional</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }}
        aria-hidden="true"
      />

    </section>
  );
}
