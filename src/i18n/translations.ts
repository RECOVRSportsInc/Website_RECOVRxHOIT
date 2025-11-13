// src/i18n/translations.ts
import type { Language } from "../stores/languageStore";

export const translations = {
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      gallery: "Photo Gallery",
      privacy: "Privacy Policy",
      cancellation: "Cancellation Policy",
      contact: "Contact",
      programs: "Programs",
    },
    common: {
      bookSession: "Book A Session",
      viewServices: "View Services",
      explorePrograms: "Explore Programs",
      here: "here",
    },
    hoit: {
      heroTitle: "Hands On Integrative Therapy",
      heroTagline: "Athletic therapy and massage therapy services for all ages.",
    },
    recovr: {
      heroTitle: "RECOVR Sports",
      heroTagline:
        "High performance training and recovery for athletes and active people.",
    },
  },
  fr: {
    nav: {
      services: "Services",
      pricing: "Tarifs",
      gallery: "Galerie photo",
      privacy: "Politique de confidentialité",
      cancellation: "Politique d’annulation",
      contact: "Contact",
      programs: "Programmes",
    },
    common: {
      bookSession: "Réserver une séance",
      viewServices: "Voir les services",
      explorePrograms: "Voir les programmes",
      here: "ici",
    },
    hoit: {
      heroTitle: "Hands On Integrative Therapy",
      heroTagline:
        "Services de thérapie du sport et de massothérapie pour tous les âges.",
    },
    recovr: {
      heroTitle: "RECOVR Sports",
      heroTagline:
        "Entraînement et récupération de haute performance pour athlètes et personnes actives.",
    },
  },
} as const;

export type Translations = typeof translations;
export type TranslationLanguage = Language;