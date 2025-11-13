// src/components/Navbar.tsx
import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "../i18n/useI18n";

export default function Navbar() {
  const { brand } = useBrand();
  const { t } = useI18n();
  const base = brand.key === "hoit" ? "/hoit" : "/";

  const isHoit = brand.key === "hoit";

  // define which anchors we show per brand, and lookup their translated labels from t.nav
  const links: { href: string; key: keyof typeof t.nav }[] = isHoit
    ? [
        { href: "#services", key: "services" },
        { href: "#pricing", key: "pricing" },
        { href: "#gallery", key: "gallery" },
        { href: "#privacy", key: "privacy" },
        { href: "#cancellation", key: "cancellation" },
        { href: "#contact", key: "contact" },
      ]
    : [
        { href: "#programs", key: "programs" },
        { href: "#gallery", key: "gallery" },
        { href: "#contact", key: "contact" },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-black">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / brand */}
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((item) => (
            <a
              key={item.href}
              href={`${base}${item.href === "#" ? "" : item.href}`}
              className="text-white/90 hover:text-white no-underline"
            >
              {t.nav[item.key]}
            </a>
          ))}

          <LanguageToggle />
          <BrandSwitch />
        </nav>

        {/* Mobile: language + brand switch */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <BrandSwitch />
        </div>
      </div>
    </header>
  );
}