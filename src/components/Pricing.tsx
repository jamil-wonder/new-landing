import React, { useState } from "react";
import { Check } from "lucide-react";
import { authUrl } from "../lib/appUrl";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = annual ? 79 : 99;

  const features = [
    "Full Agent Suite (6 autonomous agents)",
    "Deep SEO & GEO visibility crawls",
    "Continuous AI mention share tracking",
    "Auto-sync drafts directly to your CMS",
    "Comprehensive weekly content pipeline",
    "Real-time search intent monitoring",
  ];

  return (
    <section id="pricing" className="py-20 bg-transparent text-center border-b border-[#ece3d1]">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#8a8273]">
            Pricing Plans
          </span>
          <h2 className="font-spectral text-[35px] md:text-[52px] font-normal tracking-tighter text-[#15463b] mt-4 leading-[1]">
            One Plan. Total Control.
          </h2>
        </div>

        {/* Pricing Toggle Switch */}
        <div className="flex justify-center items-center gap-3.5 mb-10">
          <div className="relative flex items-center justify-between w-[220px] h-10 bg-white border border-[#ece3d1] p-1 rounded-full select-none">
            {/* Sliding background pill */}
            <span
              className="absolute top-1 bottom-1 w-[103px] bg-[#15463b] rounded-full transition-all duration-200 ease-out z-0"
              style={{
                left: annual ? "111px" : "4px",
              }}
            />

            <button
              onClick={() => setAnnual(false)}
              className={`w-[103px] h-full rounded-full text-xs font-normal text-center z-10 transition duration-200 cursor-pointer ${
                !annual ? "text-white" : "text-[#8a8273]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`w-[103px] h-full rounded-full text-xs font-normal text-center z-10 transition duration-200 cursor-pointer ${
                annual ? "text-white" : "text-[#8a8273]"
              }`}
            >
              Annual
            </button>
          </div>

          <span className="rounded-full bg-[#eef3f0] border border-[#d0e4d6] px-2.5 py-0.5 text-[9px] font-mono-spline font-normal uppercase tracking-wide text-[#1e7d4f]">
            Save 20%
          </span>
        </div>

        {/* Pricing Card */}
        <div className="bg-white border border-[#ece3d1] rounded-[22px] p-8 max-w-lg mx-auto shadow-[0_8px_32px_rgba(60,48,28,0.03)] text-left flex flex-col justify-between">
          <div>
            <div className="font-mono-spline text-[10px] tracking-wider uppercase text-[#8a8273] font-normal">
              Growth Plan
            </div>

            <div className="mt-4 flex items-baseline gap-1.5 border-b border-[#f6f3ec] pb-5">
              <span className="font-spectral text-5xl md:text-6xl font-normal tracking-tight text-[#15463b]">
                £{price}
              </span>
              <span className="text-[#8a8273] text-[14px]">/ month</span>
            </div>

            {annual && (
              <div className="mt-3.5 text-xs text-[#8a8273] font-normal leading-relaxed">
                Billed as £948 once a year · <span className="text-[#1e7d4f] font-normal">Saves £240 annually</span>
              </div>
            )}

            <div className="mt-6">
              <div className="text-[13px] font-normal text-[#15463b] font-mono-spline uppercase tracking-wider mb-4">
                What's included
              </div>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="h-5 w-5 rounded-full bg-[#eef3f0] border border-[#d0e4d6] flex items-center justify-center shrink-0">
                      <Check size={11} className="text-[#1e7d4f]" />
                    </span>
                    <span className="text-[13.5px] text-[#6f6757] font-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={authUrl(true)}
              className="block w-full bg-[#15463b] text-white hover:bg-[#0f332b] text-[14px] font-normal py-3.5 rounded-xl text-center transition-all shadow-[0_2px_8px_rgba(21,70,59,0.1)] cursor-pointer"
            >
              Start Your Free Trial
            </a>
            <p className="mt-3 text-center text-[11px] text-[#8a8273]">
              No credit card required. Cancel anytime with a single click.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
