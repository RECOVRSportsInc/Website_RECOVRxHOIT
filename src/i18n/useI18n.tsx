// src/i18n/useI18n.tsx

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  getStoredLang,
  storeLang,
  translatePage,
  type Lang,
} from "./translator";

type I18nContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => getStoredLang());

  // Ensure DOM matches the stored language
  useEffect(() => {
    translatePage(lang);
  }, [lang]);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    storeLang(next);
    setLangState(next);
    translatePage(next);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return ctx;
}