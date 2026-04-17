import type { Metadata } from "next";
import { landscapingConfig as config } from "@bestlocal/templates";
import { CTASection } from "@bestlocal/ui";

export const metadata: Metadata = {
  title: `About ${config.businessName} | ${config.primaryLocation}`,
  description: config.aboutBody?.slice(0, 160),
};

export default function AboutPage() {
  const phoneDigits = config.phone.replace(/\D/g, "");
  return (
    <>
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {config.aboutHeadline ?? `About ${config.businessName}`}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">{config.tagline}</p>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Our story</h2>
            <p className="text-slate-600 leading-relaxed">{config.aboutBody}</p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="text-3xl font-black text-orange-500">{config.yearsInBusiness ?? 10}+</div>
                <div className="text-slate-500 text-sm">Years in business</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-500">
                  {config.jobsCompleted ? `${(config.jobsCompleted/1000).toFixed(1)}k` : "1k+"}
                </div>
                <div className="text-slate-500 text-sm">Jobs completed</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-500">{config.rating}</div>
                <div className="text-slate-500 text-sm">Average rating</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-500">{config.locations.length}</div>
                <div className="text-slate-500 text-sm">Service cities</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-black text-slate-900 mb-4">Certifications & credentials</h3>
              <ul className="space-y-2">
                {config.certifications.map((cert: any) => (
                  <li key={cert.name} className="flex items-center gap-2 text-slate-700 text-sm">
                    <span className="text-green-500">✓</span>{cert.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h3 className="font-black mb-3">Call us directly</h3>
              <p className="text-slate-300 text-sm mb-4">Mon–Sat, 7am–7pm. Real people answer.</p>
              <a href={`tel:${phoneDigits}`} className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                📞 {config.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTASection config={config} />
    </>
  );
}
