// src/i18n/useI18n.ts
import { useLanguageStore } from "../stores/languageStore";
import { translations } from "./translations";

export type SupportedLang = keyof typeof translations;
export type AppTranslations = (typeof translations)[SupportedLang];

// Make sure we only ever use "en" or "fr" at runtime
function normalizeLang(language: string | undefined): SupportedLang {
  if (language === "fr") return "fr";
  return "en";
}

export function useI18n() {
  const { language, setLanguage } = useLanguageStore();

  const lang = normalizeLang(language);
  const t = translations[lang];

  return {
    lang,
    t,
    setLang: setLanguage,
  };
}

export type UseI18nReturn = ReturnType<typeof useI18n>;