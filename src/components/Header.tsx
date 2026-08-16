import React, { useState } from "react";
import { WonderscoreLogo } from "./WonderscoreLogo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Results", href: "#results" },
    { label: "Agents", href: "#agents" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-transparent/90 backdrop-blur-md pt-4 pb-2 transition-all">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        <div className="bg-white border border-[#ece3d1] rounded-[18px] shadow-[0_4px_20px_rgba(60,48,28,0.04)] px-4 py-3 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <WonderscoreLogo size={28} color="#15463b" />
              <span className="font-spectral text-[20px] md:text-[23px] font-normal tracking-tight text-[#15463b]">
                Wonderscore
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] font-normal text-[#6f6757] hover:text-[#15463b] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://app.wonderscore.ai/auth"
                className="text-[13.5px] font-normal text-[#15463b] hover:underline px-3 py-1.5"
              >
                Sign in
              </a>
              <a
                href="https://app.wonderscore.ai/auth?signup=true"
                className="bg-[#15463b] text-white hover:bg-[#0f332b] text-[13px] font-normal px-4 py-2 rounded-lg transition-all shadow-[0_2px_8px_rgba(21,70,59,0.1)] shrink-0"
              >
                Get Started Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-[#6f6757] hover:text-[#15463b] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-3 border-t border-[#f6f3ec] flex flex-col gap-3 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[14px] font-normal text-[#6f6757] hover:text-[#15463b] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-[#f6f3ec] pt-3 mt-1 flex flex-col gap-2.5">
                <a
                  href="https://app.wonderscore.ai/auth"
                  className="text-[14px] font-normal text-[#15463b] py-1 text-center hover:underline"
                >
                  Sign in
                </a>
                <a
                  href="https://app.wonderscore.ai/auth?signup=true"
                  className="bg-[#15463b] text-white hover:bg-[#0f332b] text-[13.5px] font-normal px-4 py-2.5 rounded-lg text-center transition-all shadow-[0_2px_8px_rgba(21,70,59,0.1)]"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
