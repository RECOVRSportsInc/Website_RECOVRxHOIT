// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/" : "/recovrsports";
  const isRecovr = brand.key === "recovr";

  const [open, setOpen] = useState(false);

  // close menu when navigating
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
              className="block max-h-7 md:max-h-8 w-auto"
              data-no-translate
            />
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

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <BrandSwitch />

          <button
            className="p-2 rounded-full bg-black/40 border border-white/10 shadow-md"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              onClick={() => setOpen(false)}
              className="block text-white text-lg font-medium no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}