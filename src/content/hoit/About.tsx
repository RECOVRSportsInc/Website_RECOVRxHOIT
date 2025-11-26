// src/content/hoit/About.tsx

import { HOIT_ABOUT_EN, HOIT_ABOUT_FR } from "./abouttext";
import { useI18n } from "../../i18n/useI18n";

/* ABOUT using separate text file, driven by useI18n and ignored by DOM translator */
export function About() {
  const { lang } = useI18n();
  const aboutText = lang === "fr" ? HOIT_ABOUT_FR : HOIT_ABOUT_EN;

  return (
    <section id="about" className="section bg-[#3db0fc]">
      <div className="container">
        <h2 className="text-3xl font-bold text-black">About Me</h2>
        <div className="glass p-6 text-white leading-relaxed space-y-4">
          {aboutText
            .trim()
            .split(/\n\s*\n/)
            .map((para, idx) => (
              <p key={idx} data-no-translate>
                {para.trim()}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
}