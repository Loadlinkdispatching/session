import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  PhoneCall,
} from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const EQUIPMENT = [
  "Dry Van",
  "Reefer",
  "Flatbed",
  "Step Deck",
  "Power Only",
  "Box Truck",
  "Hot Shot",
];

const inputCls =
  "w-full rounded-2xl border border-white/12 bg-ink/80 px-5 py-4 text-sm text-bone placeholder:text-bone/35 outline-none transition-all duration-300 focus:border-ember/70 focus:ring-2 focus:ring-ember/20";

export default function CTA() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-36">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-ember/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left copy */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <SectionLabel>Get started today</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-[15vw] uppercase leading-[0.92] text-bone sm:text-7xl xl:text-[6.5rem]">
                Ready to{" "}
                <span className="ember-gradient-text">roll</span>
                <span className="text-flare">?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-bone/65 md:text-lg">
                Tell us about your equipment and lanes — a dedicated logistics
                coordinator will reach out the same day with high-paying loads
                ready to book. No contracts, no upfront fees.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 space-y-5">
                <a
                  href="mailto:dispatch@loadlinkdispatching.com"
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ember/25 bg-ember/10 text-flare transition-colors duration-300 group-hover:bg-ember group-hover:text-ink">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                      Email dispatch
                    </span>
                    <span className="link-line mt-0.5 block font-semibold text-bone">
                      dispatch@loadlinkdispatching.com
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ember/25 bg-ember/10 text-flare">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                      Request a call back
                    </span>
                    <span className="mt-0.5 block font-semibold text-bone">
                      We call you within business hours
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ember/25 bg-ember/10 text-flare">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                      Dispatch coverage
                    </span>
                    <span className="mt-0.5 block font-semibold text-bone">
                      24/7 — nights, weekends & holidays
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-coal p-7 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-ember/15 blur-[80px]" />
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[480px] flex-col items-center justify-center text-center"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-ember/15 text-ember">
                      <CheckCircle2 className="h-10 w-10" />
                    </span>
                    <h3 className="font-display mt-7 text-4xl uppercase text-bone">
                      You're on the board
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/60">
                      A dedicated logistics coordinator will contact you shortly
                      with load options for your equipment and lanes.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="link-line mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-ember"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
                      Free setup — pay only after you get paid
                    </div>
                    <h3 className="font-display mt-3 text-3xl uppercase text-bone md:text-4xl">
                      Book your coordinator
                    </h3>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <input required placeholder="Full name" className={inputCls} />
                      <input
                        required
                        type="tel"
                        placeholder="Phone number"
                        className={inputCls}
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email address"
                        className={inputCls}
                      />
                      <div className="relative">
                        <select
                          required
                          defaultValue=""
                          className={`${inputCls} appearance-none pr-12 [&>option]:bg-coal`}
                        >
                          <option value="" disabled>
                            Equipment type
                          </option>
                          {EQUIPMENT.map((eq) => (
                            <option key={eq} value={eq}>
                              {eq}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ash" />
                      </div>
                      <input
                        placeholder="Preferred lanes (e.g. TX → Midwest)"
                        className={inputCls}
                      />
                      <input
                        placeholder="MC / DOT number (optional)"
                        className={inputCls}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-ember py-4.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-[0_14px_44px_rgba(255,92,26,0.35)] transition-all duration-300 hover:shadow-[0_18px_56px_rgba(255,92,26,0.5)]"
                    >
                      Get my loads
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                    <p className="mt-4 text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-ash">
                      No spam. No lock-in. Cancel anytime.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
