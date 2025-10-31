import React from "react";
import { useBrand } from "../brand/BrandContext";

/**
 * BrandSwitch
 * When viewing HOIT, the button goes to /recovrsports.
 * When viewing RECOVR, the button goes to /hoit.
 * Uses the current domain automatically.
 */
export default function BrandSwitch() {
  const { brand } = useBrand();
  const isHoit = brand.key === "hoit";

  const origin =
    typeof window !== "undefined" ? window.location.origin : "";

  const href = isHoit ? `${origin}/recovrsports` : `${origin}/hoit`;
  const label = isHoit ? "Switch to RECOVR" : "Switch to HOIT";

  // keep your existing button styles
  const className = isHoit ? "btn btn-lavender" : "btn btn-gold";

  return (
    <a href={href} className={className} aria-label={label} title={label}>
      {label}
    </a>
  );
}
