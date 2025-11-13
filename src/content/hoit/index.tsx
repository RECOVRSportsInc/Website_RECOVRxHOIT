// src/content/hoit/index.tsx
import { useI18n } from "../../i18n/useI18n";
import CalendarCard from "../../components/CalendarCard";

/* HERO */
export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative pt-24 pb-10 md:pb-16">
      <div className="container section">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-hoit-purple">{t.hoit.heroTitle}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {t.hoit.heroTagline}
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#services" className="btn btn-black">
            {t.common.viewServices}
          </a>
          <a href="#appointments" className="btn btn-lavender">
            {t.common.bookSession}
          </a>
        </div>
      </div>
    </section>
  );
}

/* SERVICES on black, lavender heading */
function Services() {
  const { lang } = useI18n();

  const items =
    lang === "fr"
      ? [
          {
            title: "Thérapie sportive",
            desc: "Évaluation et traitement des blessures liées au sport et à l’activité, avec un accent sur le retour au jeu en sécurité et la durabilité à long terme.",
          },
          {
            title: "Massothérapie",
            desc: "Massage clinique pour réduire la douleur, améliorer la mobilité et accélérer la récupération. Pression et techniques adaptées à vous.",
          },
          {
            title: "Entraînement / renforcement",
            desc: "Programmes progressifs fondés sur les données probantes pour développer la force et la résilience au quotidien et dans le sport.",
          },
          {
            title: "Réhabilitation sportive",
            desc: "Rééducation ciblée pour les blessures aiguës et chroniques, combinant thérapie manuelle et exercices correctifs.",
          },
          {
            title: "Consultation téléphonique virtuelle",
            desc: "Discussion de vos objectifs ou préoccupations à distance, conseils initiaux et plan de départ avant votre première séance.",
          },
        ]
      : [
          {
            title: "Athletic Therapy",
            desc: "Assessment and treatment for sport and activity injuries, focusing on safe return to play and long term durability.",
          },
          {
            title: "Massage Therapy",
            desc: "Clinical massage to reduce pain, improve mobility, and speed recovery. Pressure and technique tailored to you.",
          },
          {
            title: "Fitness Training / Strengthening",
            desc: "Progressive, evidence based programs to build strength and resilience for daily life and sport.",
          },
          {
            title: "Sports Rehabilitation",
            desc: "Targeted rehab for acute and chronic issues, combining manual therapy with corrective exercise.",
          },
          {
            title: "Virtual Phone Consult",
            desc: "Discuss goals or concerns remotely, get advice, and an initial plan before your first session.",
          },
        ];

  return (
    <section id="services" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-6">
          {lang === "fr" ? "Services" : "Services"}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card card-accent-lavender p-5">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* APPOINTMENTS (Google calendar) */
function Appointments() {
  const { lang, t } = useI18n();
  return (
    <section id="appointments" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-4 text-center">
          {t.common.bookSession}
        </h2>
        <CalendarCard
          embedUrl="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29FC-SKHVnIw6hdITjVxxPhbnWI-LV7ISC5lhb-w-0SvvXhkRMNApyAD1buSYv6ckbYf-0733X?gv=true"
          linkUrl="https://calendar.app.google/mDHWJHLFwJ2a9VUe7"
        />
        <p className="mt-4 text-center text-gray-600">
          {lang === "fr"
            ? "Choisissez un créneau horaire qui vous convient. Vous recevrez une confirmation par courriel."
            : "Choose a time that works for you. You will receive a confirmation by email."}
        </p>
      </div>
    </section>
  );
}

/* PRICING */
function Pricing() {
  const { lang } = useI18n();
  const plans =
    lang === "fr"
      ? [
          {
            name: "Consultation AT / massage",
            price: "$150 + tax",
            note: "Nouveaux clients seulement",
          },
          {
            name: "AT / Massage 60 minutes",
            price: "$130 + tax",
            note: "",
          },
          {
            name: "AT / Massage 45 minutes",
            price: "$115 + tax",
            note: "",
          },
          {
            name: "AT / Massage 30 minutes",
            price: "$100 + tax",
            note: "",
          },
          {
            name: "Consultation téléphonique",
            price: "$50 + tax",
            note: "",
          },
        ]
      : [
          { name: "AT / Massage Consult", price: "$150 + tax", note: "New clients only" },
          { name: "AT / Massage 60 Minutes", price: "$130 + tax", note: "" },
          { name: "AT / Massage 45 Minutes", price: "$115 + tax", note: "" },
          { name: "AT / Massage 30 Minutes", price: "$100 + tax", note: "" },
          { name: "Phone Consult", price: "$50 + tax", note: "" },
        ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {lang === "fr" ? "Tarifs" : "Pricing"}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card card-accent-lavender p-6">
              <div className="text-sm text-gray-500">{p.name}</div>
              <div className="mt-1 text-3xl font-extrabold text-hoit-purple">
                <span data-no-translate>{p.price}</span>
              </div>
              {p.note && <div className="text-gray-600 mt-1">{p.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* GALLERY on black, 9 tiles */
function Gallery() {
  const { lang } = useI18n();
  const imgs = Array.from({ length: 9 }, (_, i) => `/photos/hoit/${i + 1}.jpg`);
  return (
    <section id="gallery" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-6">
          {lang === "fr" ? "Galerie photo" : "Photo Gallery"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="glass overflow-hidden">
              <img
                src={src}
                alt={`HOIT photo ${i + 1}`}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).style.display =
                    "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ABOUT */
function About() {
  const { lang } = useI18n();
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {lang === "fr" ? "À propos" : "About Me"}
        </h2>
        <div className="glass p-6 text-gray-700">
          {lang === "fr" ? (
            <p>
              Ajoutez ici votre texte de présentation en français&nbsp;: vos
              formations, votre expérience, votre approche, et ce que les
              clients peuvent attendre de vous.
            </p>
          ) : (
            <p>
              Paste your about me here in English. A short intro on your
              background, certifications, approach, and what clients can expect.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* POLICIES */
function PrivacyPolicy() {
  const { lang, t } = useI18n();
  return (
    <section id="privacy" className="section bg-black">
      <div className="container">
        <h2 className="text-2xl font-bold text-hoit-purple mb-3">
          {lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
        </h2>
        <div className="glass p-6 text-gray-700 space-y-3">
          <p>
            {lang === "fr"
              ? "Nous ne recueillons que les informations nécessaires pour réserver et fournir les services, comme votre nom, vos coordonnées et les informations de santé pertinentes que vous choisissez de partager."
              : "We collect only the information needed to book and deliver services, such as your name, contact details, and relevant health history that you choose to share."}
          </p>
          <p>
            {lang === "fr"
              ? "Vos informations sont conservées de façon sécuritaire et ne sont pas vendues. Vous pouvez demander une copie ou une correction de vos informations en utilisant le formulaire de contact"
              : "Your information is kept securely and is not sold. You may request a copy or correction of your information at any time by using the contact form"}{" "}
            (
            <a
              className="text-hoit-purple underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener"
            >
              {t.common.here}
            </a>
            ).
          </p>
          <p>
            {lang === "fr"
              ? "Cette page est fournie à titre informatif seulement et ne constitue pas un avis juridique."
              : "This page is informational only and does not constitute legal advice."}
          </p>
        </div>
      </div>
    </section>
  );
}

function CancellationPolicy() {
  const { lang, t } = useI18n();
  return (
    <section id="cancellation" className="section bg-black">
      <div className="container">
        <h2 className="text-2xl font-bold text-hoit-purple mb-3">
          {lang === "fr" ? "Politique d’annulation" : "Cancellation Policy"}
        </h2>
        <div className="glass p-6 text-gray-700 space-y-3">
          <p>
            {lang === "fr"
              ? "Veuillez donner un préavis d’au moins 24 heures pour annuler ou déplacer un rendez-vous. Les annulations tardives ou les absences peuvent être facturées jusqu’au tarif complet de la séance."
              : "Please provide at least 24 hours notice to cancel or reschedule. Late cancellations or no-shows may be charged up to the full session rate."}
          </p>
          <p>
            {lang === "fr"
              ? "Pour annuler, utilisez le formulaire de contact"
              : "To cancel, please use the contact form"}{" "}
            (
            <a
              className="text-hoit-purple underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener"
            >
              {t.common.here}
            </a>
            ).
          </p>
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  const { lang } = useI18n();
  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="card card-accent-lavender p-6">
          <h2 className="text-2xl font-bold text-hoit-purple mb-2">
            {lang === "fr" ? "Contact" : "Contact"}
          </h2>
          <a
            className="text-hoit-purple hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
          >
            handsonintegrativetherapy@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* BIG LOGO at bottom */
function BrandMark() {
  return (
    <section className="section bg-black">
      <div className="container flex items-center justify-center">
        <img
          src="/img/hoit-logo.png"
          alt="HOIT logo"
          className="h-24 md:h-32"
        />
      </div>
    </section>
  );
}

/* EXPORTS */
export const Sections = [
  Services,
  Appointments,
  Pricing,
  Gallery,
  About,
  PrivacyPolicy,
  CancellationPolicy,
  Contact,
  BrandMark,
];

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-gray-600">
        © 2018 Hands On Integrative Therapy
      </div>
    </footer>
  );
}