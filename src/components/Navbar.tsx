// src/components/Navbar.tsx

import { useEffect, useState } from "react";
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();

  // HOIT lives at "/", RECOVR lives at "/recovrsports"
  const base = brand.key === "hoit" ? "/" : "/recovrsports";

  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const goingDown = currentY > lastY + 5;
      const goingUp = currentY < lastY - 5;

      // If menu is open, keep navbar visible
      if (!menuOpen) {
        if (goingDown) setHidden(true);
        if (goingUp) setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Helper to close menu when clicking a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "bg-black/90 backdrop-blur-md text-white border-b border-black",
        "transition-transform duration-200",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href={base} className="no-underline flex items-center">
          {brand.logoSrc ? (
            <img
              src={brand.logoSrc}
              alt={brand.name}
              className="block h-7 md:h-8 w-auto"
              data-no-translate
            />
          ) : (
            <span className="font-extrabold tracking-tight text-white">
              {brand.name}
            </span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/90 hover:text-[#f3bd3e] no-underline text-sm font-medium"
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
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={[
              "inline-flex items-center justify-center",
              "h-10 w-10 rounded-full border border-white/15 bg-black/70",
              "shadow-[0_0_18px_rgba(0,0,0,0.7)]",
              "transition-transform duration-150",
              menuOpen ? "scale-95" : "hover:scale-105",
            ].join(" ")}
            data-no-translate
          >
            <span className="relative block w-5 h-5">
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] rounded-full bg-white",
                  "transition-transform duration-200 origin-center",
                  menuOpen ? "top-1/2 rotate-45" : "top-[4px]",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] rounded-full bg-white",
                  "transition-all duration-200",
                  menuOpen ? "opacity-0 translate-x-2" : "top-1/2",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 right-0 h-[2px] rounded-full bg-white",
                  "transition-transform duration-200 origin-center",
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-[4px]",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95">
          <div className="container py-3 space-y-2">
            {brand.nav.map((item) => (
              <a
                key={item.href}
                href={`${base}${item.href === "#" ? "" : item.href}`}
                className="block px-1 py-2 text-sm text-white/90 hover:text-[#f3bd3e] no-underline"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2 flex items-center justify-between gap-3">
              <BrandSwitch onClick={handleNavClick} />
              {/* Language toggle already visible in top-right, so omit here */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}