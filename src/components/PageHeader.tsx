import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  outline,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  outline?: string;
  description: string;
  image?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-ink pb-16 pt-40 md:pb-24 md:pt-52">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
        </div>
      )}
      <div className="road-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,transparent,black_40%,black)]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-ember/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-ash"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-ember">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-ember/70" />
          <span className="text-bone/80">{eyebrow}</span>
        </motion.nav>

        <h1 className="font-display mt-8 max-w-5xl text-[13vw] uppercase leading-[0.94] text-bone sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {title}{" "}
              {outline && <span className="text-outline">{outline}</span>}{" "}
              {accent && <span className="ember-gradient-text">{accent}</span>}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-bone/65 md:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </header>
  );
}
