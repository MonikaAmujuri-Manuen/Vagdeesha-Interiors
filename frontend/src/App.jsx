import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Studio from "./pages/Studio";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";

import Admin from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <CursorGlow />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {location.pathname !== "/admin" && <Footer />}
    </Router>
  );
}