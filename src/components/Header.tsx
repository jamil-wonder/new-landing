import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WonderscoreLogo } from "./WonderscoreLogo";
import { authUrl } from "../lib/appUrl";

const NAV_LINKS = [
  { label: "Features", href: "#features", id: "features" },
  { label: "Agents", href: "#agents", id: "agents" },
  { label: "Results", href: "#results", id: "results" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item whose section is under the middle of the viewport,
  // and clear it between sections (e.g. while reading How it works).
  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.45;
      let current = "";
      for (const l of NAV_LINKS) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom > mid) current = l.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#1e7d4f] via-[#a8d860] to-[#d6a23a] z-[60]"
      />

      <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none">
        <div
          className={`pointer-events-auto mx-auto flex items-center justify-between rounded-full border transition-all duration-500 ${
            scrolled
              ? "max-w-[880px] bg-white/80 backdrop-blur-xl border-[#e6dcc6] shadow-[0_10px_40px_-12px_rgba(21,70,59,0.25)] px-3 pl-5 py-2"
              : "max-w-[1180px] bg-white/55 backdrop-blur-md border-white/70 px-3 pl-5 py-2.5"
          }`}
        >
          <a href="#" className="flex items-center gap-2.5 shrink-0" aria-label="Wonderscore home">
            <WonderscoreLogo size={24} color="#15463b" />
            <span className="font-spectral text-[21px] tracking-tight text-[#15463b]">Wonderscore</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className={`relative px-3.5 py-2 text-[13.5px] rounded-full transition-colors ${
                  active === l.id ? "text-[#0f332b]" : "text-[#6f6757] hover:text-[#15463b]"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[#eef3f0] border border-[#d6e6db]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href={authUrl()} className="text-[13.5px] text-[#15463b] hover:text-[#0c2b24] px-3.5 py-2 rounded-full">
              Sign in
            </a>
            <a
              href={authUrl(true)}
              className="btn-sheen group inline-flex items-center gap-1.5 bg-[#15463b] hover:bg-[#0f332b] text-white text-[13.5px] font-medium pl-4 pr-3 py-2 rounded-full transition-colors"
            >
              Get started free
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2.5 rounded-full text-[#15463b] hover:bg-[#eef3f0] transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-[#0c2b24] text-white flex flex-col px-6 pt-5 pb-8"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2.5">
                <WonderscoreLogo size={24} color="#a8d860" />
                <span className="font-spectral text-[21px]">Wonderscore</span>
              </span>
              <button onClick={() => setOpen(false)} className="p-2.5 rounded-full hover:bg-white/10" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            <nav className="mt-14 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  className="font-spectral text-[40px] leading-[1.2] tracking-tight text-white/90 hover:text-[#a8d860] py-1.5 border-b border-white/10"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <a href={authUrl(true)} className="bg-[#a8d860] text-[#0c2b24] font-medium text-center py-4 rounded-2xl">
                Get started free
              </a>
              <a href={authUrl()} className="text-center py-3 text-white/80">
                Sign in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
