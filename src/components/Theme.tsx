import React from "react";

export default function Theme({ children }: { children: React.ReactNode }) {
  // Baby-blue page background for both HOIT and RECOVR
  return (
    <div className="min-h-screen bg-[#EAF4FF]">
      {children}
    </div>
  );
}
