import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Globe, Loader2, ArrowRight, X, Search } from "lucide-react";
import { WonderscoreLogo } from "./WonderscoreLogo";

const MODELS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/chatgpt.svg",
    delay: 0,
    text: "For a personalized stay, I highly recommend ",
    suffix: ". It features a renowned rooftop greenhouse garden."
  },
  {
    id: "claude",
    name: "Claude",
    logo: "/claude.svg",
    delay: 0.15,
    text: "You should consider ",
    suffix: ". Located in the heart of Shoreditch, it offers custom-designed bedrooms."
  },
  {
    id: "gemini",
    name: "Gemini",
    logo: "/gemini.svg",
    delay: 0.3,
    text: "A top choice is ",
    suffix: ", known for its excellent ground-floor pub and vibrant atmosphere."
  },
  {
    id: "perplexity",
    name: "Perplexity",
    logo: "/perplexity.svg",
    delay: 0.45,
    text: "According to recent reviews, ",
    suffix: " is the best boutique hotel in the area."
  },
];

export default function Hero() {
  const [url, setUrl] = useState("");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const brandName = "The Culpeper";

  const handleScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = url.trim() || "yourwebsite.com";
    window.location.href = `https://app.wonderscore.ai/auth?signup=true&url=${encodeURIComponent(targetUrl)}`;
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-transparent">
      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#ece3d1 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-4 md:px-9 relative text-center">
        
        {/* Eyebrow badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white border border-[#ece3d1] px-3.5 py-1.5 rounded-full shadow-[0_2px_10px_rgba(60,48,28,0.02)]">
            <span className="font-mono-spline text-[9.5px] uppercase tracking-[0.15em] text-[#15463b] font-normal">
              Wonderscore — Your AI CMO
            </span>
            <WonderscoreLogo size={11} color="#d6a23a" />
          </div>
        </div>

        {/* Headline & Subheadline */}
        <div className="max-w-4xl mx-auto mt-7">
          <h1 className="font-spectral text-[42px] sm:text-[64px] md:text-[80px] font-normal text-[#15463b] leading-[1.05] tracking-tighter text-balance">
            Is AI recommending your <span className="italic">business?</span>
          </h1>
          <p className="mt-6 text-[15px] sm:text-[17px] text-[#6f6757] max-w-2xl mx-auto leading-relaxed">
            Enter your website. Wonderscore crawls citations and deploys six agents to grow your search share across all AI models.
          </p>
        </div>

        {/* Central Scan Input Box */}
        <div className="mt-8 max-w-lg mx-auto">
          <form
            onSubmit={handleScanSubmit}
            className="flex flex-col sm:flex-row gap-2 bg-white border border-[#ece3d1] rounded-2xl sm:rounded-full p-1.5 shadow-[0_4px_24px_rgba(60,48,28,0.04)]"
          >
            <div className="flex items-center flex-1 px-3">
              <Globe className="text-[#8a8273] mr-2 shrink-0" size={16} />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="yourwebsite.com"
                className="w-full bg-transparent py-2.5 text-[14.5px] font-medium outline-none text-[#23211b]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#15463b] hover:bg-[#0f332b] text-white font-normal text-xs px-6 py-3.5 rounded-xl sm:rounded-full uppercase tracking-wider transition shrink-0 cursor-pointer"
            >
              Analyze Site Free
            </button>
          </form>
          <div className="mt-3 flex items-center justify-center gap-4 text-[11.5px] text-[#8a8273]">
            <button
              onClick={() => setVideoModalOpen(true)}
              className="font-normal text-[#15463b] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Play size={11} className="fill-[#15463b]" /> Watch Product Video
            </button>
          </div>
        </div>

        {/* Modernized Unified AI Search Simulator */}
        <div className="mt-12 max-w-4xl mx-auto relative">
          <div className="bg-white border border-[#ece3d1] rounded-[24px] shadow-[0_16px_48px_rgba(60,48,28,0.06)] overflow-hidden text-left flex flex-col min-h-[300px]">
            
            {/* Header bar */}
            <div className="bg-transparent border-b border-[#ece3d1] px-5 py-3.5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e5ddd0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e5ddd0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#e5ddd0]" />
              </div>
              <div className="font-mono-spline text-[10px] uppercase tracking-wider text-[#8a8273] flex items-center gap-2 font-normal">
                <WonderscoreLogo size={12} color="#15463b" /> Unified AI Search
              </div>
              <div className="w-10" />
            </div>

            {/* Main Interface */}
            <div className="p-6 md:p-8 flex-1 flex flex-col font-sans bg-transparent">
              
              {/* Sent Query Bubble */}
              <div className="flex justify-end mb-6">
                <div className="bg-[#15463b] text-[#fdfcf8] px-4 py-2.5 rounded-2xl rounded-tr-sm text-[13px] sm:text-[14px] font-normal max-w-[85%] leading-relaxed shadow-sm">
                  Recommend a unique boutique hotel in Shoreditch
                </div>
              </div>

              {/* Status indicator */}
              <div className="flex justify-start h-6 mb-4">
                <div className="flex items-center gap-2 text-[#1e7d4f] text-[12px] font-normal">
                  <WonderscoreLogo size={12} color="#1e7d4f" /> 4 models recommend your brand
                </div>
              </div>

              {/* 4 Models Chat Thread */}
              <div className="flex flex-col gap-4">
                {MODELS.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-start gap-3 w-full max-w-[95%] sm:max-w-[85%]"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#ece3d1] bg-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <img src={model.logo} alt={model.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                    </div>
                    <div className="bg-white border border-[#ece3d1] p-3 sm:p-4 rounded-2xl rounded-tl-sm shadow-sm flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[12px] font-normal text-[#15463b]">{model.name}</span>
                        <span className="text-[10px] text-[#8a8273]">Just now</span>
                        <span className="ml-auto flex items-center gap-1 text-[8px] font-mono-spline uppercase font-normal text-[#1e7d4f] bg-[#eef3f0] px-1.5 py-0.5 rounded border border-[#d0e4d6]">
                          <WonderscoreLogo size={8} color="#1e7d4f" /> Cited
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] text-[#23211b] leading-relaxed">
                        {model.text}
                        <span className="font-normal text-[#1e7d4f] underline decoration-[#d0e4d6] underline-offset-2">
                          {brandName}
                        </span>
                        {model.suffix}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="absolute inset-0 bg-[#15463b]/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-[#ece3d1] rounded-2xl overflow-hidden w-full max-w-4xl relative z-10 shadow-[0_24px_50px_rgba(60,48,28,0.15)]"
            >
              <div className="bg-transparent border-b border-[#ece3d1] px-5 py-3 flex items-center justify-between">
                <span className="font-mono-spline text-[11px] uppercase tracking-wider text-[#15463b] font-normal">
                  Wonderscore Platform Walkthrough
                </span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1 hover:bg-[#ece3d1] rounded-full text-[#6f6757] hover:text-[#15463b] transition"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <video
                  src="/dashboard.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
