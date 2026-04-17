import type { SiteConfig } from "../types/site-config";

export function WhyChooseUs({ config }: { config: SiteConfig }) {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Why {config.locations[0]?.city ?? "Local"} homeowners choose us
            </h2>
            <p className="text-slate-500 mb-8">
              We show up on time, do the job right, and answer the phone.
            </p>
            <ul className="space-y-4">
              {config.whyUs.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick stats card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="text-center mb-6">
              <div className="text-5xl font-black text-orange-500">{config.rating}</div>
              <div className="text-slate-500 text-sm mt-1">
                out of 5 · {config.reviewCount.toLocaleString()} reviews
              </div>
            </div>
            <div className="space-y-3 text-sm">
              {config.isEmergencyService && (
                <div className="flex items-center gap-2 text-red-600 font-semibold">
                  <span>🚨</span> 24/7 Emergency Response
                </div>
              )}
              <div className="flex items-center gap-2 text-slate-700">
                <span>🛡️</span> Licensed &amp; Fully Insured
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span>⚡</span> Same-Day Service Available
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span>📍</span> Locally owned in {config.primaryLocation}
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span>💰</span> Free estimates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
