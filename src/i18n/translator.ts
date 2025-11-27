// src/i18n/translator.ts
// Lightweight DOM translator using string replacement + localStorage
// Reversible without reloading the page.

export type Lang = "en" | "fr";

const STORAGE_KEY = "site_lang";

export function getStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const raw = window.localStorage.getItem(STORAGE_KEY)?.toLowerCase() || "en";
  return raw === "fr" ? "fr" : "en";
}

export function storeLang(lang: Lang) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, lang);
}

// Back compat names used elsewhere
export function readStoredLang(): Lang {
  return getStoredLang();
}
export function writeStoredLang(lang: Lang) {
  storeLang(lang);
}

// Elements we never want to translate
function shouldSkip(el: Element): boolean {
  if (el.hasAttribute("data-no-translate")) return true;

  const tag = el.tagName.toLowerCase();
  if (["script", "style", "code", "pre"].includes(tag)) return true;

  return false;
}

// Hard coded EN → FR replacements
function translateText(text: string, to: Lang): string {
  if (to === "en") return text;

  let out = text;

  // NAV / COMMON LABELS
  out = out
    .replace(/\bServices\b/g, "Services")
    .replace(/\bPricing\b/g, "Tarifs")
    .replace(/\bTarifs\b/g, "Tarifs")
    .replace(/\bPhoto Gallery\b/g, "Galerie photo")
    .replace(/\bAbout Me\b/g, "À propos de moi")
    .replace(/\bContact\b/g, "Contact")
    .replace(/\bPrograms\b/g, "Programmes")
    .replace(/\bProgrammes\b/g, "Programmes")
    .replace(/\bExplore Programs\b/gi, "Explorer les programmes")
    .replace(/\bBook A Session\b/gi, "Réserver une séance")
    .replace(/\bBook the Space\b/gi, "Réserver l'espace")
    .replace(/\bView Services\b/gi, "Voir les services")
    .replace(/\bour contact form\b/gi, "notre formulaire de contact");

  // HOIT pricing labels / notes
  out = out
    .replace(
      /\bAT \/ Massage Consult\b/g,
      "Consultation thérapie sportive/massage"
    )
    .replace(
      /\bAT \/ Massage 90 Minutes\b/g,
      "Thérapie sportive/massage 90 minutes"
    )
    .replace(
      /\bAT \/ Massage 60 Minutes\b/g,
      "Thérapie sportive/massage 60 minutes"
    )
    .replace(
      /\bAT \/ Massage 45 Minutes\b/g,
      "Thérapie sportive/massage 45 minutes"
    )
    .replace(
      /\bAT \/ Massage 30 Minutes\b/g,
      "Thérapie sportive/massage 30 minutes"
    )
    .replace(/\bPhone Consult\b/g, "Consultation téléphonique")
    .replace(
      "First appointment only for new clients",
      "Première consultation seulement pour les nouveaux clients"
    );

  // HOIT hero subtitle
  out = out.replace(
    "Athletic therapy and massage therapy services for all ages with an integrative, hands on approach to recovery and performance.",
    "Services de thérapie sportive et de massothérapie pour tous les âges, avec une approche pratique et intégrée de la récupération et de la performance."
  );
    // New HOIT hero subheading (inside H1)
  out = out.replace(
    "Sports medicine and athletic therapy clinic in Montreal",
    "Clinique de médecine du sport et de thérapie sportive à Montréal."
  );

  // New RECOVR hero subheading (inside H1)
  out = out.replace(
    "Virtual reality sports rehab lab in Montreal",
    "Laboratoire de réadaptation sportive en réalité virtuelle à Montréal."
  );

  // HOIT services cards (includes Sports Field Coverage)
  out = out
    .replace("Athletic Therapy", "Thérapie sportive")
    .replace(
      "Assessment and treatment for sport and activity injuries, focusing on safe return to play and long term durability.",
      "Évaluation et traitement des blessures liées au sport et à l’activité, avec un accent sur un retour au jeu sécuritaire et une durabilité à long terme."
    )
    .replace("Massage Therapy", "Massothérapie")
    .replace(
      "Clinical massage to reduce pain, improve mobility, and speed recovery. Pressure and technique tailored to you.",
      "Massage thérapeutique pour réduire la douleur, améliorer la mobilité et accélérer la récupération. Pression et techniques adaptées à vos besoins."
    )
    .replace(
      "Fitness Training / Strengthening",
      "Entraînement physique / Renforcement"
    )
    .replace(
      "Progressive, evidence based programs to build strength and resilience for daily life and sport.",
      "Programmes progressifs basés sur les données probantes pour développer la force et la résilience au quotidien et dans le sport."
    )
    .replace("Sports Rehabilitation", "Réadaptation sportive")
    .replace(
      "Targeted rehab for acute and chronic issues, combining manual therapy with corrective exercise.",
      "Réadaptation ciblée pour les problèmes aigus et chroniques, combinant thérapie manuelle et exercices correctifs."
    )
    .replace("Sports Field Coverage", "Couverture sur le terrain")
    .replace(
      "Hire a trusted certified athletic therapist to cover your next sporting event or team season.",
      "Engagez un(e) thérapeute du sport certifié(e) de confiance pour couvrir votre prochain événement sportif ou la saison de votre équipe."
    )
    .replace("Virtual Phone Consult", "Consultation téléphonique virtuelle")
    .replace(
      "Discuss goals or concerns remotely, get advice, and an initial plan before your first session.",
      "Discutez de vos objectifs ou préoccupations à distance, obtenez des conseils et un plan initial avant votre première séance."
    );

  // HOIT privacy main paragraph
  out = out.replace(
    "We collect only the information needed to book and deliver services, such as your name, contact details, and relevant health history that you choose to share. Your information is used to provide care, manage appointments, and communicate with you.",
    "Nous ne recueillons que les informations nécessaires pour réserver et offrir les services, comme votre nom, vos coordonnées et les renseignements de santé pertinents que vous choisissez de partager. Ces informations servent à vous offrir des soins, gérer vos rendez-vous et communiquer avec vous."
  );

  // HOIT privacy second sentence, just the text node before the link
  out = out.replace(
    /We keep records securely and do not sell personal data\. You may request a copy or correction of your information at any time by completing\s*/g,
    "Nous conservons vos dossiers de manière sécurisée et ne vendons pas vos données personnelles. Vous pouvez demander une copie ou une correction de vos informations en tout temps en remplissant "
  );

  // HOIT "informational, not legal advice"
  out = out.replace(
    "This page is informational and not legal advice.",
    "Cette page est fournie à titre informatif et ne constitue pas un avis juridique."
  );

  // HOIT cancellation policy paragraphs
  out = out.replace(
    "Please provide at least 24 hours notice to cancel or reschedule. Late cancellations or no shows may incur a fee up to the full session rate.",
    "Veuillez donner un préavis d'au moins 24 heures pour annuler ou reporter votre rendez-vous. Les annulations tardives ou les absences peuvent entraîner des frais pouvant aller jusqu'au tarif complet de la séance."
  );

  out = out.replace(
    /To cancel, please complete\s*/g,
    "Pour annuler, veuillez remplir "
  );

  // RECOVR hero subtitle
  out = out.replace(
    "Using Virtual Reality to reduce pain, engage, track and recover faster from injuries.",
    "Utiliser la réalité virtuelle pour réduire la douleur, engager, suivre et récupérer plus rapidement des blessures."
  );

  // RECOVR programme cards
  out = out
    .replace("Virtual Reality Gaming", "Jeux en réalité virtuelle")
    .replace(
      "Immersive gameplay sessions that promote coordination, reaction time, and fun active breaks.",
      "Sessions de jeu immersives qui favorisent la coordination, le temps de réaction et des pauses actives ludiques."
    )
    .replace(
      "Virtual Reality Rehabilitation",
      "Réadaptation en réalité virtuelle"
    )
    .replace(
      "Task specific VR training to rebuild movement patterns and engagement during rehab.",
      "Entraînement en RV spécifique aux tâches pour reconstruire les schémas de mouvement et l’engagement pendant la réadaptation."
    )
    .replace("Virtual Reality Relaxation", "Relaxation en réalité virtuelle")
    .replace(
      "Guided VR environments for breathing, de stressing, and nervous system down regulation.",
      "Environnements RV guidés pour la respiration, la réduction du stress et la régulation du système nerveux."
    )
    .replace("Space Booking", "Réservation de l’espace")
    .replace(
      "Reserve the studio for solo sessions, small groups, or team training with access to equipment.",
      "Réservez le studio pour des séances individuelles, des petits groupes ou l’entraînement d’équipe avec accès à l’équipement."
    )
    .replace("Slow Motion Video Analysis", "Analyse vidéo au ralenti")
    .replace(
      "High frame rate capture to review technique and identify key movement opportunities.",
      "Capture à haute fréquence d’images pour analyser la technique et repérer les principaux points d’amélioration du mouvement."
    )
    .replace("Sports Biomechanics Analysis", "Analyse biomécanique sportive")
    .replace(
      "Applied analysis of posture, force vectors, and timing to improve performance and reduce injury risk.",
      "Analyse appliquée de la posture, des vecteurs de force et du timing pour améliorer la performance et réduire le risque de blessure."
    );

  // Make sure dollars stay dollars
  out = out.replace(/£/g, "$");

  return out;
}

