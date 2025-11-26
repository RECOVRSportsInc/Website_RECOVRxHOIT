// src/NotFound.tsx
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | RECOVR / HOIT";
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="text-center px-6">
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-2">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Page not found
        </h1>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          The page you were looking for does not exist. Use the navigation
          above to return to HOIT or RECOVR.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-slate-100 text-slate-900 hover:bg-white transition"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}