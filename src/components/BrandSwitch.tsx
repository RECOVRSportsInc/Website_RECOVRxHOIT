// src/components/BrandSwitch.tsx

import type React from "react";
import { useBrand } from "../brand/BrandContext";
import LanguageToggle from "./LanguageToggle";

export default function BrandSwitch() {
  const { brand } = useBrand();

  const isHoit = brand.key === "hoit";
  const targetHref = isHoit ? "/" : "/hoit";
  const label = isHoit ? "Switch to RECOVR" : "Switch to HOIT";

  // RECOVR blue and HOIT lavender
  const pillStyle: React.CSSProperties = {
    backgroundColor: isHoit ? "#2B99FF" : "#E26AFF",
    boxShadow: `0 0 24px ${isHoit ? "#2B99FF80" : "#E26AFF80"}`,
  };

  return (
    <div className="flex items-center gap-4">
      {/* EN / FR toggle */}
      <LanguageToggle />

      {/* Brand switch pill */}
      <a
        href={targetHref}
        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:shadow-xl"
        style={pillStyle}
      >
        {label}
      </a>
    </div>
  );
}