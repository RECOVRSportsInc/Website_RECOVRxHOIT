// src/content/recovr/index.tsx
import { useI18n } from "../../i18n/useI18n";
import CalendarCard from "../../components/CalendarCard";

/* HERO */
export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative pt-24 pb-10 md:pb-16">
      <div className="container section">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-recovr-blue">{t.recovr.heroTitle}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {t.recovr.heroTagline}
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#programs" className="btn btn-primary">
            {t.common.explorePrograms}
          </a>
          <a
            href="#appointments"
            className="btn btn-outline"
            style={{ borderColor: "#2B7FB9", color: "#0A2240" }}
          >
            {t.common.bookSession}
          </a>
        </div>
      </div>
    </section>
  );
}

/* PROGRAMS */
function Programs() {
  const { lang } = useI18n();

  const items =
    lang === "fr"
      ? [
          {
            title: "Jeux en réalité virtuelle",
            desc: "Sessions de jeu immersives pour travailler la coordination, les temps de réaction et offrir des pauses actives amusantes.",
          },
          {
            title: "Réadaptation en réalité virtuelle",
            desc: "Entraînement spécifique en RV pour reconstruire les schémas de mouvement et l’engagement pendant la réadaptation.",
          },
          {
            title: "Relaxation en réalité virtuelle",
            desc: "Environnements RV guidés pour la respiration, la gestion du stress et la régulation du système nerveux.",
          },
          {
            title: "Location d’espace",
            desc: "Réservation du studio pour des séances individuelles, de petits groupes ou des équipes, avec accès à l’équipement.",
          },
          {
            title: "Analyse vidéo au ralenti",
            desc: "Captation à haute fréquence d’images pour revoir la technique et repérer les opportunités de mouvement clés.",
          },
          {
            title: "Analyse biomécanique sportive",
            desc: "Analyse appliquée de la posture, des vecteurs de force et du timing pour améliorer la performance et réduire le risque de blessure.",
          },
        ]
      : [
          {
            title: "Virtual Reality Gaming",
            desc: "Immersive gameplay sessions that promote coordination, reaction time, and fun active breaks.",
          },
          {
            title: "Virtual Reality Rehabilitation",
            desc: "Task specific VR training to rebuild movement patterns and engagement during rehab.",
          },
          {
            title: "Virtual Reality Relaxation",
            desc: "Guided VR environments for breathing, de-stressing, and nervous system down regulation.",
          },
          {
            title: "Space Booking",
            desc: "Reserve the studio for solo sessions, small groups, or team training with access to equipment.",
          },
          {
            title: "Slow Motion Video Analysis",
            desc: "High frame rate capture to review technique and identify key movement opportunities.",
          },
          {
            title: "Sports Biomechanics Analysis",
            desc: "Applied analysis of posture, force vectors, and timing to improve performance and reduce injury risk.",
          },
        ];

  return (
    <section id="programs" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-recovr-blue mb-6">
          {lang === "fr" ? "Programmes" : "Programs"}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card card-accent-blue p-5">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* APPOINTMENTS */
function Appointments() {
  const { lang, t } = useI18n();
  return (
    <section id="appointments" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-recovr-blue mb-4 text-center">
          {t.common.bookSession}
        </h2>
        <CalendarCard
          embedUrl="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29FC-SKHVnIw6hdITjVxxPhbnWI-LV7ISC5lhb-w-0SvvXhkRMNApyAD1buSYv6ckbYf-0733X?gv=true"
          linkUrl="https://calendar.app.google/mDHWJHLFwJ2a9VUe7"
        />
        <p className="mt-4 text-center text-gray-600">
          {lang === "fr"
            ? "Réservez un créneau pour l’entraînement, la récupération ou une expérience VR. Vous recevrez une confirmation par courriel."
            : "Reserve a time for training, recovery, or a VR experience. You will receive a confirmation by email."}
        </p>
      </div>
    </section>
  );
}

/* GALLERY */
function Gallery() {
  const { lang } = useI18n();
  const imgs = Array.from({ length: 9 }, (_, i) => `/photos/recovr/${i + 1}.jpg`);
  return (
    <section id="gallery" className="section bg-[#EAF4FF]">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {lang === "fr" ? "Galerie photo" : "Photo Gallery"}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="card overflow-hidden">
              <img
                src={src}
                alt={`RECOVR photo ${i + 1}`}
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

/* CONTACT */
function Contact() {
  const { lang } = useI18n();
  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="card card-accent-blue p-6">
          <h2 className="text-2xl font-bold text-recovr-blue mb-2">
            {lang === "fr" ? "Contact" : "Contact"}
          </h2>
          <a
            className="text-recovr-blue hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfsj5KsvXK2JjXY1SkWW7uzD00inFBp5wkv7eYl2Wb2lIjqRQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener"
          >
            recovrsports@proton.me
          </a>
        </div>
      </div>
    </section>
  );
}

/* BOTTOM LOGO */
function BrandMark() {
  return (
    <section className="section bg-black">
      <div className="container flex items-center justify-center">
        <div className="card p-6">
          <img
            src="/img/recovr-logo.png"
            alt="RECOVR Sports"
            className="h-20 md:h-28"
          />
        </div>
      </div>
    </section>
  );
}

/* EXPORTS */
export const Sections = [Programs, Appointments, Gallery, Contact, BrandMark];

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-gray-600">
        © 2024 RECOVR Sports
      </div>
    </footer>
  );
}