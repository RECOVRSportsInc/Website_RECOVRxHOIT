// src/i18n/useI18n.ts

import { create } from "zustand";
import { getLang, setLang as persistLang, type Lang } from "./translator";

type I18nApi = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const useI18nStore = create<I18nApi>((set) => ({
  lang: typeof window === "undefined" ? "en" : getLang(),
  setLang: (lang) => {
    set({ lang });
    persistLang(lang);
  },
}));

export function useI18n() {
  return useI18nStore();
}