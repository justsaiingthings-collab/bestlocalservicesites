import Link from "next/link";
import type { SiteConfig } from "../types/site-config";

export function ServiceGrid({ config }: { config: SiteConfig }) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
          Our Services
        </h2>
        <p className="text-slate-500 mb-10">
          Serving {config.locations.map((l) => l.city).join(", ")} &amp; surrounding areas
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-slate-200 hover:border-orange-400 rounded-2xl p-6 transition-all hover:shadow-md"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                {service.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.shortDesc}
              </p>
              <div className="mt-4 text-orange-500 font-semibold text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
