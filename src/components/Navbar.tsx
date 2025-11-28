// src/components/Navbar.tsx
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/hoit" : "/";

  const isRecovr = brand.key === "recovr";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-black">
      <div className="container py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        {/* Top row: logo + toggles */}
        <div className="flex items-center justify-between gap-4">
          <a href={base} className="no-underline flex items-center">
            {brand.logoSrc ? (
              <div
                className={[
                  "flex items-center justify-center rounded-full",
                  "shadow-[0_0_18px_rgba(0,0,0,0.7)]",
                  // HOIT = blue, RECOVR = gold
                  isRecovr ? "bg-[#f3bd3e]" : "bg-[#22A1FF]",
                  "h-9 w-28 md:h-10 md:w-36",
                ].join(" ")}
              >
                <img
                  src={brand.logoSrc}
                  alt={brand.name}
                  className="block max-h-7 md:max-h-8 w-auto"
                />
              </div>
            ) : (
              <span className="font-extrabold tracking-tight text-white">
                {brand.name}
              </span>
            )}
          </a>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <BrandSwitch />
          </div>
        </div>

        {/* Nav row: visible on mobile and desktop */}
        <nav className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm font-medium">
          {brand.nav.map((item: { href: string; label: string }) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/90 hover:text-recovr-gold no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}