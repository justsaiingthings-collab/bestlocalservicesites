import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Best Local Service Sites",
  description:
    "Transparent pricing for home service websites nationwide. $249/mo Pro Plan + $499 one-time setup. 1,000+ leads generated for contractors across the US.",
};

const baseFeatures = [
  "Conversion-first website, fully written",
  "Home, Services, About, Contact pages",
  "Individual service pages (SEO-targeted)",
  "Phone number visible everywhere",
  "Sticky mobile CTA bar (Call + Quote)",
  "Smart adaptive lead form",
  "Emergency CTA mode for urgent services",
  "Up to 3 service areas / location pages",
  "Monthly content updates",
  "SSL + fast hosting included",
  "Built-in AIO (AI Optimized)",
  "$499 One-Time Setup — see what's included below",
  "No contracts · Cancel any time",
];

const conversionFeatures = [
  "Button-Driven Chat & Popover Widgets",
  "Standalone Booking Page & Custom Branding",
  "Email Reminders & Booking Alerts",
  "Weekly Performance Digest Emails",
  "Unlimited Leads & Bookings",
  "Real-time Analytics & Team Collaboration",
];

const comparisons = [
  { feature: "Written copy included", us: true, agency: "Sometimes" },
  { feature: "Built to convert, not just look nice", us: true, agency: "Rarely" },
  { feature: "Emergency CTA mode", us: true, agency: false },
  { feature: "Mobile sticky CTA bar", us: true, agency: "Sometimes" },
  { feature: "Missed-call text-back", us: true, agency: false },
  { feature: "Multi-location SEO pages", us: true, agency: "$$$" },
  { feature: "Month-to-month, no contract", us: true, agency: false },
  { feature: "Monthly price", us: "$249", agency: "$500–$2,000" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Simple pricing. No surprises.
          </h1>
          <p className="text-slate-300 text-lg">
            One flat monthly rate. Everything included. Add what you need.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">

            {/* Base plan */}
            <div className="border-2 border-slate-200 rounded-2xl p-7 flex flex-col">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Pro Plan</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-slate-900">$249</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Your website, fully built and live in 72 hours.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {baseFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#get-started"
                className="block text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Conversion Pack */}
            <div className="border-2 border-orange-400 rounded-2xl p-7 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                RECOMMENDED
              </div>
              <div className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-2">
                Pro Plan + Conversion Pack
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-slate-900">$348</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <p className="text-slate-400 text-xs mb-1">$249 Pro Plan + $99 Conversion Pack</p>
              <p className="text-slate-500 text-sm mb-6">
                Turn your visitors into booked appointments automatically.
              </p>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                Core Automation Capabilities:
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {conversionFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">⚡</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/#get-started"
                className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Get Started with Conversion Pack
              </Link>
            </div>

            {/* Multi-location add-on */}
            <div className="border-2 border-slate-200 rounded-2xl p-7 flex flex-col">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">
                Add-On
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-slate-900">+$49</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Per additional location after your first 3.
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {[
                  "Dedicated location page (e.g. /roof-repair-bellevue)",
                  "City-specific copy and local references",
                  "\"Serving [City]\" language throughout",
                  "SEO-targeted for that city + service",
                  "Linked from homepage service area list",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                Base plan includes <strong>3 service areas</strong> at no extra cost.
              </div>
            </div>
          </div>

          {/* Setup fee breakdown */}
          <div className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">🏗️ One-Time Setup Fee</p>
                <p className="text-3xl font-black text-slate-900">$499 <span className="text-base font-normal text-slate-500">one-time setup fee</span></p>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Paid once at signup. Covers everything needed to get your business live and discoverable from Day 1.
              </p>
            </div>
            <ul className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🌐",
                  title: "Domain Registration & DNS",
                  detail: "We register your .com, configure DNS, and manage annual renewals — no Namecheap account needed.",
                },
                {
                  icon: "📍",
                  title: "6 Business Listings",
                  detail: "We claim & optimize your profiles on Google Business, Bing Places, Yelp, Nextdoor, Apple Maps, and BBB.",
                  link: "/listings",
                  linkText: "See full guide →",
                },
                {
                  icon: "⚡",
                  title: "Full Website Build & Launch",
                  detail: "Trade-specific conversion copy, SEO structure, mobile-first design, and 72-hour go-live guarantee.",
                },
              ].map((item) => (
                <li key={item.title} className="bg-white rounded-xl p-5 border border-slate-200 flex flex-col gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-black text-slate-900 text-sm">{item.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">{item.detail}</p>
                  {item.link && (
                    <Link href={item.link} className="text-orange-500 text-xs font-bold hover:underline mt-1">
                      {item.linkText}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* All plans note + enterprise */}
          <div className="text-center mt-6 text-slate-500 text-sm">
            All plans are month-to-month. No contracts. Setup fee is a one-time payment.
            <br />
            Pricing above is for businesses with 1–50 employees.{" "}
            <a href="/#get-started" className="text-orange-500 font-bold hover:underline">
              50+ employees? Contact us for custom pricing →
            </a>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">
            How we compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 pr-6 text-slate-500 font-semibold">Feature</th>
                  <th className="py-3 px-4 text-center font-black text-slate-900 bg-orange-50 rounded-t-lg">
                    Best Local Service Sites
                  </th>
                  <th className="py-3 px-4 text-center text-slate-500 font-semibold">Web Agency</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="py-3.5 pr-6 text-slate-700 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center bg-orange-50">
                      {row.us === true ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="font-bold text-slate-900">{row.us}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {row.agency === true ? (
                        <span className="text-green-600">✓</span>
                      ) : row.agency === false ? (
                        <span className="text-slate-300">✗</span>
                      ) : (
                        <span className="text-slate-500">{row.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Pricing FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is there a setup fee?",
                a: "There is a one-time $499 setup fee which covers professional setup, domain registration, 6 business listings, and technical configuration. After that, you only pay your flat monthly rate.",
              },
              {
                q: "What if I want to cancel?",
                a: "Cancel any time. No penalties. We'll keep your site live through the end of the billing period.",
              },
              {
                q: "How does the Conversion Pack work?",
                a: "It integrates a robust Core booking platform directly into your site. We provision a fully button-driven chat widget, a dynamic popover booking engine, and standalone scheduling pages. This eliminates the friction of typing, drastically increases your lead conversions, and tracks all performance via real-time analytics.",
              },
              {
                q: "What counts as a 'location'?",
                a: "One location = one city, with dedicated service pages targeting '[service] in [city]'. The Pro Plan includes 3 cities. Each additional city is +$49/mo.",
              },
              {
                q: "Can I upgrade from Base to Conversion Pack later?",
                a: "Yes. Add it any time from your account dashboard. Takes effect the next billing cycle.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-2xl p-6">
                <div className="font-bold text-slate-900 mb-2">{faq.q}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-500 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Start at $249/month.</h2>
          <p className="text-orange-100 text-lg mb-8">
            Live in 72 hours. No contract. Cancel any time.
          </p>
          <Link
            href="/#get-started"
            className="inline-block bg-white text-orange-600 hover:bg-orange-50 font-black text-lg px-10 py-4 rounded-xl transition-colors"
          >
            Get My Site →
          </Link>
        </div>
      </section>
    </>
  );
}
