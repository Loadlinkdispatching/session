import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./ui";
import { cn } from "../utils/cn";

type Rig = {
  name: string;
  desc: string;
  img: string;
  span: string;
};

const RIGS: Rig[] = [
  {
    name: "Reefer",
    desc: "High-paying temperature-controlled loads with full coordination and fast payouts.",
    img: "./images/reefer.jpg",
    span: "lg:col-span-7",
  },
  {
    name: "Flatbed",
    desc: "Secure top-paying freight with expert negotiation and route planning.",
    img: "./images/flatbed_dusk.jpg",
    span: "lg:col-span-5",
  },
  {
    name: "Dry Van",
    desc: "Consistent loads, paperwork handled, and optimized routes.",
    img: "./images/dryvan.jpg",
    span: "lg:col-span-4",
  },
  {
    name: "Power Only",
    desc: "We connect your truck with trailers and high-paying opportunities.",
    img: "./images/poweronly.jpg",
    span: "lg:col-span-4",
  },
  {
    name: "Step Deck",
    desc: "Specialized freight with better rates and efficient coordination.",
    img: "./images/stepdeck.jpg",
    span: "lg:col-span-4",
  },
  {
    name: "Box Truck",
    desc: "Short-haul and last-mile opportunities with strong earnings.",
    img: "./images/boxtruck.jpg",
    span: "lg:col-span-5",
  },
  {
    name: "Hot Shot",
    desc: "Fast-moving loads with optimized routes and premium rates.",
    img: "./images/hotshot.jpg",
    span: "lg:col-span-7",
  },
];

function RigCard({ rig, index }: { rig: Rig; index: number }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 34, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.85,
        delay: 0.06 * (index % 3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "card-sheen group relative overflow-hidden rounded-3xl border border-white/10 bg-ink",
        rig.span
      )}
    >
      <div className="relative h-60 overflow-hidden md:h-72">
        <img
          src={rig.img}
          alt={`${rig.name} truck`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <span className="font-display text-outline absolute left-5 top-4 text-4xl opacity-90">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="duration-400 absolute right-5 top-5 grid h-11 w-11 translate-y-1 place-items-center rounded-full border border-white/15 bg-ink/60 text-bone opacity-0 backdrop-blur-md transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4 -rotate-45" />
        </span>
      </div>
      <div className="relative z-10 -mt-9 p-6 md:p-7">
        <h3 className="font-display text-3xl uppercase text-bone transition-colors duration-300 group-hover:text-flare">
          {rig.name}
        </h3>
        <p className="mt-2.5 max-w-md text-sm leading-relaxed text-bone/60">
          {rig.desc}
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

export function EquipmentPreview() {
  return (
    <section className="relative bg-coal py-24 md:py-32">
      <div className="road-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>What we dispatch</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 max-w-2xl text-5xl uppercase leading-[0.98] text-bone md:text-6xl">
                Equipment <span className="text-outline">we</span>{" "}
                <span className="ember-gradient-text">support</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link
              to="/equipment"
              className="group inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember"
            >
              <span className="link-line">View all 7 equipment types</span>
              <ArrowRight className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RIGS.slice(0, 3).map((rig, i) => (
            <RigCard key={rig.name} rig={{ ...rig, span: "" }} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Equipment() {
  return (
    <section id="equipment" className="relative bg-coal py-24 md:py-36">
      <div className="road-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>What we dispatch</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-6 max-w-2xl text-5xl uppercase leading-[0.98] text-bone md:text-6xl xl:text-7xl">
                Equipment <span className="text-outline">we</span>{" "}
                <span className="ember-gradient-text">support</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-base leading-relaxed text-bone/60">
              Seven equipment specializations, one goal — keep your wheels
              turning on the highest-paying freight in your lane.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {RIGS.map((rig, i) => (
            <RigCard key={rig.name} rig={rig} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
