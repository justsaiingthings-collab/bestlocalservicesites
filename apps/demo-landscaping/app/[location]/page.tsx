import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landscapingConfig as config } from "@bestlocal/templates";
import { Hero, TrustSection, WhyChooseUs, CTASection } from "@bestlocal/ui";

interface Props { params: { location: string } }

export function generateStaticParams() {
  return config.locations.map((loc: any) => ({ location: loc.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = config.locations.find((l: any) => l.slug === params.location);
  if (!loc) return {};
  return {
    title: `Landscaping in ${loc.city} | ${config.businessName}`,
    description: `${config.businessName} serving ${loc.city}. ${config.tagline} Call ${config.phone}.`,
  };
}

export default function LocationPage({ params }: Props) {
  const loc = config.locations.find((l: any) => l.slug === params.location);
  if (!loc) notFound();

  const localConfig = {
    ...config,
    heroHeadline: `Landscaping Services in ${loc.city}`,
    heroSubheadline: `${config.heroSubheadline.replace("Seattle, Bellevue & Redmond", loc.city)}`,
  };

  return (
    <>
      <Hero config={localConfig} />
      <TrustSection config={config} />
      <section className="bg-white py-10 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-6">
            Landscaping services in {loc.city}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.services.map((service: any) => (
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
