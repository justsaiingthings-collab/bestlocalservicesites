import type { SiteConfig } from "../types/site-config";
import { AnimatedCounter } from "./AnimatedCounter";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <span className="flex gap-0.5">
      {[...Array(full)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
      {rating % 1 >= 0.5 && <span className="text-yellow-400 text-lg">½</span>}
    </span>
  );
}

export function TrustSection({ config }: { config: SiteConfig }) {
  const years =
    config.yearsInBusiness ??
    new Date().getFullYear() - (config.yearFounded ?? 2010);
  const jobs = config.jobsCompleted ?? 1200;

  return (
    <section className="bg-white py-20 px-4 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Trusted by your neighbors
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We've built our reputation on quality work, fair pricing, and showing up when we say we will.
          </p>
        </div>

        {/* Animated stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { 
              val: <AnimatedCounter to={Math.round(config.rating * 10)} suffix="" duration={1200} />, 
              label: "Average Rating", 
              sub: <StarRating rating={config.rating} />,
              extra: `${config.reviewCount} customer reviews`
            },
            { val: <AnimatedCounter to={years} suffix="+" />, label: "Years in business", extra: `Founded in ${config.yearFounded}` },
            { val: <AnimatedCounter to={jobs >= 1000 ? Math.round(jobs / 100) * 100 : jobs} suffix="+" />, label: "Jobs Completed", extra: "Quality guaranteed" },
            { val: <AnimatedCounter to={config.locations.length} suffix="" />, label: "Service Areas", extra: config.primaryLocation }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-slate-50 border border-slate-100/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-white">
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                {stat.val}
              </div>
              {stat.sub && <div className="flex justify-center mb-2">{stat.sub}</div>}
              <div className="text-sm font-black text-slate-900 uppercase tracking-widest">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-1 font-bold">{stat.extra}</div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        {config.certifications.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {config.certifications.map((cert) => (
              <span
                key={cert.name}
                className="inline-flex items-center gap-2 bg-white border-2 border-slate-100 rounded-2xl px-6 py-3 text-sm font-bold text-slate-600 shadow-sm hover:border-orange-300 transition-all hover:scale-105"
              >
                <span className="text-green-500 font-black">✓</span> {cert.name}
              </span>
            ))}
          </div>
        )}

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {config.testimonials.slice(0, 3).map((t, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all relative"
            >
              <div className="absolute top-8 right-8 text-6xl text-slate-100 font-serif leading-none opacity-50 select-none group-hover:text-orange-100 transition-colors">"</div>
              <StarRating rating={t.rating} />
              <p className="mt-6 text-slate-700 text-lg leading-relaxed relative z-10 font-medium italic">
                {t.text}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-black text-slate-900 uppercase tracking-tight">{t.name}</div>
                  <div className="text-slate-500 text-xs font-bold">{t.city} • {t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
