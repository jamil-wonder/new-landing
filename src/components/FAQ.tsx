import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

function AccordionItem({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[#2a6356] py-4 text-left">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-2 text-left focus:outline-none cursor-pointer"
      >
        <span className="font-spectral text-[16.5px] sm:text-[18.5px] font-normal text-white pr-4">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#86b89f] shrink-0"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-[#86b89f] text-[13.5px] leading-relaxed max-w-3xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#15463b] text-left">
      <div className="max-w-[1180px] mx-auto px-4 md:px-9">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono-spline text-[10px] tracking-[0.14em] uppercase text-[#a8d860]">
            Questions & Answers
          </span>
          <h2 className="font-spectral text-[35px] md:text-[52px] font-normal tracking-tight text-white mt-4 leading-tight text-center">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto border-t border-[#2a6356]">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={idx}
              item={item}
              isOpen={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

