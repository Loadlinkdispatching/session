import { Star } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Testimonials from "../components/Testimonials";
import Insights from "../components/Insights";
import Guarantees from "../components/Guarantees";
import CTABand from "../components/CTABand";
import { Counter, Reveal } from "../components/ui";

const RATING_STATS = [
  { value: 1100, suffix: "+", label: "Carriers served nationwide" },
  { value: 98, suffix: "%", label: "Carrier retention rate" },
];

export default function ReviewsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Reviews"
        title="Our clients"
        accent="believe in us"
        description="Here is what carriers, owner-operators, and drivers are saying about running with Loadlink Dispatching Corporation."
        image="./images/hotshot.jpg"
      />

      {/* Rating summary band */}
      <section className="relative bg-ink pb-6 pt-2">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center gap-3 bg-coal px-8 py-10 text-center">
                <span className="flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-ember text-ember" />
                  ))}
                </span>
                <span className="font-display text-4xl text-bone">5.0</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                  Average carrier rating
                </span>
              </div>
              {RATING_STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center gap-2 bg-coal px-8 py-10 text-center"
                >
                  <span className="font-display text-4xl text-bone md:text-5xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <Insights />

      <section className="relative bg-ink pb-24 pt-4 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Guarantees />
        </div>
      </section>

      <CTABand />
    </main>
  );
}
