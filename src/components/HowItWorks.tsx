import React from "react";
import { motion } from "framer-motion";
import { Check, Globe, Send, Sparkles } from "lucide-react";
import { Reveal, SectionHead, Spotlight } from "./ui";

const STEPS = [
  {
    step: "01",
    title: "Connect Your Site",
    body: "Enter your domain. We scan your structure, keywords, and citations.",
  },
  {
    step: "02",
    title: "Review Agent Drafts",
    body: "Agents coordinate to discover gaps, draft content, and prepare it for review.",
  },
  {
    step: "03",
    title: "Sync & Scale",
    body: "Approve drafts in a click. Sync automatically to your blog.",
  },
];

function Visual({ i }: { i: number }) {
  if (i === 0) {
    return (
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 rounded-xl border border-[#e6dcc6] bg-white px-3 py-2.5">
          <Globe size={14} className="text-[#8a8273]" />
          <span className="font-mono-spline text-[11px] text-[#23211b]">yourbrand.co.uk</span>
          <span className="ml-auto h-3 w-px animate-caret bg-[#1e7d4f]" />
        </div>
        {["Structure mapped", "Keywords found", "Citations crawled"].map((t, k) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + k * 0.25 }}
            className="flex items-center gap-2 text-[11.5px] text-[#4d4636]"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1e7d4f]">
              <Check size={9} className="text-white" />
            </span>
            {t}
          </motion.div>
        ))}
      </div>
    );
  }
  if (i === 1) {
    return (
      <div className="space-y-2.5">
        {[
          ["Draft", "w-[82%]", "bg-[#eef3f0] text-[#1e7d4f] border-[#d0e4d6]"],
          ["Fact-check", "w-[64%]", "bg-[#fdf3e2] text-[#9a6a12] border-[#efe3c8]"],
          ["GEO optimise", "w-[38%]", "bg-white text-[#8a8273] border-[#e6dcc6]"],
        ].map(([t, w, c]) => (
          <div key={t} className="rounded-xl border border-[#efe8d6] bg-white p-3">
            <div className="flex items-center justify-between">
              <span className="text-[11.5px] text-[#23211b]">{t}</span>
              <span className={`rounded-md border px-1.5 py-0.5 font-mono-spline text-[8px] uppercase tracking-wider ${c}`}>Agent</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#efe8d6]">
              <div className={`h-full rounded-full bg-[#1e7d4f] ${w}`} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-[#e6dcc6] bg-white p-3">
        <div className="h-2 w-[70%] rounded bg-[#e9e1cd]" />
        <div className="mt-2 h-1.5 w-full rounded bg-[#efe8d6]" />
        <div className="mt-1.5 h-1.5 w-[80%] rounded bg-[#efe8d6]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#15463b] py-2 text-[11px] font-medium text-white">
          <Send size={11} /> Approve & sync
        </span>
        <span className="rounded-lg border border-[#e6dcc6] bg-white px-2.5 py-2 font-mono-spline text-[9px] uppercase tracking-wider text-[#1e7d4f]">
          Live
        </span>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative bg-[#f8f5ed] py-24 md:py-36 text-left">
      <div className="mx-auto max-w-[1180px] px-4 md:px-9">
        <SectionHead eyebrow="Workflow" title={<>How it works in <span className="italic text-[#1e7d4f]">three steps</span></>} />

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {/* connector line (desktop) */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[59px] hidden md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-px origin-left bg-gradient-to-r from-[#1e7d4f] via-[#a8d860] to-[#d6a23a]"
            />
          </div>

          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12}>
              <Spotlight className="card-hover relative h-full overflow-hidden rounded-[26px] border border-[#e6dcc6] bg-white p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#e6dcc6] bg-[#f8f5ed] font-spectral text-[22px] text-[#15463b]">
                    {i + 1}
                  </span>
                  <span className="font-mono-spline text-[11px] uppercase tracking-[0.16em] text-[#1e7d4f]">Step {s.step}</span>
                </div>
                <h3 className="mt-7 font-spectral text-[28px] leading-[1.1] tracking-[-0.025em] text-[#0f332b]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#6f6757]">{s.body}</p>
                <div className="mt-7 rounded-2xl bg-gradient-to-br from-[#f1f6ea] to-[#faf8f3] p-4 border border-[#efe8d6]">
                  <Visual i={i} />
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
