// src/i18n/useI18n.ts
import { useLanguageStore } from "../stores/languageStore";
import { translations } from "./translations";

export type AppLanguage = "en" | "fr";

/**
 * Simple i18n hook used across the site.
 * - lang: "en" | "fr"
 * - t: translations for the current language
 * - setLang: change language
 */
export function useI18n() {
  const { language, setLanguage } = useLanguageStore();

  const lang: AppLanguage = language;
  const t = translations[lang];

  return {
    lang,
    t,
    setLang: setLanguage,
  };
}

export type UseI18nReturn = ReturnType<typeof useI18n>;