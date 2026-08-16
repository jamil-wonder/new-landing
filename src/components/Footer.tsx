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

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-[#ece3d1] pt-16 pb-12 text-left">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Logo & Pitch */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <WonderscoreLogo size={28} color="#15463b" />
              <span className="font-spectral text-[20px] font-normal tracking-tight text-[#15463b]">
                Wonderscore
              </span>
            </a>
            <p className="text-[#6f6757] text-[13px] leading-relaxed max-w-sm">
              Your AI CMO for ChatGPT, Claude, and Perplexity. We crawl citations and deploy agents to grow search share.
            </p>
            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ece3d1] bg-white transition-colors hover:border-[#1e7d4f]">
                <img src="/x2.svg" alt="X" className="h-3 w-3 opacity-70 transition-opacity hover:opacity-100" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ece3d1] bg-white transition-colors hover:border-[#1e7d4f]">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-3 w-3 opacity-70 transition-opacity hover:opacity-100" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ece3d1] bg-white transition-colors hover:border-[#1e7d4f]">
                <img src="/fb.svg" alt="Facebook" className="h-3 w-3 opacity-70 transition-opacity hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Links */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="space-y-3.5">
              <div className="font-mono-spline text-[10px] uppercase tracking-wider text-[#8a8273] font-normal">
                {col.title}
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#6f6757] hover:text-[#15463b] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ece3d1] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8a8273]">
          <div>
            &copy; {new Date().getFullYear()} Wonderscore. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#15463b] transition">Terms of Service</a>
            <a href="#" className="hover:text-[#15463b] transition">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
