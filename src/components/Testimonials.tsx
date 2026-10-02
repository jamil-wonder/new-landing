import React from "react";
import { Quote } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const TESTIMONIALS = [
  { name: "Alex R.", role: "Founder, Rethink Travel", quote: "Really like the interface — the initial setup was incredibly easy and the results showed up in weeks." },
  { name: "Marisol P.", role: "Owner, Gelato Bar", quote: "A friend told me people were using AI to find spots. Within weeks we started getting new customers who said they found us on Perplexity." },
  { name: "Elliot G.", role: "Co-founder, SaaSbench", quote: "Full SEO and GEO scans, an auto-blog feature, and a helpful community assistant. Already a big ROI." },
  { name: "Quentin B.", role: "Shopify owner", quote: "I run a Shopify store doing about £1.2M/year. Within 60 days Perplexity was recommending our products over competitors with 10× our budget." },
  { name: "Gus L.", role: "Owner, Château Sénéjac", quote: "We're a boutique hotel competing with Booking and big chains. Two months in, guests started telling us they found us through ChatGPT." },
  { name: "Zeynep K.", role: "Owner, Panini & Fromage", quote: "We started with almost no online presence. Now when people ask ChatGPT for the best sandwich shop in town, we actually show up." },
  { name: "Noor A.", role: "Head of Growth, Upflex", quote: "Organic reach jumped from 82K to 230K in three months and it kept climbing. Real time saver." },
  { name: "Diego M.", role: "Marketing, DarePouch", quote: "Clear briefs, ready-to-ship drafts, and citations we can track. Feels like a full team." },
];

function Card({ t, tone }: { t: (typeof TESTIMONIALS)[number]; tone: "green" | "gold" }) {
  return (
    <figure className="group relative flex h-[236px] w-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] border border-[#e6dcc6] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#cfd9cf] hover:shadow-[0_24px_50px_-26px_rgba(21,70,59,0.35)]">
      <Quote size={30} className="absolute right-5 top-5 text-[#15463b]/[0.07]" />
      <blockquote className="relative text-[15px] leading-[1.65] text-[#3d392e]">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-[#f1ead9] pt-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-spectral text-[17px] text-white ${
            tone === "green" ? "bg-gradient-to-br from-[#1e7d4f] to-[#15463b]" : "bg-gradient-to-br from-[#d6a23a] to-[#9a6a12]"
          }`}
        >
          {t.name[0]}
        </div>
        <div>
          <div className="text-[13.5px] font-medium text-[#23211b]">{t.name}</div>
          <div className="font-mono-spline text-[9.5px] uppercase tracking-wider text-[#8a8273]">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <section className="overflow-hidden bg-[#fdfcf8] border-t border-[#e6dcc6] py-24 md:py-36 text-left">
      <Reveal className="mx-auto mb-14 max-w-[1180px] px-4 text-center md:px-9 md:mb-20">
        <Eyebrow>Success Stories</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-4xl font-spectral text-[36px] sm:text-[52px] md:text-[64px] font-normal leading-[1.04] tracking-[-0.035em] text-[#0f332b] text-balance">
          Trusted by growing teams across <span className="italic text-[#1e7d4f]">US &amp; Europe</span>
        </h2>
      </Reveal>

      <div className="mask-fade-x space-y-5">
        <div className="group/row">
          <div className="flex w-max animate-marquee gap-5 group-hover/row:[animation-play-state:paused]">
            {row1.map((t, i) => (
              <Card key={`row1-${i}`} t={t} tone="green" />
            ))}
          </div>
        </div>
        <div className="group/row">
          <div className="flex w-max animate-marquee-reverse gap-5 group-hover/row:[animation-play-state:paused]">
            {row2.map((t, i) => (
              <Card key={`row2-${i}`} t={t} tone="gold" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
