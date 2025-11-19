// src/content/hoit/index.tsx

import { HOIT_ABOUT_EN, HOIT_ABOUT_FR } from "./abouttext";

/* HERO */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#3db0fc]">
      {/* Faded clinic photo in the background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/img/hoit-clinic-1.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-no-translate
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3db0fc]/60 via-[#150816]/90 to-[#3db0fc]/60" />
      </div>

      {/* Subtle glow blobs */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-hoit-mint/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#ff7cf5]/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Content card */}
      <div className="relative container section max-w-5xl">
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-white/15 bg-black/20 backdrop-blur-md text-white/70">
          <span data-no-translate>Hands On Integrative Therapy</span>
        </div>

        <div className="rounded-3xl bg-slate-900/85 border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_120px_rgba(15,23,42,0.9)]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.6)]">
            <span className="text-[#3db0fc]">Hands On</span>{" "}
            <span>Integrative Therapy</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200/85">
            Athletic therapy and massage therapy services for all ages with an
            integrative, hands on approach to recovery and performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#services" className="btn btn-black">
              View Services
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold shadow-[0_18px_60px_rgba(40,250,173,0.55)]"
              style={{ backgroundColor: "#3db0fc", color: "#000" }}
            >
              Book A Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SERVICES on white, blue-accent cards */
function Services() {
  const items = [
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
      title: "Sports Field Coverage",
      desc: "Hire a trusted certified athletic therapist to cover your next sporting event or team season.",
    },
    {
      title: "Virtual Phone Consult",
      desc: "Discuss goals or concerns remotely, get advice, and an initial plan before your first session.",
    },
  ];
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#3db0fc" }}
        >
          Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="card card-accent-blue p-5 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
              <h3 className="font-semibold text-white">{it.title}</h3>
              <p className="text-white/80 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PRICING */
function Pricing() {
  const plans = [
    {
      name: "AT / Massage Consult",
      price: "$150 + tax",
      note: "First appointment only for new clients",
    },
    { name: "AT / Massage 60 Minutes", price: "$130 + tax", note: "" },
    { name: "AT / Massage 45 Minutes", price: "$115 + tax", note: "" },
    { name: "AT / Massage 30 Minutes", price: "$100 + tax", note: "" },
    { name: "Phone Consult", price: "$50 + tax", note: "" },
  ];
  return (
    <section id="pricing" className="section bg-[#3db0fc]">
      <div className="container">
        <h2 className="text-3xl font-bold text-black">Pricing</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className="card card-accent-blue p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
              <div className="text-sm text-white/80">{p.name}</div>
              <div className="mt-1 text-3xl font-extrabold text-white">
                {p.price}
              </div>
              {p.note && <div className="text-white/70 mt-1">{p.note}</div>}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener"
                className="btn mt-6"
                style={{ backgroundColor: "#3db0fc", color: "#000" }}
              >
                Book A Session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* GALLERY on white, blue-accent cards */
function Gallery() {
  const imgs = Array.from({ length: 9 }, (_, i) => `/photos/hoit/${i + 1}.jpg`);
  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#3db0fc" }}
        >
          Photo Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="card card-accent-blue overflow-hidden rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
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

/* ABOUT using separate text file, not translated by DOM translator */
function About() {
  let lang: "en" | "fr" = "en";
  if (typeof window !== "undefined") {
    const stored = (localStorage.getItem("site_lang") || "en").toLowerCase();
    if (stored === "fr") lang = "fr";
  }

  const aboutText = lang === "fr" ? HOIT_ABOUT_FR : HOIT_ABOUT_EN;

  return (
    <section id="about" className="section bg-[#3db0fc]">
      <div className="container">
        <h2 className="text-3xl font-bold text-black">About Me</h2>
        <div
          className="glass p-6 text-white leading-relaxed space-y-4"
          data-no-translate
        >
          {aboutText
            .trim()
            .split(/\n\s*\n/)
            .map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
        </div>
      </div>
    </section>
  );
}

/* POLICIES */
function PrivacyPolicy() {
  return (
    <section id="privacy" className="section bg-white">
      <div className="container">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: "#3db0fc" }}
        >
          Privacy Policy
        </h2>
        <div className="card card-accent-blue p-6 text-white space-y-3">
          <p>
            We collect only the information needed to book and deliver services, such
            as your name, contact details, and relevant health history that you choose
            to share. Your information is used to provide care, manage appointments,
            and communicate with you.
          </p>
          <p>
            We keep records securely and do not sell personal data. You may request a
            copy or correction of your information at any time by completing{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener"
              style={{ color: "#3db0fc" }}
            >
              our contact form
            </a>
            .
          </p>
          <p>This page is informational and not legal advice.</p>
        </div>
      </div>
    </section>
  );
}

function CancellationPolicy() {
  return (
    <section id="cancellation" className="section bg-[#3db0fc]">
      <div className="container">
        <h2 className="text-2xl font-bold text-black">Cancellation Policy</h2>
        <div className="card card-accent-blue p-6 text-white space-y-3">
          <p>
            Please provide at least 24 hours notice to cancel or reschedule. Late
            cancellations or no shows may incur a fee up to the full session rate.
          </p>
          <p>
            To cancel, please complete{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener"
              style={{ color: "#3db0fc" }}
            >
              our contact form
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="card card-accent-blue p-6">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: "#3db0fc" }}
          >
            Contact
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
            style={{ color: "#3db0fc" }}
            className="hover:underline"
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
    <section className="section bg-[#3db0fc]">
      <div className="container flex items-center justify-center">
        <img src="/img/hoit-logo.png" alt="HOIT logo" className="h-24 md:h-32" />
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
  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-white space-y-3">
        © 2018 Hands On Integrative Therapy
      </div>
    </footer>
  );
}