import Link from "next/link";
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
    title: "Phone number everywhere",
    desc: "Visible in the header, hero, every CTA section, and the footer. On mobile, it's one tap from anywhere on the page.",
  },
  {
    icon: "🚨",
    title: "Emergency CTA mode",
    desc: "For HVAC, roofing, and plumbing: the entire site shifts into urgency mode — '24/7 Emergency' headline, pulsing red badge, call-first layout.",
  },
  {
    icon: "📋",
    title: "Smart lead form",
    desc: "Starts with 3 fields. Expands only when needed. Emergency intent? Shows urgency selector. Quote? Shows project details. Never overwhelms.",
  },
  {
    icon: "📍",
    title: "Multi-location built in",
    desc: "Seattle, Bellevue, Redmond — each city gets its own service page for SEO. Add a location for +$45/mo.",
  },
  {
    icon: "⚡",
    title: "Same-day response promise",
    desc: "Every page reinforces: 'You will get a response immediately.' Conversion Pack enables auto SMS reply and missed-call text-back.",
  },
  {
    icon: "📱",
    title: "Mobile sticky CTA bar",
    desc: "Fixed at the bottom of every mobile screen: Call Now + Get Quote. Never more than one tap from converting.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tell us your business",
    desc: "Name, phone, services, locations. Takes about 5 minutes.",
  },
  {
    n: "2",
    title: "We build your site",
    desc: "Fully written, designed, and live within 48 hours. No templates to fiddle with.",
  },
  {
    n: "3",
    title: "Calls start coming in",
    desc: "Add the Conversion Pack and every lead gets an instant SMS reply — even at 2am.",
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
    q: "How is this different from Wix or Squarespace?",
    a: "Those are generic website builders. This is a lead conversion system built specifically for home service contractors. Every element is designed to generate calls — not just look nice.",
  },
  {
    q: "How fast can my site go live?",
    a: "48 hours from the time you send us your business details. We write the copy, build the pages, and handle hosting.",
  },
  {
    q: "What's included in the Conversion Pack?",
    a: "Instant SMS reply when a form is submitted, missed-call text-back so no lead goes cold, and follow-up automation. Requires a phone number we set up for you.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No contracts. Month-to-month. Cancel any time.",
  },
  {
    q: "Can I add more cities later?",
    a: "Yes. Each additional service area (with its own SEO pages) is +$45/month.",
  },
  {
    q: "What industries do you serve?",
    a: "Roofing, HVAC, plumbing, landscaping, cleaning, painting, and other home services. If you're not listed, ask us.",
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
            description: "Done-for-you conversion-optimized websites for home service contractors.",
            brand: {
              "@type": "Brand",
              name: "Best Local Service Sites",
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
            Websites that<br />
            <span className="text-orange-400">generate calls.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Done-for-you websites for roofing, HVAC, plumbing, and other home service businesses.
            Built to convert visitors into calls and booked jobs — not just traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#get-started"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Get My Site →
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
            <span>⭐ 4.9 avg client rating</span>
            <span>📞 Avg 3.2x more calls in month 1</span>
            <span>⚡ Live in 48 hours</span>
            <span>🔒 Month-to-month, no contracts</span>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Most contractor websites don't actually work.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            They look decent. But the phone number is buried, there's no clear CTA, and visitors
            leave without calling. You're paying for a brochure, not a sales tool.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: "❌", bad: "Phone number in the footer", good: "Phone visible in header, hero, and sticky bar" },
              { icon: "❌", bad: "Generic 'Contact Us' form", good: "Smart form that adapts to intent" },
              { icon: "❌", bad: "Visitors leave without calling", good: "Instant SMS reply keeps leads warm" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-sm text-slate-400 line-through mb-2">{item.bad}</div>
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
            How it works
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
            Every site includes
          </h2>
          <p className="text-slate-500 text-center mb-12">
            Not just a website. A system built to get your phone ringing.
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
            No setup fees. No annual lock-in. One flat monthly rate.
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
                "No contracts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700">
                  <span className="text-green-500">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row gap-3 text-sm text-slate-500 justify-center">
              <span>➕ Extra location: <strong className="text-slate-900">+$45/mo</strong></span>
              <span>⚡ Conversion Pack: <strong className="text-slate-900">+$49/mo</strong></span>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-block text-orange-500 font-semibold hover:underline text-sm"
          >
            See full pricing breakdown →
          </Link>
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
