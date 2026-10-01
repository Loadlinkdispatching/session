import {
  HandCoins,
  Landmark,
  ShieldCheck,
  Undo2,
} from "lucide-react";
import { Reveal } from "./ui";

const GUARANTEES = [
  {
    icon: Undo2,
    title: "Cancel anytime",
    text: "No penalties, no lock-in. Walk away whenever you want.",
  },
  {
    icon: ShieldCheck,
    title: "Load protection",
    text: "If a load falls through, we assist with TONU, detention, and recovery.",
  },
  {
    icon: HandCoins,
    title: "We earn when you earn",
    text: "Our fee comes only after the broker pays you. Aligned incentives, always.",
  },
  {
    icon: Landmark,
    title: "Honest market rates",
    text: "No unrealistic promises — we secure the best available market rates.",
  },
];

export default function Guarantees() {
  return (
    <Reveal delay={0.1}>
      <div>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-3xl uppercase text-bone md:text-4xl">
            Our <span className="ember-gradient-text">guarantees</span>
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
            Written into every partnership
          </span>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map((g) => (
            <div
              key={g.title}
              className="card-sheen group bg-coal p-7 transition-colors duration-500 hover:bg-carbon"
            >
              <g.icon
                className="h-6 w-6 text-flare transition-transform duration-500 group-hover:-translate-y-1"
                strokeWidth={1.9}
              />
              <h4 className="mt-5 text-base font-semibold text-bone">
                {g.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-bone/55">
                {g.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
