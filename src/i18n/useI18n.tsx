// src/i18n/useI18n.tsx
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { getLang, saveLang, translatePage, type Lang } from "./translator";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => getLang());

  useEffect(() => {
    translatePage(lang);
    saveLang(lang);
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState((prev) => (prev === next ? prev : next));
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