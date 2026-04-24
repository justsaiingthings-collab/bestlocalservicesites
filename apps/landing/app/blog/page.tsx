import { Metadata } from "next";
import Link from "next/link";
import { industries } from "./data/industries";
import { blogPosts } from "./data/blogPosts";

export const metadata: Metadata = {
  title: "Resources & Guides for Home Service Contractors | Best Local Service Sites",
  description:
    "Local SEO guides, website conversion tips, and industry-specific resources for roofing, HVAC, plumbing, landscaping, cleaning, and painting contractors.",
};

const tradeColors: Record<string, string> = {
  plumbing: "bg-blue-100 text-blue-800",
  hvac: "bg-orange-100 text-orange-800",
  roofing: "bg-red-100 text-red-800",
  electrical: "bg-yellow-100 text-yellow-800",
  landscaping: "bg-green-100 text-green-800",
  cleaning: "bg-teal-100 text-teal-800",
  pest_control: "bg-purple-100 text-purple-800",
  pool: "bg-cyan-100 text-cyan-800",
  appliance: "bg-gray-100 text-gray-800",
  garage_door: "bg-stone-100 text-stone-800",
  chimney: "bg-zinc-100 text-zinc-800",
  handyman: "bg-amber-100 text-amber-800",
  carpet_cleaning: "bg-rose-100 text-rose-800",
  window_cleaning: "bg-sky-100 text-sky-800",
  pressure_washing: "bg-indigo-100 text-indigo-800",
  remodeling: "bg-pink-100 text-pink-800",
  custom_home_builders: "bg-emerald-100 text-emerald-800",
};

const categoryColors: Record<string, string> = {
  "Growth Strategy": "bg-green-100 text-green-800",
  SEO: "bg-blue-100 text-blue-800",
  "Web Design": "bg-purple-100 text-purple-800",
  Conversion: "bg-orange-100 text-orange-800",
};

export default function BlogIndex() {
  const featuredIndustries = industries.slice(0, 6);

  return (
    <>
      {/* ── Hero ── */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Contractor Marketing Guides
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Local SEO, website conversion, and growth strategy — written specifically
            for home service contractors.
          </p>
        </div>
      </div>

      {/* ── Latest Blog Posts ── */}
      <div className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/post/${post.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      categoryColors[post.category] || "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.metaDescription}
                </p>
                <div className="mt-4 text-orange-500 text-sm font-semibold group-hover:underline">
                  Read guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Industry Pages ── */}
      <div className="bg-gray-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Browse by Trade
          </h2>
          <p className="text-gray-500 mb-8">
            Industry-specific pages with local SEO data, homeowner pain points,
            and conversion guides for each trade.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => {
              const colorClass = tradeColors[ind.id] || "bg-gray-100 text-gray-800";
              return (
                <div
                  key={ind.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>
                      {ind.name}
                    </span>
                    {ind.isEmergency && (
                      <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full">
                        Emergency
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {ind.heroTagline}
                  </p>

                  <div className="space-y-1.5">
                    <Link
                      href={`/blog/${ind.slug}-service`}
                      className="block text-sm text-gray-700 hover:text-orange-600 hover:underline"
                    >
                      → {ind.namePlural}
                    </Link>
                    <Link
                      href={`/blog/local-${ind.slug}-service`}
                      className="block text-sm text-gray-700 hover:text-orange-600 hover:underline"
                    >
                      → Local {ind.name} Service
                    </Link>
                    <Link
                      href={`/blog/best-${ind.slug}-service`}
                      className="block text-sm text-gray-700 hover:text-orange-600 hover:underline"
                    >
                      → Best {ind.name} Service
                    </Link>
                    {ind.isEmergency && (
                      <Link
                        href={`/blog/emergency-${ind.slug}-service`}
                        className="block text-sm text-red-600 hover:text-red-700 hover:underline"
                      >
                        → Emergency {ind.name} Service
                      </Link>
                    )}
                    <Link
                      href={`/blog/${ind.slug}-near-me`}
                      className="block text-sm text-gray-700 hover:text-orange-600 hover:underline"
                    >
                      → {ind.name} Near Me
                    </Link>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-2">City pages:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["houston", "phoenix", "dallas", "atlanta", "austin"].map((city) => (
                        <Link
                          key={city}
                          href={`/blog/${ind.personSlug}-${city}`}
                          className="text-xs bg-gray-50 hover:bg-orange-50 text-gray-600 hover:text-orange-700 px-2 py-0.5 rounded border border-gray-200 hover:border-orange-200 transition-colors capitalize"
                        >
                          {city.charAt(0).toUpperCase() + city.slice(1)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Put This into Practice?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          We build websites for contractors that actually generate calls. Tell us
          about your business and we'll put together a custom plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#get-started"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Request a Free Quote
          </Link>
          <Link
            href="/demos"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            See Live Demos
          </Link>
        </div>
      </div>
    </>
  );
}
