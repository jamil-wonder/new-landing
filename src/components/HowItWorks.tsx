import React from "react";
import { Link, Sparkles, Send } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Connect Your Site",
    body: "Enter your domain. We scan your structure, keywords, and citations."
  },
  {
    step: "02",
    title: "Review Agent Drafts",
    body: "Agents coordinate to discover gaps, draft content, and prepare it for review."
  },
  {
    step: "03",
    title: "Sync & Scale",
    body: "Approve drafts in a click. Sync automatically to your blog."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-transparent border-y border-[#ece3d1] text-left">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#8a8273]">
            Workflow
          </span>
          <h2 className="font-spectral text-[35px] md:text-[52px] font-normal tracking-tight text-[#15463b] mt-4 leading-tight text-center">
            How it works in three steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              className="bg-white border border-[#ece3d1] rounded-[22px] p-6 shadow-[0_4px_24px_rgba(60,48,28,0.01)] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-baseline mb-6">
                  <span className="font-mono-spline text-sm text-[#1e7d4f] font-normal">
                    Step {s.step}
                  </span>
                  <span className="h-8 w-8 rounded-full bg-[#f6f3ec] flex items-center justify-center font-spectral text-sm font-normal text-[#15463b]">
                    {idx + 1}
                  </span>
                </div>

                <h3 className="font-spectral text-[21px] font-normal tracking-tight text-[#15463b] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#6f6757] text-[13.5px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
