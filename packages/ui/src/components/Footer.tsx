import Link from "next/link";
import type { SiteConfig } from "../types/site-config";

export function Footer({ config }: { config: SiteConfig }) {
  const phoneDigits = config.phone.replace(/\D/g, "");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-white font-black text-lg mb-2">{config.businessName}</div>
            <p className="text-sm leading-relaxed">{config.tagline}</p>
            <a
              href={`tel:${phoneDigits}`}
              className="mt-4 inline-block text-orange-400 font-bold hover:text-orange-300"
            >
              📞 {config.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wide mb-3">Services</div>
            <ul className="space-y-1.5 text-sm">
              {config.services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wide mb-3">Service Areas</div>
            <ul className="space-y-1.5 text-sm">
              {config.locations.map((loc) => (
                <li key={loc.slug}>
                  <span className="hover:text-white transition-colors cursor-default">
                    {loc.city}{loc.county ? `, ${loc.county}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wide mb-3">Company</div>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">All Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              {config.isEmergencyService && (
                <li>
                  <a
                    href={`tel:${phoneDigits}`}
                    className="text-orange-400 font-bold hover:text-orange-300"
                  >
                    24/7 Emergency Line
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <span>© {year} {config.businessName}. All rights reserved.</span>
          <span>Licensed · Insured · {config.primaryLocation}</span>
        </div>
      </div>

      {/* Mobile spacer for sticky CTA bar */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}
