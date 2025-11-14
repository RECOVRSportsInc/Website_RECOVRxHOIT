// src/components/BrandSwitch.tsx

import { useBrand } from "../brand/BrandContext";
import LanguageToggle from "./LanguageToggle";

export default function BrandSwitch() {
  const { brand } = useBrand();
  const isHoit = brand.key === "hoit";

  // solid colors for both directions:
  // - HOIT view → blue "Switch to RECOVR"
  // - RECOVR view → lavender "Switch to HOIT"
  const buttonClasses = isHoit
    ? "btn text-xs md:text-sm bg-[#2B7FB9] text-white shadow-sm hover:brightness-110"
    : "btn text-xs md:text-sm bg-[#8B5CF6] text-white shadow-sm hover:brightness-110";

  const handleClick = () => {
    if (isHoit) {
      // from HOIT → go to RECOVR root
      window.location.href = "/";
    } else {
      // from RECOVR → go to HOIT
      window.location.href = "/hoit";
    }
  };

  return (
    <div className="flex items-center gap-3">
      <LanguageToggle />
      <button
        type="button"
        onClick={handleClick}
        className={buttonClasses}
      >
        {isHoit ? "Switch to RECOVR" : "Switch to HOIT"}
      </button>
    </div>
  );
}