import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import WhyUs from "../components/WhyUs";
import StatsBand from "../components/StatsBand";
import Guarantees from "../components/Guarantees";
import CTABand from "../components/CTABand";
import { Reveal, SectionLabel } from "../components/ui";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About Us"
        title="Dispatchers who"
        accent="drive results"
        description="Loadlink Dispatching Corporation helps carriers and owner-operators secure top-paying freight, negotiate the best rates, and handle all paperwork — so you can focus on driving and earning more."
        image="./images/dispatch.jpg"
      />

      {/* Mission split */}
      <section className="relative bg-ink py-10 md:py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="./images/dispatch.jpg"
                  alt="Loadlink coordinators at work in the dispatch room"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ink/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/85 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
                  Coordinators on duty 24/7
                </span>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel>Who we are</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-4xl uppercase leading-[0.98] text-bone md:text-5xl xl:text-6xl">
                  Your freight partner,{" "}
                  <span className="ember-gradient-text">not a middleman</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 text-base leading-relaxed text-bone/65 md:text-lg">
                  For over 5 years, our 70+ skilled logistics professionals have
                  kept more than 1,100 carriers loaded across the USA. We've
                  built a strong broker network with top-tier partners — and we
                  put it to work on every lane you run.
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
                  to="/services"
                  className="group mt-10 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember"
                >
                  <span className="link-line">Explore our services</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="mt-20 md:mt-28">
            <StatsBand />
          </div>
        </div>
      </section>

      <WhyUs />

      <section className="relative bg-ink pb-24 pt-4 md:pb-36">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Guarantees />
        </div>
      </section>

      <CTABand />
    </main>
  );
}
