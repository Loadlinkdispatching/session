import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";

const POSTS = [
  {
    cat: "Industry Data",
    date: "2025 Report",
    title: "How Many Amazon Trucks Are There? Explore 2025 Data",
    excerpt:
      "A data-driven look at Amazon's growing freight network and what it means for independent carriers.",
  },
  {
    cat: "Earnings",
    date: "Driver Guide",
    title: "Do Truck Drivers Make $100,000 a Year?",
    excerpt:
      "Breaking down the lanes, equipment, and dispatch strategies behind six-figure trucking years.",
  },
  {
    cat: "Equipment",
    date: "Market Watch",
    title: "Is Step Deck Trucking Still Profitable Today?",
    excerpt:
      "Specialized freight rates, demand trends, and when step deck makes sense for your operation.",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>Trucking insights</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl uppercase leading-[0.98] text-bone md:text-6xl">
                From the <span className="ember-gradient-text">dispatch desk</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-base leading-relaxed text-bone/60">
              Market data and earning strategies our coordinators use to keep
              your gross climbing.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i} className="h-full">
              <Link
                to="/contact"
                className="card-sheen group flex h-full flex-col rounded-3xl border border-white/10 bg-coal p-8 transition-colors duration-500 hover:border-ember/35"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-flare">
                    {p.cat}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                    {p.date}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold leading-snug text-bone transition-colors duration-300 group-hover:text-flare md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/55">
                  {p.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-ember">
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
