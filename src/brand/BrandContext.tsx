// src/brand/BrandContext.tsx

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { brands, type Brand, type BrandKey } from "./brands";

type Ctx = {
  brand: Brand;
};

const BrandContext = createContext<Ctx | undefined>(undefined);

function getBrandFromLocation(): Brand {
  if (typeof window === "undefined") {
    return brands.recovr;
  }
  const path = window.location.pathname || "/";
  const key: BrandKey = path.startsWith("/hoit") ? "hoit" : "recovr";
  return brands[key];
}

export function BrandProvider({ children }: { children: ReactNode }) {
  const brand = useMemo(() => getBrandFromLocation(), []);
  return (
    <BrandContext.Provider value={{ brand }}>{children}</BrandContext.Provider>
  );
}

export function useBrand(): Ctx {
  const ctx = useContext(BrandContext);
  if (!ctx) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return ctx;
}

export type { Brand, BrandKey, Ctx as BrandContextValue };