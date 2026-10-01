import {
  FileCheck2,
  Handshake,
  LockOpen,
  Radar,
  Wallet,
  Zap,
} from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const REASONS = [
  {
    icon: Radar,
    title: "No More Load Searching",
    text: "We find and book the best loads for you — no more refreshing boards at 2 AM.",
  },
  {
    icon: Handshake,
    title: "Stress-Free Negotiations",
    text: "We secure top rates while you focus on driving. You always approve before we book.",
  },
  {
    icon: Zap,
    title: "Fast Load Booking",
    text: "We grab high-paying loads before other carriers even see them.",
  },
  {
    icon: FileCheck2,
    title: "Paperwork Handled",
    text: "Rate confirmations, BOLs, and invoices are all taken care of for you.",
  },
  {
    icon: LockOpen,
    title: "No Lock-In Contracts",
    text: "Work with us risk-free. Cancel anytime — no penalties, no fine print.",
  },
  {
    icon: Wallet,
    title: "Pay Only After You Get Paid",
    text: "Zero upfront fees. We charge only after you receive payment from brokers.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-ink py-24 md:py-36">
      {/* oversized watermark */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none whitespace-nowrap text-[16vw] uppercase leading-none text-white/[0.025]"
      >
        Loadlink
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel className="justify-center">
              Why Choose Loadlink
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-5xl uppercase leading-[0.98] text-bone md:text-6xl xl:text-7xl">
              Built for carriers.{" "}
              <span className="ember-gradient-text">Pays like a partner.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/60 md:text-lg">
              We help carriers and owner-operators secure top-paying freight,
              negotiate the best rates, and handle all paperwork — so you can
              focus on driving and earning more.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={0.06 * (i % 3)} className="h-full">
              <div className="card-sheen group relative flex h-full flex-col rounded-3xl border border-white/10 bg-coal p-8 transition-colors duration-500 hover:border-ember/35">
                <span className="font-display absolute right-7 top-6 text-3xl text-white/8 transition-colors duration-500 group-hover:text-ember/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-ember/25 bg-ember/10 text-flare transition-all duration-500 group-hover:bg-ember group-hover:text-ink group-hover:shadow-[0_8px_30px_rgba(255,92,26,0.4)]">
                  <r.icon className="h-5.5 w-5.5" strokeWidth={2.1} />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-bone">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/55">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
