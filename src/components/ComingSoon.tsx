import { FormEvent, useState } from "react";
import { ArrowRight, Check, LoaderCircle, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { API_URL } from "../lib/appUrl";
import { WonderscoreLogo } from "./WonderscoreLogo";

type FormState = "idle" | "loading" | "success" | "error";

const productSignals = [
  "See how your brand appears in AI answers",
  "Find the pages and prompts worth improving",
  "Turn insights into a practical next step",
];

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setFormState("error");
      setMessage("Enter your email address to join the wishlist.");
      return;
    }

    setFormState("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/wishlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });
      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const detail = payload && typeof payload.detail === "string" ? payload.detail : null;
        throw new Error(detail || "We could not save your email. Please try again.");
      }

      setFormState("success");
      setMessage("You are on the wishlist. We will be in touch when early access opens.");
      setEmail("");
    } catch (error) {
      setFormState("error");
      setMessage(error instanceof Error ? error.message : "We could not save your email. Please try again.");
    }
  };

  const entrance = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f2eee4] text-ink">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.22]" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="/" aria-label="Wonderscore home" className="flex items-center gap-2.5 text-forest">
          <WonderscoreLogo size={31} />
          <span className="font-serif text-[23px] leading-none tracking-[-0.03em]">wonderscore</span>
        </a>
        <span className="rounded-sm border border-forest/15 bg-white/70 px-3 py-1.5 font-mono-spline text-[10px] font-medium uppercase tracking-[0.14em] text-forest">
          Coming soon
        </span>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-10 pt-10 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">
        <motion.section {...entrance} className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2 font-mono-spline text-[11px] font-medium uppercase tracking-[0.14em] text-accent-green">
            <span aria-hidden="true"><WonderscoreLogo size={14} color="#1e7d4f" /></span>
            AI visibility, made clear
          </div>
          <h1 className="font-serif text-[43px] leading-[0.98] tracking-[-0.045em] text-forest sm:text-[62px] lg:text-[76px]">
            A clearer view of how AI sees your brand.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-subtle sm:text-[19px]">
            Wonderscore helps marketing teams understand their visibility across ChatGPT, Claude, and Perplexity, then act on what matters.
          </p>
        </motion.section>

        <motion.section
          {...(reduceMotion
            ? {}
            : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } })}
          className="mx-auto mt-10 w-full max-w-2xl border border-forest/15 bg-white/85 p-2 sm:mt-12"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor="wishlist-email">
              Email address
            </label>
            <div className="relative min-w-0 flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest/45" size={18} aria-hidden="true" />
              <input
                id="wishlist-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your work email"
                autoComplete="email"
                disabled={formState === "loading" || formState === "success"}
                className="h-13 w-full rounded-sm border border-forest/15 bg-[#fcfbf7] py-3 pl-11 pr-4 text-[15px] font-medium text-ink outline-none transition placeholder:text-subtle/60 focus:border-forest focus:ring-0 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
            <button
              type="submit"
              disabled={formState === "loading" || formState === "success"}
              className="btn-sheen inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-sm bg-forest px-5 text-[14px] font-medium text-white transition hover:bg-forest-hover focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState === "loading" ? <LoaderCircle className="animate-spin" size={17} aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}
              {formState === "success" ? "You are on the list" : "Join wishlist"}
            </button>
          </form>
          <div aria-live="polite" className="min-h-6 px-2 pt-2 text-left text-[13px] font-medium sm:px-3">
            {formState === "success" && <span className="flex items-center gap-1.5 text-accent-green"><Check size={15} aria-hidden="true" />{message}</span>}
            {formState === "error" && <span className="text-error-red">{message}</span>}
            {formState === "idle" && <span className="text-subtle">No spam. Just one note when early access opens.</span>}
          </div>
        </motion.section>

        <motion.section
          {...(reduceMotion
            ? {}
            : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.22, duration: 0.55 } })}
          className="mx-auto mt-11 grid w-full max-w-5xl border-y border-forest/10 sm:grid-cols-3"
          aria-label="What Wonderscore will help with"
        >
          {productSignals.map((signal) => (
            <div key={signal} className="flex items-start gap-3 border-forest/10 px-1 py-5 text-left sm:px-6 sm:py-6 [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e4f3e8] text-accent-green"><Check size={13} strokeWidth={2.5} aria-hidden="true" /></span>
              <p className="text-[14px] leading-relaxed text-forest">{signal}</p>
            </div>
          ))}
        </motion.section>

        <motion.div
          {...(reduceMotion
            ? {}
            : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } })}
          className="mx-auto mt-12 w-full max-w-5xl overflow-hidden border border-forest/15 bg-forest p-2 sm:mt-16 sm:p-3"
        >
          <img
            src="/bento-unified-overview.png"
            alt="Wonderscore dashboard preview"
            className="h-auto w-full object-cover object-top"
          />
        </motion.div>
      </main>
    </div>
  );
}
