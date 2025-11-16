// src/components/CalendarCard.tsx

type Props = {
  // Google “Appointments / Schedules” embed URL
  embedUrl?: string;
  // Fallback booking link
  linkUrl: string;
};

export default function CalendarCard({ embedUrl, linkUrl }: Props) {
  return (
    <section className="section bg-black">
      <div className="container">
        <div className="card card-accent-lavender p-6">
          <h2
            className="text-2xl font-bold text-white mb-3"
            data-no-translate
          >
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
          ) : null}

          <p className="text-white mt-4 text-sm">
            If the calendar does not appear, open the booking link{" "}
            <a
              className="underline"
              href={linkUrl}
              target="_blank"
              rel="noopener"
            >
              here / ici
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
