"use client";
import Link from "next/link";
import type { SiteConfig } from "../types/site-config";

export function StickyHeader({ config }: { config: SiteConfig }) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Business name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black text-slate-900 leading-tight">
            {config.businessName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <Link href="/services" className="hover:text-slate-900">Services</Link>
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </nav>

        {/* Phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${config.phone.replace(/\D/g, "")}`}
            className="hidden md:flex items-center gap-1 font-bold text-slate-900 hover:text-blue-700"
          >
            📞 {config.phone}
          </a>
          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
