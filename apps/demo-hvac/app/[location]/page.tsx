import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hvacConfig as config } from "@bestlocal/templates";
import { Hero, TrustSection, ServiceGrid, WhyChooseUs, CTASection } from "@bestlocal/ui";

interface Props { params: { location: string } }

export function generateStaticParams() {
  return config.locations.map((loc) => ({ location: loc.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = config.locations.find((l) => l.slug === params.location);
  if (!loc) return {};
  return {
    title: `HVAC Service in ${loc.city} | ${config.businessName}`,
    description: `${config.businessName} — AC repair, heating, and HVAC installation in ${loc.city}. 24/7 emergency service. Call ${config.phone}.`,
  };
}

export default function LocationPage({ params }: Props) {
  const loc = config.locations.find((l) => l.slug === params.location);
  if (!loc) notFound();

  const localConfig = {
    ...config,
    emergencyHeadline: `24/7 Emergency HVAC Repair in ${loc.city}`,
    heroHeadline: `AC Out in ${loc.city}? We Fix It Today.`,
    heroSubheadline: `HVAC repair and installation in ${loc.city}. 24/7 emergency service. Most repairs done same day.`,
  };

  return (
    <>
      <Hero config={localConfig} />
      <TrustSection config={config} />
      <section className="bg-white py-10 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-6">HVAC services in {loc.city}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.services.map((service) => (
              <a key={service.slug} href={`/${loc.slug}/${service.slug}`}
                className="group flex items-start gap-3 border border-slate-200 hover:border-orange-400 rounded-xl p-4 transition-all hover:shadow-sm">
                <span className="text-2xl">{service.icon}</span>
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.name} in {loc.city}
                  </div>
                  <div className="text-slate-500 text-sm mt-0.5">{service.shortDesc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs config={config} />
      <CTASection config={config} />
    </>
  );
}
