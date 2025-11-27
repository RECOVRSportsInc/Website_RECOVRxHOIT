// src/content/recovr/index.tsx

import { Hero } from "./Hero";
import { Programs } from "./Programs";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";
import { BrandMark } from "./Brandmark";
import { FAQ } from "./FAQ"; // <- new

export { Hero };

export const Sections = [Programs, Gallery, Contact, FAQ, BrandMark];

export { Footer } from "./Footer";