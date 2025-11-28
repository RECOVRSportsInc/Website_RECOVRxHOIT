// src/components/BackToTop.tsx

import { useEffect, useState } from "react";
import { useBrand } from "../brand/BrandContext";

export default function BackToTop() {
  const { brand } = useBrand();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const bgColor = brand.key === "hoit" ? "#22A1FF" : "#f3bd3e";

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={[
        "fixed z-40",
        "bottom-5 right-4 sm:bottom-6 sm:right-6",
        "h-11 w-11 sm:h-12 sm:w-12 rounded-full",
        "flex items-center justify-center",
        "shadow-[0_16px_40px_rgba(0,0,0,0.75)]",
        "border border-white/25",
        "transition-transform duration-150",
        "hover:-translate-y-[2px]",
      ].join(" ")}
      style={{ backgroundColor: bgColor }}
      data-no-translate
    >
      <span className="text-black text-lg leading-none">↑</span>
    </button>
  );
}