// src/components/LanguageSwitcher.tsx
import { useI18n } from "../i18n/useI18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  const isEn = lang === "en";

  return (
    <div className="flex items-center">
      <div className="inline-flex items-center rounded-full border border-white/60 bg-black/60 px-1 py-0.5 text-xs">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={
            "px-2 py-1 rounded-full transition-colors " +
            (isEn
              ? "bg-yellow-400 text-black font-semibold"
              : "text-white/80 hover:text-white")
          }
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang("fr")}
          className={
            "px-2 py-1 rounded-full transition-colors " +
            (!isEn
              ? "bg-yellow-400 text-black font-semibold"
              : "text-white/80 hover:text-white")
          }
        >
          FR
        </button>
      </div>
    </div>
  );
}