// src/i18n/persist.ts

// Small safe helpers around localStorage. Currently optional,
// but you can use these from i18n code if you want.

export function safeGetItem(key: string): string | null {
  try {
    if (typeof window === "undefined") return null;
    if (!("localStorage" in window)) return null;
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window === "undefined") return;
    if (!("localStorage" in window)) return;
    window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}