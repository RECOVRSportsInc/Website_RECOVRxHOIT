import React from "react";

/* HERO */
export function Hero() {
  return (
    <section className="relative pt-24 pb-10 md:pb-16">
      <div className="container section">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          <span className="text-hoit-purple">Hands On</span> Integrative Therapy
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Athletic therapy and massage therapy services for all ages.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#services" className="btn btn-black">View Services</a>
          {/* now scrolls to the booking calendar section */}
          <a href="#appointments" className="btn btn-lavender">Book A Session</a>
        </div>
      </div>
    </section>
  );
}

/* SERVICES on black, lavender heading */
function Services() {
  const items = [
    { title: "Athletic Therapy", desc: "Assessment and treatment for sport and activity injuries, focusing on safe return to play and long term durability." },
    { title: "Massage Therapy", desc: "Clinical massage to reduce pain, improve mobility, and speed recovery. Pressure and technique tailored to you." },
    { title: "Fitness Training / Strengthening", desc: "Progressive, evidence based programs to build strength and resilience for daily life and sport." },
    { title: "Sports Rehabilitation", desc: "Targeted rehab for acute and chronic issues, combining manual therapy with corrective exercise." },
    { title: "Virtual Phone Consult", desc: "Discuss goals or concerns remotely, get advice, and an initial plan before your first session." },
  ];
  return (
    <section id="services" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-6">Services</h2>
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

/* APPOINTMENTS (Google Appointment Schedule) */
function Appointments() {
  const BOOKING_URL = "https://calendar.app.google/mDHWJHLFwJ2a9VUe7";

  return (
    <section id="appointments" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-4 text-center">
          Book A Session
        </h2>

        <div className="glass p-2">
          <iframe
            title="HOIT/RECOVR Booking"
            src={BOOKING_URL}
            style={{ border: 0, width: "100%", height: "900px" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-3">
          If the calendar doesn’t load,{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="text-hoit-purple underline"
          >
            open the booking page in a new tab
          </a>.
        </p>
      </div>
    </section>
  );
}

/* PRICING */
function Pricing() {
  const BOOKING_URL = "https://calendar.app.google/mDHWJHLFwJ2a9VUe7";

  const plans = [
    { name: "AT / Massage Consult", price: "$150 + tax", note: "New clients only" },
    { name: "AT / Massage 60 Minutes", price: "$130 + tax", note: "" },
    { name: "AT / Massage 45 Minutes", price: "$115 + tax", note: "" },
    { name: "AT / Massage 30 Minutes", price: "$100 + tax", note: "" },
    { name: "Phone Consult", price: "$50 + tax", note: "" },
  ];
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="card card-accent-lavender p-6">
              <div className="text-sm text-gray-500">{p.name}</div>
              <div className="mt-1 text-3xl font-extrabold text-hoit-purple">{p.price}</div>
              {p.note && <div className="text-gray-600 mt-1">{p.note}</div>}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="btn btn-lavender mt-6"
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

/* GALLERY on black, 9 tiles */
function Gallery() {
  const imgs = Array.from({ length: 9 }, (_, i) => `/photos/hoit/${i + 1}.jpg`);
  return (
    <section id="gallery" className="section bg-black">
      <div className="container">
        <h2 className="text-3xl font-bold text-hoit-purple mb-6">Photo Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div key={i} className="glass overflow-hidden">
              <img
                src={src}
                alt={`HOIT photo ${i + 1}`}
                className="w-full h-56 object-cover"
                onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = "none"; }}
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
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="glass p-6 text-gray-700">
          <p>Paste your about me here. A short intro on your background, certifications, approach, and what clients can expect.</p>
        </div>
      </div>
    </section>
  );
}

/* POLICIES on black, lavender headings */
function PrivacyPolicy() {
  return (
    <section id="privacy" className="section bg-black">
      <div className="container">
        <h2 className="text-2xl font-bold text-hoit-purple mb-3">Privacy Policy</h2>
        <div className="glass p-6 text-gray-700 space-y-3">
          <p>We collect only the information needed to book and deliver services, such as your name, contact details, and relevant health history that you choose to share. Your information is used to provide care, manage appointments, and communicate with you.</p>
          <p>We keep records securely and do not sell personal data. You may request a copy or correction of your information at any time by emailing <a className="text-hoit-purple" href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog" target="_blank" rel="noopener">our contact form</a>.</p>
          <p>This page is informational and not legal advice.</p>
        </div>
      </div>
    </section>
  );
}

function CancellationPolicy() {
  return (
    <section id="cancellation" className="section bg-black">
      <div className="container">
        <h2 className="text-2xl font-bold text-hoit-purple mb-3">Cancellation Policy</h2>
        <div className="glass p-6 text-gray-700 space-y-3">
          <p>Please provide at least 24 hours notice to cancel or reschedule. Late cancellations or no shows may incur a fee up to the full session rate.</p>
          <p>To cancel, email <a className="text-hoit-purple" href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog" target="_blank" rel="noopener">our contact form</a>.</p>
        </div>
      </div>
    </section>
  );
}

/* CONTACT */
function Contact() {
  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="card card-accent-lavender p-6">
          <h2 className="text-2xl font-bold text-hoit-purple mb-2">Contact</h2>
          <a className="text-hoit-purple hover:underline" href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog" target="_blank" rel="noopener">
            handsonintegrativetherapy@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* BIG LOGO at bottom */
function BrandMark(){
  return (
    <section className="section bg-black">
      <div className="container flex items-center justify-center">
        <img src="/img/hoit-logo.png" alt="HOIT logo" className="h-24 md:h-32" />
      </div>
    </section>
  );
}

/* EXPORTS */
export const Sections = [
  Services,
  Appointments,   // added
  Pricing,
  Gallery,
  About,
  PrivacyPolicy,
  CancellationPolicy,
  Contact,
  BrandMark
];

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-gray-600">© 2018 Hands On Integrative Therapy</div>
    </footer>
  );
}
