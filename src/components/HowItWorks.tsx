import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardList,
  MoveRight,
  Search,
  Wallet,
} from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const STEPS = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Provide Details",
    text: "Share your lane preferences, equipment type, and target rates with your coordinator.",
  },
  {
    icon: Search,
    num: "02",
    title: "Load Sourcing",
    text: "Our logistics coordinators scan the market and secure the best loads for your lanes.",
  },
  {
    icon: BadgeCheck,
    num: "03",
    title: "Approval",
    text: "Nothing gets booked without you — review the rate and approve the load first.",
  },
  {
    icon: Wallet,
    num: "04",
    title: "Pay After Delivering",
    text: "No upfront fees, ever. You pay us only after you get paid by the broker.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative overflow-hidden bg-coal py-24 md:py-36">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-ember/8 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>How it works</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl uppercase leading-[0.98] text-bone md:text-6xl xl:text-7xl">
                How we <span className="text-outline">provide</span>{" "}
                <span className="ember-gradient-text">loads</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-base leading-relaxed text-bone/60">
              Four simple steps between you and a fully booked week — from
              first call to first delivery.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* connector line */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-0 top-[52px] hidden h-px w-full origin-left bg-gradient-to-r from-ember/60 via-white/15 to-transparent xl:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.1 * i} className="h-full">
              <div className="group relative h-full rounded-3xl border border-white/10 bg-ink p-8 transition-colors duration-500 hover:border-ember/35">
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ember text-ink shadow-[0_10px_34px_rgba(255,92,26,0.35)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <s.icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  {i < 3 && (
                    <MoveRight className="h-5 w-5 text-ember/50 transition-transform duration-500 group-hover:translate-x-1.5" />
                  )}
                </div>
                <div className="font-display mt-9 text-6xl leading-none text-outline transition-all duration-500 group-hover:text-outline-ember">
                  {s.num}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-bone">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/55">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
