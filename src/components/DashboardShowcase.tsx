import React from "react";
import { WonderscoreLogo } from "./WonderscoreLogo";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Database,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function DashboardShowcase() {
  return (
    <section
      id="features"
      className="py-20 bg-transparent border-y border-[#ece3d1]"
    >
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#8a8273]">
            Explore the Platform
          </span>
          <h2 className="font-spectral text-[35px] md:text-[52px] font-normal tracking-tighter text-[#15463b] mt-4 leading-[1]">
            Designed to match your brand's intelligence
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Bento Card 1: Overview Dashboard (Size: 7 Columns) */}
          <div className="md:col-span-7 bg-white border border-[#ece3d1] rounded-[22px] p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(60,48,28,0.02)] card-hover group">
            {/* Upper: Image Mockup */}
            <div className="rounded-xl overflow-hidden select-none h-[220px] border border-[#ece3d1] bg-[#faf8f3]">
              <img src="/bento-unified-overview.png" alt="Unified Brand Overview mockup" className="w-full h-full object-cover object-left-top min-w-[614px] max-w-none" />
            </div>

            {/* Lower: Copy */}
            <div className="mt-6 text-left">
              <div className="flex items-center gap-2">
                <Database size={16} className="text-[#15463b]" />
                <h3 className="font-spectral text-[20px] font-normal tracking-tighter text-[#15463b]">
                  Unified Brand Overview
                </h3>
              </div>
              <p className="mt-2.5 text-[#6f6757] text-sm leading-relaxed">
                Wonderscore monitors metrics in one clear index. Track
                authority, history, and competitors instantly.
              </p>
            </div>
          </div>

          {/* Bento Card 2: AI Query Tracker (Size: 5 Columns) */}
          <div className="md:col-span-5 bg-white border border-[#ece3d1] rounded-[22px] p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(60,48,28,0.02)] card-hover group">
            {/* Upper: Image Mockup */}
            <div className="rounded-xl overflow-hidden select-none h-[220px] border border-[#ece3d1] bg-[#faf8f3]">
              <img src="/bento-query-tracking.png" alt="AI Engine Query Tracking mockup" className="w-full h-full object-cover object-left-top min-w-[418px] max-w-none" />
            </div>

            {/* Lower: Copy */}
            <div className="mt-6 text-left">
              <div className="flex items-center gap-2">
                <Search size={16} className="text-[#15463b]" />
                <h3 className="font-spectral text-[20px] font-normal tracking-tighter text-[#15463b]">
                  AI Engine Query Tracking
                </h3>
              </div>
              <p className="mt-2.5 text-[#6f6757] text-sm leading-relaxed">
                Test commercial buyer queries. See exactly when you are cited,
                when you are left out, and how to improve references.
              </p>
            </div>
          </div>

          {/* Bento Card 3: Deep Analyser (Size: 5 Columns) */}
          <div className="md:col-span-5 bg-white border border-[#ece3d1] rounded-[22px] p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(60,48,28,0.02)] card-hover group">
            {/* Upper: Image Mockup */}
            <div className="rounded-xl overflow-hidden select-none h-[220px] border border-[#ece3d1] bg-[#faf8f3]">
              <img src="/bento-geo-audits.png" alt="Deep SEO & GEO Audits mockup" className="w-full h-full object-cover object-left-top min-w-[418px] max-w-none" />
            </div>

            {/* Lower: Copy */}
            <div className="mt-6 text-left">
              <div className="flex items-center gap-2">
                <WonderscoreLogo size={16} color="#15463b" />
                <h3 className="font-spectral text-[20px] font-normal tracking-tighter text-[#15463b]">
                  Deep SEO & GEO Audits
                </h3>
              </div>
              <p className="mt-2.5 text-[#6f6757] text-sm leading-relaxed">
                Scan your site against search engine schemas and LLM crawlers to
                find where authority needs support.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Action Autopilot (Size: 7 Columns) */}
          <div className="md:col-span-7 bg-white border border-[#ece3d1] rounded-[22px] p-6 flex flex-col justify-between shadow-[0_4px_24px_rgba(60,48,28,0.02)] card-hover group">
            {/* Upper: Image Mockup */}
            <div className="rounded-xl overflow-hidden select-none h-[220px] border border-[#ece3d1] bg-[#faf8f3]">
              <img src="/bento-content-autopilot.png" alt="Content Engine Autopilot mockup" className="w-full h-full object-cover object-left-top min-w-[614px] max-w-none" />
            </div>

            {/* Lower: Copy */}
            <div className="mt-6 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#15463b]" />
                <h3 className="font-spectral text-[20px] font-normal tracking-tighter text-[#15463b]">
                  Content Engine Autopilot
                </h3>
              </div>
              <p className="mt-2.5 text-[#6f6757] text-sm leading-relaxed">
                Our writer agent drafts humanized articles to fill citation
                gaps. Review and publish with a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
