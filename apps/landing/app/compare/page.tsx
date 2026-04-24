import type { Metadata } from "next";
import Link from "next/link";
import { competitors } from "./data/competitors";

export const metadata: Metadata = {
  title: "Contractor Website Comparisons | Best Local Service Sites vs Alternatives",
  description:
    "Compare Best Local Service Sites against Angi, HomeAdvisor, Wix, Housecall Pro, ServiceTitan, Thumbtack, and more. See exactly why contractors switch to owned inbound.",
};

const categoryOrder = [
  "lead-marketplace",
  "website-builder",
  "field-service-software",
  "review-platform",
  "small-business-software",
];

const categoryLabels: Record<string, string> = {
  "lead-marketplace": "Lead Marketplaces",
  "website-builder": "DIY Website Builders",
  "field-service-software": "Field Service Software",
  "review-platform": "Review & Ad Platforms",
  "small-business-software": "Small Business Software",
};

const categoryColors: Record<string, string> = {
  "lead-marketplace": "bg-red-100 text-red-700 border-red-200",
  "website-builder": "bg-blue-100 text-blue-700 border-blue-200",
  "field-service-software": "bg-purple-100 text-purple-700 border-purple-200",
  "review-platform": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "small-business-software": "bg-green-100 text-green-700 border-green-200",
};

const grouped = categoryOrder.reduce<Record<string, typeof competitors>>(
  (acc, cat) => {
    acc[cat] = competitors.filter((c) => c.category === cat);
    return acc;
  },
  {}
);

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Compare</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Best Local Service Sites<br />
            <span className="text-orange-500">vs. Everything Else</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Lead marketplaces. DIY builders. Field service platforms. See exactly how contractor-owned inbound stacks up against every alternative.
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="bg-orange-50 border-b border-orange-100 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${competitors.length}`, label: "Platforms compared" },
            { value: "$0", label: "Cost per lead (BLSS)" },
            { value: "7 days", label: "Time to live site" },
            { value: "Month-to-month", label: "Contract terms" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Grouped comparisons */}
      {categoryOrder.map((cat) => {
        const items = grouped[cat];
        if (!items?.length) return null;
        return (
          <section key={cat} id={cat} className="py-14 px-4 border-b border-slate-100 bg-white scroll-mt-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColors[cat]}`}>
                  {categoryLabels[cat]}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/compare/${c.slug}`}
                    className="group border border-slate-200 hover:border-orange-400 hover:shadow-md rounded-2xl p-6 transition-all bg-white"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                        BLSS vs {c.name}
                      </h2>
                      <span className="text-slate-400 group-hover:text-orange-500 transition-colors text-xl">→</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {c.heroSubheadline}
                    </p>
                    <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3 mt-auto">
                      <span className="text-slate-400">Their cost: <span className="font-bold text-slate-600">{c.monthlyCost.split("(")[0].trim()}</span></span>
                      <span className="text-orange-600 font-bold">See comparison →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Big CTA */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Stop renting. Start owning.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            $499 setup. $249/month. Live in 7 days. No long contracts. See what your site looks like before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-started"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              View Live Demos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
