// src/components/LanguageToggle.tsx
import { useLanguageStore, type Language } from "../stores/languageStore";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  const changeLang = (lang: Language) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/30 bg-black/60 overflow-hidden text-xs"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => changeLang("en")}
        className={`px-3 py-1 ${
          language === "en"
            ? "bg-white text-black font-semibold"
            : "text-white/80 hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => changeLang("fr")}
        className={`px-3 py-1 ${
          language === "fr"
            ? "bg-white text-black font-semibold"
            : "text-white/80 hover:bg-white/10"
        }`}
      >
        FR
      </button>
    </div>
  );
}