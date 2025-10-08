import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { BRANDS, type BrandKey, type BrandConfig } from "./brands";

type Ctx = { brand: BrandConfig; setBrandPath: (k: BrandKey) => void };
const BrandCtx = createContext<Ctx>({ brand: BRANDS.recovr, setBrandPath: () => {} });

function brandFromPath(p: string): BrandKey {
  return p.startsWith("/hoit") ? "hoit" : "recovr";
}

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [key, setKey] = useState<BrandKey>(brandFromPath(window.location.pathname));

  useEffect(() => {
    const onPop = () => setKey(brandFromPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const setBrandPath = (k: BrandKey) => {
    const path = k === "hoit" ? "/hoit" : "/";
    if (window.location.pathname !== path) window.history.pushState({}, "", path);
    setKey(k);
  };

  const value = useMemo(() => ({ brand: BRANDS[key], setBrandPath }), [key]);
  return <BrandCtx.Provider value={value}>{children}</BrandCtx.Provider>;
};

export const useBrand = () => useContext(BrandCtx);
