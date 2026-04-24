import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Local Service Sites — Websites That Generate Calls",
  description:
    "Done-for-you websites for roofing, HVAC, plumbing, and other home service businesses. Built to convert visitors into calls and booked jobs.",
  metadataBase: new URL("https://www.bestlocalservicesites.com"),
  openGraph: {
    type: "website",
    siteName: "Best Local Service Sites",
    title: "Best Local Service Sites — Websites That Generate Calls",
    description:
      "Done-for-you websites for roofing, HVAC, plumbing, and other home service businesses. Built to convert visitors into calls and booked jobs.",
    url: "https://www.bestlocalservicesites.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Best Local Service Sites — Websites That Generate Calls for Home Service Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@convopilot",
    title: "Best Local Service Sites — Websites That Generate Calls",
    description:
      "Done-for-you websites for roofing, HVAC, plumbing, and other home service businesses. Built to convert visitors into calls and booked jobs.",
    images: ["/og-image.png"],
  },
  other: {
    "og:updated_time": "2026-04-24T00:00:00Z",
    "dc.date.reviewed": "2026-04-24",
    "date-modified": "2026-04-24",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MQ5TPSC3ZE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-MQ5TPSC3ZE');`,
          }}
        />
      </head>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bestlocalservicesites.com/#organization",
                  "name": "Best Local Service Sites",
                  "url": "https://bestlocalservicesites.com",
                  "email": "team@bestlocalservicesites.com",
                  "logo": "https://bestlocalservicesites.com/icon.png",
                  "description": "Done-for-you websites for home service contractors. Built to convert local search traffic into calls and booked jobs.",
                  "dateModified": "2026-04-24T00:00:00Z",
                  "sameAs": [
                    "https://www.instagram.com/bestlocalservicesites/"
                  ],
                  "areaServed": [
                    { "@type": "Country", "name": "United States" }
                  ],
                  "knowsAbout": [
                    "Local SEO",
                    "Home Service Marketing",
                    "Lead Generation for Contractors",
                    "Responsive Web Design",
                    "Conversion Rate Optimization"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Home Service Lead Generation Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Conversion-First Contractor Website",
                          "description": "7-day delivery of SEO-optimized contractor websites with sticky mobile CTAs."
                        },
                        "areaServed": { "@type": "Country", "name": "United States" }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Local Market Dominance SEO",
                          "description": "Hyper-local SEO siloing for residential trades across the United States."
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bestlocalservicesites.com/#website",
                  "url": "https://bestlocalservicesites.com",
                  "name": "Best Local Service Sites",
                  "publisher": { "@id": "https://bestlocalservicesites.com/#organization" }
                }
              ]
            }),
          }}
        />
        {/* Top nav */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/icon.png" alt="Best Local Service Sites Logo" className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-105 transition-transform" />
              <span className="text-lg md:text-xl font-black text-slate-900 truncate max-w-[180px] sm:max-w-none">
                Best Local Service Sites
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="/#how-it-works" className="hover:text-slate-900">How it works</a>
              <Link href="/demos" className="hover:text-slate-900">See demos</Link>
              <Link href="/compare" className="hover:text-slate-900">Compare</Link>
              <Link href="/#get-started" className="hover:text-slate-900">Get a Quote</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="#get-started"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <span className="text-white font-bold">Best Local Service Sites</span>
            <div className="flex gap-6 flex-wrap justify-center">
              <Link href="/#get-started" className="hover:text-white">Get a Quote</Link>
              <Link href="/demos" className="hover:text-white">Demos</Link>
              <Link href="/compare" className="hover:text-white">Compare</Link>
              <Link href="/blog" className="hover:text-white">Resources</Link>
              <a href="/#faq" className="hover:text-white">FAQ</a>
              <a href="mailto:team@bestlocalservicesites.com" className="hover:text-white">Contact</a>
              <a
                href="https://www.instagram.com/bestlocalservicesites/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
            <span>© {new Date().getFullYear()} Best Local Service Sites</span>
          </div>
        </footer>
        <script src="https://convopilot.fyi/widget.js" data-site-id="cp_zwi7dg17nrso" data-api-url="https://api.convopilot.fyi"></script>
      </body>
    </html>
  );
}
