import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  competitorMap,
  getAllCompetitorSlugs,
  competitors,
  type Competitor,
} from "../data/competitors";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = competitorMap[params.slug];
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `https://www.bestlocalservicesites.com/compare/${c.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

const categoryColors: Record<string, string> = {
  "lead-marketplace": "bg-red-100 text-red-700",
  "website-builder": "bg-blue-100 text-blue-700",
  "field-service-software": "bg-purple-100 text-purple-700",
  "review-platform": "bg-yellow-100 text-yellow-700",
  "small-business-software": "bg-green-100 text-green-700",
};

function Check() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function X() {
  return (
    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ComparePage({ params }: Props) {
  const c = competitorMap[params.slug];
  if (!c) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.heroHeadline,
    description: c.metaDescription,
    url: `https://www.bestlocalservicesites.com/compare/${c.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Best Local Service Sites",
      url: "https://bestlocalservicesites.com",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: c.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  const related = competitors
    .filter((x) => x.slug !== c.slug && x.category === c.category)
    .slice(0, 3);

  const otherCategory = competitors
    .filter((x) => x.slug !== c.slug && x.category !== c.category)
    .slice(0, 3);

  const relatedAll = [...related, ...otherCategory].slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
            <span>/</span>
            <span className="text-slate-300">{c.name}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColors[c.category] ?? "bg-slate-700 text-slate-300"}`}>
              {c.categoryLabel}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {c.heroHeadline}
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            {c.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#get-started"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-7 py-4 rounded-xl text-lg transition-all hover:scale-105"
            >
              See a Free Demo Site →
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-xl text-lg transition-all"
            >
              View Live Examples
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick verdict ── */}
      <section className="bg-orange-50 border-b border-orange-100 py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-800 text-lg leading-relaxed">
            <span className="font-black text-orange-600">Bottom line: </span>
            {c.bottomLine}
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-white py-14 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-3">What is {c.name}?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">{c.intro}</p>
            <p className="text-slate-500 text-sm italic leading-relaxed">
              <span className="font-bold not-italic text-slate-700">What they say: </span>
              {c.theirPitch}
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="font-black text-slate-900 mb-4 text-lg">{c.name} at a glance</h3>
            <dl className="space-y-3 text-sm">
              {[
                ["Setup cost", c.setupCost],
                ["Monthly cost", c.monthlyCost],
                ["Contract", c.contractLength],
                ...(c.leadCost ? [["Cost per lead", c.leadCost]] : []),
                ["Time to live", c.timeToLive],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-slate-500 font-medium">{label}</dt>
                  <dd className="text-slate-900 font-bold text-right">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 pt-5 border-t border-slate-200">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-slate-400 hover:text-slate-600 text-xs transition-colors"
              >
                Visit {c.name} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature comparison table ── */}
      <section className="bg-slate-50 py-14 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-8">
            Feature comparison: {c.name} vs Best Local Service Sites
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-5 py-4 font-bold w-2/5">Feature</th>
                  <th className="text-left px-5 py-4 font-bold w-[30%]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
                      Best Local Service Sites
                    </span>
                  </th>
                  <th className="text-left px-5 py-4 font-bold w-[30%]">{c.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {c.comparisonTable.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} ${row.blssWins ? "" : "opacity-90"}`}
                  >
                    <td className="px-5 py-3.5 text-slate-700 font-medium">{row.feature}</td>
                    <td className="px-5 py-3.5">
                      <span className={`font-semibold ${row.blssWins ? "text-slate-900" : "text-slate-500"}`}>
                        {row.blss}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`font-semibold ${!row.blssWins ? "text-slate-900" : "text-slate-500"}`}>
                        {row.competitor}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Quick feature checklist ── */}
      <section className="bg-white py-14 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-8">
            What each platform includes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Local SEO optimization", blss: true, comp: c.localSEO },
              { label: "Mobile-optimized site", blss: true, comp: c.mobileOptimized },
              { label: "Done-for-you setup", blss: true, comp: c.doneForYou },
              { label: "Emergency service mode", blss: true, comp: c.emergencyMode },
              { label: "Schema markup (LocalBusiness, Service, FAQ)", blss: true, comp: c.schemaMarkup },
              { label: "City-specific landing pages", blss: true, comp: c.cityPages },
              { label: "Missed call text-back", blss: true, comp: c.missedCallTextback },
              { label: "Month-to-month contract", blss: true, comp: c.contractLength.toLowerCase().includes("month") && !c.contractLength.toLowerCase().includes("annual") },
            ].map((item) => (
              <div key={item.label} className="flex items-start justify-between gap-4 py-3 border-b border-slate-100 last:border-0">
                <span className="text-slate-700 font-medium text-sm">{item.label}</span>
                <div className="flex gap-6 flex-shrink-0">
                  <div className="flex items-center gap-1.5 w-28 justify-end">
                    {item.blss ? <Check /> : <X />}
                    <span className="text-xs text-slate-500 hidden sm:block">BLSS</span>
                  </div>
                  <div className="flex items-center gap-1.5 w-28 justify-end">
                    {item.comp ? <Check /> : <X />}
                    <span className="text-xs text-slate-500 hidden sm:block truncate max-w-[80px]">{c.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why contractors leave ── */}
      <section className="bg-red-50 py-14 px-4 border-b border-red-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            Why contractors leave {c.name}
          </h2>
          <p className="text-slate-500 mb-8 text-sm">Common complaints from contractors who switched to an owned inbound channel:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.whyContractorsLeave.map((reason, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-100 shadow-sm">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">✗</span>
                <p className="text-slate-700 text-sm leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who each is for ── */}
      <section className="bg-white py-14 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="font-black text-slate-900 text-lg mb-3">
              {c.name} is right for you if…
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">{c.whoTheyreFor}</p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-7 border border-orange-200">
            <div className="text-2xl mb-3">📞</div>
            <h3 className="font-black text-slate-900 text-lg mb-3">
              Best Local Service Sites is right for you if…
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">{c.whoBlssIsFor}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {c.faq.length > 0 && (
        <section className="bg-slate-50 py-14 px-4 border-b border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-8">
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {c.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 text-base">{item.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-slate-950 py-16 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to own your inbound?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            $499 setup. $249/month. Live in 7 days. No long contracts. See exactly what your site would look like first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-started"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.5)]"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              See Live Demos
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related comparisons ── */}
      {relatedAll.length > 0 && (
        <section className="bg-white py-12 px-4 border-t border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-black text-slate-900 mb-6">More comparisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedAll.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="group border border-slate-200 hover:border-orange-400 rounded-xl p-4 transition-all hover:shadow-sm"
                >
                  <div className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2 inline-block ${categoryColors[comp.category] ?? "bg-slate-100 text-slate-600"}`}>
                    {comp.categoryLabel}
                  </div>
                  <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors text-sm">
                    BLSS vs {comp.name} →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-xl px-4 py-3 flex gap-3">
        <a
          href="tel:+1-800-555-0100"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white font-black py-3 rounded-xl text-sm"
        >
          📞 Call Now
        </a>
        <Link
          href="/#get-started"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3 rounded-xl text-sm"
        >
          Get a Quote
        </Link>
      </div>
    </>
  );
}
