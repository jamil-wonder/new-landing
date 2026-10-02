import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
    {
    q: "I have zero SEO experience. Can I still use Wonderscore?",
    a: "Yes, absolutely! Wonderscore is designed to run on autopilot. Our agents autonomously discover opportunities, write content, and optimize your technical setup. You just review and approve drafts with a single click."
  },
  {
    q: "How is this different from a traditional SEO agency?",
    a: "Traditional agencies charge thousands of dollars a month for slow, manual reports. Wonderscore runs 24/7, continuously scans search models, generates optimized content briefs, deploys semantic changes, and builds authority instantly at a fraction of the cost."
  },
  {
    q: "Will Google or AI engines penalize AI-written content?",
    a: "No. Google's official guidelines state they reward high-quality content, regardless of how it is produced. Wonderscore writes authentic, fact-checked, human-grade articles that focus on searcher intent, which engines love."
  },
  {
    q: "Can AI-written content really rank in 2026?",
    a: "Yes, and it does every day. The key is original value, structured data, and depth. Wonderscore's agents research real-time data, integrate unique perspectives, and structure articles perfectly so they rank at the top."
  },
  {
    q: "What types of articles does Wonderscore produce?",
    a: "Wonderscore produces deep-dive guides, comparison articles, how-to tutorials, product reviews, and industry news. Every piece of content is custom-tailored to match your brand's voice and customer queries."
  },
  {
    q: "How does Wonderscore keep article quality high?",
    a: "We run a multi-agent validation process. One agent drafts, another fact-checks against live web sources, a third optimizes for SEO/GEO structures, and a final agent refines readability. This mimics an elite editorial newsroom."
  },
  {
    q: "Do I need to write or edit any of the articles myself?",
    a: "Only if you want to. Every article is generated as a fully formatted draft with images and links. You can edit them using our visual editor or simply hit 'Publish' to push them straight to your site."
  },
  {
    q: "What format are the articles delivered in?",
    a: "Articles are delivered directly into your Wonderscore dashboard as ready-to-publish rich-text pages. They are also automatically synced directly to your connected CMS (WordPress, Webflow, Shopify, etc.) as drafts."
  },
  {
    q: "Are internal links included automatically?",
    a: "Yes. Wonderscore maps your entire site structure and automatically inserts relevant, context-aware internal links into new articles to build a powerful crawlable hierarchy and transfer page authority."
  },
  {
    q: "Which languages do you support?",
    a: "We support over 50 languages natively, including Spanish, German, French, Japanese, Chinese, Arabic, and Portuguese. Content is written naturally by localized models, not just machine-translated."
  },
  {
    q: "Are non-English articles just translated from English?",
    a: "Never. Our agents write content from scratch in the target language to ensure correct idioms, local search intent, and native fluency, avoiding the awkward phrasing of simple machine translations."
  },
  {
    q: "How long until I see results?",
    a: "Most customers see their first crawled pages ranking in search engines and cited in AI models within 4 to 8 weeks. Organic traffic and authority build exponentially over 3 to 6 months of active publishing."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. Wonderscore is a month-to-month service with no contracts or commitments. You can cancel your subscription with a single click inside your account settings whenever you like."
  },
  {
    q: "What's your refund policy?",
    a: "We offer a 7-day free trial so you can experience Wonderscore risk-free. If you forget to cancel or change your mind, send us an email within 48 hours of billing and we'll issue a full refund."
  },
  {
    q: "Can I see a product walkthrough?",
    a: "Of course! You can watch our interactive platform walkthrough on our homepage or sign up for a free account to test drive all our tools, agents, and dashboards firsthand."
  }
];

function AccordionItem({ item, index, isOpen, onClick }: { item: FAQItem; index: number; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`rounded-2xl border text-left transition-colors duration-300 ${isOpen ? "border-[#a8d860]/35 bg-white/[0.06]" : "border-white/10 hover:border-white/25"}`}>
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-5 text-left cursor-pointer sm:px-6"
      >
        <span className={`hidden font-mono-spline text-[11px] sm:block ${isOpen ? "text-[#a8d860]" : "text-[#6f9a88]"}`}>{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1 pr-2 font-spectral text-[18px] leading-snug text-white sm:text-[20px]">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${isOpen ? "border-[#a8d860] bg-[#a8d860] text-[#0c2b24]" : "border-white/20 text-[#a9c9bb]"}`}
        >
          <Plus size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-6 text-[15px] leading-relaxed text-[#a9c9bb] sm:pl-[68px] sm:pr-16">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0c2b24] py-24 md:py-36 text-left">
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(30,125,79,0.4),transparent)]" />
      <div className="relative mx-auto grid max-w-[1180px] gap-12 px-4 md:px-9 lg:grid-cols-[360px_1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow dark>Questions &amp; Answers</Eyebrow>
          <h2 className="mt-5 font-spectral text-[38px] sm:text-[52px] font-normal leading-[1.04] tracking-[-0.035em] text-white">
            Frequently Asked <span className="italic text-shine-dark">Questions</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((item, idx) => (
            <Reveal key={idx} delay={Math.min(idx, 5) * 0.04} y={16}>
              <AccordionItem item={item} index={idx} isOpen={openIdx === idx} onClick={() => setOpenIdx(openIdx === idx ? null : idx)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
