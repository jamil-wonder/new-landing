import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check, Globe, Link2, Play, ShieldCheck, Sparkles, TrendingUp, X } from "lucide-react";
import { WonderscoreLogo } from "./WonderscoreLogo";
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

function EngineDot({ src, muted = false }: { src: string; muted?: boolean }) {
  return (
    <span className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white transition-opacity ${muted ? "opacity-80" : ""}`}>
      <img src={src} alt="" className="h-[11px] w-[11px] object-contain" />
    </span>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-[118px] w-[118px]">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="9" />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c - (c * value) / 100 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a8d860" />
            <stop offset="100%" stopColor="#1e7d4f" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-spectral text-[34px] leading-none text-white num">{value}</span>
        <span className="mt-1 font-mono-spline text-[7.5px] uppercase tracking-[0.08em] text-[#86b89f] whitespace-nowrap">AI visibility</span>
      </div>
    </div>
  );
}

function HeroConsole() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(0);
  const [paused, setPaused] = useState(false);
  const model = MODELS[active];
  const full = model.pre + BRAND + model.post;

  // Type the answer, then rotate to the next engine
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
    const t = setTimeout(() => setActive((a) => (a + 1) % MODELS.length), 3200);
    return () => clearTimeout(t);
  }, [typed, full.length, paused, reduce]);

  const preEnd = model.pre.length;
  const brandEnd = preEnd + BRAND.length;
  const shown = full.slice(0, typed);
  const partPre = shown.slice(0, preEnd);
  const partBrand = shown.slice(preEnd, brandEnd);
  const partPost = shown.slice(brandEnd);
  const done = typed >= full.length;

  return (
    <div
      className="relative rounded-[26px] border border-white/10 bg-[#0c2b24] shadow-[0_50px_120px_-30px_rgba(10,31,26,0.7)] overflow-hidden text-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[#1e7d4f]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#a8d860]/10 blur-3xl" />

      {/* window chrome */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-1 font-mono-spline text-[10px] text-[#a9c9bb]">
          <ShieldCheck size={11} className="text-[#a8d860]" /> app.wonderscore.ai / overview
        </div>
        <span className="hidden sm:flex items-center gap-1.5 font-mono-spline text-[9.5px] uppercase tracking-wider text-[#a8d860]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-[#a8d860] animate-ring" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#a8d860]" />
          </span>
          Live example
        </span>
        <span className="sm:hidden w-10" />
      </div>

      <div className="relative grid md:grid-cols-[250px_1fr] gap-0">
        {/* Left: score + mention share */}
        <div className="border-b md:border-b-0 md:border-r border-white/10 p-5 md:p-6 flex md:flex-col gap-6 md:gap-7 items-center md:items-stretch">
          <div className="shrink-0 md:self-start">
            <ScoreRing value={73} />
          </div>
          <div className="flex-1 w-full space-y-3.5">
            <div className="font-mono-spline text-[9.5px] uppercase tracking-[0.14em] text-[#86b89f]">Mention share</div>
            {MODELS.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className="group w-full text-left"
                aria-label={`Show ${m.id} answer`}
              >
                <div className="flex items-center justify-between text-[11.5px]">
                  <span className={`flex items-center gap-2 transition-colors ${i === active ? "text-white" : "text-[#a9c9bb] group-hover:text-white"}`}>
                    <EngineDot src={m.logo} />
                    {m.id}
                  </span>
                  <span className="num text-[#a8d860] font-medium">{m.share}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full rounded-full ${i === active ? "bg-[#a8d860]" : "bg-[#1e7d4f]"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${m.share}%` }}
                    transition={{ duration: 1.3, delay: 0.7 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: the conversation */}
        <div className="p-5 md:p-7 flex flex-col min-h-[340px]">
          <div className="flex justify-end">
            <div className="max-w-[88%] rounded-2xl rounded-tr-md bg-[#a8d860] px-4 py-2.5 text-[13.5px] font-medium text-[#0c2b24]">
              Recommend a unique boutique hotel in Shoreditch
            </div>
          </div>

          {/* engine tabs */}
          <div className="mt-6 flex flex-wrap gap-1.5" role="tablist" aria-label="AI engine">
            {MODELS.map((m, i) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] transition-colors ${
                  i === active ? "text-[#0c2b24]" : "text-[#a9c9bb] hover:text-white"
                }`}
              >
                {i === active && (
                  <motion.span layoutId="hero-tab" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <span className="relative flex items-center gap-2">
                  <EngineDot src={m.logo} muted={i !== active} />
                  {m.id}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex-1 rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <img src={model.logo} alt="" className="h-3.5 w-3.5 object-contain" />
              </span>
              <span className="text-[12.5px] text-white">{model.id}</span>
              <AnimatePresence>
                {done && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="ml-auto inline-flex items-center gap-1 rounded-full border border-[#a8d860]/30 bg-[#a8d860]/10 px-2 py-0.5 font-mono-spline text-[8.5px] uppercase tracking-wider text-[#a8d860]"
                  >
                    <Check size={9} /> Brand cited
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
            <p className="text-[14.5px] leading-[1.7] text-[#e6f1ea] min-h-[96px]">
              {partPre}
              <span className="rounded-[5px] bg-[#a8d860]/20 px-1 font-medium text-[#d6f09b] underline decoration-[#a8d860]/60 underline-offset-[3px]">
                {partBrand}
              </span>
              {partPost}
              {!done && <span className="ml-0.5 inline-block h-[15px] w-[2px] translate-y-[2px] bg-[#a8d860] animate-caret" />}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 min-h-[28px]">
              <AnimatePresence mode="wait">
                {done &&
                  model.sources.map((s, i) => (
                    <motion.span
                      key={model.id + s}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono-spline text-[10px] ${
                        i === 0
                          ? "border-[#a8d860]/40 bg-[#a8d860]/10 text-[#d6f09b]"
                          : "border-white/10 text-[#a9c9bb]"
                      }`}
                    >
                      <Link2 size={9} /> {s}
                    </motion.span>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  // Gentle 3D tilt that follows the pointer (fine pointers only)
  const stageRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [3, -3]), { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 20 });
  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#f8f5ed]">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_30%,transparent_80%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,96,0.32),transparent)]" />
      <div className="pointer-events-none absolute top-40 -left-32 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(214,162,58,0.16),transparent)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 md:px-9 text-center">
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group inline-flex items-center gap-2.5 rounded-full border border-[#e3d9c2] bg-white/80 py-1.5 pl-2 pr-4 backdrop-blur"
        >
          <span className="rounded-full bg-[#15463b] px-2.5 py-0.5 font-mono-spline text-[9.5px] uppercase tracking-[0.14em] text-[#a8d860]">
            New
          </span>
          <span className="text-[12.5px] text-[#4d4636]">Track your brand across ChatGPT, Claude, Gemini and Perplexity</span>
          <ArrowRight size={13} className="text-[#15463b] transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-[980px] font-spectral text-[46px] sm:text-[74px] md:text-[96px] font-normal leading-[0.98] tracking-[-0.045em] text-[#0c2b24] text-balance"
        >
          Is AI recommending <span className="italic text-shine">your business?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-7 max-w-[600px] text-[16.5px] sm:text-[19px] leading-[1.6] text-[#6f6757]"
        >
          Enter your website. Wonderscore crawls citations and deploys six agents to grow your search share across every AI model.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-10 max-w-[600px]"
        >
          <form
            onSubmit={handleScanSubmit}
            className="group relative flex flex-col sm:flex-row gap-2 rounded-[22px] sm:rounded-full border border-[#e3d9c2] bg-white p-2 shadow-[0_20px_60px_-20px_rgba(21,70,59,0.35)] transition-shadow focus-within:shadow-[0_24px_70px_-18px_rgba(30,125,79,0.5)] focus-within:border-[#1e7d4f]/60"
          >
            <label className="flex flex-1 items-center gap-2.5 px-4 cursor-text">
              <Globe className="shrink-0 text-[#8a8273]" size={17} />
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
                className="w-full bg-transparent py-3.5 text-[16px] font-medium text-[#23211b] outline-none placeholder:text-[#b3a98f]"
              />
            </label>
            <button
              type="submit"
              className="btn-sheen inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl sm:rounded-full bg-[#15463b] px-7 py-4 text-[14.5px] font-medium text-white transition-colors hover:bg-[#0f332b] cursor-pointer"
            >
              Analyse my site free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-[#6f6757]">
            {["Free scan, no signup", "No card required", "Priced in GBP"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-[#1e7d4f]" /> {t}
              </span>
            ))}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center gap-1.5 font-medium text-[#15463b] hover:underline cursor-pointer"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#15463b]">
                <Play size={8} className="fill-white text-white ml-px" />
              </span>
              Watch the product tour
            </button>
          </div>
        </motion.div>

        {/* product-as-hero */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 sm:mt-20 max-w-[980px] [perspective:1400px]"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          ref={stageRef}
        >
          <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
            <HeroConsole />
          </motion.div>

          {/* floating proof chips */}
          <div className="pointer-events-none hidden xl:block">
            <div className="absolute -left-10 top-24 animate-float">
              <div className="flex items-center gap-3 rounded-2xl border border-[#e3d9c2] bg-white px-4 py-3 shadow-[0_24px_50px_-18px_rgba(21,70,59,0.4)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef3f0]">
                  <TrendingUp size={17} className="text-[#1e7d4f]" />
                </span>
                <div className="text-left">
                  <div className="font-spectral text-[20px] leading-none text-[#0c2b24]">+312%</div>
                  <div className="mt-1 font-mono-spline text-[8.5px] uppercase tracking-wider text-[#8a8273]">mention share, MoM</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-10 bottom-20 animate-float-slow">
              <div className="flex items-center gap-3 rounded-2xl border border-[#e3d9c2] bg-white px-4 py-3 shadow-[0_24px_50px_-18px_rgba(21,70,59,0.4)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#15463b]">
                  <Sparkles size={16} className="text-[#a8d860]" />
                </span>
                <div className="text-left">
                  <div className="text-[13px] font-medium text-[#0c2b24]">Cited as source #1</div>
                  <div className="mt-0.5 font-mono-spline text-[8.5px] uppercase tracking-wider text-[#8a8273]">across 4 AI engines</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="mt-6 font-mono-spline text-[10px] uppercase tracking-[0.14em] text-[#b3a98f]">
          Illustrative example · Pick an engine to see its answer
        </p>
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
                <span className="font-mono-spline text-[11px] uppercase tracking-wider text-[#a8d860]">Wonderscore product tour</span>
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
