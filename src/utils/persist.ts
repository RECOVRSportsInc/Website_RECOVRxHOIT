export function saveBrand(key: string) {
  try { localStorage.setItem("brand", key); } catch {}
}
export function loadBrand(): "recovr" | "hoit" | null {
  try { return (localStorage.getItem("brand") as any) || null; } catch { return null; }
}
