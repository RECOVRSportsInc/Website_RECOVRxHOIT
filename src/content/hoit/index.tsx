// src/content/hoit/index.tsx

import { Hero } from "./Hero";
import { Services } from "./Services";
import { Pricing } from "./Pricing";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { CancellationPolicy } from "./CancellationPolicy";
import { Contact } from "./Contact";
import { BrandMark } from "./BrandMark";

export { Hero };

/* EXPORTS used elsewhere in the app */
export const Sections = [
  Services,
  Pricing,
  Gallery,
  About,
  PrivacyPolicy,
  CancellationPolicy,
  Contact,
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