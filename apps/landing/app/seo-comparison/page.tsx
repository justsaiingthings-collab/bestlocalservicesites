import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO vs Traditional SEO | Stop Wasting Ad Spend",
  description: "Learn why traditional SEO fails home service contractors and how hyper-local search dominance captures high-intent leads in under 7 days.",
  alternates: { canonical: "/seo-comparison/" },
};

const comparisonData = [
  {
    metric: "Optimization Target",
    local: "Google Maps & Local 'City' Silos",
    traditional: "National Domain Authority & Blog Posts",
    winner: "Local",
  },
  {
    metric: "Primary Ranking Factor",
    local: "Proximity, Reviews & NAP Consistency",
    traditional: "Backlink Profiles & Keyphrase Density",
    winner: "Local",
  },
  {
    metric: "Lead Intent",
    local: "Emergency / Immediate Hire (High $$$)",
    traditional: "Informational / Research (Low $$$)",
    winner: "Local",
  },
  {
    metric: "Speed to Result",
    local: "Under 7 Days to 30 Days",
    traditional: "6 to 12 Months",
    winner: "Local",
  },
  {
    metric: "AI Recommendation",
    local: "High (LLMs prioritize local business schema)",
    traditional: "Medium (AI often synthesizes blog content without citing)",
    winner: "Local",
  },
];

const technicalDetails = [
  {
    title: "Schema.org: LocalBusiness vs. Article",
    desc: "Traditional SEO focuses on 'Article' schema to rank blogs. We use 'LocalBusiness' + 'ServiceArea' JSON-LD. This code tells Google exactly which zip codes you service, making you the undisputed local authority for AI search queries.",
    icon: "📂",
  },
  {
    title: "Review Velocity vs. Review Count",
    desc: "A business with 500 reviews from 3 years ago will lose to a business with 50 reviews and 2 new ones this week. We focus on 'Velocity'—the constant stream of new social proof that signals 'Freshness' to the algorithm.",
    icon: "📈",
  },
  {
    title: "The Facebook 'Triangulation' signal",
    desc: "Meta Business isn't for posting memes. It's a high-authority citation. Google checks your Facebook Business Page to verify your address and phone number. If they don't match, you get ghosted. We sync them for you.",
    icon: "👤",
  },
];

export default function SEOComparisonPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-sm font-bold px-4 py-1.5 rounded-full mb-8 border border-orange-500/20 uppercase tracking-widest">
            The Contractor's Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            The Trap of <span className="text-slate-500">"Traditional"</span> SEO.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Most agencies charge you $2,000/mo to write blog posts that nobody reads. For a contractor, <strong>Local SEO</strong> is the only game that matters.
          </p>
        </div>
      </section>

      {/* ─── COMPARISON GRID ────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">Granular Breakdown: Local vs. National</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-widest">
                  <th className="p-6 text-left">Metric</th>
                  <th className="p-6 text-center bg-orange-600">Local SEO (Our Engine)</th>
                  <th className="p-6 text-center">Traditional (Big Agency)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{row.metric}</td>
                    <td className="p-6 text-center text-orange-700 font-bold bg-orange-50/30">
                      {row.local}
                    </td>
                    <td className="p-6 text-center text-slate-500 italic">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-slate-400 text-sm italic">
            *Data based on 2026 Home Service search trends and AI Overview citation frequency.
          </p>
        </div>
      </section>

      {/* ─── THE MAP PACK MATH ──────────────────────────────────────── */}
      <section className="bg-slate-900 text-white py-20 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-8 text-center md:text-left">The "Map Pack" Math</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                In 2026, <strong>44% of all local business clicks</strong> go to the top 3 spots in the Google Map Pack.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Page 1 "Organic" results are now a consolation prize. If you aren't in the top 3 spots on the map, you are effectively invisible to <strong>6 out of 10 homeowners</strong>.
              </p>
              <div className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl border border-orange-400/30">
                Our Goal: Local Top 3 or Nothing.
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-[2rem] border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-bold">Map Pack #1-3</span>
                  <span className="text-orange-400 font-black text-2xl">44% - 60% CTR</span>
                </div>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-orange-500 h-full w-[60%]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Organic Link #1</span>
                  <span className="text-white font-bold">~12% CTR</span>
                </div>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-500 h-full w-[12%]" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Page 1 Bottom</span>
                  <span className="text-white font-bold">&lt; 3% CTR</span>
                </div>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-600 h-full w-[3%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL ACTION ITEMS ─────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-4">Granular Actionable Details</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto italic">
            This is where the money is made. These are the technical handles we pull to force Google to recognize your dominance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalDetails.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-500/40 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE "DIGITAL GHOST" SCORECARD ───────────────────────────── */}
      <section className="bg-slate-100 py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-200">
          <h2 className="text-3xl font-black text-slate-900 mb-2 text-center">Local SEO Scorecard</h2>
          <p className="text-slate-500 text-center mb-10">Are you a "Digital Ghost" or a Market Leader?</p>

          <div className="space-y-4">
            {[
              "I have a verified Google Business Profile.",
              "I post new job-site photos at least once a week.",
              "My website is linked to my Facebook, Bing, and Apple Maps.",
              "I have location-specific service pages (e.g., 'Roofing in Austin').",
              "I respond to 100% of my Google reviews.",
              "My website scores 90+ on Mobile Performance.",
            ].map((q, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="w-6 h-6 rounded border-2 border-slate-300 group-hover:border-orange-500 transition-colors flex items-center justify-center">
                  {/* Checkbox visual only for now */}
                </div>
                <span className="text-slate-700 font-medium">{q}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-center">
            <p className="text-white font-bold mb-4">Checked 3 or fewer? You are likely a Digital Ghost.</p>
            <Link href="/#get-started" className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3 rounded-xl transition-all inline-block">
              Fix My Scoreboard →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────────────────── */}
      <section className="bg-orange-500 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Stop Fighting For Crumbs.</h2>
          <p className="text-orange-50 text-xl mb-10">
            We build high-performance search machines for contractors. <br />
            Live in under 7 days. No long-term contracts.
          </p>
          <button
            data-convopilot-book
            className="bg-slate-900 text-white font-black text-xl px-12 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Book My Free Strategy Call
          </button>
        </div>
      </section>

      <script
        src="https://convopilot.fyi/widget.js"
        data-site-id="cp_zwi7dg17nrso"
        data-api-url="https://api.convopilot.fyi"
        data-hide-bubble="true"
        async
      />
    </div>
  );
}
