// src/content/hoit/Hero.tsx

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
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-hoit-mint/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#f3bd3e]/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Content card */}
      <div className="relative container section max-w-5xl">
        {/* Label pill */}
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-white/15 bg-black/20 backdrop-blur-md text-white/70">
          <span data-no-translate>Hands On Integrative Therapy</span>
        </div>

        {/* Main bubble, dark like RECOVR with neon edge */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] relative overflow-hidden">
          {/* Neon blue / gold accent line */}
          <div className="pointer-events-none absolute -top-px left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-[#3db0fc] via-[#f3bd3e] to-[#3db0fc] opacity-85" />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.6)]">
            <span className="text-[#3db0fc]">Hands On</span>{" "}
            <span>Integrative Therapy</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200/85">
            Athletic therapy and massage therapy services for all ages with an
            integrative, hands on approach to recovery and performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Secondary: View services, dark pill with blue border */}
            <a
              href="#services"
              className={[
                "inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3",
                "text-sm md:text-base font-semibold",
                "bg-black/70 text-white border border-[#3db0fc]/70",
                "shadow-[0_12px_30px_rgba(0,0,0,0.7)]",
                "hover:bg-black",
                "transition-colors",
              ].join(" ")}
            >
              View Services
            </a>

            {/* Primary: gold Book A Session with pop + glow, opens calendar */}
            <a
              href="https://calendar.app.google/frgQtD5a3P7Z3t1r6"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3",
                "text-sm md:text-base font-semibold text-black",
                "bg-[#f3bd3e]",
                "shadow-[0_18px_40px_rgba(243,189,62,0.8)]",
                "hover:shadow-[0_26px_70px_rgba(243,189,62,0.95)]",
                "hover:-translate-y-[1px]",
                "transition-transform duration-200",
              ].join(" ")}
            >
              Book A Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}