// src/stores/languageStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "fr";

export type LanguageStore = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist<LanguageStore>(
    (set) => ({
      language: "en",
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: "language-storage",
    }
  )
);