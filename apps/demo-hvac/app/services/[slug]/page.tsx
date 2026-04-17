import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hvacConfig as config } from "@bestlocal/templates";
import { CTASection, EmergencyBadge } from "@bestlocal/ui";
import Link from "next/link";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return config.services.map((s: any) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = config.services.find((s: any) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${config.primaryLocation} | ${config.businessName}`,
    description: service.shortDesc,
  };
}

export default function ServicePage({ params }: Props) {
  const service = config.services.find((s: any) => s.slug === params.slug);
  if (!service) notFound();
  const phoneDigits = config.phone.replace(/\D/g, "");

  return (
    <>
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto max-w-3xl">
          {config.isEmergencyService && (
            <div className="mb-4">
              <EmergencyBadge available247={config.available247} />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {service.icon} {service.name}
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            {service.longDesc ?? service.shortDesc} Serving Seattle, Bellevue & Redmond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${phoneDigits}`} className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-7 py-4 rounded-xl transition-colors">
              📞 {config.phone}
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-lg px-7 py-4 rounded-xl transition-colors">
              📋 Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {service.problems && service.problems.length > 0 && (
        <section className="bg-white py-12 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Common problems we fix</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.problems.map((p: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                  <span className="text-orange-500 text-lg">⚠️</span>
                  <span className="text-slate-700 font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-slate-50 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq: any, i: number) => (
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
