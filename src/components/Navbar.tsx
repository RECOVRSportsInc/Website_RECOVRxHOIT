// src/components/Navbar.tsx
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/hoit" : "/";

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

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <BrandSwitch />
        </div>
      </div>
    </header>
  );
}