"use client";
import { useState } from "react";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length === 10;
}

export function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const phoneError = phoneTouched && !isValidPhone(phone);
  const emailError = emailTouched && !isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidPhone(phone) || !isValidEmail(email)) {
      setPhoneTouched(true);
      setEmailTouched(true);
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formspree.io/f/xreryann", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          business: formData.get("business"),
          phone: phone,
          email: email,
          type: formData.get("type"),
        }),
      });
    } catch (err) {
      console.error("Form submission error", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center max-w-xl mx-auto border-4 border-orange-500 shadow-2xl">
        <div className="text-5xl mb-4">🗓️</div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Strategy Call Scheduled.</h3>
        <p className="text-slate-500">A Senior SEO Strategist will call you personally within 24 hours to review your current web presence.</p>
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

        {/* Phone with formatter */}
        <div>
          <input
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            onBlur={() => setPhoneTouched(true)}
            required
            className={`w-full border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 ${
              phoneError
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-300 focus:ring-orange-400"
            }`}
          />
          {phoneError && (
            <p className="text-red-500 text-xs mt-1 text-left">Please enter a valid 10-digit phone number.</p>
          )}
        </div>

        {/* Email with validator */}
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            required
            className={`w-full border rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 ${
              emailError
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-300 focus:ring-orange-400"
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1 text-left">Please enter a valid email address.</p>
          )}
        </div>

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
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white font-black text-lg py-4 rounded-xl shadow-lg hover:shadow-orange-200 transition-all"
        >
          {loading ? "Submitting..." : "Get My Free Strategy Audit →"}
        </button>
        <p className="text-center text-xs text-slate-400">
          Personal consultation. No obligation.
        </p>
      </div>
    </form>
  );
}
