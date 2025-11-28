// src/components/BrandSwitch.tsx

import { useBrand } from "../brand/BrandContext";

type Props = {
  onClick?: () => void;
};

export default function BrandSwitch({ onClick }: Props) {
  const { brand } = useBrand();

  const isHoit = brand.key === "hoit";
  const targetHref = isHoit ? "/recovrsports" : "/"; // HOIT -> RECOVR, RECOVR -> HOIT
  const label = isHoit ? "Switch to RECOVR" : "Switch to HOIT";

  const baseClasses =
    "inline-flex items-center justify-center h-10 rounded-full px-4 text-xs sm:text-sm font-bold " +
    "shadow-[0_12px_30px_rgba(0,0,0,0.5)] " +
    "transition-transform duration-150 hover:-translate-y-[1px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.8)] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black whitespace-nowrap";

  // HOIT view shows "Switch to RECOVR" in gold, RECOVR view shows "Switch to HOIT" in baby blue
  const hoitClasses = "bg-[#f3bd3e] text-black"; // when on HOIT
  const recovrClasses = "bg-[#22A1FF] text-black"; // when on RECOVR

  const classes = baseClasses + " " + (isHoit ? hoitClasses : recovrClasses);

  const handleClick = () => {
    if (onClick) onClick();
    window.location.href = targetHref;
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={handleClick}
      data-no-translate
    >
      {label}
    </button>
  );
}