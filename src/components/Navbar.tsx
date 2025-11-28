// src/components/Navbar.tsx

import { useState, useEffect } from "react";
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const [isOpen, setIsOpen] = useState(false);

  // HOIT lives at "/", RECOVR lives at "/recovrsports"
  const base = brand.key === "hoit" ? "/" : "/recovrsports";

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 text-white border-b border-white/10 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href={base}
          className="no-underline flex items-center gap-2"
          onClick={closeMenu}
        >
          <div className="rounded-2xl bg-white/5 border border-white/15 px-2.5 py-1 shadow-[0_0_28px_rgba(0,0,0,0.7)]">
            {brand.logoSrc ? (
              <img
                src={brand.logoSrc}
                alt={brand.name}
                className="block h-6 md:h-7 w-auto"
                style={brand.logoStyle || {}}
              />
            ) : (
              <span className="font-extrabold tracking-tight text-white text-sm md:text-base">
                {brand.name}
              </span>
            )}
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/85 hover:text-[#f3bd3e] no-underline text-sm font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <BrandSwitch />
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            className={[
              "relative w-10 h-10 rounded-full",
              "bg-white/5 border border-white/20",
              "shadow-[0_0_24px_rgba(0,0,0,0.7)]",
              "flex items-center justify-center",
              "transition-transform duration-150 hover:-translate-y-[1px]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
            ].join(" ")}
          >
            <div className="relative w-5 h-5">
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] rounded-full bg-white",
                  "transition-transform duration-150",
                  isOpen ? "top-1/2 rotate-45" : "top-[4px] rotate-0",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] rounded-full bg-white",
                  "transition-opacity duration-150",
                  isOpen ? "opacity-0" : "top-1/2 -translate-y-1/2 opacity-80",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] rounded-full bg-white",
                  "transition-transform duration-150",
                  isOpen ? "top-1/2 -rotate-45" : "bottom-[4px] rotate-0",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <nav className="container py-4 flex flex-col gap-3">
            {brand.nav.map((item) => (
              <a
                key={item.href}
                href={`${base}${item.href === "#" ? "" : item.href}`}
                className="block py-2 text-sm font-semibold text-white/90 no-underline border-b border-white/10 last:border-b-0"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/15 flex items-center justify-between">
              <span className="text-xs text-white/50" data-no-translate>
                Brand
              </span>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  const isHoit = brand.key === "hoit";
                  const targetHref = isHoit ? "/recovrsports" : "/";
                  window.location.href = targetHref;
                }}
                className={[
                  "inline-flex items-center justify-center h-10 rounded-full px-4 text-xs font-bold",
                  "shadow-[0_0_25px_rgba(0,0,0,0.6)]",
                  "transition-transform duration-150 hover:-translate-y-[1px] hover:shadow-[0_0_40px_rgba(0,0,0,0.8)]",
                  brand.key === "hoit"
                    ? "bg-[#f3bd3e] text-black"
                    : "bg-[#22A1FF] text-white",
                ].join(" ")}
                data-no-translate
              >
                {brand.key === "hoit" ? "Switch to RECOVR" : "Switch to HOIT"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}