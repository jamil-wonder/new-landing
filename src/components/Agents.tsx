import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";

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
      <div className="max-w-[340px] w-full h-[264px] border border-[#ece3d1] bg-white p-5 flex flex-col justify-start gap-3 shadow-sm rounded-xl text-left select-none transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.15)]">
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
      <div className="max-w-[340px] w-full h-[264px] border border-[#ece3d1] bg-white p-5 flex flex-col justify-start gap-3 shadow-sm rounded-xl text-left select-none transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.15)]">
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
      <div className="max-w-[340px] w-full h-[264px] border border-[#ece3d1] bg-white p-5 flex flex-col justify-start gap-3 shadow-sm rounded-xl text-left select-none transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.15)]">
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
      <div className="max-w-[340px] w-full h-[264px] border border-[#ece3d1] bg-white p-5 flex flex-col justify-start gap-3 shadow-sm rounded-xl text-left select-none transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.15)]">
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
      <div className="max-w-[340px] w-full h-[264px] border border-[#ece3d1] bg-white p-5 flex flex-col justify-start gap-3 shadow-sm rounded-xl text-left select-none transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.15)]">
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
      <div className="max-w-[340px] w-full h-[264px] border border-[#ece3d1] bg-white p-5 flex flex-col justify-start gap-3 shadow-sm rounded-xl text-left select-none transition-all duration-500 group-hover:-translate-y-12 group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.15)]">
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

export default function Agents() {
  return (
    <section id="agents" className="py-20 bg-transparent text-left">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#8a8273]">
            Your Marketing Team
          </span>
          <h2 className="font-spectral text-[35px] md:text-[52px] font-normal tracking-tighter text-[#15463b] mt-4 leading-[1]">
            Six marketing agents, one workspace
          </h2>
        </div>

        {/* Agents Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {AGENTS.map((agent, idx) => (
            <div
              key={agent.n}
              className="bg-white border border-[#ece3d1] rounded-[22px] overflow-hidden shadow-[0_4px_24px_rgba(60,48,28,0.01)] hover:border-[#dcd4c3] transition-all duration-300 flex flex-col group"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono-spline text-xs text-[#8a8273]">{agent.n} / 06</span>
                  <span className="bg-[#eef3f0] text-[#1e7d4f] px-2 py-0.5 rounded-full text-[10px] font-mono-spline uppercase tracking-wider font-normal">
                    {agent.kicker}
                  </span>
                </div>
                
                <h3 className="font-spectral text-[22px] font-normal tracking-tight text-[#15463b] mt-4 leading-tight">
                  {agent.title}
                </h3>
                <p className="mt-2 text-[#6f6757] text-[13px] leading-relaxed">
                  {agent.body}
                </p>
              </div>

              <div
                className="flex items-start justify-center p-6 border-t border-[#ece3d1] bg-[#1e7d4f] bg-cover bg-center h-[240px]"
                style={{
                  backgroundImage: "linear-gradient(to bottom, rgba(30, 125, 79, 0.85), rgba(21, 90, 56, 0.95))",
                }}
              >
                <AgentMock kind={agent.kicker} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
