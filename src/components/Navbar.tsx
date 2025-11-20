// src/components/Navbar.tsx
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/hoit" : "/";

  // Filter out privacy / cancellation from the nav links
  const navItems = brand.nav.filter(
    (item: any) =>
      item.href !== "#privacy" &&
      item.href !== "#cancellation"
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-black">
      <div className="container flex items-center justify-between py-3">
        {/* Logo block */}
        <a href={base} className="no-underline flex items-center">
          {brand.logoSrc ? (
            brand.key === "recovr" ? (
              // RECOVR: gold pill
              <div className="flex items-center justify-center rounded-full bg-[#f3bd3ed8] shadow-[0_0_18px_rgba(0,0,0,0.7)] h-9 w-28 md:h-9 md:w-36">
                <img
                  src={brand.logoSrc}
                  alt={brand.name}
                  className="block max-h-7 md:max-h-8 w-auto"
                />
              </div>
            ) : brand.key === "hoit" ? (
              // HOIT: blue pill
              <div className="flex items-center justify-center rounded-full bg-[#3db0fcbe] shadow-[0_0_18px_rgba(0,0,0,0.7)] h-9 w-28 md:h-9 md:w-36">
                <img
                  src={brand.logoSrc}
                  alt={brand.name}
                  className="block max-h-7 md:max-h-8 w-auto"
                />
              </div>
            ) : (
              // Fallback plain logo if we ever add more brands
              <img
                src={brand.logoSrc}
                alt={brand.name}
                style={{
                  ...(brand.logoStyle || {}),
                  height: (brand.logoStyle?.height as number) || 28,
                }}
                className="block"
              />
            )
          ) : (
            <span className="font-extrabold tracking-tight text-white">
              {brand.name}
            </span>
          )}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item: any) => (
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

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <BrandSwitch />
        </div>
      </div>
    </header>
  );
}