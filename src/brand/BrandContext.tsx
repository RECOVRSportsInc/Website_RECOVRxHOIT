// src/brand/BrandContext.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BRANDS, type BrandKey, type BrandConfig } from "./brands";

type BrandContextValue = {
  brand: BrandConfig;
  setBrandPath: (key: BrandKey) => void;
};

const BrandContext = createContext<BrandContextValue | undefined>(undefined);

// Decide brand based on the current path
function getInitialBrandKey(): BrandKey {
  if (typeof window === "undefined") {
    return "recovr";
  }
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith("/hoit")) return "hoit";
  return "recovr";
}

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brandKey, setBrandKey] = useState<BrandKey>(() => getInitialBrandKey());

  // Keep brandKey in sync with URL on first mount
  useEffect(() => {
    const current = getInitialBrandKey();
    if (current !== brandKey) {
      setBrandKey(current);
    }
  }, []);

  const value = useMemo<BrandContextValue>(
    () => ({
      brand: BRANDS[brandKey],
      setBrandPath: (key: BrandKey) => {
        setBrandKey(key);
      },
    }),
    [brandKey]
  );

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
}

export function useBrand(): BrandContextValue {
  const ctx = useContext(BrandContext);
  if (!ctx) {
    throw new Error("useBrand must be used inside BrandProvider");
  }
  return ctx;
}

// re-export types for convenience if you need them elsewhere
export type { BrandKey, BrandConfig };