"use client";
import { useState } from "react";

export function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    
    // Google Form entry mappings
    searchParams.append("entry.343815537", formData.get("name") as string);
    searchParams.append("entry.346954958", formData.get("business") as string);
    searchParams.append("entry.1111864749", formData.get("phone") as string);
    searchParams.append("entry.2100871410", formData.get("email") as string);
    searchParams.append("entry.2081766879", formData.get("type") as string);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdwFVO4cd23RMOBiVf_juk9vEdux2t_Qhim7qh2SWgJGB5-QA/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: searchParams.toString(),
        }
      );
    } catch (err) {
      console.error("Form submission error", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

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
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 text-slate-900 max-w-xl mx-auto"
    >
      <div className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="business"
          type="text"
          placeholder="Business name"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your phone number"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email address"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <select
          name="type"
          required
          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">What type of business?</option>
          <option value="Roofing">Roofing</option>
          <option value="HVAC">HVAC</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Landscaping">Landscaping</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Painting">Painting</option>
          <option value="Pest Control">Pest Control</option>
          <option value="Other home service">Other home service</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-black text-lg py-4 rounded-xl transition-colors"
        >
          {loading ? "Submitting..." : "Get My Site →"}
        </button>
        <p className="text-center text-xs text-slate-400">
          We'll call you within 1 business day. No spam.
        </p>
      </div>
    </form>
  );
}
