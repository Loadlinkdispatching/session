import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, CircleDollarSign } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";
import Guarantees from "./Guarantees";

const BARS = [
  { label: "Instant Cash Flow", value: 98 },
  { label: "Hassle-Free Process", value: 100 },
  { label: "Transparent Terms", value: 100 },
];

export default function Factoring({ showGuarantees = true }: { showGuarantees?: boolean }) {
  return (
    <section id="factoring" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="pointer-events-none absolute -right-48 top-0 h-[560px] w-[560px] rounded-full bg-ember/8 blur-[150px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <SectionLabel>Factoring assistance</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl uppercase leading-[0.98] text-bone md:text-6xl xl:text-7xl">
                Freight <span className="text-outline">factoring</span>{" "}
                <span className="ember-gradient-text">assistance</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-bone/65 md:text-lg">
                Improve cash flow with fast payment solutions. We assist with
                approvals, paperwork, and collections so you get paid quickly —
                and keep fuel, payroll, and growth on schedule.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-ember"
                >
                  Get funded faster
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                  <CircleDollarSign className="h-4 w-4 text-flare" />
                  Approvals in as little as 24h
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — animated bars */}
          <div className="rounded-3xl border border-white/10 bg-coal p-8 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
              Faster growth, measured
            </div>
            <div className="mt-8 space-y-8">
              {BARS.map((b, i) => (
                <div key={b.label}>
                  <div className="mb-3 flex items-end justify-between">
                    <span className="text-sm font-medium text-bone/85">
                      {b.label}
                    </span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.15 }}
                      className="font-display text-2xl text-flare"
                    >
                      {b.value}%
                    </motion.span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.value}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 1.4,
                        delay: 0.2 + i * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-ember to-flare shadow-[0_0_20px_rgba(255,92,26,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showGuarantees && (
          <div className="mt-20 md:mt-28">
            <Guarantees />
          </div>
        )}
      </div>
    </section>
  );
}
