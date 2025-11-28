// src/components/Navbar.tsx

import { useState } from "react";
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const [open, setOpen] = useState(false);

  const isHoit = brand.key === "hoit";
  const base = isHoit ? "/" : "/recovrsports";

  // Logo wrapper: fixed pill height so HOIT and RECOVR match
  const logoWrapperClasses = [
    "flex items-center justify-center",
    "h-10 md:h-11", // consistent pill height
    "rounded-full px-4",
    "bg-black/80 border border-white/10 backdrop-blur-md",
  ].join(" ");

  // Use brand.logoStyle but ignore any height so Tailwind height wins
  const rawLogoStyle = brand.logoStyle || {};
  const { height: _ignoreHeight, ...logoStyle } = rawLogoStyle;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 text-white border-b border-black/80 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href={base} className="no-underline flex items-center">
          <div className={logoWrapperClasses}>
            {brand.logoSrc ? (
              <img
                src={brand.logoSrc}
                alt={brand.name}
                // Same logo height for both brands
                className="block max-h-6 md:max-h-7 w-auto"
                style={logoStyle}
              />
            ) : (
              <span className="font-extrabold tracking-tight text-white">
                {brand.name}
              </span>
            )}
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/90 hover:text-recovr-gold no-underline text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <BrandSwitch />
        </nav>

        {/* Mobile right side: language + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={[
              "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
              "bg-black/80 border border-white/10",
              "shadow-[0_0_24px_rgba(0,0,0,0.8)]",
              "transition-transform duration-150 hover:-translate-y-[1px]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
            ].join(" ")}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-[4px]">
              <span className="h-[2px] w-5 rounded-full bg-gradient-to-r from-white via-white/80 to-white/60" />
              <span className="h-[2px] w-5 rounded-full bg-gradient-to-r from-white via-white/80 to-white/60" />
              <span className="h-[2px] w-5 rounded-full bg-gradient-to-r from-white via-white/80 to-white/60" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={[
          "md:hidden overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none",
          "transition-all duration-200 ease-out",
        ].join(" ")}
      >
        <div className="container py-3 space-y-2">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="block py-2 text-sm text-white/90 hover:text-recovr-gold no-underline"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <BrandSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}