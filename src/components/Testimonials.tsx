import { Quote, Star } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";
import { cn } from "../utils/cn";

const QUOTES = [
  {
    quote:
      "I've worked with many services, but Loadlink Corporation stands out. Professional team, strong rates, and consistent loads.",
    name: "Jason R.",
    role: "Carrier",
  },
  {
    quote:
      "They handle everything smoothly. I just drive and get paid.",
    name: "Angela T.",
    role: "Owner-Operator",
    featured: true,
  },
  {
    quote:
      "Feels like they're part of my business. Reliable and responsive.",
    name: "Derrick M.",
    role: "Driver",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-coal py-24 md:py-36">
      <div className="road-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>Client reviews</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 text-5xl uppercase leading-[0.98] text-bone md:text-6xl xl:text-7xl">
                Our clients <span className="text-outline">believe</span>
                <br />
                <span className="ember-gradient-text">in us</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ember text-ember" />
                ))}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Trusted by 1,100+ carriers
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.08 * i} className="h-full">
              <figure
                className={cn(
                  "card-sheen flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 md:p-9",
                  q.featured
                    ? "border-ember/40 bg-gradient-to-b from-ember/12 to-coal shadow-[0_20px_60px_rgba(255,92,26,0.12)]"
                    : "border-white/10 bg-ink hover:border-white/20"
                )}
              >
                <Quote
                  className={cn(
                    "h-8 w-8",
                    q.featured ? "text-ember" : "text-ember/60"
                  )}
                  fill="currentColor"
                  strokeWidth={0}
                />
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-bone/85 md:text-xl">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-white/8 pt-6">
                  <span className="font-display grid h-12 w-12 place-items-center rounded-full bg-ember/15 text-lg text-flare">
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-bone">
                      {q.name}
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                      {q.role}
                    </span>
                  </span>
                  <span className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-ember text-ember" />
                    ))}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
