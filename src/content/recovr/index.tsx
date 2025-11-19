// src/content/recovr/index.tsx

/* HERO */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#634d1b]">
      {/* Faded stadium / action photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/img/recovr-field.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
          data-no-translate
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020]/100 via-[#f3bd3e]/5 to-[#0b1020/105" />
      </div>

      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[#ff7cf5]/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#0431b8]/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Content card */}
      <div className="relative container section max-w-5xl">
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-white/20 bg-black/25 backdrop-blur-md text-white/75">
          <span data-no-translate>RECOVR Sports Lab</span>
        </div>

        <div className="rounded-3xl bg-[#121723]/88 border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_120px_rgba(15,23,42,0.95)]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#f3bd3e] drop-shadow-[0_14px_40px_rgba(0,0,0,0.7)]">
            RECOVR SPORTS
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-100/90">
            Using Virtual Reality to reduce pain, engage, track and recover
            faster from injuries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold shadow-[0_18px_60px_rgba(243,189,62,0.65)]"
              style={{ backgroundColor: "#f3bd3e", color: "#000000" }}
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold border bg-black/30 hover:bg-black/50 transition-colors"
              style={{ borderColor: "#f3bd3e", color: "#f3bd3e" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* PROGRAMS on black, blue heading and blue-accent cards */
function Programs() {
  const items = [
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
      desc: "Guided VR environments for breathing, de stressing, and nervous system down regulation.",
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
    <section id="programs" className="section bg-white">
      <div className="container">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#000000" }}
        >
          Programs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

/* GALLERY on gold */
function Gallery() {
  const imgs = Array.from({ length: 9 }, (_, i) => `/photos/recovr/${i + 1}.jpg`);
  return (
    <section id="gallery" className="section bg-[#f3bd3e]">
      <div className="container">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#000000" }}
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

/* CONTACT on black, blue accent card */
function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="card card-accent-blue p-6">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: "#f3bd3e" }}
          >
            Contact
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfsj5KsvXK2JjXY1SkWW7uzD00inFBp5wkv7eYl2Wb2lIjqRQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener"
            className="hover:underline"
            style={{ color: "#f3bd3e" }}
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
    <section className="section bg-recovr-gold flex justify-center">
      <img
         src="/img/recovr-logo.png"
        alt="RECOVR Sports"
         className="h-20 md:h-28"
      />
    </section>
  );
}

/* EXPORTS */
export const Sections = [Programs, Gallery, Contact, BrandMark];

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-white-600">
        © 2024 RECOVR Sports
      </div>
    </footer>
  );
}