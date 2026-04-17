"use client";
import { useState } from "react";

export function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center max-w-xl mx-auto">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">We'll call you soon.</h3>
        <p className="text-slate-500">Expect a call within 1 business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-white rounded-2xl p-8 text-slate-900 max-w-xl mx-auto"
    >
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="text"
          placeholder="Business name"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="tel"
          placeholder="Your phone number"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <select
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">What type of business?</option>
          <option>Roofing</option>
          <option>HVAC</option>
          <option>Plumbing</option>
          <option>Landscaping</option>
          <option>Cleaning</option>
          <option>Painting</option>
          <option>Other home service</option>
        </select>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 rounded-xl transition-colors"
        >
          Get My Site →
        </button>
        <p className="text-center text-xs text-slate-400">
          We'll call you within 1 business day. No spam.
        </p>
      </div>
    </form>
  );
}
