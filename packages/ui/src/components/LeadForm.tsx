"use client";
import { useState } from "react";
import type { SiteConfig } from "../types/site-config";

type Intent = "quote" | "emergency" | "installation" | "";

interface FormState {
  name: string;
  phone: string;
  service: string;
  intent: Intent;
  urgency: string;
  details: string;
  propertyType: string;
}

export function LeadForm({ config }: { config: SiteConfig }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    intent: "",
    urgency: "",
    details: "",
    propertyType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to CRM / webhook
    setSubmitted(true);
  };

  const isEmergency = form.intent === "emergency";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">
          Got it! We'll call you right back.
        </h3>
        <p className="text-slate-500">
          Expect a call or text to <strong>{form.phone}</strong> within minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-right from-orange-400 to-orange-600" />
      
      <div className="mb-6">
        <h3 className="text-2xl font-black text-slate-900 mb-1">Get an instant quote</h3>
        <p className="text-slate-500 text-sm">Real people answer in minutes. No obligation.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Base fields — always visible */}
        <div className="grid grid-cols-1 gap-4">
          <div className="relative group">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
            />
          </div>
          <div className="relative group">
            <input
              required
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
            />
          </div>
          <div className="relative group">
            <select
              required
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">Select service needed</option>
              {config.services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Intent selector — shown once service is chosen */}
        {form.service && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <select
              name="intent"
              value={form.intent}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">What do you need?</option>
              {config.isEmergencyService && (
                <option value="emergency">🚨 Emergency / urgent issue</option>
              )}
              <option value="quote">📋 Request a quote</option>
              <option value="installation">🔧 New installation / replacement</option>
            </select>
          </div>
        )}

        {/* Conditional: Emergency fields */}
        {isEmergency && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <select
              name="urgency"
              value={form.urgency}
              onChange={handleChange}
              className="w-full bg-red-50 border border-red-200 rounded-xl px-4 py-4 text-red-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">How urgent?</option>
              <option value="now">Right now — actively happening</option>
              <option value="today">Today — needs fixing today</option>
              <option value="soon">Within 24 hours</option>
            </select>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Describe the issue in a few words"
              rows={2}
              className="w-full bg-red-50 border border-red-200 rounded-xl px-4 py-4 text-slate-900 placeholder:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition-all resize-none"
            />
          </div>
        )}

        {/* Conditional: Quote fields */}
        {form.intent === "quote" && !isEmergency && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Project details (optional)"
              rows={2}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all resize-none"
            />
          </div>
        )}

        {/* Conditional: Installation fields */}
        {form.intent === "installation" && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <select
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="">Property type</option>
              <option value="single-family">Single-family home</option>
              <option value="condo">Condo / townhouse</option>
              <option value="multi-family">Multi-family / duplex</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          className={`w-full font-black text-xl py-5 rounded-2xl text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] ${
            isEmergency
              ? "bg-red-600 hover:bg-red-700 shadow-red-200"
              : "bg-orange-500 hover:bg-orange-600 shadow-orange-200"
          }`}
        >
          {isEmergency ? "🚨 Get Help Now" : "Get My Estimate →"}
        </button>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Joined by 20+ people today
          </p>
        </div>
      </form>
    </div>
  );
}

