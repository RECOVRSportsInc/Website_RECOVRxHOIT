/* RECOVR content */

export function Hero() {
  return (
    <section className="section-shell section-muted pt-28 md:pt-32">
      <div className="section-inner animate-fade-up-soft">
        <p className="subheading mb-4" data-no-translate>
          RECOVR Sports Lab
        </p>
        <h1 className="display-title text-4xl md:text-6xl text-white leading-tight">
          <span className="recovr-underline text-recovr-blue">
            RECOVR Sports
          </span>{" "}
          training &amp; recovery
        </h1>

        <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200/80">
          High performance training, VR experiences, video analysis, and
          biomechanics support for athletes and active people.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#programs" className="btn-primary-3d">
            Explore programs
          </a>
          <a href="#contact" className="btn-ghost-soft">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

/* PROGRAMS on black, blue heading */
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
    <section id="programs" className="section-shell section-light">
      <div className="section-inner">
        <h2 className="display-title text-3xl md:text-4xl text-center mb-8 text-slate-900">
          Programs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 staggered">
          {items.map((it) => (
            <div key={it.title} className="card-elevated p-5">
              <h3 className="font-semibold text-white">{it.title}</h3>
              <p className="text-gray-200 mt-1 text-sm leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* GALLERY on baby blue */
function Gallery() {
  const imgs = Array.from(
    { length: 9 },
    (_, i) => `/photos/recovr/${i + 1}.jpg`,
  );
  return (
    <section id="gallery" className="section bg-[#EAF4FF] text-slate-900">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Photo Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 staggered">
          {imgs.map((src, i) => (
            <div key={i} className="card-soft overflow-hidden bg-white">
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

/* CONTACT on black, card with blue accent */
function Contact() {
  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="card-elevated p-6">
          <h2 className="text-2xl font-bold text-recovr-blue mb-2">Contact</h2>
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

/* BOTTOM LOGO: black band with a white card behind the logo */
function BrandMark() {
  return (
    <section className="section bg-black">
      <div className="container flex items-center justify-center">
        <div className="card-soft p-6 bg-white">
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
  return (
    <footer className="py-10 border-t border-slate-800 bg-black">
      <div className="container text-sm text-slate-400">
        © 2024 RECOVR Sports
      </div>
    </footer>
  );
}