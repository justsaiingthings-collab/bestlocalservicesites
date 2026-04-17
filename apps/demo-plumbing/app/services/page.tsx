import type { Metadata } from "next";
import Link from "next/link";
import { plumbingConfig as config } from "@bestlocal/templates";
import { CTASection } from "@bestlocal/ui";

export const metadata: Metadata = {
  title: `Plumbing Services in ${config.primaryLocation} | ${config.businessName}`,
  description: `All plumbing services from ${config.businessName}. Serving ${config.locations.map((l: any) => l.city).join(", ")}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Plumbing Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Repairs, installations, emergency service — serving Seattle, Bellevue & Redmond.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service: any) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-slate-200 hover:border-orange-400 rounded-2xl p-7 transition-all hover:shadow-md"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h2 className="text-xl font-black text-slate-900 mb-2 group-hover:text-orange-600">
                {service.name}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">{service.shortDesc}</p>
              <div className="mt-4 text-orange-500 font-semibold text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection config={config} />
    </>
  );
}
