import { useBrand } from "../brand/BrandContext";

export default function Home() {
  const { brand } = useBrand();
  const Hero = brand.Hero;
  const Footer = brand.Footer;
  return (
    <>
      <Hero />
      {brand.Sections.map((S, i) => (
        <S key={i} />
      ))}
      <Footer />
    </>
  );
}
