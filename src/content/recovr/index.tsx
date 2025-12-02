// src/content/recovr/index.tsx

import { Hero } from "./Hero";
import { Programs } from "./Programs";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";
import { BrandMark } from "./Brandmark";
import { FAQ } from "./FAQ";
import { Affiliations } from "./Affiliations";
import { Blog } from "./Blog";

export { Hero };

// order = how sections render under the hero
export const Sections = [
  Affiliations, // <- NEW: right after the hero
  Programs,
  Gallery,
  Contact,
  FAQ,
  Blog,
  BrandMark,
];

export { Footer } from "./Footer";