// src/brand/brands.ts

export type BrandKey = "recovr" | "hoit";

export type BrandNavItem = {
  label: string;
  href: string;
};

export type Brand = {
  key: BrandKey;
  name: string;
  logoSrc?: string;
  logoStyle?: React.CSSProperties;
  nav: BrandNavItem[];
};

export const brands: Record<BrandKey, Brand> = {
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
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Cancellation Policy", href: "#cancellation" },
      { label: "Contact", href: "#contact" },
    ],
  },
};