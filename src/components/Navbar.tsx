import { useBrand } from "../brand/BrandContext";
import BrandSwitch from "./BrandSwitch";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../i18n/useI18n";

export default function Navbar() {
  const { brand } = useBrand();
  const base = brand.key === "hoit" ? "/hoit" : "/";

  const { t } = useI18n();
  const navTexts = (t as any).nav || {};

  // Map hrefs -> translation keys so we do not have to rewrite BrandContext
  function getTranslatedLabel(href: string, fallback: string): string {
    // Normalize just in case: remove base, keep hash part
    const h = href.toLowerCase();

    if (h.endsWith("#services")) return navTexts.services ?? fallback;
    if (h.endsWith("#pricing")) return navTexts.pricing ?? fallback;
    if (h.endsWith("#gallery")) return navTexts.gallery ?? fallback;
    if (h.endsWith("#privacy")) return navTexts.privacy ?? fallback;
    if (h.endsWith("#cancellation")) return navTexts.cancellation ?? fallback;
    if (h.endsWith("#contact")) return navTexts.contact ?? fallback;
    if (h.endsWith("#programs")) return navTexts.programs ?? fallback;

    // If we ever add more keys to translations.nav, we can extend here

    return fallback;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-black">
      <div className="container flex items-center justify-between py-3">
        {/* Logo / brand name */}
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
          {brand.nav.map((item) => {
            const href = `${base}${item.href === "#" ? "" : item.href}`;
            const label = getTranslatedLabel(item.href, item.label);
            return (
              <a
                key={item.href}
                href={href}
                className="text-white/90 hover:text-white no-underline"
              >
                {label}
              </a>
            );
          })}

          {/* Language toggle */}
          <LanguageSwitcher />

          {/* Brand switch (HOIT <-> RECOVR) */}
          <BrandSwitch />
        </nav>

        {/* Mobile: language + brand switch side by side */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <BrandSwitch />
        </div>
      </div>
    </header>
  );
}