// src/brand/brands.ts
import type { CSSProperties } from "react";

export type BrandKey = "hoit" | "recovr";

export type NavItem = {
  label: string;
  href: string;
};

export type BrandConfig = {
  key: BrandKey;
  name: string;
  logoSrc?: string;
  logoStyle?: CSSProperties;
  nav: NavItem[];
};

export const BRANDS: Record<BrandKey, BrandConfig> = {
  hoit: {
    key: "hoit",
    name: "Hands On Integrative Therapy",
    logoSrc: "/img/hoit-logo.png",
    logoStyle: {
      height: 28,
    },
    nav: [
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Photo Gallery", href: "#gallery" },
      { label: "About Me", href: "#about" },
      // privacy + cancellation removed from navbar as you asked
      { label: "Contact", href: "#contact" },
    ],
  },

  recovr: {
    key: "recovr",
    name: "RECOVR Sports",
    logoSrc: "/img/recovr-logo.png",
    logoStyle: {
      height: 28,
    },
    nav: [
      { label: "Programs", href: "#programs" },
      { label: "Photo Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
};