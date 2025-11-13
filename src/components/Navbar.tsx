import React, { useEffect, useMemo, useRef, useState } from "react";
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import { useLanguageStore } from "../stores/languageStore";
import { useI18n } from "../i18n/useI18n";

// Map the hard coded labels inside BrandContext to translation keys
const EN_TO_KEY: Record<
  string,
  keyof ReturnType<typeof useI18n>["t"]["nav"] | undefined
> = {
  Services: "services",
  Pricing: "pricing",
  "Photo gallery": "gallery",
  "Photo Gallery": "gallery",
  "Privacy Policy": "privacy",
  "Cancellation Policy": "cancellation",
  Contact: "contact",
  Programs: "programs",
  "Explore Programs": "explorePrograms",
};

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/hoit" : "/";
  const { t } = useI18n();

  // language dropdown
  const { language, setLanguage } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const currentLangLabel =
    language === "en" ? t.common.languageName : t.common.frenchName;

  // translate the visible nav labels without changing BrandContext
  const translatedNav = useMemo(() => {
    return brand.nav.map((item) => {
      const key = EN_TO_KEY[item.label];
      const label = key ? t.nav[key] : item.label;
      return { ...item, _label: label };
    });
  }, [brand.nav, t]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-black">
      <div className="container flex items-center justify-between py-3">
        <a href={base} className="no-underline flex items-center">
          {brand.logoSrc ? (
            <img
              src={brand.logoSrc}
              alt={brand.name}
              style={{
                ...(brand.logoStyle || {}),
                height: (brand.logoStyle?.height as number) || 28,
              }}
              className="block"
            />
          ) : (
            <span className="font-extrabold tracking-tight text-white">
              {brand.name}
            </span>
          )}
        </a>

        {/* desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {translatedNav.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/90 hover:text-white no-underline"
            >
              {item._label}
            </a>
          ))}

          {/* language dropdown */}
          <div className="relative" ref={ref}>
            <button
              className="px-3 py-1 rounded-md border border-white/20 text-white hover:bg-white/10"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {currentLangLabel}
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-40 rounded-md bg-black border border-white/20 shadow-lg"
              >
                <li
                  role="option"
                  aria-selected={language === "en"}
                  className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white"
                  onClick={() => {
                    setLanguage("en");
                    setOpen(false);
                  }}
                >
                  English
                </li>
                <li
                  role="option"
                  aria-selected={language === "fr"}
                  className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white"
                  onClick={() => {
                    setLanguage("fr");
                    setOpen(false);
                  }}
                >
                  Français
                </li>
              </ul>
            )}
          </div>

          <BrandSwitch />
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-2">
          <div className="relative" ref={ref}>
            <button
              className="px-2 py-1 rounded-md border border-white/20 text-white"
              onClick={() => setOpen((v) => !v)}
            >
              {language === "en" ? "EN" : "FR"}
            </button>
            {open && (
              <ul className="absolute right-0 mt-2 w-36 rounded-md bg-black border border-white/20 shadow-lg">
                <li
                  className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white"
                  onClick={() => {
                    setLanguage("en");
                    setOpen(false);
                  }}
                >
                  English
                </li>
                <li
                  className="px-3 py-2 hover:bg-white/10 cursor-pointer text-white"
                  onClick={() => {
                    setLanguage("fr");
                    setOpen(false);
                  }}
                >
                  Français
                </li>
              </ul>
            )}
          </div>
          <BrandSwitch />
        </div>
      </div>
    </header>
  );
}