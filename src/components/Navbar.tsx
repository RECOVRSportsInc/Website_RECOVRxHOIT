// src/components/Navbar.tsx

import { useState, useEffect } from "react";
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/" : "/recovrsports";

  const [open, setOpen] = useState(false);

  // close mobile menu on navigation
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-black">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a href={base} className="no-underline flex items-center">
          <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
            <img
              src={brand.logoSrc}
              alt={brand.name}
              className="h-8 md:h-9 w-auto"
              data-no-translate
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/90 hover:text-brand-accent no-underline text-sm font-medium"
            >
              {item.label}
            </a>
          ))}

          <LanguageSwitcher />
          <BrandSwitch />
        </nav>

        {/* Mobile Right Section */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/40 border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            aria-label="Toggle menu"
          >
            <div
              className={`
                relative w-6 h-5 transition-all
                ${open ? "rotate-90" : ""}
              `}
            >
              <span
                className={`
                  absolute block h-0.5 w-full bg-white rounded transition-all
                  ${open ? "top-2.5 rotate-45" : "top-0"}
                `}
              />
              <span
                className={`
                  absolute block h-0.5 w-full bg-white rounded transition-all
                  ${open ? "opacity-0" : "top-2.5"}
                `}
              />
              <span
                className={`
                  absolute block h-0.5 w-full bg-white rounded transition-all
                  ${open ? "top-2.5 -rotate-45" : "bottom-0"}
                `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="block text-white/90 text-lg font-medium no-underline py-1"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Language + brand switch inside mobile menu */}
          <div className="pt-3 border-t border-white/10">
            <LanguageSwitcher />
          </div>

          <div className="pt-4 pb-2">
            <BrandSwitch />
          </div>
        </div>
      )}
    </header>
  );
}