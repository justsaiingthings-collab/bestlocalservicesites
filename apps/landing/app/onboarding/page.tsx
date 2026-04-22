"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

declare global {
  interface Window {
    uploadcare: any;
  }
}

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    
    // NOTE: Replace these entry IDs with the ones from your Google Form "Get pre-filled link"
    // Entry mappings (captured from Google Form structure)
    searchParams.append("entry.1296969179", formData.get("name") as string);
    searchParams.append("entry.1328433959", formData.get("businessName") as string);
    searchParams.append("entry.877073011", formData.get("phone") as string);
    searchParams.append("entry.45002588", formData.get("landline") as string);
    searchParams.append("entry.1467437603", formData.get("location") as string);
    searchParams.append("entry.1218462450", formData.get("altLocations") as string);
    searchParams.append("entry.778904808", formData.get("serviceAreas") as string);
    searchParams.append("entry.1249023212", formData.get("services") as string);
    searchParams.append("entry.1958582851", formData.get("googleBusiness") as string);
    searchParams.append("entry.1825612101", formData.get("googleReviews") as string);
    searchParams.append("entry.778428941", formData.get("socialProfiles") as string);
    searchParams.append("entry.984491814", formData.get("certifications") as string);
    searchParams.append("entry.146486431", uploadedPhotos);
    searchParams.append("entry.1139051007", formData.get("comments") as string);

    try {
      // NOTE: Replace this URL with your actual Google Form formResponse URL
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdFCup910NwFPFSD89szMB87De_isNCKUuDK-h7cybPKyujjA/formResponse",
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

  useEffect(() => {
    // Re-initialize widget when script loads or component mounts
    const interval = setInterval(() => {
      if (window.uploadcare) {
        const widget = window.uploadcare.Widget('[role="uploadcare-uploader"]');
        widget.onUploadComplete((info: any) => {
          setUploadedPhotos(info.cdnUrl);
        });
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 text-center max-w-2xl w-full shadow-xl border border-slate-100">
          <div className="text-7xl mb-6">🚀</div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Onboarding Complete!</h1>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">
            We've received your business details and photos. Our team is now building your high-conversion engine. 
            Expect your first draft within under 7 days.
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 text-slate-900">
      <Script 
        src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"
        strategy="afterInteractive"
      />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 group">
             <img src="/icon.png" alt="Logo" className="w-10 h-10 group-hover:scale-110 transition-transform" />
             <span className="text-2xl font-black text-slate-900">Best Local Service Sites</span>
          </Link>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Client Onboarding Form</h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            Complete this form to launch your local SEO dominant web presence. 
            Take your time—this data fuels your growth.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 pb-20">
          {/* Section 1: Identity */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-black">1</span>
              Identity & Business Contact
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Contact Name *</label>
                <input name="name" required placeholder="John Smith" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Business Name *</label>
                <input name="businessName" required placeholder="Elite Plumbing Pros" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Mobile Phone Number *</label>
                <input name="phone" type="tel" required placeholder="(555) 000-0000" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Business Landline (Optional)</label>
                <input name="landline" type="tel" placeholder="If exists..." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
            </div>
          </div>

          {/* Section 2: Service Blueprint */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-black">2</span>
              Service Blueprint & Locations
            </h2>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Main Location *</label>
                  <input name="location" required placeholder="Dallas, TX" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Alternative Locations</label>
                  <input name="altLocations" placeholder="Secondary cities..." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">ZIP Codes or Service Area *</label>
                <textarea name="serviceAreas" rows={2} required placeholder="List the zip codes or specific neighborhoods you dominate..." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Services Provided *</label>
                <textarea name="services" rows={3} required placeholder="HVAC Repair, Emergency Plumbing, Roof Replacement, etc." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all resize-none" />
              </div>
            </div>
          </div>

          {/* Section 3: Digital Footprint */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-black">3</span>
              Digital Footprint
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Google Business Profile Hub Link</label>
                <input name="googleBusiness" placeholder="https://google.com/maps/..." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Google Reviews Request Link</label>
                <input name="googleReviews" placeholder="The link you send to customers for reviews..." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Social Profiles (FB, Insta, Twitter)</label>
                <textarea name="socialProfiles" rows={2} placeholder="Drop links to your active social pages..." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all resize-none" />
              </div>
            </div>
          </div>

          {/* Section 4: Authority & Assets */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-black">4</span>
              Authority & High-Res Assets
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Certifications / Licenses</label>
                <input name="certifications" placeholder="Master Plumber, HVAC Excellence, BBB A+, etc." className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700">Business Photos (Upload High-Res)</label>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Upload logos, truck photos, and job site photos. You can select multiple files. 
                  These will be automatically converted to optimized web formats.
                </p>
                <div className="uploadcare-wrapper bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 text-center">
                  <input 
                    type="hidden" 
                    role="uploadcare-uploader" 
                    data-public-key="73199ac7b8e5e6e96215"
                    data-multiple="true"
                    data-preview-step="true"
                    data-crop="free"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Additional Comments or Customization Requests</label>
                <textarea name="comments" rows={3} placeholder="Any specific design requests or notes for our build team?" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none transition-all resize-none" />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-black text-xl py-5 rounded-2xl transition-all shadow-xl shadow-orange-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? "Submitting Details..." : "Submit My Details →"}
            </button>
            <p className="text-center text-sm text-slate-500 mt-4">
              Your data is secured. One of our specialists will review these details within the hour.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
