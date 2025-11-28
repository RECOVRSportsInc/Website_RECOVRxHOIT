// src/content/recovr/Hero.tsx

/* HERO – RECOVR */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#0b1020]">
      {/* Faded stadium / action photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/img/recovr-field.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
          data-no-translate
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/80 to-[#020617]/95" />
      </div>

      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[#f3bd3e]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#22A1FF]/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container section max-w-5xl">
        {/* Small lab label pill (top only) */}
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-[#22A1FF]/40 bg-black/40 backdrop-blur-md text-white/80">
          <span data-no-translate>RECOVR Sports Lab</span>
        </div>

        {/* Main hero card */}
        <div className="rounded-3xl bg-black/85 border border-[#22A1FF]/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_140px_rgba(34,161,255,0.8)]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_16px_45px_rgba(0,0,0,0.85)]">
            <span className="text-[#f3bd3e]">RECOVR</span>{" "}
            <span className="text-slate-50">SPORTS</span>
            <span className="block mt-3 text-2xl md:text-3xl text-slate-100">
              Virtual reality sports rehab lab in Montreal
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-100/90">
            Using Virtual Reality to reduce pain, engage, track and recover
            faster from injuries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold bg-[#f3bd3e] text-black shadow-[0_18px_60px_rgba(243,189,62,0.85)] hover:shadow-[0_26px_90px_rgba(243,189,62,0.95)] hover:-translate-y-[1px] transition-transform duration-200"
            >
              Explore Programs
            </a>
            <a
              href="https://calendar.app.google/2zL7FqkZmEQTwnKZ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold border border-[#f3bd3e] text-[#f3bd3e] bg-black/40 hover:bg-black/70 shadow-[0_0_35px_rgba(34,161,255,0.6)] hover:shadow-[0_0_55px_rgba(34,161,255,0.9)] hover:-translate-y-[1px] transition-transform duration-200"
            >
              Book the Space
            </a>
          </div>
        </div>

        {/* Cross-brand link under card */}
        <div className="mt-6 text-center md:text-right text-xs md:text-sm text-white/75">
          <span>Looking for Hands On Integrative Therapy? </span>
          <a
            href="/"
            className="font-semibold text-[#f3bd3e] hover:text-[#ffd368] no-underline transition-colors duration-150"
          >
            Click here
          </a>
        </div>
      </div>
    </section>
  );
}