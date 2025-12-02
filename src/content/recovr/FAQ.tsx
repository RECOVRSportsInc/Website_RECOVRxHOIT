// src/content/recovr/FAQ.tsx

/* FAQ for RECOVR Sports */
export function FAQ() {
  const faqs = [
    {
      q: "What is RECOVR Sports?",
      a: "RECOVR Sports is a virtual reality sports rehab lab in Montreal that combines VR technology with sports medicine to help people recover from injuries and train in an engaging way.",
    },
    {
      q: "Is VR rehabilitation safe?",
      a: "Yes, VR sessions are supervised and designed with graded exposure and activity levels. Movements and intensity are adapted to your current injury, your goals, and any medical advice you have received.",
    },
    {
      q: "Do I need experience with virtual reality?",
      a: "No VR experience is required. You will be guided through how to use the headset and controllers, and sessions start with simple movements before progressing to more complex tasks.",
    },
    {
      q: "Can teams or groups book the space?",
      a: "Yes, the RECOVR Sports lab can be booked for teams, small groups, or private training blocks. Use the Book the Space button to request a time and share a bit about your group.",
    },
  ];

  return (
    <section id="faq-recovr" className="section bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-[#f3bd3e]">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.7)] transition hover:shadow-[0_24px_80px_rgba(0,0,0,0.9)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-base font-semibold text-slate-50 marker:hidden">
                <span>{item.q}</span>
                <span className="shrink-0 rounded-full border border-slate-600 px-2 py-0.5 text-xs text-slate-400 group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-200/90">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}