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

// Decide which brand to show based on the URL
function detectInitialBrand(): BrandKey {
  if (typeof window === "undefined") return "hoit";

  const path = window.location.pathname.toLowerCase();

  // Any URL that starts with /recovrsports is RECOVR
  if (path.startsWith("/recovrsports")) {
    return "recovr";
  }

  // Everything else (including "/") is HOIT
  return "hoit";
}

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [currentKey, setCurrentKey] = useState<BrandKey>(() => detectInitialBrand());

  // Keep brand in sync if the user lands directly on a path
  useEffect(() => {
    setCurrentKey(detectInitialBrand());
  }, []);

  const value = useMemo(
    () => ({
      brand: BRANDS[currentKey],
      setBrandPath: (key: BrandKey) => {
        const href = key === "hoit" ? "/" : "/recovrsports";
        window.location.href = href;
      },
    }),
    [currentKey]
  );

  return (
    <BrandContext.Provider value={value}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand(): BrandContextValue {
  const ctx = useContext(BrandContext);
  if (!ctx) {
    throw new Error("useBrand must be used inside IBrandProvider");
  }
  return ctx;
}