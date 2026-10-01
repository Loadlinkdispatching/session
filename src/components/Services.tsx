import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileCheck2,
  Handshake,
  Radar,
  Route,
} from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const FEATURES = [
  {
    icon: Radar,
    title: "Load sourcing & booking",
    text: "Coordinators scan top load boards and our broker network to lock in premium freight before it's gone.",
  },
  {
    icon: Handshake,
    title: "Hard-nosed rate negotiation",
    text: "We push for top-market rates on every load — you approve, we book, you roll.",
  },
  {
    icon: FileCheck2,
    title: "All paperwork handled",
    text: "Rate confirmations, BOLs, invoices and broker setup packets — done for you, on time.",
  },
  {
    icon: Route,
    title: "Route & revenue planning",
    text: "Smart lane planning that cuts deadhead miles and stacks your weeks for maximum gross.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — sticky copy */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel>Full Service Truck Support</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-5xl uppercase leading-[0.98] text-bone md:text-6xl xl:text-7xl">
                  Done-for-you{" "}
                  <span className="text-outline">logistics</span>{" "}
                  <span className="ember-gradient-text">coordination</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-md text-base leading-relaxed text-bone/65 md:text-lg">
                  No contracts. No hidden fees. Just consistent loads and smooth
                  operations handled by expert logistics coordinators — backed
                  by a strong broker network built on top-tier relationships.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {["DAT", "Truckstop", "Coyote", "CH Robinson", "Echo", "TQL"].map(
                    (b) => (
                      <span
                        key={b}
                        className="rounded-full border border-white/10 bg-carbon px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60"
                      >
                        {b}
                      </span>
                    )
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.28}>
                <Link
                  to="/contact"
                  className="group mt-10 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember"
                >
                  <span className="link-line">Start getting loads</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Right — image + features */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <motion.img
                  src="./images/dispatch.jpg"
                  alt="Loadlink dispatch coordinator working freight boards"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 md:bottom-7 md:left-7 md:right-7">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-flare">
                      Strong Broker Network
                    </div>
                    <div className="font-display mt-2 text-2xl uppercase text-bone md:text-3xl">
                      Your back office, on duty 24/7
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ink/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/85 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
                    Live on the boards
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={0.08 * i} className="h-full">
                  <div className="card-sheen group flex h-full flex-col bg-coal p-7 md:p-8">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-ember/25 bg-ember/10 text-flare transition-colors duration-300 group-hover:bg-ember group-hover:text-ink">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-bone">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-bone/55">
                      {f.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
