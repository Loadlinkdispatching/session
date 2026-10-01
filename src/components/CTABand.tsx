import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Magnetic, Reveal } from "./ui";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/12 blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 rounded-[2rem] border border-ember/25 bg-gradient-to-br from-ember/12 via-coal to-coal p-10 md:flex-row md:items-center md:p-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/35 bg-ember/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-flare">
                <ShieldCheck className="h-3.5 w-3.5" />
                No contracts · Pay after you get paid
              </span>
              <h2 className="font-display mt-6 max-w-xl text-4xl uppercase leading-[0.96] text-bone md:text-6xl">
                Ready to <span className="ember-gradient-text">increase</span>{" "}
                your weekly gross?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-bone/60 md:text-base">
                A dedicated logistics coordinator is standing by with
                high-paying loads in your lanes. Setup is free — rolling takes
                minutes.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Magnetic>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-ember px-9 py-4.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-[0_14px_44px_rgba(255,92,26,0.4)] transition-shadow duration-300 hover:shadow-[0_18px_56px_rgba(255,92,26,0.6)]"
                >
                  Get started today
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Magnetic>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                Same-day callback · Free setup
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
