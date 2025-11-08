import React, { useEffect, useState } from "react";
import { translatePage, getLang, setLang } from "../i18n/translator";

const LANGS = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function LanguageSwitcher() {
  const [lang, setLangState] = useState(getLang());

  useEffect(() => {
    // translate immediately on mount to the last chosen language
    translatePage(lang);
  }, []);

  const onChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value as "en" | "fr";
    setLang(next);
    setLangState(next);
    await translatePage(next);
  };

  return (
    <label className="inline-flex items-center gap-2 text-white" data-no-translate>
      <span className="sr-only">Language</span>
      <select
        value={lang}
        onChange={onChange}
        className="bg-black text-white border border-white/30 rounded-md px-2 py-1 focus:outline-none"
        aria-label="Language"
      >
        {LANGS.map(l => (
          <option key={l.code} value={l.code} className="text-black">
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}
