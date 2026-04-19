import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listings Tracker | Internal Ops — Best Local Service Sites",
  description: "Internal operational checklist for tracking client listing setup across all 6 platforms.",
  robots: { index: false, follow: false },
};

const platforms = [
  {
    id: "google",
    name: "Google Business Profile",
    url: "https://business.google.com/",
    color: "bg-blue-600",
    verifyTime: "3–7 days",
    steps: [
      "Account created (client Google email noted)",
      "Profile claimed or created",
      "All fields completed (name, address, phone, website, categories)",
      "Service areas defined",
      "Business description written (750 chars)",
      "Products/Services added",
      "20+ photos uploaded",
      "Verification initiated",
      "Verification type noted (postcard/video/phone/email)",
      "Profile live & visible in Maps",
    ],
  },
  {
    id: "bing",
    name: "Bing Places for Business",
    url: "https://www.bing.com/forbusiness",
    color: "bg-teal-600",
    verifyTime: "5–12 days",
    steps: [
      "Microsoft account created/confirmed",
      "Google import attempted (preferred)",
      "Manual entry completed (if import failed)",
      "Phone/hours/description verified",
      "10+ photos uploaded",
      "Verification method selected",
      "Profile live & visible in Bing Maps",
    ],
  },
  {
    id: "yelp",
    name: "Yelp for Business",
    url: "https://business.yelp.com/",
    color: "bg-red-600",
    verifyTime: "Instant – 3 days",
    steps: [
      "Existing profile searched (claim if found)",
      "Claimed or created at business.yelp.com",
      "Phone/hours/website confirmed",
      "10+ photos uploaded",
      "Business description written (from owner)",
      "Request a Quote (RAQ) feature enabled",
      "Paid ads upsell DECLINED",
      "Profile live & visible",
    ],
  },
  {
    id: "nextdoor",
    name: "Nextdoor Business Page",
    url: "https://business.nextdoor.com/",
    color: "bg-green-600",
    verifyTime: "Instant",
    steps: [
      "Account created at business.nextdoor.com",
      "Service area / neighborhoods configured",
      "Business story/About written (conversational)",
      "Logo and photos uploaded",
      "First local promotion post drafted",
      "Profile live & verified",
    ],
  },
  {
    id: "apple",
    name: "Apple Business Connect",
    url: "https://businessconnect.apple.com/",
    color: "bg-slate-800",
    verifyTime: "3–5 days",
    steps: [
      "Apple ID confirmed/created",
      "Existing listing searched (claim if available)",
      "All business details completed",
      "Phone verification call answered",
      "Showcase (banner) created and uploaded",
      "Profile live & visible in Apple Maps",
    ],
  },
  {
    id: "bbb",
    name: "Better Business Bureau (BBB)",
    url: "https://www.bbb.org/",
    color: "bg-yellow-600",
    verifyTime: "7–21 days",
    steps: [
      "Existing listing searched at bbb.org",
      "Free basic listing claimed or submitted",
      "NAP (Name, Address, Phone) verified for consistency",
      "Business description added",
      "Accreditation decision made with client (Paid - Optional)",
      "Profile live in BBB directory",
    ],
  },
];

const StatusBadge = ({ label, color }: { label: string; color: string }) => (
  <span className={`text-white text-xs font-bold px-2 py-1 rounded-full ${color}`}>
    {label}
  </span>
);

export default function OpsListingsTracker() {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Internal header */}
      <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between sticky top-0 z-50 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-black text-sm tracking-widest uppercase">
            BLSS Internal · Listings Ops Tracker
          </span>
        </div>
        <div className="flex gap-2">
          <StatusBadge label="🔒 Internal Only" color="bg-slate-700" />
          <StatusBadge label="No-Index" color="bg-red-700" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Client Info Header */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-10">
          <h1 className="text-2xl font-black text-slate-900 mb-6">
            Client Listing Setup · Tracker
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                Client Business Name
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-3 text-slate-400 text-sm">
                [Client Name]
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                Onboarding Start Date
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-3 text-slate-400 text-sm">
                [Date]
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                Assigned To
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-3 text-slate-400 text-sm">
                [Ops Person]
              </div>
            </div>
          </div>
        </div>

        {/* Overall Status */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-10">
          {platforms.map((p) => (
            <div key={p.id} className="bg-white rounded-xl p-4 border border-slate-200 text-center shadow-sm">
              <div className={`w-8 h-8 rounded-lg ${p.color} mx-auto mb-2`} />
              <div className="text-slate-800 font-black text-xs">{p.name.split(" ")[0]}</div>
              <div className="w-5 h-5 rounded border-2 border-slate-300 mx-auto mt-3 cursor-pointer" title="Mark complete" />
            </div>
          ))}
        </div>

        {/* Platform Checklists */}
        <div className="space-y-8">
          {platforms.map((platform) => (
            <div key={platform.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Platform header bar */}
              <div className={`${platform.color} px-6 py-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <h2 className="text-white font-black text-lg">{platform.name}</h2>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-bold">
                    ± {platform.verifyTime}
                  </span>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-xs underline"
                >
                  Open Dashboard ↗
                </a>
              </div>

              {/* Checklist items */}
              <div className="px-6 py-6 space-y-3">
                {platform.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 py-2 border-b border-slate-50 last:border-0">
                    {/* Checkbox (visual only — for printing/copy use) */}
                    <div className="w-5 h-5 rounded border-2 border-slate-300 flex items-center justify-center shrink-0 mt-0.5 cursor-pointer hover:border-orange-400 transition-colors">
                      <svg className="w-3 h-3 text-transparent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm">{step}</span>
                    {/* Notes field */}
                    <div className="ml-auto text-xs text-slate-300 italic whitespace-nowrap hidden md:block">
                      — notes —
                    </div>
                  </div>
                ))}

                {/* Internal note field */}
                <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-dashed border-slate-200">
                  <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">
                    📝 Internal Notes / Credentials
                  </div>
                  <div className="text-slate-400 text-xs italic">
                    [Login email, verification code, issues, client notes, etc.]
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sign-off block */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 mt-10">
          <h2 className="font-black text-xl mb-6">Onboarding Sign-Off</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                All 6 Platforms Live
              </div>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-4 text-slate-500 text-sm">
                ☐ Confirmed · Date: ________
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                NAP Consistency Verified
              </div>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-4 text-slate-500 text-sm">
                ☐ Confirmed · Tool used: ________
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                Client Sent Summary Email
              </div>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-4 text-slate-500 text-sm">
                ☐ Sent · Send Date: ________
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                30-Day Performance Review Scheduled
              </div>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-4 text-slate-500 text-sm">
                ☐ Scheduled · Date: ________
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-400 text-xs mt-8 pb-10">
          BLSS Internal Operations · This page is confidential and not indexed by search engines.
        </div>
      </div>
    </div>
  );
}
