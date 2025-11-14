// src/i18n/translator.ts
// Lightweight client-side translator with currency / email protection

export type Lang = "en" | "fr";

const STORAGE_KEY = "site_lang";

export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  const v = (localStorage.getItem(STORAGE_KEY) || "en").toLowerCase();
  return v === "fr" ? "fr" : "en";
}

export function setLang(l: Lang) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, l);
}

/** Elements that should never be translated */
function shouldSkip(el: Element): boolean {
  if (el.hasAttribute("data-no-translate")) return true;

  const tag = el.tagName.toLowerCase();
  if (["code", "pre", "script", "style"].includes(tag)) return true;

  return false;
}

/**
 * Long sentence / paragraph level translations.
 * Keys must match the English text as it appears in the DOM.
 */
const PHRASES_FR: Record<string, string> = {
  // HOIT hero subtitle – support old and new versions
  "Athletic therapy and massage therapy services for all ages.":
    "Services de thérapie sportive et de massothérapie pour tous les âges.",
  "Athletic therapy and massage therapy services for all ages with an integrative, hands on approach to recovery and performance.":
    "Services de thérapie sportive et de massothérapie pour tous les âges, avec une approche intégrative et pratique axée sur la récupération et la performance.",
  "Athletic therapy and massage therapy services for all ages with an integrative, hands-on approach to recovery and performance.":
    "Services de thérapie sportive et de massothérapie pour tous les âges, avec une approche intégrative et pratique axée sur la récupération et la performance.",

  // RECOVR hero subtitle
  "High performance training, VR experiences, video analysis, and biomechanics support for athletes and active people.":
    "Entraînement haute performance, expériences RV, analyse vidéo et soutien biomécanique pour les athlètes et les personnes actives.",

  // HOIT services descriptions
  "Assessment and treatment for sport and activity injuries, focusing on safe return to play and long term durability.":
    "Évaluation et traitement des blessures sportives et liées à l’activité, en mettant l’accent sur un retour au jeu sécuritaire et la durabilité à long terme.",
  "Clinical massage to reduce pain, improve mobility, and speed recovery. Pressure and technique tailored to you.":
    "Massothérapie clinique pour réduire la douleur, améliorer la mobilité et accélérer la récupération. Pression et techniques adaptées à vos besoins.",
  "Progressive, evidence based programs to build strength and resilience for daily life and sport.":
    "Programmes progressifs, fondés sur les données probantes, pour développer la force et la résilience au quotidien et dans le sport.",
  "Targeted rehab for acute and chronic issues, combining manual therapy with corrective exercise.":
    "Réadaptation ciblée pour les problématiques aiguës et chroniques, combinant thérapie manuelle et exercices correctifs.",
  "Discuss goals or concerns remotely, get advice, and an initial plan before your first session.":
    "Discutez de vos objectifs ou préoccupations à distance, obtenez des conseils et un plan initial avant votre première séance.",

  // HOIT pricing note
  "New clients only":
    "Nouveaux clients seulement",

  // RECOVR programs descriptions
  "Immersive gameplay sessions that promote coordination, reaction time, and fun active breaks.":
    "Sessions de jeu immersives qui favorisent la coordination, le temps de réaction et des pauses actives ludiques.",
  "Task specific VR training to rebuild movement patterns and engagement during rehab.":
    "Entraînement en RV spécifique aux tâches pour reconstruire les schémas de mouvement et l’engagement pendant la réadaptation.",
  "Guided VR environments for breathing, de-stressing, and nervous system down regulation.":
    "Environnements RV guidés pour la respiration, la réduction du stress et la régulation du système nerveux.",
  "Reserve the studio for solo sessions, small groups, or team training with access to equipment.":
    "Réservez le studio pour des séances solo, de petits groupes ou des entraînements d’équipe avec accès à l’équipement.",
  "High frame rate capture to review technique and identify key movement opportunities.":
    "Captation à haute fréquence pour revoir la technique et identifier les principaux axes d’amélioration du mouvement.",
  "Applied analysis of posture, force vectors, and timing to improve performance and reduce injury risk.":
    "Analyse appliquée de la posture, des vecteurs de force et du timing pour améliorer la performance et réduire le risque de blessure.",

  // Privacy policy paragraphs
  "We collect only the information needed to book and deliver services, such as your name, contact details, and relevant health history that you choose to share. Your information is used to provide care, manage appointments, and communicate with you.":
    "Nous ne recueillons que les informations nécessaires pour réserver et offrir les services, comme votre nom, vos coordonnées et les antécédents de santé pertinents que vous choisissez de partager. Vos informations sont utilisées pour fournir les soins, gérer les rendez-vous et communiquer avec vous.",
  // sentence is split in the DOM (text + link) so we translate just the part before the link
  "We keep records securely and do not sell personal data. You may request a copy or correction of your information at any time by completing ":
    "Nous conservons les dossiers de façon sécuritaire et ne vendons pas les données personnelles. Vous pouvez demander une copie ou une correction de vos informations en tout temps en remplissant ",
  // full version (in case DOM comes as one text node)
  "We keep records securely and do not sell personal data. You may request a copy or correction of your information at any time by completing our contact form.":
    "Nous conservons les dossiers de façon sécuritaire et ne vendons pas les données personnelles. Vous pouvez demander une copie ou une correction de vos informations en tout temps en remplissant notre formulaire de contact.",
  "This page is informational and not legal advice.":
    "Cette page est fournie à titre informatif et ne constitue pas un avis juridique.",

  // Cancellation policy paragraphs
  "Please provide at least 24 hours notice to cancel or reschedule. Late cancellations or no shows may incur a fee up to the full session rate.":
    "Veuillez aviser au moins 24 heures à l’avance pour annuler ou reporter un rendez-vous. Les annulations tardives ou les absences peuvent entraîner des frais allant jusqu’au tarif complet de la séance.",
  "To cancel, please complete":
    "Pour annuler, veuillez remplir",

  // Contact card heading
  "Contact":
    "Contact",
};

