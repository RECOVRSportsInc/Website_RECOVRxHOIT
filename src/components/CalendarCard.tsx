import React from "react";

type Props = {
  /** Google “appointments/schedules/...” embed URL (optional) */
  embedUrl?: string;
  /** Booking link to open in a new tab as a fallback */
  linkUrl: string;
};

export default function CalendarCard({ embedUrl, linkUrl }: Props) {
  return (
    <section className="section bg-black">
      <div className="container">
        <div className="card card-accent-lavender p-6">
          <h2 className="text-2xl font-bold text-white mb-3" data-no-translate>
            Book a time
          </h2>

          {embedUrl ? (
            <div className="w-full overflow-hidden rounded-xl bg-white">
              <iframe
                src={embedUrl}
                width="100%"
                height={700}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bookings"
              />
            </div>
          ) : (
            <p className="text-white">
              Use the booking link{" "}
              <a
                className="underline"
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          )}

          <p className="text-white/70 text-sm mt-3">
            If the calendar does not appear, open the booking link above.
          </p>
        </div>
      </div>
    </section>
  );
}
