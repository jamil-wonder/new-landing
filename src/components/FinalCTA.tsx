import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { scanUrl } from "../lib/appUrl";
import { Reveal } from "./ui";

export default function FinalCTA() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = url.trim() || "yourwebsite.com";
    window.location.href = scanUrl(cleanUrl);
  };

  return (
    <section className="bg-[#f8f5ed] px-4 py-20 md:px-9 md:py-28 text-center">
      <Reveal>
        <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[36px] border border-[#2a6356] bg-[#0c2b24] px-6 py-16 text-[#eaf3ee] shadow-[0_60px_120px_-50px_rgba(12,43,36,0.8)] md:px-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 hairline-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,#000,transparent)]" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,96,0.35),transparent)]" />
          <div className="pointer-events-none absolute -bottom-48 -right-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(214,162,58,0.25),transparent)]" />

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-[#a8d860] animate-ring" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#a8d860]" />
              </span>
              <span className="font-mono-spline text-[10px] uppercase tracking-[0.15em] text-[#a8d860]">Deploy Your Autonomous Team</span>
            </div>

            <h2 className="font-spectral text-[40px] sm:text-[60px] md:text-[72px] font-normal leading-[1.02] tracking-[-0.04em] text-white text-balance">
              Start growing your AI search share <span className="italic text-shine-dark">today.</span>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-2 flex w-full max-w-lg flex-col gap-2 rounded-[22px] border border-white/15 bg-white/[0.07] p-2 backdrop-blur focus-within:border-[#a8d860]/60 sm:flex-row sm:rounded-full"
            >
              <label className="flex-1">
                <span className="sr-only">Your website</span>
                <input
                  type="text"
                  inputMode="url"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="yourwebsite.com"
                  className="w-full bg-transparent px-5 py-3.5 text-[16px] text-white outline-none placeholder:text-white/40"
                />
              </label>
              <button
                type="submit"
                className="btn-sheen group inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#a8d860] px-7 py-3.5 text-[15px] font-medium text-[#0c2b24] transition-colors hover:bg-[#b9e473] sm:rounded-full cursor-pointer"
              >
                Scan Now <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="flex items-center gap-2 text-[12px] text-[#86b89f]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#a8d860]" />
              7-day free trial · Cancel anytime with a single click
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
