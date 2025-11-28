// src/pages/Home.tsx
import type { ReactNode } from "react";
import { useBrand } from "../brand/BrandContext";
import * as Hoit from "../content/hoit";
import * as Recovr from "../content/recovr";
import BackToTop from "../components/BackToTop";

type SectionComponent = () => ReactNode;

export default function Home() {
  const { brand } = useBrand();
  const Content = brand.key === "hoit" ? Hoit : Recovr;

  const Sections = Content.Sections as SectionComponent[];

  return (
    <main className="pt-20">
      <Content.Hero />
      {Sections.map((Section, idx) => (
        <Section key={idx} />
      ))}
      <Content.Footer />

      {/* Floating back to top button */}
      <BackToTop />
    </main>
  );
}