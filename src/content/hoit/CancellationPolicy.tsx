// src/content/hoit/CancellationPolicy.tsx

/* POLICIES: Cancellation */
export function CancellationPolicy() {
  return (
    <section id="cancellation" className="section bg-[#3db0fc]">
      <div className="container">
        <h2 className="text-2xl font-bold text-black">Cancellation Policy</h2>
        <div className="card card-accent-blue p-6 text-white space-y-3">
          <p>
            Please provide at least 24 hours notice to cancel or reschedule. Late
            cancellations or no shows may incur a fee up to the full session rate.
          </p>
          <p>
            To cancel, please complete{" "}
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
        </div>
      </div>
    </section>
  );
}