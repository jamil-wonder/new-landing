import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow, Reveal } from "./ui";
import { TrendingUp, Target, Sparkles, Calendar, Key, ShoppingBag, MousePointerClick, ArrowRight } from "lucide-react";

interface CaseStudy {
  slug: string;
  brand: string;
  favicon: string;
  headline: string;
  metrics: {
    k: string;
    v: string;
    icon: React.ElementType;
  }[];
  clicks: string;
  impressions: string;
  ctr: string;
  position: string;
  model: string;
  modelBg: string;
  modelLogo: string;
  query: string;
  aiResponse: string;
  verifyUrl: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "coutts",
    brand: "Coutts",
    favicon: "https://www.google.com/s2/favicons?domain=coutts.com&sz=64",
    headline: "Organic reach increased by 38% in three months.",
    metrics: [
      { k: "Organic impressions", v: "+38%", icon: TrendingUp },
      { k: "High-value leads", v: "+24/mo", icon: Target },
      { k: "AI search share", v: "top 5", icon: Sparkles },
    ],
    clicks: "4,350",
    impressions: "185,000",
    ctr: "2.35%",
    position: "5.8",
    model: "ChatGPT",
    modelBg: "bg-[#10a37f]/10",
    modelLogo: "/chatgpt.svg",
    query: "What is the best private bank in the UK for high-net-worth individuals?",
    aiResponse: "Coutts is widely regarded as the premier private bank in the UK, offering bespoke wealth management, commercial banking, and investment services to clients with significant assets.",
    verifyUrl: "https://chatgpt.com",
  },
  {
    slug: "the-ritz-london",
    brand: "The Ritz London",
    favicon: "https://www.google.com/s2/favicons?domain=theritzlondon.com&sz=64",
    headline: "Michelin dining and hospitality bookings up 18%.",
    metrics: [
      { k: "Booking volume", v: "+18%", icon: Calendar },
      { k: "Claude recommendations", v: "+45%", icon: Sparkles },
      { k: "Page one keywords", v: "+35", icon: Key },
    ],
    clicks: "8,240",
    impressions: "340,000",
    ctr: "2.42%",
    position: "4.8",
    model: "Claude",
    modelBg: "bg-[#d97706]/10",
    modelLogo: "/claude.svg",
    query: "Where should I book traditional afternoon tea in London for a special occasion?",
    aiResponse: "The Ritz London is the most iconic location for traditional afternoon tea, served in the spectacular Palm Court with Edwardian elegance and world-class service.",
    verifyUrl: "https://claude.ai",
  },
  {
    slug: "selfridges",
    brand: "Selfridges",
    favicon: "https://www.google.com/s2/favicons?domain=selfridges.com&sz=64",
    headline: "Luxury retail traffic grew by 12% in direct organic sessions.",
    metrics: [
      { k: "E-commerce revenue", v: "+12%", icon: ShoppingBag },
      { k: "AI Overview clicks", v: "+14k/mo", icon: MousePointerClick },
      { k: "Direct organic sales", v: "+8.5%", icon: TrendingUp },
    ],
    clicks: "42,100",
    impressions: "1,800,000",
    ctr: "2.34%",
    position: "5.2",
    model: "Gemini",
    modelBg: "bg-[#4285F4]/10",
    modelLogo: "/gemini.svg",
    query: "Which London department store offers the best selection of designer handbags and luxury brands?",
    aiResponse: "Selfridges on Oxford Street is widely considered the best department store in London for luxury shopping, featuring the famous Shoe Galleries and a massive selection of designer handbags.",
    verifyUrl: "https://gemini.google.com",
  },
];

