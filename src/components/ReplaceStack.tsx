import React from "react";
import { Eyebrow, Reveal } from "./ui";
import { Briefcase, PenTool, Globe, Link as LinkIcon, Users, ArrowRight } from "lucide-react";

export default function ReplaceStack() {
  const orbit = [
    { label: "Full-time marketing hire", price: "$5,000/mo", icon: Briefcase },
    { label: "Content writer", price: "$1,500/mo", icon: PenTool },
    { label: "SEO agency", price: "$3,000/mo", icon: Globe },
    { label: "Backlink service", price: "$1,200/mo", icon: LinkIcon },
    { label: "Community manager", price: "$2,000/mo", icon: Users },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0c2b24] py-24 md:py-36 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-30 hairline-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_45%,#000,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(30,125,79,0.45),transparent)]" />
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Title */}
        <Reveal className="relative max-w-3xl mx-auto mb-12">
          <Eyebrow dark>The Math</Eyebrow>
          <h2 className="font-spectral text-[38px] sm:text-[52px] md:text-[64px] font-normal tracking-[-0.035em] text-white mt-5 leading-[1.02]">
            Everything you&apos;d hire, <span className="italic text-shine-dark">replaced.</span>
          </h2>
        </Reveal>

        {/* Orbit Diagram Container */}
        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[360px] sm:mt-16 sm:max-w-[560px]">
          
          {/* Outer Rotating Container */}
          <div className="absolute inset-0 w-full h-full animate-orbit">
            
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              {Array.from({ length: 5 }).map((_, i) => {
                const radius = 18 + i * 8.5; // Gaps: 18%, 26.5%, 35%, 43.5%, 52%
                return (
                  <circle
                    key={i}
                    cx="50%"
                    cy="50%"
                    r={`${radius}%`}
                    stroke="#2f6b5a"
                    strokeWidth="1.2"
                    fill="none"
                    strokeOpacity="0.8"
                  />
                );
              })}
            </svg>

            {/* Orbiting Nodes */}
            {orbit.map((o, i) => {
              const angle = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 18 + (i) * 8.5; // match node-specific radius
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const Icon = o.icon;

              return (
                <div
                  key={o.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  {/* Reverse rotation keeps nodes upright */}
                  <div className="animate-orbit-reverse flex max-w-[155px] items-center gap-1.5 rounded-full border border-white/15 bg-[#14634a]/90 backdrop-blur px-3 py-2 text-[10px] sm:text-xs font-normal text-white shadow-sm sm:max-w-none sm:gap-2.5 sm:px-4 sm:py-2">
                    <Icon className="h-3.5 w-3.5 text-[#a8d860] shrink-0" />
                    <span className="truncate">{o.label}</span>
                    <span className="hidden font-mono-spline text-white/70 line-through sm:inline ml-1">
                      {o.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Static Center Sun Hub */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#a8d860]/30 bg-[#0a1f1a] p-3 text-center ring-8 ring-[#1e7d4f]/25 sm:h-32 sm:w-32 sm:p-4 shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <img src="/logo.svg" alt="Wonderscore" className="h-7 w-7 sm:h-9 sm:w-9 object-contain brightness-0 invert" />
            <div className="mt-1 font-spectral text-[13px] sm:text-sm font-normal tracking-tight text-white">
              Wonderscore
            </div>
            <div className="text-[11px] sm:text-xs font-mono-spline font-normal text-[#a8d860] uppercase tracking-wider mt-0.5">
              £79/mo
            </div>
          </div>
        </div>

        {/* Price comparison widget */}
        <div className="relative mx-auto mt-16 flex max-w-2xl flex-col items-center justify-center gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-9 text-center backdrop-blur sm:flex-row sm:gap-10 md:gap-16">
          {/* Left Side: What it would cost */}
          <div className="flex flex-col items-center">
            <span className="font-mono-spline text-[9.5px] uppercase tracking-wider text-[#86b89f] font-normal">
              What it would cost you
            </span>
            <div className="relative mt-2 text-3xl font-spectral font-normal text-[#86b89f]">
              <span>$12,700/mo</span>
              <span className="absolute left-0 right-0 top-1/2 h-[2.5px] bg-[#b1442a] -translate-y-1/2" />
            </div>
          </div>

          {/* Middle: Arrow */}
          <div className="hidden sm:block text-[#86b89f] text-xl font-normal">→</div>

          {/* Right Side: With Wonderscore */}
          <div className="flex flex-col items-center">
            <span className="font-mono-spline text-[9.5px] uppercase tracking-wider text-[#a8d860] font-normal">
              With Wonderscore
            </span>
            <div className="mt-2 text-4xl font-spectral font-normal tracking-tight text-white">
              £79/mo
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

