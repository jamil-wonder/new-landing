import React from "react";

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

export default function Testimonials() {
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <section className="py-20 bg-transparent border-b border-[#ece3d1] overflow-hidden text-left">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9 mb-12 text-center">
        <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#8a8273]">
          Success Stories
        </span>
        <h2 className="font-spectral text-[32px] sm:text-[46px] font-normal tracking-tight text-[#15463b] mt-4 leading-tight">
          Trusted by growing teams across US & Europe
        </h2>
      </div>

      <div className="space-y-6">
        {/* Row 1: Right-to-Left */}
        <div className="flex w-max animate-marquee gap-5">
          {row1.map((t, i) => (
            <figure
              key={`row1-${i}`}
              className="flex h-[200px] w-[350px] shrink-0 flex-col justify-between rounded-[18px] border border-[#ece3d1] bg-white p-6 shadow-[0_4px_16px_rgba(60,48,28,0.01)] transition hover:border-[#dcd4c3]"
            >
              <blockquote className="text-[14px] leading-relaxed text-[#6f6757] italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-[#f6f3ec] pt-4 mt-4">
                {/* Avatar Initial Circle */}
                <div className="h-9 w-9 rounded-full bg-[#eef3f0] border border-[#d0e4d6] flex items-center justify-center font-mono-spline text-[12px] font-normal text-[#1e7d4f]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-xs font-normal text-[#23211b]">{t.name}</div>
                  <div className="text-[10px] font-mono-spline uppercase tracking-wider text-[#8a8273]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Row 2: Left-to-Right */}
        <div className="flex w-max animate-marquee-reverse gap-5">
          {row2.map((t, i) => (
            <figure
              key={`row2-${i}`}
              className="flex h-[200px] w-[350px] shrink-0 flex-col justify-between rounded-[18px] border border-[#ece3d1] bg-white p-6 shadow-[0_4px_16px_rgba(60,48,28,0.01)] transition hover:border-[#dcd4c3]"
            >
              <blockquote className="text-[14px] leading-relaxed text-[#6f6757] italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-[#f6f3ec] pt-4 mt-4">
                <div className="h-9 w-9 rounded-full bg-[#f6f3ec] border border-[#e8e1d0] flex items-center justify-center font-mono-spline text-[12px] font-normal text-[#d6a23a]">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-xs font-normal text-[#23211b]">{t.name}</div>
                  <div className="text-[10px] font-mono-spline uppercase tracking-wider text-[#8a8273]">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
