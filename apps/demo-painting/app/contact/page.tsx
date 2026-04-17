import type { Metadata } from "next";
import { paintingConfig as config } from "@bestlocal/templates";
import { LeadForm, EmergencyBadge } from "@bestlocal/ui";

export const metadata: Metadata = {
  title: `Contact ${config.businessName} | ${config.primaryLocation}`,
  description: `Contact ${config.businessName}. Free estimates. Same-day service available.`,
};

export default function ContactPage() {
  const phoneDigits = config.phone.replace(/\D/g, "");
  return (
    <>
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Get in touch</h1>
          <p className="text-slate-300 text-lg">Call us or request a free estimate. Same-day response.</p>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-6">Contact info</h2>
            <div className="space-y-5">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Phone</div>
                <a href={`tel:${phoneDigits}`} className="text-2xl font-black text-orange-500 hover:text-orange-600">{config.phone}</a>
              </div>
              {config.email && (
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Email</div>
                  <a href={`mailto:${config.email}`} className="text-slate-700 hover:text-slate-900 font-medium">{config.email}</a>
                </div>
              )}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Service areas</div>
                <div className="flex flex-wrap gap-2">
                  {config.locations.map((loc: any) => (
                    <span key={loc.slug} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">📍 {loc.city}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Hours</div>
                <div className="text-slate-700">Monday–Saturday · 7am–7pm</div>
              </div>
            </div>
            <a href={`tel:${phoneDigits}`} className="mt-8 flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-black text-xl px-7 py-5 rounded-xl transition-colors w-fit">
              📞 Call {config.phone}
            </a>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-xl font-black text-slate-900 mb-1">Request a free estimate</h2>
            <p className="text-slate-500 text-sm mb-6">You'll get a response immediately.</p>
            <LeadForm config={config} />
          </div>
        </div>
      </section>
    </>
  );
}
