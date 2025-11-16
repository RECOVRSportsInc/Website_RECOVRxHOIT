// src/i18n/translator.ts
// DOM-based translator with localStorage persistence. No React here.

export type Lang = "en" | "fr";

const STORAGE_KEY = "site_lang";

/** Read saved language (default en). */
export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "fr" ? "fr" : "en";
}

/** Persist language choice. */
export function saveLang(lang: Lang) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, lang);
}

/** Should this element be skipped entirely from translation. */
function shouldSkip(el: Element): boolean {
  if (el.hasAttribute("data-no-translate")) return true;

  const tag = el.tagName.toLowerCase();
  if (tag === "script" || tag === "style" || tag === "code" || tag === "pre") {
    return true;
  }

  return false;
}

/** Text replacement rules. All special phrases live here. */
function translateText(text: string, lang: Lang): string {
  // Always fix stray pound symbols back to dollars
  if (lang === "en") {
    return text.replace(/£/g, "$");
  }

  let out = text;

  // ---------- SHARED / NAV / BUTTONS ----------
  out = out.replace(/\bServices\b/g, "Services");
  out = out.replace(/\bPricing\b/g, "Tarifs");
  out = out.replace(/\bPhoto Gallery\b/g, "Galerie photo");
  out = out.replace(/\bContact\b/g, "Contact");
  out = out.replace(/\bPrograms\b/g, "Programmes");
  out = out.replace(/\bAbout Me\b/g, "À propos de moi");
  out = out.replace(/\bView Services\b/g, "Voir les services");
  out = out.replace(/\bBook A Session\b/gi, "Réserver une séance");
  out = out.replace(/\bExplore Programs\b/gi, "Explorer les programmes");
  out = out.replace(/\bour contact form\b/gi, "notre formulaire de contact");

  // ---------- HOIT HERO ----------
  out = out.replace(
    /Athletic therapy and massage therapy services for all ages with an integrative, hands on approach to recovery and performance\./g,
    "Services de thérapie sportive et de massothérapie pour tous les âges, avec une approche pratique et intégrée de la récupération et de la performance."
  );

  // ---------- RECOVR HERO SUBTITLE ----------
  out = out.replace(
    /Using Virtual Reality to reduce pain, engage, track and recover faster from injuries\./g,
    "Utiliser la réalité virtuelle pour réduire la douleur, mobiliser, suivre et récupérer plus rapidement des blessures."
  );

  // ---------- HOIT SERVICES ----------
  out = out.replace(/\bAthletic Therapy\b/g, "Thérapie sportive");
  out = out.replace(/\bMassage Therapy\b/g, "Massothérapie");
  out = out.replace(
    /\bFitness Training \/ Strengthening\b/g,
    "Entraînement et renforcement"
  );
  out = out.replace(/\bSports Rehabilitation\b/g, "Réadaptation sportive");
  out = out.replace(
    /\bVirtual Phone Consult\b/g,
    "Consultation téléphonique virtuelle"
  );

  // ---------- HOIT PRICING ----------
  out = out.replace(/\bAT \/ Massage Consult\b/g, "Consultation AT \/ massage");
  out = out.replace(
    /\bAT \/ Massage 60 Minutes\b/g,
    "AT \/ massage 60 minutes"
  );
  out = out.replace(
    /\bAT \/ Massage 45 Minutes\b/g,
    "AT \/ massage 45 minutes"
  );
  out = out.replace(
    /\bAT \/ Massage 30 Minutes\b/g,
    "AT \/ massage 30 minutes"
  );
  out = out.replace(/\bPhone Consult\b/g, "Consultation téléphonique");
  out = out.replace(/\bNew clients only\b/g, "Nouveaux clients seulement");

  // ---------- RECOVR PROGRAM TITLES ----------
  out = out.replace(/\bVirtual Reality Gaming\b/g, "Jeux en réalité virtuelle");
  out = out.replace(
    /\bVirtual Reality Rehabilitation\b/g,
    "Réadaptation en RV"
  );
  out = out.replace(
    /\bVirtual Reality Relaxation\b/g,
    "Relaxation en RV"
  );
  out = out.replace(/\bSpace Booking\b/g, "Réservation de l'espace");
  out = out.replace(
    /\bSlow Motion Video Analysis\b/g,
    "Analyse vidéo au ralenti"
  );
  out = out.replace(
    /\bSports Biomechanics Analysis\b/g,
    "Analyse biomécanique sportive"
  );

  // ---------- POLICIES ----------
  out = out.replace(
    /\bPrivacy Policy\b/g,
    "Politique de confidentialité"
  );
  out = out.replace(
    /\bCancellation Policy\b/g,
    "Politique d'annulation"
  );
  out = out.replace(
    /We keep records securely and do not sell personal data\. You may request a copy or correction of your information at any time by completing/g,
    "Nous conservons vos dossiers de manière sécurisée et ne vendons pas vos données personnelles. Vous pouvez demander une copie ou une correction de vos informations en tout temps en remplissant"
  );
  out = out.replace(
    /Please provide at least 24 hours notice to cancel or reschedule\. Late cancellations or no shows may incur a fee up to the full session rate\./g,
    "Veuillez fournir un préavis d'au moins 24 heures pour annuler ou reporter. Les annulations tardives ou les absences peuvent entraîner des frais allant jusqu'au tarif complet de la séance."
  );

  // Final safety for currency
  out = out.replace(/£/g, "$");

  return out;
}

/** Walk all text nodes and translate them in place. */
function walkAndTranslate(root: Element, lang: Lang) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const parent = node.parentElement;
    if (!parent) continue;
    if (shouldSkip(parent)) continue;

    const value = node.nodeValue || "";
    // do not touch emails or URLs
    if (/@|https?:\/\//.test(value)) continue;

    node.nodeValue = translateText(value, lang);
  }
}

/** Public entry point to translate entire page. */
export function translatePage(lang: Lang) {
  if (typeof document === "undefined") return;
  const root = document.body;
  if (!root) return;

  try {
    walkAndTranslate(root, lang);
  } catch (err) {
    console.error("translatePage failed", err);
  }
}