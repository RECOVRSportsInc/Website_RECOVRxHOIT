// src/content/hoit/BrandMark.tsx

/* BIG LOGO at bottom */
export function BrandMark() {
  return (
    <section className="section bg-[#3db0fc]">
      <div className="container flex items-center justify-center">
        <img
            src="/img/hoit-logo.png"
            alt="Hands On Integrative Therapy logo"
            className="h-16 md:h-20"
            data-no-translate
        />
      </div>
    </section>
  );
}