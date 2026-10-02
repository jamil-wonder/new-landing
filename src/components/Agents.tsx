import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal, SectionHead } from "./ui";

interface Agent {
  n: string;
  kicker: string;
  title: string;
  body: string;
}

const AGENTS: Agent[] = [
  {
    n: "01",
    kicker: "Research Agent",
    title: "Learns your business.",
    body: "Builds a working brief from your site and competitors.",
  },
  {
    n: "02",
    kicker: "Writer Agent",
    title: "Ships publish-ready articles.",
    body: "Drafts long-form content structured for AI answers.",
  },
  {
    n: "03",
    kicker: "Community Agent",
    title: "Shows up where buyers talk.",
    body: "Finds relevant threads and drafts reply ideas for review.",
  },
  {
    n: "04",
    kicker: "Backlink Agent",
    title: "Builds authority.",
    body: "Automated prospecting and outreach to target domains.",
  },
  {
    n: "05",
    kicker: "GEO Agent",
    title: "Gets you cited.",
    body: "Structures content for ChatGPT and AI Overviews.",
  },
  {
    n: "06",
    kicker: "Analytics Agent",
    title: "Watches visibility climb.",
    body: "Tracks brand mentions across AI engines over time.",
  },
];

function AgentMock({ kind }: { kind: string }) {
  // 1. Research Agent
  if (kind === "Research Agent") {
    const opportunities = [
      { kw: "ai search optimization", status: "Drafted", vol: "2.9k", width: "w-[80%]", active: true },
      { kw: "get recommended by chatgpt", status: "Queued", vol: "1.6k", width: "w-[60%]", active: false },
      { kw: "geo guide 2026", status: "Queued", vol: "880", width: "w-[40%]", active: false }
    ];
    return (
      <div className="w-full max-w-[440px] min-h-[300px] border border-white/60 bg-white p-6 flex flex-col justify-start gap-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] rounded-2xl text-left select-none">
        <div className="space-y-3">
          {opportunities.map((o) => (
            <div key={o.kw} className="rounded-xl border border-[#f6f3ec] bg-[#faf8f3] p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-normal text-[#15463b]">{o.kw}</span>
                <span className={`rounded-md px-2 py-0.5 text-[8px] font-mono-spline uppercase tracking-wider ${
                  o.active 
                    ? "bg-[#eef3f0] text-[#1e7d4f] border border-[#d0e4d6]" 
                    : "bg-white text-[#8a8273] border border-[#ece3d1]"
                }`}>
                  {o.status}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono-spline text-[#8a8273] shrink-0">Vol {o.vol}</span>
                <div className="h-1.5 w-full bg-[#ece3d1] rounded-full overflow-hidden">
                  <div className={`h-full bg-[#1e7d4f] rounded-full ${o.width} animate-pulse`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Writer Agent
  if (kind === "Writer Agent") {
    const articles = [
      { platform: "WordPress", status: "Published", active: true },
      { platform: "Webflow", status: "Scheduled", active: false, scheduled: true },
      { platform: "Shopify", status: "Drafting", active: false, drafting: true }
    ];
    return (
      <div className="w-full max-w-[440px] min-h-[300px] border border-white/60 bg-white p-6 flex flex-col justify-start gap-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] rounded-2xl text-left select-none">
        <div className="space-y-3">
          {articles.map((art, idx) => (
            <div key={idx} className="rounded-xl border border-[#f6f3ec] bg-[#faf8f3] p-3 flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <div className="space-y-1.5 w-[60%]">
                  <div className="h-2 w-full bg-[#ece3d1] rounded" />
                  <div className="h-2 w-[70%] bg-[#ece3d1]/70 rounded" />
                </div>
                <span className={`rounded-md px-2 py-0.5 text-[8px] font-mono-spline uppercase tracking-wider flex items-center gap-1 ${
                  art.active 
                    ? "bg-[#eef3f0] text-[#1e7d4f] border border-[#d0e4d6]" 
                    : art.scheduled 
                      ? "bg-[#fdf3e2] text-[#d6a23a] border border-[#efe3c8]"
                      : "bg-white text-[#8a8273] border border-[#ece3d1]"
                }`}>
                  {art.status}
                </span>
              </div>
              <span className="text-[9px] font-mono-spline text-[#8a8273]">→ {art.platform}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. Community Agent
  if (kind === "Community Agent") {
    const subreddits = [
      { name: "r/SEO", members: "1.2M members" },
      { name: "r/smallbusiness", members: "3.4M members" }
    ];
    return (
      <div className="w-full max-w-[440px] min-h-[300px] border border-white/60 bg-white p-6 flex flex-col justify-start gap-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] rounded-2xl text-left select-none">
        <div className="space-y-2">
          {subreddits.map((sub) => (
            <div key={sub.name} className="rounded-xl border border-[#f6f3ec] bg-[#faf8f3] p-2.5 flex items-center justify-between">
              <div>
                <span className="text-xs font-normal text-[#15463b]">{sub.name}</span>
                <span className="ml-2 text-[9px] font-mono-spline text-[#8a8273]">{sub.members}</span>
              </div>
              <button className="text-[9.5px] font-mono-spline uppercase tracking-wider font-normal text-[#1e7d4f] hover:underline cursor-pointer">
                Scan
              </button>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[#ece3d1] bg-white p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-normal text-[#15463b]">Reply draft ready</span>
            <span className="rounded bg-[#f7e7c4] text-[#9a6a12] px-2 py-0.5 text-[8px] font-mono-spline font-normal uppercase tracking-wider animate-pulse">
              Review
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-[#ece3d1] rounded" />
            <div className="h-1.5 w-[60%] bg-[#ece3d1]/70 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // 4. Backlink Agent
  if (kind === "Backlink Agent") {
    const backlinks = [
      { domain: "searchsignal.io", dr: "DR 61", fill: "w-[75%]" },
      { domain: "contentledger.com", dr: "DR 54", fill: "w-[55%]" },
      { domain: "rankforge.dev", dr: "DR 48", fill: "w-[45%]" }
    ];
    return (
      <div className="w-full max-w-[440px] min-h-[300px] border border-white/60 bg-white p-6 flex flex-col justify-start gap-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] rounded-2xl text-left select-none">
        <div>
          <div className="flex items-center justify-between border-b border-[#f6f3ec] pb-2 mb-3">
            <span className="text-[9px] font-mono-spline uppercase tracking-wider text-[#8a8273] font-normal">
              Outreach Pipelines
            </span>
            <span className="text-[9px] font-mono-spline text-[#1e7d4f] font-normal uppercase tracking-wider">
              +8 earned
            </span>
          </div>
          <div className="space-y-2.5">
            {backlinks.map((b) => (
              <div key={b.domain} className="rounded-xl border border-[#f6f3ec] bg-[#faf8f3] p-2.5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-normal text-[#15463b]">{b.domain}</span>
                  <span className="rounded bg-white border border-[#ece3d1] px-1.5 py-0.5 text-[8.5px] font-mono-spline font-normal text-[#6f6757]">
                    {b.dr}
                  </span>
                </div>
                <div className="h-1 w-full bg-[#ece3d1] rounded-full overflow-hidden">
                  <div className={`h-full bg-[#1e7d4f] rounded-full ${b.fill}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 5. GEO Agent
  if (kind === "GEO Agent") {
    return (
      <div className="w-full max-w-[440px] min-h-[300px] border border-white/60 bg-white p-6 flex flex-col justify-start gap-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] rounded-2xl text-left select-none">
        <div>
          <div className="text-[9px] font-mono-spline uppercase tracking-wider text-[#8a8273] font-normal mb-2">
            AI Citation Check
          </div>
          <div className="rounded-xl border border-[#d6a23a] bg-[#faf8f3] p-3 flex flex-col gap-1">
            <span className="text-[10.5px] font-normal text-[#15463b]">1. yourbrand.com</span>
            <p className="text-[10px] text-[#6f6757] leading-relaxed">
              Citing target source for "exceptional hospitality..."
            </p>
          </div>
          <div className="space-y-2 mt-3">
            <div className="rounded-xl border border-[#ece3d1] bg-white p-2.5 flex items-center justify-between h-9">
              <span className="text-xs font-normal text-[#8a8273]">2. </span>
              <div className="h-1.5 w-32 bg-[#f6f3ec] rounded" />
            </div>
            <div className="rounded-xl border border-[#ece3d1] bg-white p-2.5 flex items-center justify-between h-9">
              <span className="text-xs font-normal text-[#8a8273]">3. </span>
              <div className="h-1.5 w-24 bg-[#f6f3ec] rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Analytics Agent
  if (kind === "Analytics Agent") {
    return (
      <div className="w-full max-w-[440px] min-h-[300px] border border-white/60 bg-white p-6 flex flex-col justify-start gap-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] rounded-2xl text-left select-none">
        <div>
          <div className="flex items-center justify-between mb-3 border-b border-[#f6f3ec] pb-2">
            <span className="text-[9px] font-mono-spline uppercase tracking-wider text-[#8a8273] font-normal">
              AI Mention Share
            </span>
            <span className="text-[9px] font-mono-spline text-[#1e7d4f] font-normal uppercase tracking-wider">
              +312% month-over-month
            </span>
          </div>

          {/* Mini chart SVG */}
          <div className="relative h-20 w-full overflow-visible">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="agent-analytics-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e7d4f" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#1e7d4f" stopOpacity={0} />
                </linearGradient>
              </defs>
              <path d="M 0 32 L 25 28 L 50 20 L 75 12 L 100 4 L 100 40 L 0 40 Z" fill="url(#agent-analytics-grad)" />
              <path d="M 0 32 L 25 28 L 50 20 L 75 12 L 100 4" fill="none" stroke="#1e7d4f" strokeWidth="2" strokeDasharray="3,3" strokeLinecap="round" />
            </svg>
            <div className="absolute right-0 top-[10%] -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#1e7d4f] border border-white shadow-sm animate-pulse" />
          </div>

          {/* Model labels */}
          <div className="mt-4 flex justify-between text-[9px] font-mono-spline text-[#8a8273]">
            <span>ChatGPT: 78%</span>
            <span>Perplexity: 62%</span>
            <span>Claude: 51%</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

const AUTO_MS = 6500;

export default function Agents() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // On phones the list scrolls sideways; keep the active agent in view without moving the page
  useEffect(() => {
    const list = listRef.current;
    const el = list?.children[active] as HTMLElement | undefined;
    if (!list || !el || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: el.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % AGENTS.length), AUTO_MS);
    return () => clearTimeout(t);
  }, [active, paused, reduce]);

  const agent = AGENTS[active];

  return (
    <section id="agents" className="relative overflow-hidden bg-[#0c2b24] py-24 md:py-36 text-left">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(168,216,96,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,216,96,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(30,125,79,0.5),transparent)]" />

      <div className="relative mx-auto max-w-[1180px] px-4 md:px-9">
        <SectionHead dark eyebrow="Your marketing team" title={<>Six marketing agents, <span className="italic text-shine-dark">one workspace</span></>} />

        <Reveal>
          <div
            className="grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* agent list */}
            <div ref={listRef} role="tablist" aria-label="Agents" className="relative flex gap-2 overflow-x-auto no-scrollbar lg:flex-col lg:overflow-visible">
              {AGENTS.map((a, i) => {
                const on = i === active;
                return (
                  <button
                    key={a.n}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className={`group relative shrink-0 rounded-2xl border p-4 text-left transition-colors lg:p-5 w-[260px] lg:w-auto ${
                      on ? "border-[#a8d860]/40 bg-white/[0.07]" : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono-spline text-[11px] ${on ? "text-[#a8d860]" : "text-[#6f9a88]"}`}>{a.n}</span>
                      <span className={`font-mono-spline text-[10px] uppercase tracking-[0.14em] ${on ? "text-white" : "text-[#a9c9bb]"}`}>{a.kicker}</span>
                    </div>
                    <div className={`mt-2 font-spectral text-[21px] leading-tight tracking-tight lg:text-[24px] ${on ? "text-white" : "text-[#cfe3d8]"}`}>{a.title}</div>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden text-[14px] leading-relaxed text-[#a9c9bb]"
                        >
                          <span className="block pt-2">{a.body}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {on && !reduce && (
                      <span className="absolute inset-x-5 bottom-0 h-[2px] overflow-hidden rounded-full bg-white/10">
                        <motion.span
                          key={`${active}-${paused}`}
                          className="block h-full bg-[#a8d860]"
                          initial={{ width: paused ? "100%" : "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* stage */}
            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#1e7d4f] via-[#15603f] to-[#0f3f31] p-6 sm:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#a8d860]/25 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 hairline-grid opacity-20" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={agent.kicker}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full flex justify-center"
                >
                  <AgentMock kind={agent.kicker} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
