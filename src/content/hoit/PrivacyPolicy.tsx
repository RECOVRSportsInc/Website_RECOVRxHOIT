// src/content/hoit/PrivacyPolicy.tsx

/* POLICIES: Privacy */
export function PrivacyPolicy() {
  return (
    <section id="privacy" className="section bg-white">
      <div className="container">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: "#3db0fc" }}
        >
          Privacy Policy
        </h2>
        <div className="card card-accent-blue p-6 text-white space-y-3">
          <p>
            We collect only the information needed to book and deliver services, such
            as your name, contact details, and relevant health history that you choose
            to share. Your information is used to provide care, manage appointments,
            and communicate with you.
          </p>
          <p>
            We keep records securely and do not sell personal data. You may request a
            copy or correction of your information at any time by completing{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4b6NvhOdPmc_YTL53DNUEQDVhtrC1Fb1ZX62hPE9V0hyeXQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener"
              style={{ color: "#3db0fc" }}
            >
              our contact form
            </a>
            .
          </p>
          <p>This page is informational and not legal advice.</p>
        </div>
      </div>
    </section>
  );
}