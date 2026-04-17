"use client";
import type { SiteConfig } from "../types/site-config";

export function TopBar({ config }: { config: SiteConfig }) {
  return (
    <div className="bg-slate-900 text-white text-sm py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-slate-300">
          📍 {config.serviceRadius ?? `Serving ${config.primaryLocation} & surrounding areas`}
        </span>
        <a
          href={`tel:${config.phone.replace(/\D/g, "")}`}
          className="font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1"
        >
          <span>📞</span>
          <span>{config.phone}</span>
        </a>
      </div>
    </div>
  );
}
