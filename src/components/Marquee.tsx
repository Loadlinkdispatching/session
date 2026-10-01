import { Truck } from "lucide-react";
import { cn } from "../utils/cn";

const ITEMS = [
  "Reefer",
  "Flatbed",
  "Dry Van",
  "Power Only",
  "Step Deck",
  "Box Truck",
  "Hot Shot",
  "Rate Negotiation",
  "Paperwork Handled",
  "24/7 Support",
];

export default function Marquee({
  reverse = false,
  ember = false,
  className,
}: {
  reverse?: boolean;
  ember?: boolean;
  className?: string;
}) {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className={cn(
        "mask-fade-x relative overflow-hidden border-y py-5",
        ember ? "border-ember/40 bg-ember" : "border-white/8 bg-coal",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-10 pr-10",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={cn(
                "font-display text-2xl uppercase tracking-wide md:text-3xl",
                ember
                  ? "text-ink"
                  : i % 2 === 0
                    ? "text-bone/85"
                    : "text-outline"
              )}
            >
              {item}
            </span>
            <Truck
              className={cn(
                "h-5 w-5 shrink-0",
                ember ? "text-ink/60" : "text-ember/70"
              )}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
