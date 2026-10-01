import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Equipment from "../components/Equipment";
import Marquee from "../components/Marquee";
import CTABand from "../components/CTABand";
import { Reveal, SectionLabel } from "../components/ui";

const INCLUDED = [
  "High-paying loads matched to your equipment",
  "Rate negotiation on every single load",
  "Route planning that cuts deadhead miles",
  "Rate confirmations, BOLs & invoices handled",
  "Detention, TONU & recovery assistance",
  "24/7 coordinator support on the road",
];

export default function EquipmentPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Equipment"
        title="Every rig,"
        outline="fully"
        accent="loaded"
        description="From reefers to hot shots — we specialize in seven equipment types and match each one with the highest-paying freight in your lanes."
        image="./images/flatbed.jpg"
      />

      <Equipment />

      {/* What every dispatch includes */}
      <section className="relative bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <SectionLabel>Included with every setup</SectionLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-4xl uppercase leading-[0.98] text-bone md:text-5xl xl:text-6xl">
                  One dispatch team.{" "}
                  <span className="ember-gradient-text">Zero loose ends.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/65 md:text-lg">
                  Whatever you run, the service never changes: consistent loads,
                  smooth operations, and paperwork handled end to end by expert
                  logistics coordinators.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-[0_12px_42px_rgba(255,92,26,0.38)] transition-shadow duration-300 hover:shadow-[0_16px_54px_rgba(255,92,26,0.55)]"
                >
                  Get matched with loads
                </Link>
              </Reveal>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item, i) => (
                <Reveal key={item} delay={0.05 * i} className="h-full">
                  <div className="card-sheen flex h-full items-start gap-3.5 rounded-2xl border border-white/10 bg-coal p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                    <span className="text-sm leading-relaxed text-bone/75">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee />
      <CTABand />
    </main>
  );
}
