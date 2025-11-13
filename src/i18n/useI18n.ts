// src/i18n/useI18n.ts
import { translations } from "./translations";
import { useLanguageStore, type Language } from "../stores/languageStore";

type TranslationShape = (typeof translations)["en"];

export function useI18n() {
  // read only the language from the store, strongly typed as "en" | "fr"
  const lang: Language = useLanguageStore((state) => state.language);

  // tell TS that indexing translations with "lang" is safe,
  // and that the shape is the same as the "en" object
  const t = translations[lang as keyof typeof translations] as TranslationShape;

  return { t, lang };
}