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
      explorePrograms: "Explore Programs",
    },
    common: {
      bookSession: "Book A Session",
      viewServices: "View Services",
      here: "here",
      languageName: "English",
      frenchName: "Français",
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
      explorePrograms: "Voir les programmes",
    },
    common: {
      bookSession: "Réserver une séance",
      viewServices: "Voir les services",
      here: "ici",
      languageName: "English",
      frenchName: "Français",
    },
  },
} as const;

export type Translations = typeof translations;
export type TranslationLanguage = Language;