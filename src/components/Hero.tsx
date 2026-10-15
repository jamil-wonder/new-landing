import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Globe, Link2, Play, Sparkles, X } from "lucide-react";
import { scanUrl } from "../lib/appUrl";

const BRAND = "The Culpeper";

const MODELS = [
  {
    id: "ChatGPT",
    logo: "/chatgpt.svg",
    pre: "For a personalised stay, I highly recommend ",
    post: ". It features a renowned rooftop greenhouse garden and individually designed rooms.",
    sources: ["theculpeper.com", "timeout.com", "tripadvisor.co.uk"],
    share: 78,
  },
  {
    id: "Claude",
    logo: "/claude.svg",
    pre: "You should consider ",
    post: ". Set in the heart of Shoreditch, it pairs custom-designed bedrooms with a lively ground-floor pub.",
    sources: ["theculpeper.com", "cntraveller.com"],
    share: 51,
  },
  {
    id: "Gemini",
    logo: "/gemini.svg",
    pre: "A top choice is ",
    post: ", known for its excellent ground-floor pub, rooftop garden and relaxed neighbourhood atmosphere.",
    sources: ["theculpeper.com", "google.com/maps"],
    share: 44,
  },
  {
    id: "Perplexity",
    logo: "/perplexity.svg",
    pre: "According to recent reviews, ",
    post: " is among the best boutique hotels in Shoreditch, praised for service and design.",
    sources: ["theculpeper.com", "booking.com", "timeout.com"],
    share: 62,
  },
];

const PLACEHOLDERS = ["theculpeper.com", "yourbrand.co.uk", "yourwebsite.com"];
const SCORE = 73;

const EASE = [0.22, 1, 0.36, 1] as const;

function EngineDot({ src, size = 18 }: { src: string; size?: number }) {
  return (
    <span style={{ width: size, height: size }} className="flex shrink-0 items-center justify-center rounded-full bg-white">
      <img src={src} alt="" style={{ width: size * 0.6, height: size * 0.6 }} className="object-contain" />
    </span>
  );
}

/* ─────────────── the one card: an AI answer, and the score it adds up to ─────────────── */

