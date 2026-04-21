import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Business Listings Checklist | Best Local Service Sites",
  description:
    "A step-by-step guide to claiming and optimizing your business on Google, Bing, Yelp, Nextdoor, Apple Maps, and BBB — the six pillars of local search dominance.",
  robots: {
    index: false,
    follow: true,
  },
};

const platforms = [
  {
    id: "google",
    num: "01",
    name: "Google Business Profile",
    url: "https://business.google.com/",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    bgHover: "hover:border-blue-300/50",
    tagline: "The #1 Priority. Controls Google Maps + AI Overviews.",
    timeToVerify: "3–7 days (Postcard) · Instant (Video)",
    impact: "★★★★★ Critical",
    steps: [
      {
        title: "Sign Up / Claim Your Profile",
        detail:
          "Visit business.google.com and sign in with a Google account. Search for your business — if it already exists (added by a customer), click \"Claim this business.\" If not, click \"Add your business.\"",
      },
      {
        title: "Fill Out Every Field",
        detail:
          "Business name (exactly as it appears on your license), address, phone, website URL, primary category (e.g. \"Roofing Contractor\"), hours, and service areas. Incomplete profiles are buried.",
      },
      {
        title: "Choose Verification Method",
        detail:
          "Options: Postcard (3–7 days, least preferred), Phone/Text (instant if available, fastest), Email (instant if available), or Video Verification (24–48 hrs, recommended — film your storefront/truck). Prioritize video.",
      },
      {
        title: "Upload 20+ Photos on Day 1",
        detail:
          "Minimum: 1 cover photo (branded truck or team), 1 logo, 5 \"work in progress\" shots, 5 \"after\" shots. Google uses photo freshness as a ranking signal. Add 5+ per month.",
      },
      {
        title: "Write Your Business Description",
        detail:
          "750 characters. Front-load your city + primary service: \"[City]'s trusted [Service] contractor since [Year]. Licensed, bonded, and insured.\" Include 2–3 service area city names naturally.",
      },
      {
        title: "Set Up 'Products' and 'Services'",
        detail:
          "Under the \"Products\" or \"Services\" tab, list each service individually (Roof Replacement, Roof Repair, Gutter Cleaning). Assign a price range or \"Get a quote.\" This feeds Google's AI data extraction.",
      },
    ],
    proTip:
      "Turn on Q&A notifications. Answer every question within 24 hours. Google interprets fast responses as a signal of an active, trustworthy business and boosts your ranking.",
    pitchAngle:
      "Google verification takes up to 7 days. We submit and manage your GBP as part of our 72-Hour Go-Live process — your profile is live and optimized before your site even launches.",
  },
  {
    id: "bing",
    num: "02",
    name: "Bing Places for Business",
    url: "https://www.bing.com/forbusiness",
    color: "bg-teal-500",
    textColor: "text-teal-600",
    borderColor: "border-teal-100",
    bgHover: "hover:border-teal-300/50",
    tagline: "Powers Bing Maps, Cortana, and ChatGPT's location data.",
    timeToVerify: "5–12 days (Postcard) · Instant (Import from Google)",
    impact: "★★★★☆ High",
    steps: [
      {
        title: "Create Account at Bing Places",
        detail:
          "Visit bing.com/forbusiness and sign in with a Microsoft account. If you don't have one, create a free account at account.microsoft.com first.",
      },
      {
        title: "Import From Google (The Smart Shortcut)",
        detail:
          "Bing offers a one-click Google Business Profile import. Click \"Import from Google\" and authorize access. This syncs your name, address, phone, hours, and categories instantly — saves 30 minutes of manual entry.",
      },
      {
        title: "Complete Verification",
        detail:
          "If importing from Google: verification is often near-instant. For manual setups, choose phone/text (if available) for same-day verification, or postcard (5–12 days). Active Bing accounts can use email.",
      },
      {
        title: "Enhance Your Profile",
        detail:
          "Add 10+ photos, your business description, and all service categories. Bing's data feeds directly into Microsoft's AI systems (Copilot), so completeness matters for AI citation.",
      },
    ],
    proTip:
      "ChatGPT's \"Browse with Bing\" feature pulls local business data from Bing Places. A completed Bing profile means your business is eligible to appear in ChatGPT responses to location-based queries.",
    pitchAngle:
      "The Bing import trick saves time — but only if your Google profile is already perfect. We ensure both are synchronized and optimized for AI citation simultaneously.",
  },
  {
    id: "yelp",
    num: "03",
    name: "Yelp for Business",
    url: "https://business.yelp.com/products/business-page/",
    color: "bg-red-500",
    textColor: "text-red-600",
    borderColor: "border-red-100",
    bgHover: "hover:border-red-300/50",
    tagline: "High DA backlink + the platform Amazon Alexa uses for local search.",
    timeToVerify: "Instant (Claim) · 1–3 days (New listing)",
    impact: "★★★★☆ High",
    steps: [
      {
        title: "Check If You're Already Listed",
        detail:
          "Search your exact business name on Yelp.com. If a profile exists (created by a customer), click \"Claim this business\" — this is faster than creating a new one and preserves any existing reviews.",
      },
      {
        title: "Claim or Create at business.yelp.com",
        detail:
          "Navigate to business.yelp.com and click \"Manage my free listing.\" Verify you are the owner via phone call or postcard.",
      },
      {
        title: "Complete Your Business Details",
        detail:
          "Add your phone, website URL, business hours, and service categories. Upload your logo and at least 10 project photos. The \"From the Business Owner\" description is particularly important — write in first person.",
      },
      {
        title: "Handle the Sales Calls Strategically",
        detail:
          "Yelp will call you repeatedly to upsell ads. You do NOT need to pay for ads to benefit. Simply politely decline and request to be added to their do-not-call list. The free listing and its SEO value remain active regardless.",
      },
      {
        title: "Set Up 'Request a Quote' Feature",
        detail:
          "Enable the free 'Request a Quote' (RAQ) button in your dashboard. This adds a direct lead generation feature to your Yelp profile at no cost.",
      },
    ],
    proTip:
      "Yelp has a domain authority of 94/100. A link from your Yelp profile to your website is one of the most powerful free backlinks you can get for local SEO. This alone is worth the 10-minute setup.",
    pitchAngle:
      "Yelp's sales team is persistent and confusing. Many business owners accidentally sign up for paid ads. We manage your Yelp presence for purely free SEO value — no accidental ad spend.",
  },
  {
    id: "nextdoor",
    num: "04",
    name: "Nextdoor Business Page",
    url: "https://business.nextdoor.com/en-us/getting-started/business-page",
    color: "bg-green-500",
    textColor: "text-green-600",
    borderColor: "border-green-100",
    bgHover: "hover:border-green-300/50",
    tagline: "The highest-trust local platform. Neighbor recommendations convert at 3x.",
    timeToVerify: "Instant • Free Business Page",
    impact: "★★★★☆ High (Trust Signal)",
    steps: [
      {
        title: "Create Your Free Business Page",
        detail:
          "Go to business.nextdoor.com and click \"Get started for free.\" Enter your business name, address, and category. Nextdoor verifies you are a local business by your service area.",
      },
      {
        title: "Define Your Service Area",
        detail:
          "Select the neighborhoods or zip codes you actively serve. This controls who sees your business in the local feed. Be specific — accuracy builds trust more than over-extending your service radius.",
      },
      {
        title: "Complete Your Business Story",
        detail:
          "Write a conversational 'About' section as if a neighbor is reading it. \"Hi, I'm [Name] — I've been fixing roofs in [City] for [X] years. My kids go to school here. I know these neighborhoods.\". Authenticity converts on Nextdoor.",
      },
      {
        title: "Monitor & Respond to Recommendations",
        detail:
          "When a neighbor recommends your business in a thread, Nextdoor links your business page. You'll get notified — respond publicly to thank them. This visibility compounds rapidly.",
      },
    ],
    proTip:
      "Run a 'local promotion post' (free feature) once per month. Write it as a neighbor, not an ad: \"Heads up — if anyone needs a roof before fall rains hit, I have a few slots open this week.\" This language converts at 3x the rate of traditional ads.",
    pitchAngle:
      "Nextdoor is the only platform where 'neighbor trust' directly translates to phone calls. We set up your neighborhood presence and craft your first month of posts so you start with authentic momentum.",
  },
  {
    id: "apple",
    num: "05",
    name: "Apple Business Connect",
    url: "https://businessconnect.apple.com/",
    color: "bg-slate-800",
    textColor: "text-slate-700",
    borderColor: "border-slate-200",
    bgHover: "hover:border-slate-400/50",
    tagline: "Powers Siri, Apple Maps, and iPhone Spotlight. 1B+ iOS users.",
    timeToVerify: "3–5 days (Review) · Instant (If data exists)",
    impact: "★★★★☆ High (iOS Audience)",
    steps: [
      {
        title: "Sign In at businessconnect.apple.com",
        detail:
          "Use your Apple ID (or create one free at appleid.apple.com). Navigate to businessconnect.apple.com and click \"Add your business.\"",
      },
      {
        title: "Search for Your Existing Listing",
        detail:
          "Apple Maps may already have your business from public data. If it does, click \"Claim\" to take ownership. If not, fill in all location, service, and contact details manually.",
      },
      {
        title: "Complete Verification",
        detail:
          "Apple verifies via phone call to your listed business number. Answer from your business phone within the verification window (usually 1–3 days after submission). Upon verification, your profile goes live within 24 hours.",
      },
      {
        title: "Add a 'Showcase' (The Hidden Power Feature)",
        detail:
          "Within Business Connect, add a free 'Showcase' — this is a rotating visual banner that appears at the top of your Apple Maps listing. Update it monthly with seasonal promos: \"Book before May 15 for a spring roof inspection.\"",
      },
    ],
    proTip:
      "Siri's local search answers are pulled from Apple Business Connect. When an iPhone user asks Siri \"find a roofer near me,\" it cites verified Business Connect data first. This is a direct AI citation source.",
    pitchAngle:
      "Most contractors skip Apple entirely. That's a mistake — especially in affluent markets where iPhone usage is high. We set this up as standard infrastructure for all our clients.",
  },
  {
    id: "bbb",
    num: "06",
    name: "Better Business Bureau (BBB)",
    url: "https://www.bbb.org/",
    color: "bg-yellow-500",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-100",
    bgHover: "hover:border-yellow-300/50",
    tagline: "Trust signal for older demographics + high-authority backlink.",
    timeToVerify: "7–21 days (Manual Review)",
    impact: "★★★☆☆ Medium (Trust Badge)",
    steps: [
      {
        title: "Create a Free Basic BBB Listing",
        detail:
          "Go to bbb.org and search for your business. If not found, click \"Start a Report\" → \"Is this your business?\" to initiate a free basic listing. Note: BBB Accreditation (the blue shield) is a paid program — a free listing still provides directory value.",
      },
      {
        title: "Understand Accreditation vs. Free Listing",
        detail:
          "Free Listing: Your business appears in BBB's directory. Provides an SEO backlink. Accreditation ($500–$1,500/yr depending on size): Grants the \"A+ Accredited\" badge, response to complaints via BBB, and higher listing visibility. Accreditation is optional but powerful for conversion.",
      },
      {
        title: "Complete Your Business Profile",
        detail:
          "Ensure your NAP (Name, Address, Phone) exactly matches every other listing. Inconsistencies here damage your local search trust score across all platforms.",
      },
      {
        title: "Monitor for Complaints",
        detail:
          "BBB sends email alerts when a complaint is filed. Even with a free listing, responding professionally to any complaint is critical — unresolved complaints are publicly visible and damage trust.",
      },
    ],
    proTip:
      "BBB's domain authority is 92/100. Even without Accreditation, a free directory listing creates a powerful backlink to your site. Pair it with a consistent NAP (Name, Address, Phone) and it boosts all your other listings' authority.",
    pitchAngle:
      "BBB Accreditation (the badge) costs $500–$1,500/yr and is optional. We advise on whether it's worth it for your specific market and handle the submission — no upsell, just strategy.",
  },
];

