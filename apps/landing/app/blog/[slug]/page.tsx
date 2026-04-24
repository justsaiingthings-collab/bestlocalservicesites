import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePage, getAllIndustrySlugs, GeneratedPage, PageSection } from "../data/generator";

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = generatePage(params.slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

// ─── Schema markup ────────────────────────────────────────────────────────────

function buildSchema(page: GeneratedPage): string {
  const locationName = page.city
    ? `${page.city.name}, ${page.city.stateAbbr}`
    : "United States";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Best Local Service Sites",
      url: "https://www.bestlocalservicesites.com",
    },
    areaServed: {
      "@type": "Place",
      name: locationName,
    },
    serviceType: page.industry.name,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return JSON.stringify([serviceSchema, faqSchema]);
}

// ─── Section renderer ─────────────────────────────────────────────────────────

function Section({ section }: { section: PageSection }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.h2}</h2>
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700 mb-4 leading-relaxed">
          {p}
        </p>
      ))}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 text-orange-500 font-bold flex-shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                {section.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 border-b border-gray-200 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const page = generatePage(params.slug);
  if (!page) notFound();

  const schemaJson = buildSchema(page);
  const locationLabel = page.city
    ? `${page.city.name}, ${page.city.stateAbbr}`
    : "Nationwide";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      {/* ── Header breadcrumb ── */}
      <div className="bg-gray-900 text-gray-400 text-sm py-2 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            Resources
          </Link>
          <span>/</span>
          <span className="text-gray-300">{page.industry.name}</span>
          {page.city && (
            <>
              <span>/</span>
              <span className="text-gray-300">{page.city.name}</span>
            </>
          )}
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Location + industry tag */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {page.industry.name}
            </span>
            <span className="inline-block bg-gray-700 text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {locationLabel}
            </span>
            {page.industry.isEmergency && (
              <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide animate-pulse">
                24/7 Emergency
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {page.h1}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {page.metaDescription}
          </p>
        </div>
      </div>

      {/* ── Stats bar ── */}
      {page.stats.length > 0 && (
        <div className="bg-orange-500 text-white py-6 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {page.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-black">{stat.value}</div>
                <div className="text-orange-100 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Main content ── */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed mb-10 border-l-4 border-orange-500 pl-5">
            {page.intro}
          </p>

          {/* City context callout */}
          {page.city && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-10">
              <h3 className="font-bold text-blue-900 mb-2">
                {page.industry.name} in {page.city.name}, {page.city.stateAbbr}
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                {page.city.context[page.industry.id] || `${page.city.name} is one of the fastest-growing metros in ${page.city.state}, with strong demand for qualified local ${page.industry.tradespersonPlural.toLowerCase()}.`}
              </p>
            </div>
          )}

          {/* Content sections */}
          {page.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}

          {/* ── Comparisons ── */}
          {page.comparisons.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What Good Looks Like vs. What to Avoid
              </h2>
              <div className="grid gap-4">
                {page.comparisons.map((c, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                      <span className="text-red-500 font-bold text-lg flex-shrink-0">✗</span>
                      <span className="text-red-800 text-sm">{c.bad}</span>
                    </div>
                    <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                      <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-green-800 text-sm">{c.good}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── FAQ ── */}
          {page.faq.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {page.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                      <span>{item.q}</span>
                      <span className="text-orange-500 text-xl group-open:rotate-45 transition-transform duration-200 flex-shrink-0 ml-3">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-4 pt-2 text-gray-700 leading-relaxed border-t border-gray-100">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* ── CTA ── */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{page.ctaHeadline}</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              {page.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#get-started"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/demos"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-4 rounded-lg transition-colors text-center"
              >
                See Live Demos
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              No commitment. Live in under 7 days.
            </p>
          </div>

          {/* ── Related industries ── */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Explore Other Trades
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Plumbing", href: "/blog/plumbing-service" },
                { label: "HVAC", href: "/blog/hvac-service" },
                { label: "Roofing", href: "/blog/roofing-service" },
                { label: "Electrical", href: "/blog/electrical-service" },
                { label: "Landscaping", href: "/blog/landscaping-service" },
                { label: "Home Cleaning", href: "/blog/cleaning-service" },
                { label: "Pest Control", href: "/blog/pest-control-service" },
                { label: "Pool Service", href: "/blog/pool-service" },
                { label: "Appliance Repair", href: "/blog/appliance-service" },
                { label: "Garage Door", href: "/blog/garage-door-service" },
                { label: "Handyman", href: "/blog/handyman-service" },
                { label: "Carpet Cleaning", href: "/blog/carpet-cleaning-service" },
                { label: "Pressure Washing", href: "/blog/pressure-washing-service" },
                { label: "Window Cleaning", href: "/blog/window-cleaning-service" },
              ]
                .filter((r) => !r.href.includes(`/${params.slug}`))
                .map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-orange-50 hover:text-orange-700 text-gray-600 text-sm rounded-full transition-colors"
                  >
                    {r.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile sticky CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gray-900 border-t border-gray-700 flex">
        <a
          href="tel:+18005551234"
          className="flex-1 bg-orange-500 text-white font-bold text-center py-4 text-sm"
        >
          📞 Call Now
        </a>
        <Link
          href="/#get-started"
          className="flex-1 bg-gray-800 text-white font-bold text-center py-4 text-sm"
        >
          Get Quote
        </Link>
      </div>
    </>
  );
}
