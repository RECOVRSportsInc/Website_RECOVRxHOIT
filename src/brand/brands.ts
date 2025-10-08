import type { ComponentType, CSSProperties } from "react";
import * as recovr from "../content/recovr";
import * as hoit from "../content/hoit";

export type BrandKey = "recovr" | "hoit";

export type BrandConfig = {
  key: BrandKey;
  name: string;
  logoSrc?: string;
  logoStyle?: CSSProperties;
  colors: { primaryText: string; primaryBg: string; accent: string };
  nav: { label: string; href: string }[];
  Hero: ComponentType;
  Sections: ComponentType[];
  Footer: ComponentType;
};

export const BRANDS: Record<BrandKey, BrandConfig> = {
  recovr: {
    key: "recovr",
    name: "RECOVR Sports",
    logoSrc: "/img/recovr-logo.png",
    logoStyle: { height: 28 },
    colors: { primaryText: "text-recovr-blue", primaryBg: "bg-recovr-navy", accent: "from-recovr-blue to-recovr-light" },
    nav: [{ label: "Home", href: "#" }, { label: "Programs", href: "#programs" }, { label: "Contact", href: "#contact" }],
    Hero: recovr.Hero,
    Sections: recovr.Sections,
    Footer: recovr.Footer
  },
  hoit: {
    key: "hoit",
    name: "Hands On Integrative Therapy",
    logoSrc: "/img/hoit-logo.png",
    logoStyle: { height: 30 },
    colors: { primaryText: "text-hoit-purple", primaryBg: "bg-hoit-navy", accent: "from-hoit-purple to-hoit-light" },
    nav: [{ label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "Contact", href: "#contact" }],
    Hero: hoit.Hero,
    Sections: hoit.Sections,
    Footer: hoit.Footer
  }
};

export const DEFAULT_BRAND: BrandKey = "recovr";
