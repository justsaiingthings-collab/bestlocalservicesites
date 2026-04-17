import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { hvacConfig as config } from "@bestlocal/templates";
import { CTASection, EmergencyBadge } from "@bestlocal/ui";

interface Props { params: { location: string; service: string } }

export function generateStaticParams() {
  return config.locations.flatMap((loc) =>
    config.services.map((svc) => ({ location: loc.slug, service: svc.slug }))
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = config.locations.find((l) => l.slug === params.location);
  const svc = config.services.find((s) => s.slug === params.service);
  if (!loc || !svc) return {};
  return {
    title: `${svc.name} in ${loc.city} | ${config.businessName}`,
    description: `${svc.shortDesc} Serving ${loc.city}. Call ${config.phone}.`,
  };
}

export default function LocationServicePage({ params }: Props) {
  const loc = config.locations.find((l) => l.slug === params.location);
  const svc = config.services.find((s) => s.slug === params.service);
  if (!loc || !svc) notFound();
  const phoneDigits = config.phone.replace(/\D/g, "");

  return (
    <>
      <section className="relative min-h-[440px] flex items-center bg-slate-950 overflow-hidden">
        {config.heroPoster && (
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${config.heroPoster})` }} aria-hidden="true" />
        )}
        <div className="absolute inset-0" aria-hidden="true"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 100%)" }} />
        <div className="relative z-10 w-full px-4 py-16">
          <div className="max-w-6xl mx-auto max-w-2xl">
            {config.isEmergencyService && (
              <div className="mb-4"><EmergencyBadge available247={config.available247} /></div>
            )}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href={`/${loc.slug}`} className="hover:text-white">{loc.city}</Link>
              <span>/</span>
              <span className="text-slate-300">{svc.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">
              {svc.icon} {svc.name} in {loc.city}
            </h1>
            <p className="text-slate-200 text-lg mb-8">
              {svc.longDesc ?? svc.shortDesc} Serving {loc.city} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${phoneDigits}`}
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-7 py-4 rounded-xl shadow-xl transition-all hover:scale-105">
                📞 {config.phone}
              </a>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 bg-white/15 border border-white/30 backdrop-blur-sm text-white font-bold text-lg px-7 py-4 rounded-xl shadow-xl transition-all hover:scale-105 hover:bg-white/25">
                📋 Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {svc.problems && svc.problems.length > 0 && (
        <section className="bg-white py-12 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Common problems in {loc.city}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {svc.problems.map((p: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                  <span className="text-orange-500 text-lg flex-shrink-0">⚠️</span>
                  <span className="text-slate-700 font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-6">More HVAC services in {loc.city}</h2>
          <div className="flex flex-wrap gap-3">
            {config.services.filter((s) => s.slug !== svc.slug).map((s) => (
              <Link key={s.slug} href={`/${loc.slug}/${s.slug}`}
                className="bg-white border border-slate-200 hover:border-orange-400 text-slate-700 hover:text-orange-600 text-sm font-medium px-4 py-2 rounded-full transition-all">
                {s.icon} {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-6">{svc.name} in other areas</h2>
          <div className="flex flex-wrap gap-3">
            {config.locations.filter((l) => l.slug !== loc.slug).map((l) => (
              <Link key={l.slug} href={`/${l.slug}/${svc.slug}`}
                className="bg-slate-50 border border-slate-200 hover:border-orange-400 text-slate-700 hover:text-orange-600 text-sm font-medium px-4 py-2 rounded-full transition-all">
                📍 {svc.name} in {l.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {svc.faqs && svc.faqs.length > 0 && (
        <section className="bg-slate-50 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6">FAQ — {loc.city}</h2>
            <div className="space-y-4">
              {svc.faqs.map((faq: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100">
                  <div className="font-bold text-slate-900 mb-2">{faq.q}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection config={config} />
    </>
  );
}
