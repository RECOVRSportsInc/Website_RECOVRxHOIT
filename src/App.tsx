// src/App.tsx
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <Theme>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Home />
      </div>
    </Theme>
  );
}