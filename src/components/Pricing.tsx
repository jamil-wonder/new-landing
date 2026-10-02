import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { authUrl } from "../lib/appUrl";
import { Eyebrow, Reveal } from "./ui";

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
    <section id="pricing" className="relative overflow-hidden bg-[#f8f5ed] py-24 md:py-36 text-center">
      <div className="pointer-events-none absolute left-1/2 top-24 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,96,0.26),transparent)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 md:px-9">
        <Reveal className="mx-auto mb-10 max-w-3xl">
          <Eyebrow>Pricing Plans</Eyebrow>
          <h2 className="mt-5 font-spectral text-[38px] sm:text-[52px] md:text-[64px] font-normal leading-[1.02] tracking-[-0.035em] text-[#0f332b]">
            One Plan. <span className="italic text-[#1e7d4f]">Total Control.</span>
          </h2>
        </Reveal>

        <Reveal className="mb-10 flex items-center justify-center gap-3.5">
          <div role="tablist" aria-label="Billing period" className="relative flex h-11 w-[232px] select-none items-center rounded-full border border-[#e3d9c2] bg-white p-1">
            <span
              className="absolute bottom-1 top-1 w-[108px] rounded-full bg-[#15463b] transition-all duration-300 ease-out"
              style={{ left: annual ? "120px" : "4px" }}
            />
            <button
              role="tab"
              aria-selected={!annual}
              onClick={() => setAnnual(false)}
              className={`relative z-10 h-full w-[108px] rounded-full text-[13px] transition-colors duration-200 cursor-pointer ${!annual ? "text-white" : "text-[#8a8273]"}`}
            >
              Monthly
            </button>
            <button
              role="tab"
              aria-selected={annual}
              onClick={() => setAnnual(true)}
              className={`relative z-10 h-full w-[108px] rounded-full text-[13px] transition-colors duration-200 cursor-pointer ${annual ? "text-white" : "text-[#8a8273]"}`}
            >
              Annual
            </button>
          </div>
          <span className="rounded-full border border-[#d0e4d6] bg-[#eef3f0] px-3 py-1 font-mono-spline text-[9.5px] uppercase tracking-wide text-[#1e7d4f]">
            Save 20%
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-4xl rounded-[34px] bg-gradient-to-br from-[#a8d860] via-[#1e7d4f] to-[#d6a23a] p-px shadow-[0_50px_100px_-40px_rgba(21,70,59,0.55)]">
            <div className="grid overflow-hidden rounded-[33px] bg-white text-left md:grid-cols-[1fr_1.05fr]">
              {/* price side */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-[#0c2b24] p-8 sm:p-10 text-white">
                <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#1e7d4f]/50 blur-3xl" />
                <div className="relative">
                  <div className="font-mono-spline text-[10.5px] uppercase tracking-[0.16em] text-[#a8d860]">Growth Plan</div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -22, filter: "blur(6px)" }}
                        transition={{ duration: 0.35 }}
                        className="font-spectral text-[84px] leading-none tracking-[-0.05em] num"
                      >
                        £{price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-[15px] text-[#a9c9bb]">/ month</span>
                  </div>

                  <div className="mt-4 min-h-[40px] text-[12.5px] leading-relaxed text-[#a9c9bb]">
                    {annual && (
                      <>
                        Billed as £948 once a year · <span className="text-[#a8d860]">Saves £240 annually</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="relative mt-10">
                  <a
                    href={authUrl(true)}
                    className="btn-sheen group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#a8d860] py-4 text-[15px] font-medium text-[#0c2b24] transition-colors hover:bg-[#b9e473]"
                  >
                    Start Your Free Trial
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <p className="mt-4 text-center text-[11.5px] text-[#86b89f]">No credit card required. Cancel anytime with a single click.</p>
                </div>
              </div>

              {/* features side */}
              <div className="p-8 sm:p-10">
                <div className="font-mono-spline text-[10.5px] uppercase tracking-[0.16em] text-[#15463b]">What&apos;s included</div>
                <ul className="mt-6 space-y-4">
                  {features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + idx * 0.07 }}
                      className="flex items-start gap-3.5"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#d0e4d6] bg-[#eef3f0]">
                        <Check size={12} className="text-[#1e7d4f]" />
                      </span>
                      <span className="text-[15px] leading-snug text-[#4d4636]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
