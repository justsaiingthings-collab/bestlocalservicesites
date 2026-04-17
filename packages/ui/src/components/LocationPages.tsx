import Link from "next/link";
import type { SiteConfig, Location, ServiceItem } from "../types/site-config";

interface LocationServicePageProps {
  config: SiteConfig;
  location: Location;
  service: ServiceItem;
}

export function LocationServicePage({ config, location, service }: LocationServicePageProps) {
  const phoneDigits = config.phone.replace(/\D/g, "");

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto max-w-3xl">
          <div className="text-orange-400 font-semibold text-sm uppercase tracking-wide mb-2">
            {location.city} · {service.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {service.name} in {location.city}
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            {service.shortDesc} We serve {location.city}{location.county ? `, ${location.county}` : ""} and surrounding areas.
          </p>
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-xl px-8 py-4 rounded-xl transition-colors"
          >
            📞 Call {config.phone}
          </a>
        </div>
      </section>

      {/* Problems */}
      {service.problems && service.problems.length > 0 && (
        <section className="bg-white py-12 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6">
              Common issues we fix in {location.city}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                  <span className="text-orange-500 text-lg mt-0.5">⚠️</span>
                  <span className="text-slate-700 font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-slate-50 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100">
                  <div className="font-bold text-slate-900 mb-2">{faq.q}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-orange-500 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">
            Ready for {service.name} in {location.city}?
          </h2>
          <p className="mb-6 text-orange-100">
            Call now or request a free estimate below. We respond immediately.
          </p>
          <a
            href={`tel:${phoneDigits}`}
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-black text-xl px-8 py-4 rounded-xl transition-colors"
          >
            📞 {config.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
