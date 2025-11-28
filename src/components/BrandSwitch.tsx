// src/components/BrandSwitch.tsx

import { useBrand } from "../brand/BrandContext";

export default function BrandSwitch() {
  const { brand } = useBrand();

  const isHoit = brand.key === "hoit";
  const targetHref = isHoit ? "/recovrsports" : "/";
  const label = isHoit ? "Switch to RECOVR" : "Switch to HOIT";

  const baseClasses = [
    "inline-flex items-center justify-center",
    "h-12 px-5 rounded-full",
    "text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap",
    "shadow-[0_12px_30px_rgba(0,0,0,0.8)]",
    "transition-transform duration-150",
    "hover:-translate-y-[1px] hover:shadow-[0_18px_45px_rgba(0,0,0,0.95)]",
    "border border-white/15",
    "backdrop-blur-sm",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
  ].join(" ");

  // On HOIT, button is gold to go to RECOVR
  // On RECOVR, button is baby blue to go to HOIT
  const hoitSideClasses =
    "bg-gradient-to-r from-[#f9d66f] via-[#f3bd3e] to-[#c99321] text-black";
  const recovrSideClasses =
    "bg-gradient-to-r from-[#4cc3ff] via-[#22A1FF] to-[#0b8de8] text-white";

  const classes = `${baseClasses} ${isHoit ? hoitSideClasses : recovrSideClasses}`;

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        window.location.href = targetHref;
      }}
      data-no-translate
    >
      {label}
    </button>
  );
}