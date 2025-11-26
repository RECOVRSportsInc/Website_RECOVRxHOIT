// src/content/hoit/Services.tsx

/* SERVICES on white, blue-accent cards */
export function Services() {
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