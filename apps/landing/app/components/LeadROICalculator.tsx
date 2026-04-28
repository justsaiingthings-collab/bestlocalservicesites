"use client";
import { useState } from "react";

export function LeadROICalculator() {
  const [avgJob, setAvgJob] = useState(5000);
  const [callsPerMonth, setCallsPerMonth] = useState(10);
  
  const monthlyCost = 348; // Pro + Conversion Pack
  const conservativeConvRate = 0.2; // 20%
  const estimatedJobs = Math.floor(callsPerMonth * conservativeConvRate);
  const monthlyRevenue = estimatedJobs * avgJob;
  const roi = monthlyCost > 0 ? (monthlyRevenue / monthlyCost).toFixed(1) : "0";

  return (
    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white border border-white/10 shadow-2xl overflow-hidden relative">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Calculate Your <span className="text-orange-500">Painkiller ROI</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Stop thinking of this as a "website fee." It's an acquisition cost. If our engine captures just <strong>one job</strong> you would have otherwise missed, the system pays for itself for an entire year.
          </p>
          
          <div className="space-y-8">
            {/* Input 1 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Average Job Value</label>
                <span className="text-orange-500 font-black">${avgJob.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="25000" 
                step="500"
                value={avgJob}
                onChange={(e) => setAvgJob(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>

            {/* Input 2 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase tracking-widest text-slate-500">Estimated Calls/Mo</label>
                <span className="text-orange-500 font-black">{callsPerMonth} calls</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="100" 
                step="5"
                value={callsPerMonth}
                onChange={(e) => setCallsPerMonth(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
          <div className="mb-8">
            <div className="text-slate-400 text-sm font-bold uppercase mb-2">Estimated Monthly Revenue</div>
            <div className="text-5xl md:text-6xl font-black text-white">${monthlyRevenue.toLocaleString()}</div>
            <div className="text-xs text-slate-500 mt-2 italic">Based on conservative 20% close rate</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <div className="text-slate-500 text-xs font-bold uppercase mb-1">System Cost</div>
              <div className="text-xl font-black text-slate-300">${monthlyCost}/mo</div>
            </div>
            <div className="bg-orange-500/10 p-4 rounded-2xl border border-orange-500/20">
              <div className="text-orange-400 text-xs font-bold uppercase mb-1">Total ROI</div>
              <div className="text-xl font-black text-orange-500">{roi}x</div>
            </div>
          </div>
          
          <button className="w-full mt-8 bg-orange-600 hover:bg-orange-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-orange-600/20">
            Secure This ROI Today →
          </button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}