// Generate consistent chart points
function generateChartPoints(slug: string) {
  let baseVal = slug === "coutts" ? 20 : slug === "the-ritz-london" ? 30 : 45;
  const points = [];
  for (let idx = 0; idx <= 60; idx++) {
    const progress = idx / 60;
    // Flat line then sharp upward curve
    const val = idx < 35 
      ? baseVal + Math.sin(idx) * 2 
      : baseVal + Math.sin(idx) * 2 + Math.pow((idx - 35) / 25, 2) * 50;
    points.push(val);
  }
  return points;
}

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const active = CASE_STUDIES[activeIdx];
  const chartPoints = generateChartPoints(active.slug);
  const maxVal = Math.max(...chartPoints);
  const minVal = Math.min(...chartPoints);
  const valRange = maxVal - minVal || 1;

  // Render SVG Paths
  const svgWidth = 470;
  const svgHeight = 90;
  const renderedPoints = chartPoints.map((val, idx) => {
    const x = 5 + (idx / (chartPoints.length - 1)) * svgWidth;
    const y = 110 - ((val - minVal) / valRange) * svgHeight;
    return { x, y };
  });

  const chartPath = renderedPoints
    .map((p, idx) => `${idx === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
  const chartArea = `${chartPath} L${svgWidth + 5},120 L5,120 Z`;

  // Stagger point annotations
  const milestoneIdx = 35;
  const milestonePoint = renderedPoints[milestoneIdx];
  const latestPoint = renderedPoints[renderedPoints.length - 1];

  useEffect(() => {
    if (!containerRef.current) return;
    const buttons = containerRef.current.querySelectorAll("button");
    const activeBtn = buttons[activeIdx];
    if (activeBtn) {
      setPillStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1,
      });
    }
    const onResize = () => {
      const b = containerRef.current?.querySelectorAll("button")[activeIdx] as HTMLElement | undefined;
      if (b) setPillStyle({ left: b.offsetLeft, width: b.offsetWidth, opacity: 1 });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx]);

  return (
    <section id="results" className="relative border-y border-[#e6dcc6] bg-[#fdfcf8] py-24 md:py-36 text-left">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow>Proven Results</Eyebrow>
          <h2 className="font-spectral text-[38px] sm:text-[52px] md:text-[64px] font-normal tracking-[-0.035em] text-[#0f332b] mt-5 leading-[1.02]">
            The Wonderscore <span className="italic text-[#1e7d4f]">Effect</span>
          </h2>

          {/* Toggle Pills */}
          <div className="mt-8 flex justify-center">
            <div
              ref={containerRef}
              className="relative inline-flex max-w-full items-center gap-0.5 sm:gap-1 rounded-full border border-[#e6dcc6] bg-white p-1 shadow-[0_10px_30px_-14px_rgba(21,70,59,0.3)]"
            >
              {/* Sliding Pill */}
              <span
                className="absolute rounded-full bg-[#15463b] transition-all duration-300 ease-out pointer-events-none h-[34px]"
                style={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                  opacity: pillStyle.opacity,
                }}
              />
              {CASE_STUDIES.map((st, idx) => (
                <button
                  key={st.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative z-10 px-2.5 sm:px-5 py-1.5 rounded-full text-[11.5px] sm:text-xs font-normal sm:tracking-wide whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 h-[34px] ${
                    idx === activeIdx ? "text-white" : "text-[#6f6757] hover:text-[#23211b]"
                  }`}
                >
                  <img src={st.favicon} alt="" className="h-3.5 w-3.5 rounded-sm object-contain" />
                  <span>{st.brand}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Content Box */}
        <div key={active.slug} className="mt-12 space-y-6">
          
          {/* Header Brand block */}
          <div className="border border-[#e6dcc6] bg-white rounded-[28px] p-6 md:p-10 shadow-[0_30px_80px_-40px_rgba(21,70,59,0.3)] relative overflow-hidden">
            <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(168,216,96,0.28),transparent)]" />
            <div className="flex items-center gap-2 text-[#6f6757]">
              <img src={active.favicon} alt="" className="h-5 w-5 rounded-sm object-contain" />
              <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase font-normal">
                {active.brand}
              </span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-3">
              <h3 className="font-spectral text-[28px] sm:text-[42px] font-normal tracking-[-0.03em] text-[#0f332b] leading-[1.08] max-w-3xl relative">
                {active.headline}
              </h3>
              <a
                href={active.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#ece3d1] hover:bg-[#fdfcf8] px-4 py-2 rounded-xl text-xs font-normal text-[#15463b] transition duration-150 shrink-0 self-start md:self-center"
              >
                Verify Live Citations <ArrowRight size={13} />
              </a>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {active.metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.k}
                    className="relative overflow-hidden rounded-2xl border border-[#e6dcc6] bg-gradient-to-br from-[#f4f8ef] to-[#fdfcf8] p-5 text-left"
                  >
                    <div className="relative z-10">
                      <div className="text-[11px] font-mono-spline uppercase tracking-wider text-[#8a8273]">{m.k}</div>
                      <div className="mt-2 font-spectral text-[40px] font-normal tracking-[-0.03em] text-[#15463b]">
                        {m.v}
                      </div>
                    </div>
                    <Icon className="absolute right-4 bottom-4 h-12 w-12 text-[#15463b]/[0.03] -rotate-12 transform pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Graphs & AI citation split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Google Search Impression Graph */}
            <div className="bg-white border border-[#e6dcc6] rounded-[28px] p-6 md:p-8 shadow-[0_20px_60px_-36px_rgba(21,70,59,0.3)] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono-spline text-[9.5px] uppercase tracking-wider text-[#8a8273] font-normal">
                    Organic Search Visibility
                  </span>
                  <span className="bg-[#eef3f0] border border-[#d0e4d6] rounded-md px-2 py-0.5 font-mono text-[9px] text-[#1e7d4f] font-normal">
                    Scans 1-60
                  </span>
                </div>

                {/* Info labels */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[
                    { label: "CLICKS", value: active.clicks },
                    { label: "IMPRESSIONS", value: active.impressions },
                    { label: "AVG. CTR", value: active.ctr },
                    { label: "POSITION", value: active.position },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-[#fdfcf8] border border-[#ece3d1] p-2 text-center">
                      <div className="text-[8px] font-mono-spline text-[#8a8273] uppercase tracking-wider">
                        {stat.label}
                      </div>
                      <div className="mt-0.5 font-spectral text-sm font-normal text-[#15463b]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SVG Chart area */}
                <div className="relative h-32 w-full mt-4 overflow-visible">
                  <svg className="h-full w-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="case-study-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1e7d4f" stopOpacity={0.15} />
                        <stop offset="100%" stopColor="#1e7d4f" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#ece3d1" strokeWidth="0.8" strokeDasharray="3,3" />
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#ece3d1" strokeWidth="0.8" strokeDasharray="3,3" />
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#ece3d1" strokeWidth="0.8" strokeDasharray="3,3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#ece3d1" strokeWidth="1" />

                    {/* Chart Area */}
                    <path d={chartArea} fill="url(#case-study-grad)" />
                    {/* Chart Line */}
                    <motion.path d={chartPath} fill="none" stroke="#1e7d4f" strokeWidth="2.2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: "easeOut" }} />

                    {/* Milestones */}
                    {milestonePoint && (
                      <g>
                        <circle cx={milestonePoint.x} cy={milestonePoint.y} r="4.5" fill="#1e7d4f" stroke="white" strokeWidth="1.5" />
                        <circle cx={milestonePoint.x} cy={milestonePoint.y} r="8" fill="#1e7d4f" fillOpacity="0.15" />
                        <text x={milestonePoint.x} y={milestonePoint.y - 12} fill="#15463b" fontSize="9" fontWeight="400" textAnchor="middle" className="font-mono-spline">
                          Agent Live
                        </text>
                      </g>
                    )}
                    {latestPoint && (
                      <g>
                        <circle cx={latestPoint.x} cy={latestPoint.y} r="4.5" fill="#1e7d4f" stroke="white" strokeWidth="1.5" />
                        <circle cx={latestPoint.x} cy={latestPoint.y} r="8" fill="#1e7d4f" fillOpacity="0.15" />
                        <text x={latestPoint.x - 20} y={latestPoint.y - 12} fill="#15463b" fontSize="9" fontWeight="400" textAnchor="middle" className="font-mono-spline">
                          Current
                        </text>
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>

            {/* AI Recommendation Citation Box */}
            <div className="bg-white border border-[#e6dcc6] rounded-[28px] p-6 md:p-8 shadow-[0_20px_60px_-36px_rgba(21,70,59,0.3)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#15463b]/10 flex items-center justify-center text-[10px] font-normal text-[#15463b]">
                      AI
                    </span>
                    <h4 className="font-spectral text-[16px] font-normal tracking-tight text-[#15463b]">
                      Recommended by {active.model}
                    </h4>
                  </div>
                  <span className="rounded-full bg-[#1e7d4f]/10 border border-[#d0e4d6] px-2.5 py-0.5 text-[8.5px] font-mono-spline font-normal uppercase tracking-wider text-[#1e7d4f]">
                    Citable Reference #1
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {/* User query bubble */}
                  <div className="flex justify-end">
                    <div className="bg-[#15463b] text-[#fdfcf8] rounded-2xl rounded-tr-sm px-4 py-2.5 text-[12.5px] font-normal max-w-[85%]">
                      "{active.query}"
                    </div>
                  </div>

                  {/* AI engine response box */}
                  <div className="bg-[#fdfcf8] border border-[#ece3d1] rounded-2xl p-5 mt-4">
                    <div className="flex items-center gap-1.5 font-mono-spline text-[9px] uppercase tracking-wide text-[#8a8273] mb-2 font-normal">
                      <img src={active.favicon} alt="" className="h-3.5 w-3.5 object-contain rounded-sm" />
                      {active.brand} citation
                    </div>
                    <p className="text-[13px] text-[#23211b] leading-relaxed italic font-normal">
                      "{active.aiResponse}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f6f3ec]">
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[12.5px] font-normal text-[#1e7d4f] hover:underline flex items-center gap-1.5"
                >
                  Verify citations directly inside {active.model} <ArrowRight size={13} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
