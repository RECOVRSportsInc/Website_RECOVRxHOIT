// src/content/recovr/Programs.tsx

/* PROGRAMS on white, blue-accent cards + big Book the Space button */
export function Programs() {
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
    <section id="programs" className="pt-10 pb-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#000000" }}>
          Programs
        </h2>

        {/* Program cards */}
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

        {/* One big full-width booking button */}
        <div className="mt-10">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29FC-SKHVnIw6hdITjVxxPhbnWI-LV7ISC5lhb-w-0SvvXhkRMNApyAD1buSYv6ckbYf-0733X?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex w-full items-center justify-center rounded-full px-8 py-4",
              "text-base font-semibold text-black",
              "bg-[#f3bd3e]", // RECOVR gold
              "shadow-[0_18px_40px_rgba(0,0,0,0.55)]",
              "hover:shadow-[0_26px_70px_rgba(0,0,0,0.7)]",
              "hover:-translate-y-[1px]",
              "transition-transform duration-200",
            ].join(" ")}
          >
            Book the Space
          </a>
        </div>
      </div>
    </section>
  );
}