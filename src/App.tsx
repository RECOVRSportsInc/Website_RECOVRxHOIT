import React from "react";
import { BrandProvider } from "./brand/BrandContext";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Home from "./pages/Home";

function AppInner() {
  return (
    <Theme>
      <Navbar />
      <main className="pt-20">
        <Home />
      </main>
    </Theme>
  );
}

export default function App() {
  return (
    <BrandProvider>
      <AppInner />
    </BrandProvider>
  );
}
