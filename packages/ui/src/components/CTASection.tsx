import type { SiteConfig } from "../types/site-config";
import { LeadForm } from "./LeadForm";

export function CTASection({ config }: { config: SiteConfig }) {
  const phoneDigits = config.phone.replace(/\D/g, "");

  return (
    <section className="bg-slate-900 text-white py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Call CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              {config.isEmergencyService
                ? "Need help now?"
                : "Ready to get started?"}
            </h2>
            <p className="text-slate-300 mb-8">
              {config.isEmergencyService
                ? "Call us any time — we answer 24/7. Most calls are answered in under 2 minutes."
                : "Call us or fill out the form. We'll get back to you same day."}
            </p>

            <a
              href={`tel:${phoneDigits}`}
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black text-xl px-8 py-5 rounded-xl transition-colors w-fit mb-6"
            >
              📞 {config.phone}
            </a>

            {config.isEmergencyService && (
              <p className="text-green-400 font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                Available 24 hours · 7 days a week
              </p>
            )}

            {/* Location list */}
            <div className="mt-8">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wide mb-3">
                We serve:
              </p>
              <div className="flex flex-wrap gap-2">
                {config.locations.map((loc) => (
                  <span
                    key={loc.slug}
                    className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full"
                  >
                    📍 {loc.city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Lead form */}
          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <h3 className="text-xl font-black mb-1">Request a free estimate</h3>
            <p className="text-slate-500 text-sm mb-6">
              You'll get a response immediately.
            </p>
            <LeadForm config={config} />
          </div>
        </div>
      </div>
    </section>
  );
}
