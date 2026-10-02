import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Fade + rise when scrolled into view (once). Honours reduced-motion.
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono-spline text-[10.5px] tracking-[0.16em] uppercase ${
        dark ? "text-[#a8d860]" : "text-[#1e7d4f]"
      }`}
    >
      <span className={`h-px w-6 ${dark ? "bg-[#a8d860]/60" : "bg-[#1e7d4f]/50"}`} />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-14 md:mb-20`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`font-spectral text-[38px] sm:text-[52px] md:text-[64px] font-normal tracking-[-0.035em] leading-[1.02] mt-5 text-balance ${
          dark ? "text-white" : "text-[#0f332b]"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-[16px] md:text-[17px] leading-relaxed ${dark ? "text-[#a9c9bb]" : "text-[#6f6757]"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}

// Counts up to a number once visible. `format` renders the current value.
export function CountUp({
  to,
  duration = 1600,
  format = (n: number) => String(Math.round(n)),
}: {
  to: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return <span ref={ref} className="num">{format(val)}</span>;
}

// Card whose highlight follows the cursor (pairs with .spotlight in index.css)
export function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
