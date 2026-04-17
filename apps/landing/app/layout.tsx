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
        {/* Top nav */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-black text-slate-900">
              Best Local Service Sites
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="/#how-it-works" className="hover:text-slate-900">How it works</a>
              <a href="/#demos" className="hover:text-slate-900">See demos</a>
              <Link href="/pricing" className="hover:text-slate-900">Pricing</Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="/pricing"
                className="hidden md:inline-block text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Pricing
              </Link>
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
              <a href="/#demos" className="hover:text-white">Demos</a>
              <a href="/#faq" className="hover:text-white">FAQ</a>
            </div>
            <span>© {new Date().getFullYear()} Best Local Service Sites</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
