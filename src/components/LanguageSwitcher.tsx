// src/components/LanguageSwitcher.tsx
import React from "react";
import { applyFrench, restoreEnglish } from "../i18n/translator";

export default function LanguageSwitcher() {
  const [lang, setLang] = React.useState<"en" | "fr">(
    (localStorage.getItem("lang") as "en" | "fr") || "en"
  );

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      if (lang === "fr") {
        await applyFrench();
      } else {
        restoreEnglish();
      }
      if (mounted) localStorage.setItem("lang", lang);
    })();
    return () => {
      mounted = false;
    };
  }, [lang]);

  return (
    <button
      type="button"
      className="btn btn-outline"
      onClick={() => setLang((l) => (l === "en" ? "fr" : "en"))}
      aria-label="Switch language"
      title="Switch language"
      data-no-translate
    >
      {lang === "en" ? "Français" : "English"}
    </button>
  );
}
