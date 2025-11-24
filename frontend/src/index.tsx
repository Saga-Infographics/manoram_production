import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Biography } from "./screens/Biography";
import { Portfolio } from "./screens/Portfolio";
import { Contact } from "./screens/Contact";
import { Services } from "./screens/Services";
import Analytics from "./lib/analytics";
import ConsentBanner from "./components/ConsentBanner/ConsentBanner";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <ConsentBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Biography />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
