// src/stores/languageStore.ts

import { useI18n } from "../i18n/useI18n";

export function useLanguageStore() {
  const { lang, setLang } = useI18n();

  return {
    language: lang,
    setLanguage: (next: "en" | "fr") => setLang(next),
  };
}