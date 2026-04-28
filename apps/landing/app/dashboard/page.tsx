import Link from "next/link";

export const metadata = {
  title: "Client Success Dashboard | Best Local Service Sites",
  description: "Real-time visibility into your contractor business growth, SEO rankings, and lead generation.",
};

const leadData = [
  { id: 1, type: "Phone Call", source: "Google Local Pack", time: "28 mins ago", status: "Connected" },
  { id: 2, type: "Form Lead", source: "SEO - Roofing Austin", time: "2 hours ago", status: "New" },
  { id: 3, type: "Phone Call", source: "Direct Mobile Call", time: "4 hours ago", status: "Connected" },
  { id: 4, type: "Form Lead", source: "SEO - Roof Repair", time: "Yesterday", status: "Followed Up" },
];

const seoProgress = [
  { term: "Roofing Contractor Austin", start: "Not in Top 100", current: "Page 2 (#14)", target: "Page 1 (#3)", status: "Trending Up" },
  { term: "Emergency Roof Repair", start: "Not in Top 100", current: "Page 1 (#8)", target: "Page 1 (#1)", status: "Stable" },
  { term: "Best Roofer Near Me", start: "Page 8", current: "Page 1 (#5)", target: "Page 1 (#2)", status: "Rising" },
];

export default function DashboardDemo() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Dashboard Nav */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">B</div>
          <span className="font-black text-xl tracking-tight">Best Local <span className="text-orange-500">Dashboard</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Demo Mode</span>
          <div className="w-10 h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm"></div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-black mb-2">Welcome back, Apex Roofing.</h1>
          <p className="text-slate-500">Here is how your lead machine is performing across your 3 service areas.</p>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Total Leads", val: "47", change: "+12% vs last month", color: "text-orange-600" },
            { label: "Avg. Conversion", val: "22%", change: "+4% vs industry avg", color: "text-green-600" },
            { label: "SEO Visibility", val: "84%", change: "Ranked for 12 core terms", color: "text-blue-600" },
            { label: "Monthly ROI", val: "14.2x", change: "Based on $10k avg job", color: "text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.val}</div>
              <div className="text-xs font-semibold text-slate-500">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SEO Progress Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-black text-xl">SEO Transparency Tracker</h2>
              <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded uppercase tracking-widest">Live Updates</span>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Search Term</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Start</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Current</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {seoProgress.map((row) => (
                    <tr key={row.term} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-700">{row.term}</td>
                      <td className="px-6 py-4 text-sm text-slate-400">{row.start}</td>
                      <td className="px-6 py-4">
                        <span className="font-black text-slate-900">{row.current}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          ↑ {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <p className="text-sm text-slate-500 italic">
                *Local SEO is a marathon. We track these daily to ensure your "Engine" is gaining ground even before the phone starts ringing.
              </p>
            </div>
          </div>

          {/* Lead Feed */}
          <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden text-white">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="font-black text-xl">Live Lead Feed</h2>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
            </div>
            <div className="p-6 space-y-6">
              {leadData.map((lead) => (
                <div key={lead.id} className="flex gap-4 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0">
                    {lead.type === "Phone Call" ? "📞" : "✉️"}
                  </div>
                  <div>
                    <div className="font-bold text-orange-400">{lead.type}</div>
                    <div className="text-sm font-medium text-slate-300">{lead.source}</div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                      <span>{lead.time}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                      <span className="text-green-400 font-bold uppercase tracking-tighter">{lead.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6">
              <Link href="/#get-started" className="block w-full bg-white text-slate-900 text-center font-black py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all">
                Add More Service Areas →
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Health Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <h3 className="font-black text-lg mb-4 flex items-center gap-2">
              <span className="text-green-500">✓</span> Schema Health
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">LocalBusiness Schema</span>
                <span className="font-bold text-green-600">Valid</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Review Aggregate</span>
                <span className="font-bold text-green-600">Syncing</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">FAQ Snippets</span>
                <span className="font-bold text-green-600">Active</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <h3 className="font-black text-lg mb-4 flex items-center gap-2">
              <span className="text-blue-500">ℹ</span> Engine Status
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your site is currently distributed across 42 high-authority directory nodes. Monthly "AIO" (AI Optimization) is currently 94% complete.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200">
            <h3 className="font-black text-lg mb-4 flex items-center gap-2">
              <span className="text-orange-500">⚡</span> Action Required
            </h3>
            <p className="text-sm font-bold text-slate-800 bg-orange-50 p-3 rounded-xl">
              "We need 2 more high-res project photos from your last job to finalize the 'Trust Cluster' for North Austin."
            </p>
          </div>
        </section>
      </div>

      <footer className="p-10 text-center text-slate-400 text-sm">
        &copy; 2026 Best Local Service Sites Dashboard. All rights reserved.
      </footer>
    </main>
  );
}
