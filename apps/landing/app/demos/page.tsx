import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Demos | Best Local Service Sites",
  description:
    "See live conversion-optimized websites built for roofing, HVAC, plumbing, landscaping, cleaning, and painting contractors.",
  alternates: { canonical: "/demos/" },
};

const demos = [
  { name: "Roofing", slug: "roofing", emoji: "🏠", emergency: true, desc: "Emergency-ready roofing site with 24/7 CTA matrix and storm damage funnel." },
  { name: "HVAC", slug: "hvac", emoji: "❄️", emergency: true, desc: "High-urgency HVAC site built for same-day service calls and seasonal peaks." },
  { name: "Plumbing", slug: "plumbing", emoji: "🔧", emergency: true, desc: "Emergency plumbing site engineered to convert burst-pipe panic into booked jobs." },
  { name: "Landscaping", slug: "landscaping", emoji: "🌿", emergency: false, desc: "Seasonal landscaping site with quote funnel and multi-city service areas." },
  { name: "Cleaning", slug: "cleaning", emoji: "✨", emergency: false, desc: "Residential cleaning site with recurring booking flow and local trust signals." },
  { name: "Painting", slug: "painting", emoji: "🖌️", emergency: false, desc: "Interior and exterior painting site with project estimator and photo gallery." },
];

export default function DemosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.bestlocalservicesites.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Live Demos",
                "item": "https://www.bestlocalservicesites.com/demos"
              }
            ]
          }),
        }}
      />
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Live sites — not mockups
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            See What We Build
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Six fully deployed contractor websites. Each one is conversion-engineered from the ground up — not templated, not generic.
          </p>
        </div>
      </section>

      {/* Demo grid */}
      <section className="bg-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <a
                key={demo.slug}
                href={`/${demo.slug}`}
                className="group bg-slate-900 hover:bg-slate-700 rounded-2xl p-7 border border-slate-700 hover:border-orange-500 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{demo.emoji}</span>
                  {demo.emergency && (
                    <span className="text-xs bg-red-600 text-white font-bold px-2.5 py-1 rounded-full">
                      24/7 Emergency
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {demo.name}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{demo.desc}</p>
                <div className="mt-5 text-orange-400 text-sm font-bold group-hover:underline">
                  View live site →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-500 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">Ready for your own?</h2>
          <p className="text-orange-100 mb-8">
            Tell us about your business. We'll have your site live in under 7 days.
          </p>
          <Link
            href="/#get-started"
            className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-black text-lg px-10 py-4 rounded-xl transition-colors"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}
