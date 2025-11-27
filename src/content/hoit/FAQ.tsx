// src/content/hoit/FAQ.tsx

/* FAQ for HOIT */
export function FAQ() {
  const faqs = [
    {
      q: "What conditions do you treat?",
      a: "Athletic therapy and massage therapy at HOIT can help with sport injuries, sprains and strains, back and neck pain, postural issues, overuse injuries, and recovery after surgery or immobilization.",
    },
    {
      q: "Do I need a doctor's referral?",
      a: "You do not need a doctor's referral to book a session. Some insurance plans may require a prescription for reimbursement, so it is a good idea to check with your provider.",
    },
    {
      q: "What should I wear to my appointment?",
      a: "Wear comfortable clothing that allows you to move easily, such as shorts, leggings, and a t shirt or tank top. You may be asked to expose the area being treated so it can be assessed properly.",
    },
    {
      q: "Where are you located?",
      a: "Hands On Integrative Therapy is located at 202 Rue Saint Zotique O, Suite C100 in Montreal, close to Outremont and Mile End.",
    },
  ];

  return (
    <section id="faq-hoit" className="section bg-white">
      <div className="container max-w-4xl">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ color: "#3db0fc" }}
        >
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 shadow-sm transition hover:shadow-lg"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 text-base font-semibold text-slate-900 marker:hidden">
                <span>{item.q}</span>
                <span className="shrink-0 rounded-full border border-slate-300 px-2 py-0.5 text-xs text-slate-500 group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}