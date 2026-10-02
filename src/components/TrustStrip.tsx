import React from "react";
import { Reveal } from "./ui";

const ENGINES = [
  { name: "ChatGPT", logo: "/chatgpt.svg" },
  { name: "Claude", logo: "/claude.svg" },
  { name: "Gemini", logo: "/gemini.svg" },
  { name: "Perplexity", logo: "/perplexity.svg" },
];

const PLATFORMS = [
  { name: "WordPress", logo: "/wordpress.svg" },
  { name: "Shopify", logo: "/shopify.svg" },
  { name: "Webflow", logo: "/webflow.svg" },
  { name: "Wix", logo: "/wix.svg" },
  { name: "Squarespace", logo: "/squarespace.svg" },
  { name: "Framer", logo: "/framer.svg" },
  { name: "Ghost", logo: "/ghost.svg" },
  { name: "Zapier", logo: "/zapier.svg" },
];

export default function TrustStrip() {
  const loop = [...PLATFORMS, ...PLATFORMS];
  return (
    <section className="relative border-y border-[#e6dcc6] bg-[#fdfcf8] py-10 md:py-12">
      <div className="mx-auto max-w-[1180px] px-4 md:px-9 grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
        <Reveal>
          <div className="font-mono-spline text-[10px] uppercase tracking-[0.16em] text-[#8a8273]">We track answers from</div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
            {ENGINES.map((e) => (
              <span key={e.name} className="flex items-center gap-2 text-[14px] font-medium text-[#23211b]">
                <img src={e.logo} alt="" className="h-5 w-5 object-contain" />
                {e.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <div className="font-mono-spline text-[10px] uppercase tracking-[0.16em] text-[#8a8273] md:text-right">
            And publish to where you already work
          </div>
          <div className="mask-fade-x mt-4 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12">
              {loop.map((p, i) => (
                <img
                  key={p.name + i}
                  src={p.logo}
                  alt={p.name}
                  className="h-6 w-auto max-w-[110px] object-contain opacity-55 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
