import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Local Service Sites — Websites That Generate Calls",
  description:
    "Done-for-you websites for roofing, HVAC, plumbing, and other home service businesses. Built to convert visitors into calls and booked jobs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Best Local Service Sites",
              url: "https://bestlocalservicesites.com",
              email: "team@bestlocalservicesites.com",
              description:
                "Done-for-you websites for roofing, HVAC, plumbing, and other home service businesses. Built to convert visitors into calls and booked jobs.",
              logo: "https://bestlocalservicesites.com/icon.png",
            }),
          }}
        />
        {/* Top nav */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/icon.png" alt="Best Local Service Sites Logo" className="w-8 h-8 md:w-9 md:h-9 group-hover:scale-105 transition-transform" />
              <span className="text-lg md:text-xl font-black text-slate-900 truncate max-w-[180px] sm:max-w-none">
                Best Local Service Sites
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href={process.env.NODE_ENV === "development" ? "/#how-it-works" : "/#how-it-works"} className="hover:text-slate-900">How it works</a>
              <a href={process.env.NODE_ENV === "development" ? "/#demos" : "/#demos"} className="hover:text-slate-900">See demos</a>
              <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="#get-started"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-400 py-10 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <span className="text-white font-bold">Best Local Service Sites</span>
            <div className="flex gap-6">
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
              <a href={process.env.NODE_ENV === "development" ? "/#demos" : "/#demos"} className="hover:text-white">Demos</a>
              <a href={process.env.NODE_ENV === "development" ? "/#faq" : "/#faq"} className="hover:text-white">FAQ</a>
            </div>
            <span>© {new Date().getFullYear()} Best Local Service Sites</span>
          </div>
        </footer>
        <script src="https://convopilot.fyi/widget.js" data-site-id="cp_zwi7dg17nrso" data-api-url="https://api.convopilot.fyi"></script>
      </body>
    </html>
  );
}
