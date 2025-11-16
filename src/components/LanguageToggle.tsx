// src/components/LanguageToggle.tsx
import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/translator";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const handleClick = (next: Lang) => {
    if (next === lang) return; // do nothing if already selected
    setLang(next);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-amber-400 bg-black px-3 py-1 text-xs font-semibold shadow-sm">
      <button
        type="button"
        onClick={() => handleClick("en")}
        className={
          "px-2 rounded-full transition-colors " +
          (lang === "en" ? "text-amber-400" : "text-white")
        }
      >
        EN
      </button>
      <span className="px-1 text-white/60">/</span>
      <button
        type="button"
        onClick={() => handleClick("fr")}
        className={
          "px-2 rounded-full transition-colors " +
          (lang === "fr" ? "text-amber-400" : "text-white")
        }
      >
        FR
      </button>
    </div>
  );
}