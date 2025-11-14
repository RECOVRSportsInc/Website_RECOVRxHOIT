// src/content/hoit/index.tsx
import { useI18n } from "../../i18n/useI18n";

/* HERO */
export function Hero() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section
      className="relative pt-24 pb-10 md:pb-16"
      data-no-translate
    >
      <div className="container section">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-hoit-purple">{hoit.heroAccent}</span>{" "}
          {hoit.heroRest}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {hoit.heroLead}
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#services" className="btn btn-black">
            {hoit.heroPrimaryCta}
          </a>
          <a href="#pricing" className="btn btn-lavender">
            {hoit.heroSecondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

/* SERVICES on black, lavender heading */
function Services() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section id="services" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-6">
          {hoit.servicesTitle}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {hoit.services.map((it) => (
            <div key={it.id} className="card card-accent-lavender p-5">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PRICING */
function Pricing() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {hoit.pricingTitle}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {hoit.pricing.map((p) => (
            <div key={p.id} className="card card-accent-lavender p-6">
              <div className="text-sm text-gray-500">{p.name}</div>
              <div className="mt-1 text-3xl font-extrabold text-hoit-purple">
                {p.price}
              </div>
              {p.note && <div className="text-gray-600 mt-1">{p.note}</div>}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener"
                className="btn btn-lavender mt-6"
              >
                {hoit.heroSecondaryCta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* GALLERY on black, 9 tiles, hide failed images */
function Gallery() {
  const { t } = useI18n();
  const hoit = t.hoit;
  const imgs = Array.from({ length: 9 }, (_, i) => `/photos/hoit/${i + 1}.jpg`);

  return (
    <section id="gallery" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-6">
          {hoit.galleryTitle}
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
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {hoit.aboutTitle}
        </h2>
        <div className="glass p-6 text-gray-700">
          <p>{hoit.aboutBody}</p>
        </div>
      </div>
    </section>
  );
}

/* POLICIES on black, lavender headings */
function PrivacyPolicy() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section id="privacy" className="section bg-black">
      <div className="container">
        <h2 className="text-2xl font-bold text-hoit-purple mb-3">
          {hoit.privacyTitle}
        </h2>
        <div className="glass p-6 text-gray-700 space-y-3">
          <p>{hoit.privacyP1}</p>
          <p>{hoit.privacyP2}</p>
          <p>{hoit.privacyP3}</p>
        </div>
      </div>
    </section>
  );
}

function CancellationPolicy() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section id="cancellation" className="section bg-black">
      <div className="container">
        <h2 className="text-2xl font-bold text-hoit-purple mb-3">
          {hoit.cancellationTitle}
        </h2>
        <div className="glass p-6 text-gray-700 space-y-3">
          <p>{hoit.cancellationP1}</p>
          <p>{hoit.cancellationP2}</p>
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="card card-accent-lavender p-6">
          <h2 className="text-2xl font-bold text-hoit-purple mb-2">
            {hoit.contactTitle}
          </h2>
          <a
            className="text-hoit-purple hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
          >
            {hoit.contactLinkLabel}
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
  Pricing,
  Gallery,
  About,
  PrivacyPolicy,
  CancellationPolicy,
  Contact,
  BrandMark,
];

export function Footer() {
  const { t } = useI18n();
  const hoit = t.hoit;

  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-gray-600">
        {hoit.footerText}
      </div>
    </footer>
  );
}