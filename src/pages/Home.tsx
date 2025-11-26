// src/pages/Home.tsx
import { useEffect, type ReactNode } from "react";
import { useBrand } from "../brand/BrandContext";
import * as Hoit from "../content/hoit";
import * as Recovr from "../content/recovr";

type SectionComponent = () => ReactNode;

export default function Home() {
  const { brand } = useBrand();
  const Content = brand.key === "hoit" ? Hoit : Recovr;
  const Sections = Content.Sections as SectionComponent[];

  // Set document title based on current brand
  useEffect(() => {
    if (brand.key === "hoit") {
      document.title =
        "Hands On Integrative Therapy | Athletic Therapy and Massage in Montreal";
    } else {
      document.title =
        "RECOVR Sports | VR Rehab and Performance Lab in Montreal";
    }
  }, [brand.key]);

  return (
    <main className="pt-20">
      <Content.Hero />
      {Sections.map((Section, idx) => (
        <Section key={idx} />
      ))}
      <Content.Footer />
    </main>
  );
}