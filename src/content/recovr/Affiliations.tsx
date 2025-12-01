export function Affiliations() {
  return (
    <section className="bg-white border-t border-black/5">
      <div className="container mx-auto flex flex-col items-center pt-3 pb-1 md:pt-4 md:pb-2">
        <p className="text-[0.8rem] md:text-[1rem] tracking-[0.3em] md:tracking-[0.45em] uppercase text-black mb-2 md:mb-3 font-bold">
          Affiliated with
        </p>
        <img
          src="/img/AffliationsS.png"
          alt="Affiliated organizations"
          className="max-w-[900px] w-full h-auto opacity-90 hover:opacity-100 transform hover:scale-[1.02] transition-all duration-300"
          data-no-translate
        />
      </div>
    </section>
  );
}