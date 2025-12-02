// src/content/hoit/index.tsx

import { Hero } from "./Hero";
import { Services } from "./Services";
import { Pricing } from "./Pricing";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { Contact } from "./Contact";
import { BrandMark } from "./BrandMark";
import { FAQ } from "./FAQ"; // <- existing
import { Affiliations } from "./Affiliations";
import { Blog } from "./Blog";

export { Hero };

// order = how the sections show up under the hero
export const Sections = [
  Affiliations, 
  Services,
  Pricing,
  Gallery,
  About,
  Contact,
  FAQ,
  Blog,
  BrandMark,
];

export function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container text-sm text-white space-y-3">
        © 2018 Hands On Integrative Therapy
      </div>
    </footer>
  );
}