import React from "react";
import { ArrowUpRight, Database, Search, ShieldCheck } from "lucide-react";
import { WonderscoreLogo } from "./WonderscoreLogo";
import { Reveal, SectionHead, Spotlight } from "./ui";

type Card = {
  span: string;
  img: string;
  alt: string;
  min: string;
  title: string;
  body: string;
  tag: string;
  icon: React.ReactNode;
  tone: string;
};

const CARDS: Card[] = [
  {
    span: "md:col-span-7",
    img: "/bento-unified-overview.png",
    alt: "Unified Brand Overview mockup",
    min: "min-w-[680px]",
    title: "Unified Brand Overview",
    body: "Wonderscore monitors metrics in one clear index. Track authority, history, and competitors instantly.",
    tag: "Overview",
    icon: <Database size={16} className="text-[#15463b]" />,
    tone: "from-[#e9f3e1] via-[#f1f6ea] to-[#faf8f3]",
  },
  {
    span: "md:col-span-5",
    img: "/bento-query-tracking.png",
    alt: "AI Engine Query Tracking mockup",
    min: "min-w-[470px]",
    title: "AI Engine Query Tracking",
    body: "Test commercial buyer queries. See exactly when you are cited, when you are left out, and how to improve references.",
    tag: "Search tracker",
    icon: <Search size={16} className="text-[#15463b]" />,
    tone: "from-[#f6ecd2] via-[#faf3e0] to-[#faf8f3]",
  },
  {
    span: "md:col-span-5",
    img: "/bento-geo-audits.png",
    alt: "Deep SEO & GEO Audits mockup",
    min: "min-w-[470px]",
    title: "Deep SEO & GEO Audits",
    body: "Scan your site against search engine schemas and LLM crawlers to find where authority needs support.",
    tag: "Analyser",
    icon: <WonderscoreLogo size={16} color="#15463b" />,
    tone: "from-[#e3efe9] via-[#eef5f0] to-[#faf8f3]",
  },
  {
    span: "md:col-span-7",
    img: "/bento-content-autopilot.png",
    alt: "Content Engine Autopilot mockup",
    min: "min-w-[680px]",
    title: "Content Engine Autopilot",
    body: "Our writer agent drafts humanized articles to fill citation gaps. Review and publish with a single click.",
    tag: "Content",
    icon: <ShieldCheck size={16} className="text-[#15463b]" />,
    tone: "from-[#eadff6] via-[#f3eefa] to-[#faf8f3]",
  },
];

export default function DashboardShowcase() {
  return (
    <section id="features" className="relative bg-[#f8f5ed] py-24 md:py-36">
      <div className="mx-auto max-w-[1180px] px-4 md:px-9">
        <SectionHead
          eyebrow="Explore the platform"
          title={
            <>
              Designed to match your <span className="italic text-[#1e7d4f]">brand&apos;s intelligence</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1} className={c.span}>
              <Spotlight className="group card-hover flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e6dcc6] bg-white">
                <div className={`relative h-[250px] sm:h-[290px] overflow-hidden bg-gradient-to-br ${c.tone} p-5 sm:p-7`}>
                  <div className="pointer-events-none absolute inset-0 hairline-grid opacity-50" />
                  <div className="relative h-full overflow-hidden rounded-xl border border-[#d9ceb4] bg-white shadow-[0_30px_60px_-24px_rgba(21,70,59,0.45)] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015]">
                    <div className="flex items-center gap-1.5 border-b border-[#efe8d6] bg-[#faf8f3] px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-[#e5ddd0]" />
                      <span className="h-2 w-2 rounded-full bg-[#e5ddd0]" />
                      <span className="h-2 w-2 rounded-full bg-[#e5ddd0]" />
                    </div>
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      className={`block h-[calc(100%-30px)] w-full max-w-none object-cover object-left-top select-none ${c.min}`}
                    />
                  </div>
                </div>

                <div className="flex flex-1 items-start justify-between gap-4 p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#eef3f0]">{c.icon}</span>
                      <span className="font-mono-spline text-[10px] uppercase tracking-[0.14em] text-[#8a8273]">{c.tag}</span>
                    </div>
                    <h3 className="mt-4 font-spectral text-[26px] sm:text-[30px] leading-[1.1] tracking-[-0.025em] text-[#0f332b]">{c.title}</h3>
                    <p className="mt-3 max-w-[460px] text-[15px] leading-relaxed text-[#6f6757]">{c.body}</p>
                  </div>
                  <span className="mt-1 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e6dcc6] text-[#15463b] transition-all group-hover:border-[#15463b] group-hover:bg-[#15463b] group-hover:text-white sm:flex">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
