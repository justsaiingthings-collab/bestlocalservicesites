import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Best Local Service Sites",
  description:
    "Simple, transparent pricing for home service websites. $149/mo base + $200 one-time setup. +$45/location. +$49/mo Conversion Pack. No contracts.",
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
  "4.9★ rated support team",
  "$200 One-time Setup + Domain",
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
  { feature: "Monthly price", us: "$149", agency: "$500–$2,000" },
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
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Base</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-slate-900">$149</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Your website, fully built and live in 48 hours.
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
                MOST POPULAR
              </div>
              <div className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-2">
                Base + Conversion Pack
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-slate-900">$198</span>
                <span className="text-slate-400">/mo</span>
              </div>
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
                <span className="text-5xl font-black text-slate-900">+$45</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Per additional service area / location.
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

          {/* All plans note */}
          <div className="text-center mt-8 text-slate-500 text-sm">
            All plans are month-to-month. $200 one-time setup fee covers domain and configuration. No contracts.
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
                a: "There is a one-time $200 fee which covers professional setup, domain registration, and technical configuration. After that, you only pay your flat monthly rate.",
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
                a: "One location = one city, with dedicated service pages targeting '[service] in [city]'. The base plan includes 3 cities. Each additional city is +$45/mo.",
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
          <h2 className="text-4xl font-black mb-4">Start at $149/month.</h2>
          <p className="text-orange-100 text-lg mb-8">
            Live in 48 hours. No contract. Cancel any time.
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
