import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim() || "yourwebsite.com";
    window.location.href = `https://app.wonderscore.ai/auth?signup=true&url=${encodeURIComponent(cleanUrl)}`;
  };

  return (
    <section className="py-16 bg-transparent text-center">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Outer Card */}
        <div className="bg-[#15463b] rounded-[22px] p-8 md:p-16 text-[#eaf3ee] relative overflow-hidden max-w-5xl mx-auto shadow-[0_12px_40px_rgba(21,70,59,0.15)] border border-[#2a6356]">
          {/* Background Dots */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full">
              <span className="font-mono-spline text-[9px] uppercase tracking-[0.15em] text-[#a8d860] font-normal">
                Deploy Your Autonomous Team
              </span>
            </div>

            <h2 className="font-spectral text-[35px] sm:text-[48px] font-normal tracking-tighter text-white leading-[1]">
              Start growing your AI search share today.
            </h2>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md mt-4 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="yourwebsite.com"
                className="bg-[#0f332b] text-white placeholder:text-white/40 border border-[#2a6356] focus:border-[#a8d860] outline-none px-4 py-3 rounded-xl text-[14px] flex-1 font-normal shadow-sm transition"
              />
              <button
                type="submit"
                className="bg-[#a8d860] hover:bg-[#97cf4d] text-[#15463b] font-normal text-[14px] px-6 py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                Scan Now <ArrowRight size={14} />
              </button>
            </form>

            <div className="text-[11px] text-[#86b89f] flex items-center gap-1.5 mt-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#a8d860]" />
              7-day free trial · Cancel anytime with a single click
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
