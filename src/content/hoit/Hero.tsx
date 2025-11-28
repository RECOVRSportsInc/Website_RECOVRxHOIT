// src/content/hoit/Hero.tsx

/* HERO – HOIT */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#020617]">
      {/* Soft background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1120] via-[#020617] to-[#0b1120]"
        aria-hidden="true"
      />

      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[#22A1FF]/35 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#0ea5e9]/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container section max-w-5xl">
        {/* Label pill */}
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-[#22A1FF]/40 bg-black/40 backdrop-blur-md text-white/80">
          <span data-no-translate>Hands On Integrative Therapy</span>
        </div>

        {/* Main hero card */}
        <div className="rounded-3xl bg-black/85 border border-[#22A1FF]/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_140px_rgba(34,161,255,0.8)]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_16px_45px_rgba(0,0,0,0.85)]">
            <span className="text-[#22A1FF]">Hands On</span>{" "}
            <span className="text-slate-50">Integrative Therapy</span>
            <span className="block mt-3 text-2xl md:text-3xl text-slate-100">
              Sports medicine and athletic therapy clinic in Montreal
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-100/90">
            Athletic therapy and massage therapy services for all ages with an
            integrative, hands on approach to recovery and performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold bg-[#22A1FF] text-black shadow-[0_18px_60px_rgba(34,161,255,0.85)] hover:shadow-[0_26px_90px_rgba(34,161,255,0.95)] hover:-translate-y-[1px] transition-transform duration-200"
            >
              View Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold border border-[#22A1FF] text-[#22A1FF] bg-black/40 hover:bg-black/70 shadow-[0_0_35px_rgba(34,161,255,0.6)] hover:shadow-[0_0_55px_rgba(34,161,255,0.9)] hover:-translate-y-[1px] transition-transform duration-200"
            >
              Book A Session
            </a>
          </div>
        </div>

        {/* Cross-brand link under card */}
        <div className="mt-6 text-center md:text-right text-xs md:text-sm text-white/75">
          <span>Looking for RECOVR Sports? </span>
          <a
            href="/recovrsports"
            className="font-semibold text-[#22A1FF] hover:text-[#7dd3fc] no-underline transition-colors duration-150"
          >
            Click here
          </a>
        </div>
      </div>
    </section>
  );
}