/**
 * We keep a copy of the original English text for each text node so we can
 * flip back and forth EN ↔ FR without reloading the page.
 */
const ORIGINAL_TEXT = new WeakMap<Text, string>();

function collectTranslatableNodes(root: Element): Text[] {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node: Node): number {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (shouldSkip(parent)) return NodeFilter.FILTER_REJECT;

        const value = node.nodeValue || "";
        if (!value.trim()) return NodeFilter.FILTER_REJECT;

        // skip emails and URLs
        if (/@/.test(value) || /https?:\/\//.test(value)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    } as any
  );

  const result: Text[] = [];
  while (walker.nextNode()) {
    result.push(walker.currentNode as Text);
  }
  return result;
}

function applyFrench(root: Element) {
  const nodes = collectTranslatableNodes(root);
  nodes.forEach((node) => {
    const current = node.nodeValue || "";
    const original = ORIGINAL_TEXT.get(node) ?? current;

    if (!ORIGINAL_TEXT.has(node)) {
      ORIGINAL_TEXT.set(node, original);
    }

    node.nodeValue = translateText(original, "fr");
  });
}

function restoreEnglish(root: Element) {
  const nodes = collectTranslatableNodes(root);
  nodes.forEach((node) => {
    const original = ORIGINAL_TEXT.get(node);
    if (original != null) {
      node.nodeValue = original;
    }
  });
}

export function translatePage(to: Lang) {
  if (typeof document === "undefined") return;
  const root = document.body;
  if (!root) return;

  if (to === "fr") {
    applyFrench(root);
  } else {
    restoreEnglish(root);
  }
}