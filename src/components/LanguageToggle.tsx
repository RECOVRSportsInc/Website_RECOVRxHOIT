// src/components/LanguageToggle.tsx

import { useState, useEffect } from "react";
import { getLang, setLang as storeLang, translatePage, type Lang } from "../i18n/translator";

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("en");

  // On mount, sync with localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(getLang());
    }
  }, []);

  const isFr = lang === "fr";

  const handleClick = () => {
    const next: Lang = isFr ? "en" : "fr";

    // update component state
    setLang(next);
    // remember choice in localStorage
    storeLang(next);

    if (next === "fr") {
      // English → French: translate DOM in place
      translatePage("fr");
    } else {
      // French → English: reload original English React content
      window.location.reload();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold
                 border border-amber-300 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500
                 text-slate-900 shadow-md hover:brightness-110"
    >
      <span className={!isFr ? "font-bold" : "opacity-70"}>EN</span>
      <span className="mx-1 opacity-70">/</span>
      <span className={isFr ? "font-bold" : "opacity-70"}>FR</span>
    </button>
  );
}