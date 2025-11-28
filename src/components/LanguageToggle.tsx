// src/components/LanguageToggle.tsx

import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/translator";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const buttonClasses = (code: Lang) => {
    const isActive = lang === code;
    return [
      "px-3 py-1 rounded-full text-xs font-semibold border",
      "transition-all duration-150",
      "shadow-[0_4px_14px_rgba(0,0,0,0.5)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      isActive
        ? "bg-[#E972FF] text-black border-[#E972FF]"
        : "bg-black text-white border-white/30 hover:border-[#E972FF]",
    ].join(" ");
  };

  return (
    <div
      className="inline-flex items-center gap-1 bg-transparent"
      data-no-translate
    >
      <button
        type="button"
        className={buttonClasses("en")}
        onClick={() => {
          if (lang !== "en") setLang("en");
        }}
      >
        EN
      </button>
      <button
        type="button"
        className={buttonClasses("fr")}
        onClick={() => {
          if (lang !== "fr") setLang("fr");
        }}
      >
        FR
      </button>
    </div>
  );
}