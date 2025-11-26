// src/content/hoit/Pricing.tsx

/* PRICING */
export function Pricing() {
  const plans = [
    {
      name: "AT / Massage Consult",
      price: "$150 + tax",
      note: "First appointment only for new clients",
    },
    { name: "AT / Massage 30 Minutes", price: "$100 + tax", note: "" },
    { name: "AT / Massage 45 Minutes", price: "$115 + tax", note: "" },
    { name: "AT / Massage 60 Minutes", price: "$130 + tax", note: "" },
    { name: "AT / Massage 90 Minutes", price: "$160 + tax", note: "" },
    { name: "Phone Consult", price: "$50 + tax", note: "" },
  ];

  return (
    <section id="pricing" className="section bg-[#3db0fc]">
      <div className="container">
        <h2 className="text-3xl font-bold text-black">Pricing</h2>

        {/* Cards (no individual buttons) */}
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className="card card-accent-blue p-6 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
              <div className="text-sm text-white/80">{p.name}</div>
              <div className="mt-1 text-3xl font-extrabold text-white">
                {p.price}
              </div>
              {p.note && <div className="text-white/70 mt-1">{p.note}</div>}
            </div>
          ))}
        </div>

        {/* One big full width button under cards */}
        <div className="mt-10">
          <a
            href="https://calendar.app.google/frgQtD5a3P7Z3t1r6"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "inline-flex w-full items-center justify-center rounded-full px-8 py-4",
              "text-base font-semibold text-black",
              // same blue as BrandSwitch hoitClasses: #22A1FF
              "bg-[#f3bd3e]",
              // 3D pop effect
              "shadow-[0_18px_40px_rgba(0,0,0,0.55)]",
              "hover:shadow-[0_26px_70px_rgba(0,0,0,0.7)]",
              "hover:-translate-y-[1px]",
              "transition-transform duration-200",
            ].join(" ")}
          >
            Book A Session
          </a>
        </div>
      </div>
    </section>
  );
}