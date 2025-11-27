//
// src/content/hoit/index.tsx

import { Hero } from "./Hero";
import { Services } from "./Services";
import { Pricing } from "./Pricing";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { Contact } from "./Contact";
import { BrandMark } from "./BrandMark";
import { FAQ } from "./FAQ"; // <- add this

export { Hero };

export const Sections = [
  Services,
  Pricing,
  Gallery,
  About,
  Contact,
  FAQ,       // <- add it where you want it to appear
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