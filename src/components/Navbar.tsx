import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Container, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Equipment", to: "/equipment" },
  { label: "Reviews", to: "/reviews" },
];

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-ember text-ink shadow-[0_0_28px_rgba(255,92,26,0.45)] transition-transform duration-500 group-hover:rotate-[-8deg]">
        <Container className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <span className="leading-none">
        <span className="font-display block text-[19px] tracking-wide text-bone">
          LOADLINK
        </span>
        <span className="font-mono block pt-1 text-[9px] uppercase tracking-[0.42em] text-ash">
          Dispatching Co.
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || pathname !== "/"
            ? "border-b border-white/8 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex xl:gap-9">
            {LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "link-line font-mono text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:text-bone",
                    isActive ? "text-ember" : "text-bone/70"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/contact"
              className={cn(
                "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                pathname === "/contact"
                  ? "bg-ember text-ink"
                  : "bg-bone text-ink hover:bg-ember"
              )}
            >
              Get Started
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-bone lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex flex-col bg-ink/97 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-[76px] items-center justify-between px-5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-bone"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-8 pb-10">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      cn(
                        "font-display block border-b border-white/8 py-4 text-4xl uppercase transition-colors",
                        isActive ? "text-ember" : "text-bone/85 hover:text-ember"
                      )
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ember px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Get Started <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
