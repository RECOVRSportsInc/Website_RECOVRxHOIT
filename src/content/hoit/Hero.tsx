// src/content/hoit/Hero.tsx

/* HERO */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#0b1020]">
      {/* Faded clinic photo in the background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/img/hoit-clinic-1.jpg"
          alt=""
          className="w-full h-full object-cover"
          data-no-translate
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/80 to-[#020617]/95" />
      </div>

      {/* Subtle glow blobs in HOIT blue */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[#3db0fc]/22 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#22A1FF]/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Content card */}
      <div className="relative container section max-w-5xl">
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-[#3db0fc]/40 bg-black/40 backdrop-blur-md text-white/80">
          <span data-no-translate>Hands On Integrative Therapy</span>
        </div>

        <div className="rounded-3xl bg-black/85 border border-[#3db0fc]/40 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_140px_rgba(61,176,252,0.8)]">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_16px_45px_rgba(0,0,0,0.85)]">
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
              href="https://calendar.app.google/frgQtD5a3P7Z3t1r6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold bg-[#f3bd3e] text-black shadow-[0_18px_60px_rgba(243,189,62,0.85)] hover:shadow-[0_26px_90px_rgba(243,189,62,0.95)] hover:-translate-y-[1px] transition-transform duration-200"
            >
              Book A Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}