// src/content/hoit/Contact.tsx

/* CONTACT */
export function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="card card-accent-blue p-6">
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: "#3db0fc" }}
          >
            Contact
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener"
            style={{ color: "#3db0fc" }}
            className="hover:underline"
          >
            handsonintegrativetherapy@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}