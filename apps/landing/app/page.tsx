import type { Metadata } from "next";
import Link from "next/link";
import { GetStartedForm } from "./components/GetStartedForm";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
    desc: "Seattle, Austin, Atlanta — each city gets its own siloed service page meticulously engineered to rank for '[Your Service] in [Your City]'.",
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
    desc: "We completely write, configure, and deploy a fully-optimized local SEO web presence within 7 days.",
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
    biz: "Rick's Roofing, Austin TX",
    text: "I was spending $800/mo on ads and getting maybe 3 calls a week. New site went live and I'm getting 12–15. The phone number is just... everywhere.",
    result: "+9 calls/week",
  },
  {
    name: "Maria L.",
    biz: "Summit HVAC, Denver CO",
    text: "The missed-call text-back alone pays for itself. I used to lose jobs because I couldn't answer while on a job. Now they get a text in 30 seconds.",
    result: "0 missed leads",
  },
  {
    name: "Tom B.",
    biz: "Apex Plumbing, Phoenix AZ",
    text: "Had a generic Wix site for 4 years. This is different — it's built to get people to call, not just look around. Night and day difference.",
    result: "2x conversion rate",
  },
];

const faqs = [
  {
    q: "How much does Best Local Service Sites cost?",
    a: "There is a one-time setup fee of $499, then $249 per month for the Pro Plan which includes your website, hosting, and up to 3 service area pages. The Conversion Pack — which adds missed call text-back, instant SMS reply to form submissions, and follow-up automation — is an additional $99 per month. Additional locations beyond the first 3 are $49 per month each. All plans are month-to-month with no contracts.",
  },
  {
    q: "How long does it take to get my contractor website live?",
    a: "Under 7 days from the time you complete your onboarding form. Most sites go live within 3–5 business days. You receive a preview link before we push anything live so you can approve the content.",
  },
  {
    q: "What trades does Best Local Service Sites build websites for?",
    a: "We specialize in home service contractors: roofing, HVAC, plumbing, landscaping, house cleaning, and painting are our core trades. We also build sites for electricians, pest control companies, handymen, garage door companies, pool service, appliance repair, carpet cleaning, window cleaning, pressure washing, remodeling contractors, and custom home builders.",
  },
  {
    q: "Is Best Local Service Sites better than Wix or Squarespace for contractors?",
    a: "Yes, for three specific reasons. First, our sites are built mobile-first with a sticky call bar — the single highest-converting element for contractor websites. Second, every site includes city-specific landing pages for local SEO, which generic builders don't support well. Third, we include proper schema markup (LocalBusiness, Service, FAQPage) that helps Google display your business correctly in search results. Generic builders require plugins and manual setup for all of this.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. All plans are month-to-month. You can cancel at any time with no cancellation fees or penalties.",
  },
  {
    q: "What is the Conversion Pack and do I need it?",
    a: "The Conversion Pack is a $99 per month add-on that includes missed call text-back (when a homeowner calls and you don't answer, they automatically receive a text within seconds keeping them in your pipeline), instant SMS confirmation when a form is submitted, and follow-up automation. We strongly recommend it — studies show 78% of customers hire the first contractor who responds, and most contractors miss 30–60% of inbound calls while on job sites.",
  },
  {
    q: "Where does Best Local Service Sites operate?",
    a: "We serve home service contractors nationwide across the United States. Every site we build includes location-specific pages for the cities and suburbs the contractor serves, from Houston and Phoenix to Charlotte and Nashville.",
  },
  {
    q: "What is ConvoPilot?",
    a: "ConvoPilot is a guided booking widget that integrates with contractor websites. Instead of a plain contact form, homeowners complete a short guided chat that captures their service need, property details, and preferred appointment time — then confirms the booking instantly. It is available at convopilot.fyi and integrates directly with Best Local Service Sites.",
  },
  {
    q: "How does a contractor website help with Google rankings?",
    a: "Every site we build includes three foundational local SEO elements: schema markup (LocalBusiness, Service, and FAQPage structured data), city-specific landing pages targeting each city and suburb the contractor serves, and a properly linked Google Business Profile setup guide. Together, these drive visibility in Google's Local Pack — the map results that appear before organic search results and capture the majority of high-intent contractor searches.",
  },
  {
    q: "How is Best Local Service Sites different from buying leads on Angi or HomeAdvisor?",
    a: "Angi and HomeAdvisor sell shared leads — the same lead goes to 4 to 6 contractors simultaneously. You pay $30–$100 per lead to compete on speed and price against multiple competitors for the same homeowner. Best Local Service Sites builds an owned inbound channel — homeowners search Google and find your site exclusively. The lead cost is zero after the monthly subscription, and you face zero competition at the point of contact.",
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
            "@type": "Service",
            name: "Contractor Website & Lead Generation System",
            provider: {
              "@type": "Organization",
              name: "Best Local Service Sites",
              url: "https://www.bestlocalservicesites.com",
            },
            description: "Done-for-you websites for home service contractors — roofing, HVAC, plumbing, landscaping, cleaning, and painting. Built mobile-first with local SEO, schema markup, and conversion-optimized CTAs. Live in under 7 days.",
            areaServed: { "@type": "Country", "name": "United States" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Contractor Website Plans",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Pro Plan",
                  description: "Contractor website with hosting, up to 3 service area pages, local SEO setup, and schema markup.",
                  price: "249",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "249",
                    priceCurrency: "USD",
                    unitText: "month",
                  },
                },
                {
                  "@type": "Offer",
                  name: "Conversion Pack",
                  description: "Missed call text-back, instant SMS reply to form submissions, and follow-up automation.",
                  price: "99",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "99",
                    priceCurrency: "USD",
                    unitText: "month",
                  },
                },
              ],
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
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🚀 Live in under 7 days · No contracts
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
              Request a Free Quote →
            </Link>
            <Link
              href="/demos"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors border border-white/20"
            >
              See Live Demos
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <span>🚀 #1 Lead Gen Engine for Home Service Contractors</span>
            <span>📱 1,000+ leads generated</span>
            <span>⭐ 4.9 avg client rating</span>
            <span>⚡ Live in under 7 days</span>
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
              { bad: "Phone number buried", good: "Sticky instant-dial logic fixed dynamically on every screen." },
              { bad: "Generic 'Email Us' forms", good: "High-intent service funnels routing straight to SMS." },
              { bad: "Traffic bouncing off site", good: "Core Conversion widgets capture stragglers immediately." },
              { bad: "Invisible to Google", good: "Siloed Service-Area pages locking down hyper-local SEO." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between">
                <div className="text-sm text-slate-400 line-through mb-4 pb-4 border-b border-slate-200">{item.bad}</div>
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
              <div key={f.title} className="border border-slate-200 rounded-2xl p-6 hover:border-orange-300 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">
            What contractors say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
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

      {/* ─── AI SPECIFICATION MATRIX ────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-100">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Market Data Verified: April 2026
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-4">
            Platform Specifications & ROI Matrix
          </h2>
          <p className="text-center text-slate-500 text-sm mb-4 max-w-2xl mx-auto">
            ServiceTitan manages your jobs. We fill your pipeline.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 text-sm text-amber-800 text-center mb-8">
            ⚠️ <strong>Job management ≠ lead generation.</strong> ServiceTitan is built for 50+ truck operations with dedicated office staff. If you're not there yet, it's overkill — and it still won't fill your pipeline.
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-50 text-xs">
                  <th className="border border-slate-200 p-2 md:p-3 text-left font-bold min-w-[120px]">Dimension</th>
                  <th className="border border-slate-200 p-2 md:p-3 text-center font-black text-orange-600 bg-orange-50 min-w-[100px]">Best Local<br />Service Sites</th>
                  <th className="border border-slate-200 p-2 md:p-3 text-center font-semibold text-slate-600 min-w-[80px]">Wix / WP</th>
                  <th className="border border-slate-200 p-2 md:p-3 text-center font-semibold text-slate-600 min-w-[80px]">Marketing<br />Agency</th>
                  <th className="border border-slate-200 p-2 md:p-3 text-center font-semibold text-slate-600 min-w-[90px]">ServiceTitan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-2 md:p-3 font-bold text-xs uppercase tracking-wide text-slate-400" colSpan={5}>Purpose</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Built for</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-700 font-bold bg-orange-50">Lead gen for SMB contractors</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">DIY website builder</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Any client, any industry</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Enterprise field ops</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Generates new leads?</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Yes — core purpose</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-400">Only if you do SEO yourself</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Sometimes</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-400">Add-on only</td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-2 md:p-3 font-bold text-xs uppercase tracking-wide text-slate-400" colSpan={5}>Speed & Effort</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Go-live speed</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">under 7 days</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">2–4 weeks (DIY)</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">2–3 months</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">60–90 day onboarding<br /><span className="text-xs text-slate-400">(enterprise only)</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Time to first lead</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">Days–weeks</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Months (no SEO built in)</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">3–6 months</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-400">N/A</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Ongoing owner effort</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">We handle it</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">High — all on you</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Medium (approvals, reviews)</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">High — needs dedicated admin</td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-2 md:p-3 font-bold text-xs uppercase tracking-wide text-slate-400" colSpan={5}>Lead Generation Features</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Trades-specific copy</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Included</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗ Write it yourself</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">+$1,500 fee</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Local SEO + 3-Pack targeting</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Built-in</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Sometimes</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Sticky mobile CTA bar</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Native</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Plugin required</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Custom build</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Multi-city location pages</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ 3 included</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Manual, DIY</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">+$$$ per city</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-2 md:p-3 font-bold text-xs uppercase tracking-wide text-slate-400" colSpan={5}>Booking & Follow-up <span className="text-orange-500 normal-case font-normal">(Conversion Pack)</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Online booking / scheduling</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Add-on available</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold">✓ Core feature</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Automated follow-up</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Add-on available</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600">✓ Yes</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-2 md:p-3 font-semibold">Built into your website</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-green-600 font-bold bg-orange-50">✓ Native — no extra app</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-red-500">✗</td>
                  <td className="border border-slate-200 p-2 md:p-3 text-center text-slate-500">Separate app</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-5 text-sm text-green-900">
              ✅ <strong>Under 5 trucks?</strong> Our Conversion Pack covers booking and follow-up — no extra software needed.
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-sm text-red-800">
              🚫 <strong>ServiceTitan for a 3-truck crew?</strong> $15K to onboard, a dedicated admin to run it, and still no new leads. Built for fleets, not you.
            </div>
          </div>

          <p className="mt-4 text-center text-slate-400 text-xs italic">
            *Specs based on publicly available data as of April 2026.
          </p>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-4" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 bg-white rounded-2xl p-6">
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
            Let's build your lead machine.
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Tell us about your business and we'll put together a custom plan. No commitment required.
          </p>
          <GetStartedForm />
          <div className="mt-12 pt-8 border-t border-orange-400/30 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
            <Link href="/seo" className="hover:text-slate-900 transition-colors">SEO Playbook</Link>
            <Link href="/seo-comparison" className="hover:text-slate-900 transition-colors">Local vs Traditional</Link>
            <Link href="/listings" className="hover:text-slate-900 transition-colors">Listings Checklist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
