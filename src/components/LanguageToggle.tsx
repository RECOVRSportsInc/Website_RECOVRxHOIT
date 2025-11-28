// src/components/LanguageToggle.tsx

import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/translator";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const buttonClasses = (code: Lang) => {
    const isActive = lang === code;
    return [
      "px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold border",
      "transition-colors duration-150",
      "shadow-[0_0_18px_rgba(0,0,0,0.8)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      isActive
        ? "bg-[#E972FF] text-black border-[#E972FF] shadow-[0_0_32px_rgba(233,114,255,0.9)]"
        : "bg-black/85 text-white border-[#E972FF] hover:bg-black",
    ].join(" ");
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full bg-black/70 px-1 py-1 border border-white/10 shadow-[0_0_24px_rgba(0,0,0,0.8)]"
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