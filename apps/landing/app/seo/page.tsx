import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Dominance | The Contractor's Digital Playbook",
  description: "A comprehensive guide for local home service businesses on how to dominate local search, optimize for AI engines, and secure more leads for free.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SEOPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-sm font-bold px-4 py-1.5 rounded-full mb-8 border border-orange-500/20 uppercase tracking-widest">
            The Digital Domination Playbook
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
            How to Dominate Local Search <span className="text-orange-400">Without Paying For Ads</span>.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            In the AI-search era, your business is either a <span className="text-white font-bold">Verified Data Source</span> or it's invisible. This masterclass outlines the exact technical steps needed to secure your market share on Google, Apple, Bing, and GPT.
          </p>
        </div>
      </section>

      {/* ─── THE CITATION ANCHOR ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xl">01</span>
              The Citation Anchor
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              AI engines (LLMs) and search algorithms use "triangulation" to verify your business existence. If your data is inconsistent across these platforms, your trust score drops. Start by claiming these three free high-authority anchors:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm group hover:border-orange-500/30 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-between">
                  Apple Business Connect
                  <a href="https://businessconnect.apple.com/" target="_blank" rel="noopener" className="text-xs text-orange-500 font-bold hover:underline">Launch Site ↗</a>
                </h3>
                <p className="text-slate-500 text-sm mb-4">Powers Siri, Apple Maps, and iPhone Spotlight search. Essential for reaching affluent iOS users.</p>
                <ul className="text-xs space-y-2 text-slate-600">
                  <li className="flex items-center gap-2 underline decoration-orange-500/30 font-medium">✨ Pro Tip: Add "Showcases" (free headers inside Apple Maps) to highlight your current lead time.</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm group hover:border-orange-500/30 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-between">
                  Nextdoor for Business
                  <a href="https://nextdoor.com/create-business" target="_blank" rel="noopener" className="text-xs text-orange-500 font-bold hover:underline">Launch Site ↗</a>
                </h3>
                <p className="text-slate-500 text-sm mb-4">The ultimate local trust signal. Search engines love Nextdoor because it proves you are physically active in a neighbor's community.</p>
                <ul className="text-xs space-y-2 text-slate-600">
                  <li className="flex items-center gap-2 underline decoration-orange-500/30 font-medium">✨ Pro Tip: Post one "Social Update" per week to signal activity to Google.</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm group hover:border-orange-500/30 transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-between">
                  Yelp for Business
                  <a href="https://biz.yelp.com/" target="_blank" rel="noopener" className="text-xs text-orange-500 font-bold hover:underline">Launch Site ↗</a>
                </h3>
                <p className="text-slate-500 text-sm mb-4">High domain authority. Even if you don't use Yelp for leads, the backlink to your website is worth the 5-minute setup.</p>
                <ul className="text-xs space-y-2 text-slate-600">
                  <li className="flex items-center gap-2 underline decoration-orange-500/30 font-medium">⚠️ Warning: Yelp sales teams are aggressive. You do NOT need to pay for ads to benefit from the SEO link.</li>
                </ul>
              </div>
            </div>

            {/* Subtle Pitch */}
            <div className="mt-12 bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <div className="text-orange-800 font-bold mb-2 flex items-center gap-2">
                🤖 Platform Advantage
              </div>
              <p className="text-orange-700 text-sm">
                Managing 10+ directories can become a 20-hour/month job. Best Local Service Sites users get <span className="font-bold underline">Automated Citation Protection</span> included in their plan. We maintain your data across the entire local graph while you focus on the job site.
              </p>
            </div>
          </div>

          {/* ─── THE MAPS MASTERCLASS ─────────────────────────────────── */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xl">02</span>
              The Maps Masterclass
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Google Business Profile (GBP) and Bing Places are the most powerful lead generators in the world. They control the "Map Pack" results that appear before any website. Here is the framework for dominance:
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight italic">Step 1: The Verification Sprint</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Go to <Link href="https://google.com/business" className="text-orange-500 underline font-bold">Google Business</Link>. If possible, choose "Video Verification" while you are at your office or branded truck. It speeds up the 48-hour approval window.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight italic">Step 2: The Photo Dominance Rule</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Businesses with 100+ photos receive 520% more calls. This isn't just about showing off work; it's about signaling <span className="font-bold">Freshness</span> to the AI.
                </p>
                <div className="bg-slate-100 rounded-xl p-4 text-xs font-mono text-slate-700 border-l-4 border-orange-500">
                  <p className="mb-2 font-bold">// THE MASTER FORMULA:</p>
                  <ul className="space-y-1">
                    <li>- 10 Photos of your branded truck/uniforms (Authenticity)</li>
                    <li>- 40 Photos of "Before & After" work (Transformation)</li>
                    <li>- 50 Photos of the "Small Stuff" — clean tools, happy team, materials (Velocity)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight italic">Step 3: Location-Tagged Reviews</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Generic reviews ("Good work!") don't help your SEO. You need <span className="font-bold">Contextual Authority</span>. Coach your customers to mention your city and service.
                </p>
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-xs uppercase font-black text-orange-400 mb-2 tracking-widest">Example Script</div>
                  <p className="text-slate-300 italic text-sm">
                    "Hey Rick, since you were happy with the **roof repair in Tacoma**, would you mind leaving us a quick review? It really helps us show Google we're active in the **Pierce County** area!"
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Pitch */}
            <div className="mt-12 bg-slate-900 rounded-2xl p-8 border border-white/10 text-white">
              <div className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                📱 Speed-to-Verified Advantage
              </div>
              <p className="text-slate-400 text-sm">
                Setting this up manually can take weeks. We provision business accounts for our clients as part of the <span className="text-white font-bold underline decoration-orange-500">72-Hour Go-Live Guarantee</span>. We don't just build your site; we build your entire digital footprint.
              </p>
            </div>
          </div>

          {/* ─── AI OPTIMIZATION (AIO) ─────────────────────────────────── */}
          <div className="mb-20">
            <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-slate-950 text-white flex items-center justify-center text-xl">03</span>
              AIO: The Invisible Advantage
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
              A standard website is a brochure. An AI-Optimized website is a **Source of Truth**.
            </p>
            <p className="text-slate-500 text-sm mb-6">
              When someone asks ChatGPT, "Who is the best roofer in Seattle?", the AI doesn't search Google. It crawls its internal knowledge graph for <span className="font-bold italic underline decoration-slate-300">Semantic Authority</span>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="font-bold text-slate-900 mb-2">Schema Graphing</div>
                <p className="text-xs text-slate-500">Invisible code that tells AI exactly which cities you serve and what your pricing is. Without this, AI has to guess.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="font-bold text-slate-900 mb-2">Answer-First Structure</div>
                <p className="text-xs text-slate-500">Structuring your text so it's ready-to-scrape for featured snippets and AI Overviews. No fluff.</p>
              </div>
            </div>
          </div>

          {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
          <div className="mt-10 mb-20">
             <div className="bg-orange-500 text-white rounded-[2rem] px-8 py-12 text-center shadow-2xl shadow-orange-500/20">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Want us to handle this?</h2>
                <p className="text-orange-50 text-lg mb-8 max-w-xl mx-auto">
                  Local SEO isn't a "one-time thing." It's a war for market share. If you'd rather swing the hammer while we dominate your local search map, let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    data-convopilot-book
                    className="bg-white text-orange-600 font-black text-xl px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                  >
                    Book a Strategy Call
                  </button>
                  <Link
                    href="/pricing"
                    className="bg-slate-900/10 hover:bg-slate-900/20 text-white font-bold text-lg px-8 py-5 rounded-2xl border border-white/20 transition-all"
                  >
                    View Packages
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-10 text-center border-t border-slate-200">
        <p className="text-slate-400 text-xs">© 2026 Best Local Service Sites | Confidential Resource for Home Service Teams</p>
      </footer>

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
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
