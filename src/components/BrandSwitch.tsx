// src/components/BrandSwitch.tsx

import { useBrand } from "../brand/BrandContext";

export default function BrandSwitch() {
  const { brand } = useBrand();

  const isHoit = brand.key === "hoit";
  const targetHref = isHoit ? "/" : "/hoit";
  const label = isHoit ? "Switch to RECOVR" : "Switch to HOIT";

  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-lg " +
    "transition-transform duration-150 hover:-translate-y-[1px] hover:shadow-xl " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  // baby blue for “go to RECOVR”, lavender for “go to HOIT”
  const hoitClasses = "bg-[#22A1FF] text-white"; // baby blue
  const recovrClasses = "bg-[#E972FF] text-white"; // lavender

  const classes = baseClasses + " " + (isHoit ? hoitClasses : recovrClasses);

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