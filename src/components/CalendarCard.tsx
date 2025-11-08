import React from "react";

type Props = {
  embedUrl?: string; // Google “appointments/schedules/...” embed URL
  linkUrl: string;   // your booking link (fallback button)
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
                height="700"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bookings"
              />
            </div>
          ) : (
            <p className="text-white">
              Use the booking link{" "}
              <a className="underline" href={linkUrl} target="_blank" rel="noopener">
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ29FC-SKHVnIw6hdITjVxxPhbnWI-LV7ISC5lhb-w-0SvvXhkRMNApyAD1buSYv6ckbYf-0733X?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>
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
