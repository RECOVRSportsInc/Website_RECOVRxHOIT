// src/components/LanguageToggle.tsx

import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/translator";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const buttonClasses = (code: Lang) => {
    const isActive = lang === code;
    return [
      "px-3 py-1 rounded-full text-xs font-semibold border",
      "transition-colors duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
      isActive
        ? "bg-[#f3bd3e] text-black border-[#f3bd3e]"
        : "bg-black text-white border-[#f3bd3e]",
    ].join(" ");
  };

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[#f3bd3e] bg-black px-1 py-1"
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