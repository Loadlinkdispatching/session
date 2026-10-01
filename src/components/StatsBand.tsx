import { Counter, Reveal } from "./ui";

const STATS = [
  { value: 5, suffix: "+", label: "Years in Industry" },
  { value: 70, suffix: "+", label: "Skilled Professionals" },
  { value: 1100, suffix: "+", label: "Carriers Served" },
  { value: 24, suffix: "/7", label: "Dispatch Coverage" },
];

export default function StatsBand() {
  return (
    <Reveal>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="card-sheen group bg-coal px-6 py-9 text-center md:px-8 md:py-12"
          >
            <div className="font-display text-4xl text-bone transition-colors duration-500 group-hover:text-flare md:text-[3.4rem] md:leading-none">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
