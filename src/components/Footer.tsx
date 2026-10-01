import { Link } from "react-router-dom";
import { ArrowUp, Container } from "lucide-react";

function FacebookIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
    </svg>
  );
}

function InstagramIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={props.className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M6.9 8.6H4V20h2.9V8.6ZM5.4 7.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM11 20v-6c0-1.2.5-2.3 1.9-2.3 1.3 0 1.8 1 1.8 2.3v6h2.9v-6.5c0-2.6-1.3-4.2-3.9-4.2-1.7 0-2.5.9-2.8 1.5V8.6H8.9C8.9 9.4 11 20 11 20Z" />
    </svg>
  );
}

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Equipment", to: "/equipment" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const EQUIPMENT = [
  "Reefer",
  "Flatbed",
  "Dry Van",
  "Power Only",
  "Step Deck",
  "Box Truck",
  "Hot Shot",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-coal">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group flex w-fit items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember text-ink">
                <Container className="h-5.5 w-5.5" strokeWidth={2.4} />
              </span>
              <span className="leading-none">
                <span className="font-display block text-xl tracking-wide text-bone">
                  LOADLINK
                </span>
                <span className="font-mono block pt-1 text-[9px] uppercase tracking-[0.42em] text-ash">
                  Dispatching Co.
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/55">
              Loadlink Dispatching Corporation keeps owner-operators and
              carriers loaded, paid, and stress-free — with dedicated
              coordinators, top-tier broker relationships, and zero upfront
              fees.
            </p>
            <div className="mt-7 flex gap-3">
              {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="https://loadlinkdispatching.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Social link"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-bone/60 transition-all duration-300 hover:border-ember hover:bg-ember hover:text-ink"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
              Company
            </div>
            <ul className="mt-5 space-y-3.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="link-line text-sm text-bone/70 transition-colors hover:text-bone"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
              Equipment we dispatch
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {EQUIPMENT.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-bone/60"
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-ember/25 bg-ember/8 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-flare">
                Our promise
              </div>
              <p className="mt-2 text-sm leading-relaxed text-bone/75">
                No contracts. No hidden fees. We earn only when you earn.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/8 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
            © {new Date().getFullYear()} Loadlink Dispatching Corporation. All
            rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
            Interstate carriers · USA
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/60 transition-colors hover:text-ember"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
