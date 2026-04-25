import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogPostMap } from "../../data/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPostMap[params.slug];
  if (!post) return { title: "Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/post/${params.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Growth Strategy": "bg-green-100 text-green-800",
  SEO: "bg-blue-100 text-blue-800",
  "Web Design": "bg-purple-100 text-purple-800",
  Conversion: "bg-orange-100 text-orange-800",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostMap[params.slug];
  if (!post) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    publisher: {
      "@type": "Organization",
      name: "Best Local Service Sites",
      url: "https://www.bestlocalservicesites.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, articleSchema]),
        }}
      />

      {/* ── Breadcrumb ── */}
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
          <span className="text-gray-300 truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="bg-gray-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                categoryColors[post.category] || "bg-gray-700 text-gray-300"
              }`}
            >
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
            <span className="text-gray-500 text-sm">
              {new Date(post.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {post.metaDescription}
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed mb-10 border-l-4 border-orange-500 pl-5">
            {post.intro}
          </p>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.h2}
              </h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-700 mb-4 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 text-orange-500 font-bold flex-shrink-0">
                        ✓
                      </span>
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
                        {section.table.headers.map((h, j) => (
                          <th
                            key={j}
                            className="px-4 py-3 text-left font-semibold"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-4 py-3 border-b border-gray-200 text-gray-700"
                            >
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
          ))}

          {/* ── FAQ ── */}
          {post.faq.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {post.ctaHeadline}
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              {post.ctaBody}
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

          {/* ── More articles ── */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              More Contractor Guides
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.slug !== params.slug)
                .slice(0, 4)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/post/${p.slug}`}
                    className="group p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all"
                  >
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        categoryColors[p.category] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p.category}
                    </span>
                    <p className="mt-2 font-semibold text-sm text-gray-800 group-hover:text-orange-600 transition-colors leading-snug">
                      {p.title}
                    </p>
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
