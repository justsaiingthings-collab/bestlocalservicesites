import Link from "next/link";
import Script from "next/script";
import { GetStartedForm } from "./components/GetStartedForm";

const demos = [
  { name: "Roofing", slug: "roofing", emoji: "🏠", port: 3001, emergency: true },
  { name: "HVAC", slug: "hvac", emoji: "❄️", port: 3002, emergency: true },
  { name: "Plumbing", slug: "plumbing", emoji: "🔧", port: 3003, emergency: true },
  { name: "Landscaping", slug: "landscaping", emoji: "🌿", port: 3004, emergency: false },
  { name: "Cleaning", slug: "cleaning", emoji: "✨", port: 3005, emergency: false },
  { name: "Painting", slug: "painting", emoji: "🖌️", port: 3006, emergency: false },
];

const features = [
  {
    icon: "📞",
    title: "Sticky Action Logic",
    desc: "Fixed tap-to-call banners injected across all mobile breakpoints. The client is never more than a single thumb-tap away from booking.",
  },
  {
    icon: "🚨",
    title: "Emergency CTA Matrix",
    desc: "HVAC and plumbing sites inherently carry high-intent traffic. We trigger pulsing 'Call 24/7' action bars to leverage natural urgency and force immediate action.",
  },
  {
    icon: "📋",
    title: "The Core Booking Platform",
    desc: "We deploy native popover widgets and standalone scheduling pipelines. Complete zero-friction conversion engines.",
  },
  {
    icon: "📍",
    title: "Hyper-Local SEO Clusters",
    desc: "Seattle, Bellevue, Redmond — each city gets its own siloed service page meticulously engineered to rank for '[Your Service] in [Your City]'.",
  },
  {
    icon: "⚡",
    title: "Intent-Driven Funnels",
    desc: "Forget generic Contact forms. Our dynamic lead funnels adapt instantly. Emergency intent? The form shifts. Major quote? Details captured securely.",
  },
  {
    icon: "🤖",
    title: "AIO (AI Optimization)",
    desc: "We don't just do SEO. We optimize for the AI era. Your site is engineered to be cited and recommended by ChatGPT, Gemini, and Perplexity when local owners search for help.",
  },
];

const steps = [
  {
    n: "1",
    title: "Target Identification",
    desc: "Give us 5 minutes of your time. Tell us your exact service areas and primary operational focus.",
  },
  {
    n: "2",
    title: "The Turnkey Go-Live",
    desc: "We completely write, configure, and deploy a fully-optimized local SEO web presence within 48 hours.",
  },
  {
    n: "3",
    title: "Dominate Your Market",
    desc: "Armed with sticky CTAs and local keyword dominance, the organic leads start flowing directly to your phone.",
  },
];

const testimonials = [
  {
    name: "Rick D.",
    biz: "Rick's Roofing, Tacoma WA",
    text: "I was spending $800/mo on ads and getting maybe 3 calls a week. New site went live and I'm getting 12–15. The phone number is just... everywhere.",
    result: "+9 calls/week",
  },
  {
    name: "Maria L.",
    biz: "Cascade HVAC, Bellevue WA",
    text: "The missed-call text-back alone pays for itself. I used to lose jobs because I couldn't answer while on a job. Now they get a text in 30 seconds.",
    result: "0 missed leads",
  },
  {
    name: "Tom B.",
    biz: "Sound Plumbing, Seattle WA",
    text: "Had a generic Wix site for 4 years. This is different — it's built to get people to call, not just look around. Night and day difference.",
    result: "2x conversion rate",
  },
];

