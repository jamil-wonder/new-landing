import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { v: "40%", label: "of buyers start search with AI" },
  { v: "30", label: "articles published monthly" },
  { v: "50+", label: "languages supported natively" },
  { v: "100+", label: "brands already optimized" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#15463b] text-center border-b border-[#2a6356]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Title */}
        <div className="max-w-4xl mx-auto mb-16">
          <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#a8d860]">
            The Shift
          </span>
          <h2 className="font-spectral text-[32px] sm:text-[46px] font-normal tracking-tighter text-white mt-4">
            Your customers stopped scrolling results. They ask AI, and AI gives one answer.
            <br />
            <span className="text-[#a8d860] italic font-normal">Wonderscore makes sure it's you.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="bg-[#1e7d4f] border border-[#2a6356] rounded-[22px] p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.15)] max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="font-spectral text-4xl sm:text-5xl font-normal tracking-tight text-white">
                  {stat.v}
                </div>
                <div className="text-[12.5px] text-[#86b89f] leading-relaxed max-w-[200px] mx-auto font-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

