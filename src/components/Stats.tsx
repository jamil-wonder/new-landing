import React from "react";
import { CountUp, Eyebrow, Reveal } from "./ui";

const STATS = [
  { v: "40%", label: "of buyers start search with AI", to: 40, suffix: "%" },
  { v: "30", label: "articles published monthly", to: 30, suffix: "" },
  { v: "50+", label: "languages supported natively", to: 50, suffix: "+" },
  { v: "100+", label: "brands already optimized", to: 100, suffix: "+" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#15463b] py-24 md:py-36 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-30 hairline-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,96,0.22),transparent)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 md:px-9">
        <Reveal className="mx-auto max-w-4xl">
          <Eyebrow dark>The Shift</Eyebrow>
          <h2 className="mt-5 font-spectral text-[36px] sm:text-[52px] md:text-[64px] font-normal leading-[1.04] tracking-[-0.035em] text-white text-balance">
            Your customers stopped scrolling results. They ask AI, and AI gives one answer.
            <br />
            <span className="italic text-shine-dark">Wonderscore makes sure it&apos;s you.</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 md:mt-24 grid max-w-5xl grid-cols-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className={`p-7 md:p-10 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i > 1 ? "border-t border-white/10 md:border-t-0" : ""} ${i > 0 ? "md:border-l md:border-white/10" : ""}`}>
              <div className="font-spectral text-[48px] sm:text-[60px] font-normal leading-none tracking-[-0.04em] text-white">
                <CountUp to={stat.to} format={(n) => `${Math.round(n)}${stat.suffix}`} />
              </div>
              <div className="mx-auto mt-4 max-w-[180px] text-[13px] leading-relaxed text-[#a9c9bb]">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
