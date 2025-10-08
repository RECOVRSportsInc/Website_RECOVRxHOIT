import React from "react";
import { useBrand } from "../brand/BrandContext";

export default function BrandSwitch() {
  const { brand, setBrandPath } = useBrand();
  const other: "recovr" | "hoit" = brand.key === "recovr" ? "hoit" : "recovr";
  const label = other === "hoit" ? "Switch to HOIT" : "Switch to RECOVR";
  const className = brand.key === "recovr" ? "btn btn-primary" : "btn btn-lavender";
  return (
    <button onClick={() => setBrandPath(other)} className={className} aria-label={label} title={label}>
      {label}
    </button>
  );
}