function AnswerCard() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(0);
  const [paused, setPaused] = useState(false);
  const model = MODELS[active];
  const full = model.pre + BRAND + model.post;

  useEffect(() => {
    if (reduce) {
      setTyped(full.length);
      return;
    }
    setTyped(0);
    let i = 0;
    const type = setInterval(() => {
      i += 2;
      setTyped(Math.min(i, full.length));
      if (i >= full.length) clearInterval(type);
    }, 22);
    return () => clearInterval(type);
  }, [active, full, reduce]);

  useEffect(() => {
    if (paused || reduce || typed < full.length) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % MODELS.length), 3400);
    return () => clearTimeout(t);
  }, [typed, full.length, paused, reduce]);

  const preEnd = model.pre.length;
  const brandEnd = preEnd + BRAND.length;
  const shown = full.slice(0, typed);
  const done = typed >= full.length;
  const r = 30;
  const c = 2 * Math.PI * r;

  return (
    <div
      className="relative grid overflow-hidden rounded-[24px] bg-[#0c2b24] text-left shadow-[0_50px_100px_-40px_rgba(10,31,26,0.55)] md:grid-cols-[minmax(0,1fr)_240px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* the conversation */}
      <div className="relative p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1" role="tablist" aria-label="AI engine">
            {MODELS.map((m, i) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={i === active}
                aria-label={m.id}
                onClick={() => setActive(i)}
                className={`flex cursor-pointer items-center gap-2 rounded-full py-1.5 pl-1.5 text-[12px] transition-all duration-300 ${
                  i === active ? "bg-white pr-3.5 text-[#0c2b24]" : "pr-1.5 text-[#a9c9bb] hover:bg-white/10"
                }`}
              >
                <EngineDot src={m.logo} size={20} />
                {i === active && <span className="font-medium">{m.id}</span>}
              </button>
            ))}
          </div>
          <span className="hidden font-mono-spline text-[9.5px] uppercase tracking-wider text-[#86b89f] sm:inline">Example answer</span>
        </div>

        <div className="mt-5 flex justify-end">
          <div className="max-w-[86%] rounded-2xl rounded-tr-md bg-[#a8d860] px-4 py-2.5 text-[13.5px] font-medium text-[#0c2b24]">
            Recommend a unique boutique hotel in Shoreditch
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3">
          <EngineDot src={model.logo} size={26} />
          <div className="min-w-0 flex-1">
            <p className="min-h-[96px] text-[14.5px] leading-[1.7] text-[#e6f1ea] sm:min-h-[76px]">
              {shown.slice(0, preEnd)}
              <span className="rounded-[5px] bg-[#a8d860]/20 px-1 font-medium text-[#d6f09b] underline decoration-[#a8d860]/60 underline-offset-[3px]">
                {shown.slice(preEnd, brandEnd)}
              </span>
              {shown.slice(brandEnd)}
              {!done && <span className="ml-0.5 inline-block h-[15px] w-[2px] translate-y-[2px] bg-[#a8d860] animate-caret" />}
            </p>
            <div className="mt-2 flex min-h-[28px] flex-wrap items-center gap-1.5">
              {done &&
                model.sources.map((s, i) => (
                  <motion.span
                    key={model.id + s}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-mono-spline text-[10px] ${
                      i === 0 ? "bg-[#a8d860]/15 text-[#d6f09b]" : "bg-white/[0.07] text-[#a9c9bb]"
                    }`}
                  >
                    <Link2 size={9} /> {s}
                  </motion.span>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* the score it adds up to - same card, its own panel */}
      <div className="relative bg-[#0f3a30] p-5 sm:p-6">
        <div className="flex items-center gap-4 md:flex-col md:items-start">
          <div className="relative h-[72px] w-[72px] shrink-0">
            <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
              <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
              <motion.circle
                cx="36"
                cy="36"
                r={r}
                fill="none"
                stroke="#a8d860"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={c}
                initial={{ strokeDashoffset: c }}
                animate={{ strokeDashoffset: c - (c * SCORE) / 100 }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.9 }}
              />
            </svg>
            <span className="num absolute inset-0 flex items-center justify-center font-spectral text-[24px] text-white">{SCORE}</span>
          </div>
          <div>
            <div className="font-mono-spline text-[9.5px] uppercase tracking-[0.14em] text-[#86b89f]">Wonder Score</div>
            <div className="mt-1 font-spectral text-[18px] leading-tight text-white">Good AI visibility</div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {MODELS.map((m, i) => (
            <button key={m.id} onClick={() => setActive(i)} className="group block w-full cursor-pointer text-left" aria-label={`Show ${m.id} answer`}>
              <div className="flex items-center justify-between text-[11.5px]">
                <span className={i === active ? "text-white" : "text-[#a9c9bb] group-hover:text-white"}>{m.id}</span>
                <span className="num text-[#a8d860]">{m.share}%</span>
              </div>
              <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className={`h-full rounded-full ${i === active ? "bg-[#a8d860]" : "bg-[#3f8a64]"}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${m.share}%` }}
                  transition={{ duration: 1.2, delay: 1 + i * 0.1, ease: EASE }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── the hero ───────────────────────── */

export default function Hero() {
  const [url, setUrl] = useState("");
  const [phIdx, setPhIdx] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPhIdx((i) => (i + 1) % PLACEHOLDERS.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  const handleScanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = scanUrl(url.trim() || PLACEHOLDERS[2]);
  };

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden bg-[#f8f5ed] pb-20 pt-32 sm:pt-40 md:pb-28">
      {/* dot grid, fading out towards the edges and the bottom */}
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,#000_40%,transparent_100%)]" />
      {/* one soft, still light behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,96,0.22),transparent)]" />

      <div className="relative mx-auto max-w-[1120px] px-5 text-center md:px-10">
        <motion.button
          {...rise(0)}
          type="button"
          onClick={() => setVideoModalOpen(true)}
          className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-[13px] text-[#4d4636] shadow-[0_6px_18px_-8px_rgba(21,70,59,0.3)] transition-shadow hover:shadow-[0_8px_22px_-8px_rgba(21,70,59,0.4)]"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#15463b]">
            <Play size={9} className="ml-px fill-[#a8d860] text-[#a8d860]" />
          </span>
          Watch the product tour
          <ArrowRight size={13} className="text-[#15463b] transition-transform group-hover:translate-x-0.5" />
        </motion.button>

        <motion.h1
          {...rise(0.08)}
          className="mx-auto mt-8 max-w-[900px] font-spectral text-[44px] font-normal leading-[1.02] tracking-[-0.04em] text-[#0c2b24] sm:text-[64px] md:text-[80px]"
        >
          Is AI recommending
          <br />
          <span className="relative inline-block">
            <span className="italic text-shine">your business?</span>
            <svg viewBox="0 0 400 22" preserveAspectRatio="none" aria-hidden className="pointer-events-none absolute -bottom-[0.06em] left-[1%] h-[0.15em] w-[97%] overflow-visible">
              <defs>
                <linearGradient id="swash" x1="0" x2="1">
                  <stop offset="0%" stopColor="#1e7d4f" />
                  <stop offset="55%" stopColor="#a8d860" />
                  <stop offset="100%" stopColor="#d6a23a" />
                </linearGradient>
              </defs>
              <motion.path
                d="M3 14 C 70 3, 150 19, 225 9 S 350 6, 397 11"
                fill="none"
                stroke="url(#swash)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p {...rise(0.18)} className="mx-auto mt-7 max-w-[580px] text-[17px] leading-[1.65] text-[#5a5442] sm:text-[18.5px]">
          Enter your website. Wonderscore crawls citations and deploys six agents to grow your search share across every AI model.
        </motion.p>

        <motion.form
          {...rise(0.28)}
          onSubmit={handleScanSubmit}
          className="mx-auto mt-9 flex w-full max-w-[560px] items-center gap-2 rounded-full bg-white p-1.5 pl-5 text-left shadow-[0_20px_44px_-20px_rgba(21,70,59,0.5)] transition-shadow duration-200 focus-within:shadow-[0_22px_50px_-16px_rgba(30,125,79,0.6)]"
        >
          <Globe className="shrink-0 text-[#9b927f]" size={18} />
          <label className="min-w-0 flex-1">
            <span className="sr-only">Your website</span>
            <input
              type="text"
              inputMode="url"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={PLACEHOLDERS[phIdx]}
              className="hero-input w-full border-0 bg-transparent py-3 text-[16px] text-[#23211b] placeholder:text-[#b3a98f]"
            />
          </label>
          <button
            type="submit"
            className="group inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#15463b] px-5 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-[#0f332b] sm:px-6"
          >
            <span className="hidden sm:inline">Analyse my site free</span>
            <span className="sm:hidden">Analyse</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.form>

        <motion.div {...rise(0.36)} className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#6f6757]">
          {["Free scan, no signup", "No card required", "Priced in GBP"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check size={14} className="text-[#1e7d4f]" /> {t}
            </span>
          ))}
        </motion.div>

        {/* the product, framed */}
        <motion.div {...rise(0.5)} className="relative mx-auto mt-16 max-w-[900px] sm:mt-20">
          <AnswerCard />
        </motion.div>
      </div>

      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="absolute inset-0 bg-[#0a1f1a]/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c2b24] shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="inline-flex items-center gap-2 font-mono-spline text-[11px] uppercase tracking-wider text-[#a8d860]">
                  <Sparkles size={12} /> Wonderscore product tour
                </span>
                <button onClick={() => setVideoModalOpen(false)} className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white" aria-label="Close video">
                  <X size={16} />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <video src="/dashboard.mp4" controls autoPlay className="h-full w-full object-contain" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
