// src/components/Navbar.tsx
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/hoit" : "/";

  const logoStyle = {
    ...(brand.logoStyle || {}),
    height: (brand.logoStyle?.height as number) || 28,
    ...(brand.key === "recovr"
      ? {
          // white glow behind the RECOVR logo so it shows on black
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.95))",
        }
      : {}),
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-black">
      <div className="container flex items-center justify-between py-3">
        <a href={base} className="no-underline flex items-center">
          {brand.logoSrc ? (
            <img
              src={brand.logoSrc}
              alt={brand.name}
              style={logoStyle}
              className="block"
            />
          ) : (
            <span className="font-extrabold tracking-tight text-white">
              {brand.name}
            </span>
          )}
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {brand.nav
            .filter(
              (item) =>
                item.href !== "#privacy" && item.href !== "#cancellation"
            )
            .map((item) => (
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

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <BrandSwitch />
        </div>
      </div>
    </header>
  );
}