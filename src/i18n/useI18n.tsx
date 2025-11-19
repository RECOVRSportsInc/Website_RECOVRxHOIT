// src/i18n/useI18n.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getStoredLang,
  storeLang,
  translatePage,
  type Lang,
} from "./translator";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => getStoredLang());

  // apply translation whenever lang changes
  useEffect(() => {
    translatePage(lang);
  }, [lang]);

  const setLang = (next: Lang) => {
    if (next === lang) return;
    storeLang(next);
    setLangState(next);
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
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}