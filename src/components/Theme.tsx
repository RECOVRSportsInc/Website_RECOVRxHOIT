// src/components/Theme.tsx
import type { ReactNode } from "react";
import { I18nProvider } from "../i18n/useI18n";
import { BrandProvider } from "../brand/BrandContext";

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <BrandProvider>{children}</BrandProvider>
    </I18nProvider>
  );
}