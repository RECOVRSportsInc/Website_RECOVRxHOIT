// src/components/LanguageToggle.tsx
import { useI18n } from "../i18n/useI18n";
import type { Lang } from "../i18n/translator";

export default function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const isEn = lang === "en";

  const switchTo = (next: Lang) => {
    if (next === lang) return;
    setLang(next);
  };

  return (
    <div
      className="inline-flex items-center rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold shadow-soft-lg"
      aria-label="Language toggle"
    >
      <button
        type="button"
        className={
          "px-2 py-0.5 rounded-full transition-colors " +
          (isEn ? "bg-black text-white" : "bg-transparent text-black")
        }
        onClick={() => switchTo("en")}
      >
        EN
      </button>
      <span className="px-1 text-black/70">/</span>
      <button
        type="button"
        className={
          "px-2 py-0.5 rounded-full transition-colors " +
          (!isEn ? "bg-black text-white" : "bg-transparent text-black")
        }
        onClick={() => switchTo("fr")}
      >
        FR
      </button>
    </div>
  );
}