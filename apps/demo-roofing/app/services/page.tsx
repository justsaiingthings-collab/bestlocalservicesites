import type { Metadata } from "next";
import Link from "next/link";
import { roofingConfig as config } from "@bestlocal/templates";
import { CTASection } from "@bestlocal/ui";

export const metadata: Metadata = {
  title: `Roofing Services in ${config.primaryLocation} | ${config.businessName}`,
  description: `All roofing services from ${config.businessName}: repair, replacement, storm damage, gutters. Serving ${config.locations.map((l) => l.city).join(", ")}.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our Roofing Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            From emergency repairs to full replacements — serving Seattle, Bellevue & Redmond.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service) => (
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
              {service.problems && service.problems.length > 0 && (
                <ul className="mt-4 space-y-1">
                  {service.problems.slice(0, 3).map((p, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-center gap-1.5">
                      <span className="text-orange-400">›</span> {p}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 text-orange-500 font-semibold text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {config.locations.map((loc) => (
              <span
                key={loc.slug}
                className="bg-white border border-slate-200 rounded-full px-5 py-2 text-sm font-medium text-slate-700"
              >
                📍 {loc.city}{loc.county ? ` · ${loc.county}` : ""}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection config={config} />
    </>
  );
}
