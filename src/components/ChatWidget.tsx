import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    
    // Simulate sending email
    setIsSent(true);
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setIsSent(false), 300);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[9999] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#1e7d4f] text-white shadow-[0_8px_32px_rgba(30,125,79,0.4)] transition-all duration-300 hover:bg-[#15463b] hover:shadow-[0_12px_40px_rgba(21,70,59,0.5)] ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open support chat"
      >
        <img src="/chat.svg" alt="Chat" className="w-7 h-7 brightness-0 invert" />
      </button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[10000] flex w-[360px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_12px_48px_rgba(21,70,59,0.15)]"
          >
            {/* Header */}
            <div className="bg-[#15463b] p-5 text-white flex items-start justify-between border-b border-[#2a6356]">
              <div className="flex gap-3 items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e7d4f] border border-[#2a6356] shadow-sm">
                  <img src="/logo.svg" alt="Wonderscore" className="h-5 w-5 object-contain brightness-0 invert" />
                </div>
                <div>
                  <h3 className="font-spectral text-[22px] font-normal tracking-tight leading-none">Need Help?</h3>
                  <p className="text-[11px] text-[#a8d860] font-mono-spline mt-1.5">We usually respond within 2 hours.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors -mt-1 -mr-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              {isSent ? (
                <div className="flex h-[280px] flex-col items-center justify-center text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a8d860]/20 text-[#1e7d4f]">
                    <Send size={24} className="ml-1" />
                  </div>
                  <div>
                    <h4 className="font-spectral text-[22px] text-[#15463b]">Message Sent!</h4>
                    <p className="text-[14px] text-[#6f6757] mt-1 font-normal">We'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full rounded-xl border border-[#ece3d1] bg-[#fdfcf8] px-4 py-3 text-[14px] text-[#23211b] outline-none transition-colors focus:border-[#a8d860] focus:bg-white"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full rounded-xl border border-[#ece3d1] bg-[#fdfcf8] px-4 py-3 text-[14px] text-[#23211b] outline-none transition-colors focus:border-[#a8d860] focus:bg-white"
                      required
                    />
                    <textarea
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="h-28 w-full resize-none rounded-xl border border-[#ece3d1] bg-[#fdfcf8] px-4 py-3 text-[14px] text-[#23211b] outline-none transition-colors focus:border-[#a8d860] focus:bg-white"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e7d4f] py-3 text-[14px] font-normal text-white transition-colors hover:bg-[#15463b]"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}

              {/* Social Links */}
              <div className="mt-6 pt-5 border-t border-[#ece3d1]">
                <p className="text-center text-[11px] font-mono-spline uppercase tracking-wider text-[#8a8273] mb-4">
                  Or contact us on
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ece3d1] bg-white transition-colors hover:border-[#1e7d4f]">
                    <img src="/x2.svg" alt="X" className="h-4 w-4 opacity-70 transition-opacity hover:opacity-100" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ece3d1] bg-white transition-colors hover:border-[#1e7d4f]">
                    <img src="/linkedin.svg" alt="LinkedIn" className="h-4 w-4 opacity-70 transition-opacity hover:opacity-100" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ece3d1] bg-white transition-colors hover:border-[#1e7d4f]">
                    <img src="/fb.svg" alt="Facebook" className="h-4 w-4 opacity-70 transition-opacity hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