/** Short word/label replacements (titles, nav items, button labels) */
function replaceWordsFr(text: string): string {
  return text
    // Nav & section labels
    .replace(/\bHome\b/g, "Accueil")
    .replace(/\bServices\b/g, "Services")
    .replace(/\bPricing\b/g, "Tarifs")
    .replace(/\bTarifs\b/g, "Tarifs")
    .replace(/\bGallery\b/g, "Galerie")
    .replace(/\bPhoto Gallery\b/g, "Galerie photo")
    .replace(/\bPrivacy Policy\b/g, "Politique de confidentialité")
    .replace(/\bCancellation Policy\b/g, "Politique d’annulation")
    .replace(/\bPrograms\b/g, "Programmes")
    .replace(/\bProgrammes\b/g, "Programmes")
    .replace(/\bAbout Me\b/g, "À propos")

    // HOIT service titles
    .replace(/\bAthletic Therapy\b/g, "Thérapie sportive")
    .replace(/\bMassage Therapy\b/g, "Massothérapie")
    .replace(/\bFitness Training \/ Strengthening\b/g, "Entraînement et renforcement")
    .replace(/\bSports Rehabilitation\b/g, "Réadaptation sportive")
    .replace(/\bVirtual Phone Consult\b/g, "Consultation téléphonique virtuelle")

    // HOIT pricing titles
    .replace(/\bAT \/ Massage Consult\b/g, "Consultation AT / Massage")
    .replace(/\bAT \/ Massage 60 Minutes\b/g, "AT / Massage 60 minutes")
    .replace(/\bAT \/ Massage 45 Minutes\b/g, "AT / Massage 45 minutes")
    .replace(/\bAT \/ Massage 30 Minutes\b/g, "AT / Massage 30 minutes")
    .replace(/\bPhone Consult\b/g, "Consultation téléphonique")

    // RECOVR program titles
    .replace(/\bVirtual Reality Gaming\b/g, "Jeux en réalité virtuelle")
    .replace(/\bVirtual Reality Rehabilitation\b/g, "Réadaptation en réalité virtuelle")
    .replace(/\bVirtual Reality Relaxation\b/g, "Relaxation en réalité virtuelle")
    .replace(/\bSpace Booking\b/g, "Location de l’espace")
    .replace(/\bSlow Motion Video Analysis\b/g, "Analyse vidéo au ralenti")
    .replace(/\bSports Biomechanics Analysis\b/g, "Analyse biomécanique sportive")

    // Buttons / calls to action
    .replace(/\bView Services\b/gi, "Voir les services")
    .replace(/\bBook A Session\b/gi, "Réserver une séance")
    .replace(/\bExplore Programs\b/gi, "Explorer les programmes")
    .replace(/\bExplore the programs\b/gi, "Explorer les programmes")
    .replace(/\bour contact form\b/gi, "notre formulaire de contact");
}

/** Core text translator */
function translateText(text: string, to: Lang): string {
  if (to === "en") return text;

  let out = text;

  // 1) sentence / paragraph mappings
  for (const [en, fr] of Object.entries(PHRASES_FR)) {
    if (!en) continue;
    out = out.split(en).join(fr);
  }

  // 2) word-level replacements
  out = replaceWordsFr(out);

  // 3) make sure currency stays as $ (browser sometimes localizes)
  out = out.replace(/£/g, "$");

  return out;
}

/** Walk DOM and translate text nodes in place */
function walkAndTranslate(root: Element, to: Lang) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (shouldSkip(parent)) return NodeFilter.FILTER_REJECT;

      const value = node.nodeValue || "";
      // skip emails and URLs
      if (/@/.test(value) || /https?:\/\//.test(value)) {
        return NodeFilter.FILTER_REJECT;
      }
      if (!value.trim()) return NodeFilter.FILTER_REJECT;

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((t) => {
    if (!t.nodeValue) return;
    t.nodeValue = translateText(t.nodeValue, to);
  });
}

/** Public API called from useI18n / LanguageToggle */
export function translatePage(to: Lang) {
  if (typeof document === "undefined") return;
  const root = document.body;
  if (!root) return;
  walkAndTranslate(root, to);
}