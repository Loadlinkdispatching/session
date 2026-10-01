import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Counter, Magnetic } from "./ui";

const HERO_SOURCES = [
  "https://videos.pexels.com/video-files/30507710/13070392_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/30507710/13070392_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/30507710/13070392_3840_2160_30fps.mp4",
];

const STATS = [
  { value: 5, suffix: "+", label: "Years in Industry" },
  { value: 70, suffix: "+", label: "Skilled Professionals" },
  { value: 1100, suffix: "+", label: "Carriers Served" },
  { value: 24, suffix: "/7", label: "Dispatch Coverage" },
];

const line = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, delay: 0.45 + i * 0.13, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollNext = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="top" className="relative min-h-svh overflow-hidden">
      {/* video backdrop */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          poster="./images/hero-truck.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Trucks rolling down a nighttime highway"
        >
          {HERO_SOURCES.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div className="road-lines absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />

      {/* content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex min-h-svh max-w-[1400px] flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-7 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-ink/55 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-bone/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
            Truck Dispatch Services — USA Wide
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-flare backdrop-blur-md sm:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5" />
            No contracts · No upfront fees
          </span>
        </motion.div>

        <h1 className="font-display max-w-[15ch] text-[15vw] leading-[0.94] uppercase text-bone sm:text-[11vw] lg:text-[8.2rem] xl:text-[9rem]">
          <span className="block overflow-hidden pb-1">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              Increase your
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
              <span className="text-outline">Weekly</span>{" "}
              <span className="ember-gradient-text">Gross</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="max-w-xl text-base leading-relaxed text-bone/70 md:text-lg"
          >
            We assign dedicated logistics coordinators to secure high-paying
            loads, handle negotiations, and keep your trucks moving nonstop —
            scale your trucking business with zero stress and maximum
            profitability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-[0_12px_42px_rgba(255,92,26,0.38)] transition-all duration-300 hover:shadow-[0_16px_54px_rgba(255,92,26,0.55)]"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Magnetic>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/16 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-bone/85 backdrop-blur-sm transition-colors duration-300 hover:border-ember/60 hover:text-bone"
            >
              How it works
            </Link>
          </motion.div>
        </div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink/72 px-6 py-6 md:px-8">
              <div className="font-display text-3xl text-bone md:text-[2.6rem] md:leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.button
        onClick={scrollNext}
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-ember" />
        </motion.span>
      </motion.button>
    </section>
  );
}