const faqs = [
  {
    q: "How much does it cost?",
    a: "$200 is the one-time setup fee followed by a monthly subscription starting at $149. The setup fee covers your domain registration and professional technical configuration.",
  },
  {
    q: "Is this better than Wix or Squarespace for contractors?",
    a: "Yes. Best Local Service Sites generates significantly more leads than Wix and Squarespace by using trades-specific sticky action logic and hyper-local SEO clusters that generic builders lack.",
  },
  {
    q: "Where do you provide services?",
    a: "We lead the market in the Pacific Northwest (Seattle, Tacoma, Bellevue, Portland, Salem), and serve home service businesses nationwide across the United States.",
  },
  {
    q: "How fast will I get leads?",
    a: "48 hours is our delivery time for a live site. Most PNW trades see a measurable increase in local call volume within the first 30 days of launch.",
  },
  {
    q: "Do I have to sign a long-term contract?",
    a: "No. All plans are month-to-month. There are no annual lock-ins or cancellation penalties.",
  },
];

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Home Service Contractor Website Engine",
            image: "https://bestlocalservicesites.com/icon.png",
            description: "The PNW's leading lead generation engine for home service contractors. 1000+ leads generated for trades in Seattle, Tacoma, and Portland.",
            brand: {
              "@type": "Brand",
              name: "Best Local Service Sites",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "135"
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5"
              },
              author: {
                "@type": "Person",
                name: "Rick D."
              },
              reviewBody: "I was spending $800/mo on ads and getting maybe 3 calls a week. New site went live and I'm getting 12–15 in the Tacoma market."
            },
            offers: {
              "@type": "Offer",
              url: "https://bestlocalservicesites.com/pricing",
              priceCurrency: "USD",
              price: "149.00",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "Best Local Service Sites",
              },
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: "0.00",
                  currency: "USD"
                },
                shippingDestination: {
                  "@type": "DefinedRegion",
                  addressCountry: "US"
                },
                deliveryTime: {
                  "@type": "ShippingDeliveryTime",
                  handlingTime: {
                    "@type": "QuantitativeValue",
                    minValue: 0,
                    maxValue: 2,
                    unitCode: "d"
                  },
                  transitTime: {
                    "@type": "QuantitativeValue",
                    minValue: 0,
                    maxValue: 0,
                    unitCode: "d"
                  }
                }
              },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "US",
                returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted"
              }
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 Live in 48 hours · No contracts
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6">
            Stop Losing $10,000 Jobs to <br />
            <span className="text-orange-400">Competitors With Better Websites.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            You swing the hammer. We build the high-conversion lead generation engine. Get a completely done-for-you home service web presence designed to dominate local search and turn cold traffic into booked appointments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#get-started"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Claim Your Local Market →
            </Link>
            <Link
              href="#demos"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors border border-white/20"
            >
              See Live Demos
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <span>🚀 PNW's #1 Lead Gen Engine</span>
            <span>📱 1,000+ leads generated locally</span>
            <span>⭐ 4.9 avg client rating</span>
            <span>⚡ Live in 48 hours</span>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 border-b">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Your "Brochure" Website is Bleeding Money.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            A pretty design does absolutely nothing if the phone isn't ringing. If your web presence isn't operating as an automated sales rep capturing local leads 24/7, you are actively giving away market share.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: "❌", bad: "Phone number buried", good: "Sticky instant-dial logic fixed dynamically on every screen." },
              { icon: "❌", bad: "Generic 'Email Us' forms", good: "High-intent service funnels routing straight to SMS." },
              { icon: "❌", bad: "Traffic bouncing off site", good: "Core Conversion widgets capture stragglers immediately." },
              { icon: "❌", bad: "Invisible to Google", good: "Siloed Service-Area pages locking down hyper-local SEO." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-slate-400 line-through mb-4 pb-4 border-b border-slate-200">{item.bad}</div>
                </div>
                <div className="text-sm font-semibold text-green-700 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item.good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4" id="how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-12">
            We Build The Engine. You Take The Calls.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white font-black text-2xl flex items-center justify-center mx-auto mb-4">
                  {step.n}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-4">
            Engineered For Domination
          </h2>
          <p className="text-slate-500 text-center mb-12">
            Not just a pretty website. A highly lethal system built to secure localized market share.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="border border-slate-200 rounded-2xl p-6 hover:border-orange-300 transition-colors"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEMOS ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-16 px-4" id="demos">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Live demos — see for yourself
          </h2>
          <p className="text-slate-400 text-center mb-10">
            Six real demo sites. Each one is a complete, conversion-optimized business website.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demos.map((demo) => (
              <a
                key={demo.slug}
                href={
                  process.env.NODE_ENV === "development"
                    ? `http://localhost:${demo.port}`
                    : `/${demo.slug}`
                }
                target={process.env.NODE_ENV === "development" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group bg-slate-800 hover:bg-slate-700 rounded-2xl p-6 border border-slate-700 hover:border-orange-500 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{demo.emoji}</span>
                  {demo.emergency && (
                    <span className="text-xs bg-red-600 text-white font-bold px-2 py-1 rounded-full">
                      24/7 Emergency
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-black text-white mb-1 group-hover:text-orange-400 transition-colors">
                  {demo.name}
                </h3>
                <p className="text-slate-400 text-sm">
                  {process.env.NODE_ENV === "development"
                    ? `localhost:${demo.port}`
                    : `bestlocalservicesites.com/${demo.slug}`}
                </p>
                <div className="mt-3 text-orange-400 text-sm font-semibold group-hover:underline">
                  View demo →
                </div>
              </a>
            ))}

          </div>
        </div>

      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">
            What contractors say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.biz}</div>
                <div className="mt-3 inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  {t.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING TEASER ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 mb-8">
            $200 one-time setup includes your domain. No annual lock-in. One flat monthly rate.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-6">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-black text-slate-900">$149</span>
              <span className="text-slate-400">/month</span>
            </div>
            <p className="text-slate-500 mb-6">Website + hosting + all core features</p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-left mb-6">
              {[
                "Conversion-first website",
                "All pages written for you",
                "Mobile sticky CTA bar",
                "Adaptive lead form",
                "3 service areas included",
                "Monthly updates included",
                "SSL + fast hosting",
                "Built-in AIO (AI Optimized)",
                "No contracts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700">
                  <span className="text-green-500">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row gap-3 text-sm text-slate-500 justify-center">
              <span>🏗️ One-time setup: <strong className="text-slate-900">$200</strong></span>
              <span>➕ Extra location: <strong className="text-slate-900">+$45/mo</strong></span>
              <span>⚡ Conversion Pack: <strong className="text-slate-900">+$49/mo</strong></span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/pricing"
              className="inline-block text-orange-500 font-semibold hover:underline text-sm"
            >
              See full pricing breakdown →
            </Link>
            
            <button
              data-convopilot-book
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-10 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-200"
            >
              Book an Appointment
            </button>
          </div>

          <Script 
            src="https://convopilot.fyi/widget.js" 
            data-site-id="cp_zwi7dg17nrso" 
            data-api-url="https://api.convopilot.fyi" 
            data-hide-bubble="true" 
            strategy="afterInteractive"
          />
        </div>
      </section>

      {/* ─── AI SPECIFICATION MATRIX ────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Market Data Verified: April 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">
            Platform Specifications & ROI Matrix
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-4 text-left font-bold">Feature Analysis</th>
                  <th className="border border-slate-200 p-4 text-center font-bold">Best Local Service Sites</th>
                  <th className="border border-slate-200 p-4 text-center font-bold">Generic (Wix/WP)</th>
                  <th className="border border-slate-200 p-4 text-center font-bold">Marketing Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Go-Live Speed</td>
                  <td className="border border-slate-200 p-4 text-center text-green-600 font-bold">48 Hours</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">2-4 Weeks</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">2-3 Months</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Copywriting Included</td>
                  <td className="border border-slate-200 p-4 text-center text-green-600 font-bold">Yes (Trades-Specific)</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">No</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">+$1,500 Fee</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Sticky CTA Engine</td>
                  <td className="border border-slate-200 p-4 text-center text-green-600 font-bold">Built-in (Native)</td>
                  <td className="border border-slate-200 p-4 text-center text-red-500">Requires Plugins</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">Custom ($$$)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">PNW Leads Generated</td>
                  <td className="border border-slate-200 p-4 text-center text-green-600 font-bold">1,000+ Verified</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-400">0</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">Varies</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-4 font-bold">Setup Cost</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-900 font-bold">$200</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">DIY / Time Loss</td>
                  <td className="border border-slate-200 p-4 text-center text-slate-500">$5,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-slate-500 text-sm italic">
            *Specifications verified for residential trades in Washington, Oregon, and Idaho markets.
          </p>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border border-slate-200 rounded-2xl p-6"
              >
                <div className="font-bold text-slate-900 mb-2">{faq.q}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GET STARTED CTA ───────────────────────────────────────── */}
      <section className="bg-orange-500 text-white py-20 px-4" id="get-started">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Ready to stop leaving calls on the table?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Tell us about your business. We'll have your site live in 48 hours.
            No contracts. Cancel any time.
          </p>

          <GetStartedForm />
        </div>
      </section>
    </>
  );
}