export default function ListingsPage() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-x-hidden">
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-sm font-bold px-4 py-1.5 rounded-full mb-8 border border-orange-500/20 uppercase tracking-widest">
            Your Business Listings Playbook
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            6 Free Listings That Put Your Business{" "}
            <span className="text-orange-400">On the Map.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Before your website, before ads, before anything else — you need
            your business{" "}
            <span className="text-white font-bold">claimed and verified</span>{" "}
            on every major local platform. This checklist walks you through
            each one, step by step, with exact timelines.
          </p>
          {/* Progress Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-slate-800/80 rounded-2xl px-5 py-4 border border-slate-700 max-w-full">
            <svg className="w-5 h-5 text-orange-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-slate-300 text-sm text-center">
              <strong className="text-white">6 platforms</strong> · All free to claim ·{" "}
              <strong className="text-orange-400">~2–3 hrs total setup time</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE OVERVIEW ──────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-black text-slate-700 mb-6 uppercase tracking-widest">
            Verification Timeline at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div key={p.id} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className={`text-xs font-black ${p.textColor} shrink-0 mt-0.5`}>{p.num}</span>
                <div className="min-w-0">
                  <div className="text-slate-800 font-bold text-sm">{p.name}</div>
                  <div className="text-slate-500 text-xs mt-0.5 break-words">{p.timeToVerify}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-6">
            💡 <strong>Pro strategy:</strong> Submit Google first (longest wait), then work through the rest while you wait for the postcard.
          </p>
        </div>
      </section>

      {/* ─── PLATFORM SECTIONS ──────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-24">
          {platforms.map((platform) => (
            <div key={platform.id} id={platform.id}>
              {/* Platform Header */}
              <div className="flex flex-wrap items-start gap-4 mb-8">
                <span className={`w-12 h-12 rounded-xl ${platform.color} text-white flex items-center justify-center text-lg font-black shrink-0`}>
                  {platform.num}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-black text-slate-900 break-words">{platform.name}</h2>
                  <p className="text-slate-500 text-sm break-words">{platform.tagline}</p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-bold text-orange-500 hover:underline"
                  >
                    Open Platform ↗
                  </a>
                </div>
              </div>

              {/* Meta info bar */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-slate-200 text-xs">
                  <span className="text-slate-500">⏱ Verify:</span>
                  <span className="font-bold text-slate-800">{platform.timeToVerify}</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 border border-slate-200 text-xs">
                  <span className="text-slate-500">Impact:</span>
                  <span className={`font-bold ${platform.textColor}`}>{platform.impact}</span>
                </div>
              </div>

              {/* Step-by-step checklist */}
              <div className="space-y-4 mb-10">
                {platform.steps.map((step, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl p-6 border-2 ${platform.borderColor} ${platform.bgHover} transition-all group`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <div className={`w-7 h-7 rounded-lg border-2 border-slate-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-orange-400 transition-colors`}>
                        <span className="text-slate-300 text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-black text-slate-900 mb-1 break-words">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Tip */}
              <div className="bg-slate-900 rounded-2xl p-6 mb-6">
                <div className="text-orange-400 text-xs font-black uppercase tracking-widest mb-2">✨ Pro Tip</div>
                <p className="text-slate-300 text-sm leading-relaxed">{platform.proTip}</p>
              </div>

              {/* Subtle pitch */}
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <div className="text-orange-700 font-bold text-xs uppercase tracking-widest mb-2">🚀 The Managed Alternative</div>
                <p className="text-orange-800 text-sm leading-relaxed">
                  {platform.pitchAngle}{" "}
                  <button
                    data-convopilot-book
                    className="font-black text-orange-600 hover:text-orange-700 underline cursor-pointer"
                  >
                    Talk to us about handling this.
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 text-white rounded-[2rem] px-8 py-14 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border border-orange-500/20 uppercase tracking-widest">
              The 72-Hour Alternative
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Want all 6 done for you{" "}
              <span className="text-orange-400">before your site even launches?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              We set up and optimize all 6 listings as part of our onboarding.
              They're live, verified, and linked to your new website — all
              before you swing a single hammer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                data-convopilot-book
                className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xl px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-orange-500/30"
              >
                Book a Strategy Call
              </button>
              <Link
                href="/pricing"
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg px-8 py-5 rounded-2xl border border-slate-700 transition-all"
              >
                View Packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-slate-200">
        <p className="text-slate-400 text-xs">
          © 2026 Best Local Service Sites · Confidential Client Resource
        </p>
      </footer>

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
