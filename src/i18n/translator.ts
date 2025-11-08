// src/i18n/translator.ts
// Lightweight client-side translator with currency/email preservation

const STORAGE_KEY = "site_lang";

// simple language getters
export function getLang(): "en" | "fr" {
  const v = (localStorage.getItem(STORAGE_KEY) || "en").toLowerCase();
  return v === "fr" ? "fr" : "en";
}
export function setLang(l: "en" | "fr") {
  localStorage.setItem(STORAGE_KEY, l);
}

// nodes to skip entirely
function shouldSkip(el: Element): boolean {
  // do not translate anything carrying this attribute
  if (el.hasAttribute("data-no-translate")) return true;

  // inputs, code blocks, preformatted, anchor hrefs, logo images etc
  const tag = el.tagName.toLowerCase();
  if (["code", "pre", "script", "style"].includes(tag)) return true;

  return false;
}

// very small dictionary base (you can expand later)
const DICT: Record<string, Record<string, string>> = {
  en: {},
  fr: {},
};

// naive phrase translation (can later hook to an API or improve dictionaries)
function translateText(text: string, to: "en" | "fr") {
  if (to === "en") return text; // original content is English

  // minimal replacements; you can expand
  let out = text
    .replace(/\bServices\b/g, "Services")
    .replace(/\bPricing\b/g, "Tarifs")
    .replace(/\bPrograms\b/g, "Programmes")
    .replace(/\bPhoto Gallery\b/g, "Galerie photo")
    .replace(/\bAbout Me\b/g, "À propos")
    .replace(/\bContact\b/g, "Contact")
    .replace(/\bBook A Session\b/gi, "Réserver une séance")
    .replace(/\bView Services\b/gi, "Voir les services")
    .replace(/\bExplore Programs\b/gi, "Explorer les programmes")
    .replace(/\bPrivacy Policy\b/gi, "Politique de confidentialité")
    .replace(/\bCancellation Policy\b/gi, "Politique d’annulation")
    .replace(/\bour contact form\b/gi, "notre formulaire de contact");

  // post-fix currency: if any £ slipped in, restore $
  out = out.replace(/£/g, "$");

  return out;
}

// translate DOM nodes in-place
function walkAndTranslate(root: Element, to: "en" | "fr") {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (shouldSkip(parent)) return NodeFilter.FILTER_REJECT;
      // skip email addresses and urls
      if (/@|https?:\/\//.test(node.nodeValue || "")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  nodes.forEach(t => {
    if (!t.nodeValue) return;
    t.nodeValue = translateText(t.nodeValue, to);
  });
}

export async function translatePage(to: "en" | "fr") {
  const root = document.body;
  if (!root) return;
  walkAndTranslate(root, to);
}
