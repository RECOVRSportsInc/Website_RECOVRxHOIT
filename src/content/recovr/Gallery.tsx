// src/content/recovr/Gallery.tsx

/* GALLERY on gold */
export function Gallery() {
  const imgs = Array.from(
    { length: 9 },
    (_, i) => `/photos/recovr/${i + 1}.jpg`,
  );

  return (
    <section id="gallery" className="section bg-[#f3bd3e]">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#000000" }}>
          Photo Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <div
              key={i}
              className="card card-accent-blue overflow-hidden rounded-3xl hover:-translate-y-1 hover:shadow-2xl transition-transform duration-200"
            >
              <img
                src={src}
                alt={`RECOVR photo ${i + 1}`}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).style.display =
                    "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}