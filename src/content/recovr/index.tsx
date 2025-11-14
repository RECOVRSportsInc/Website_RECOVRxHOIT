// src/content/recovr/index.tsx
import { useI18n } from "../../i18n/useI18n";

/* HERO */
export function Hero() {
  const { t } = useI18n();
  const recovr = t.recovr;

  return (
    <section
      className="relative pt-24 pb-10 md:pb-16"
      data-no-translate
    >
      <div className="container section">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-recovr-blue">{recovr.heroAccent}</span>{" "}
          <span className="text-gray-900">{recovr.heroRest}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          {recovr.heroLead}
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#programs" className="btn btn-primary">
            {recovr.heroPrimaryCta}
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            style={{ borderColor: "#2B7FB9", color: "#0A2240" }}
          >
            {recovr.heroSecondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

/* PROGRAMS on black, blue heading */
function Programs() {
  const { t } = useI18n();
  const recovr = t.recovr;

  return (
    <section id="programs" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-recovr-blue mb-6">
          {recovr.programsTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recovr.programs.map((it) => (
            <div key={it.id} className="card card-accent-blue p-5">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* GALLERY */
function Gallery() {
  const { t } = useI18n();
  const recovr = t.recovr;
  const imgs = Array.from(
    { length: 9 },
    (_, i) => `/photos/recovr/${i + 1}.jpg`,
  );

  return (
    <section id="gallery" className="section bg-[#EAF4FF]">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {recovr.galleryTitle}
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

/* CONTACT on black */
function Contact() {
  const { t } = useI18n();
  const recovr = t.recovr;

  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="card card-accent-blue p-6">
          <h2 className="text-2xl font-bold text-recovr-blue mb-2">
            {recovr.contactTitle}
          </h2>
          <a
            className="text-recovr-blue hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfsj5KsvXK2JjXY1SkWW7uzD00inFBp5wkv7eYl2Wb2lIjqRQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener"
          >
            {recovr.contactLinkLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

/* BOTTOM LOGO: black band with a white card behind the logo */
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
export const Sections = [Programs, Gallery, Contact, BrandMark];

export function Footer() {
  const { t } = useI18n();
  const recovr = t.recovr;

  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-gray-600">
        {recovr.footerText}
      </div>
    </footer>
  );
}