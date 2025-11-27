// src/content/recovr/Hero.tsx

/* HERO */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-[#f3bd3e]">
      {/* Faded field / action photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
            src="/img/recovr-space-1.jpg"
            alt="RECOVR Sports virtual reality rehab and sports performance lab in Montreal"
            className="w-full h-full object-cover"
            data-no-translate
            aria-hidden="true"
        />
        {/* Darken with warm gold tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020]/85 via-[#000000]/70 to-[#f3bd3e]/35" />
      </div>

      {/* Subtle glow blobs */}
      <div
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[#22A1FF]/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#f3bd3e]/25 blur-3xl"
        aria-hidden="true"
      />

      {/* Content card */}
      <div className="relative container section max-w-5xl">
        {/* Pill label */}
        <div className="inline-flex items-center px-4 py-1 mb-6 text-[0.7rem] tracking-[0.2em] uppercase rounded-full border border-white/15 bg-black/20 backdrop-blur-md text-white/70">
          <span data-no-translate>RECOVR Sports Lab</span>
        </div>

        {/* Main bubble, matched to HOIT but tuned for gold / neon blue */}
        <div className="rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] relative overflow-hidden">
          {/* Neon blue edge accent */}
          <div className="pointer-events-none absolute -top-px left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-[#22A1FF] via-[#f3bd3e] to-[#22A1FF] opacity-80" />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.7)]">
            <span className="text-[#f3bd3e]">RECOVR</span>{" "}
            <span>Sports</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-200/85">
            Using Virtual Reality to reduce pain, engage, track and recover
            faster from injuries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary: neon blue with glow */}
            <a
              href="#programs"
              className={[
                "inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3",
                "text-sm md:text-base font-semibold",
                "bg-[#f3bd3e] text-black",
                "shadow-[0_18px_40px_rgba(34,161,255,0.7)]",
                "hover:shadow-[0_26px_70px_rgba(34,161,255,0.9)]",
                "hover:-translate-y-[1px]",
                "transition-transform duration-200",
              ].join(" ")}
            >
              Explore Programs
            </a>

            {/* Secondary: transparent with blue border and gold text */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 md:px-8 py-3 text-sm md:text-base font-semibold border border-[#f3bd3e] text-[#f3bd3e] bg-black/30 hover:bg-black/60 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}