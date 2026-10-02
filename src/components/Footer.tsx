import React from "react";
import { WonderscoreLogo } from "./WonderscoreLogo";

const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "Tools", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Agencies", href: "#" },
      { label: "SEO Teams", href: "#" },
      { label: "Content Marketers", href: "#" },
      { label: "Founders", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Success Stories", href: "#results" },
      { label: "Blog", href: "#" },
      { label: "SEO Directory", href: "#" },
    ],
  },
];

const SOCIALS = [
  { href: "https://twitter.com", icon: "/x2.svg", alt: "X" },
  { href: "https://linkedin.com", icon: "/linkedin.svg", alt: "LinkedIn" },
  { href: "https://facebook.com", icon: "/fb.svg", alt: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e6dcc6] bg-[#fdfcf8] pt-16 text-left">
      <div className="mx-auto max-w-[1180px] px-4 md:px-9">
        <div className="mb-14 grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2.5" aria-label="Wonderscore home">
              <WonderscoreLogo size={28} color="#15463b" />
              <span className="font-spectral text-[22px] tracking-tight text-[#15463b]">Wonderscore</span>
            </a>
            <p className="max-w-sm text-[14px] leading-relaxed text-[#6f6757]">
              Your AI CMO for ChatGPT, Claude, and Perplexity. We crawl citations and deploy agents to grow search share.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.alt}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.alt}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6dcc6] bg-white transition-all hover:-translate-y-0.5 hover:border-[#1e7d4f] hover:shadow-[0_10px_24px_-12px_rgba(21,70,59,0.5)]"
                >
                  <img src={s.icon} alt="" className="h-3.5 w-3.5 opacity-70" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="space-y-4">
              <div className="font-mono-spline text-[10.5px] uppercase tracking-[0.16em] text-[#8a8273]">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[14px] text-[#4d4636] transition-colors hover:text-[#1e7d4f]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e6dcc6] py-7 text-[12.5px] text-[#8a8273] sm:flex-row">
          <div>&copy; {new Date().getFullYear()} Wonderscore. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[#15463b]">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-[#15463b]">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden leading-none">
        <div className="-mb-[0.18em] text-center font-spectral text-[21vw] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_#e3d9c2] md:text-[17vw]">
          Wonderscore
        </div>
      </div>
    </footer>
  );
}
