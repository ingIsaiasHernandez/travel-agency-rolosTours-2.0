import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import Stories from "./components/Stories";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HashRouter>
      
      <div className={`container ${menuOpen ? "change" : ""}`}>
      <div className="tawkto">
            <TawkMessengerReact
                propertyId="6175de08f7c0440a591fc30f"
                widgetId="1fiq86v4u"/>
      </div>
        <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours/:id" element={<Tours />} />
          <Route path="/beneficios" element={<Benefits />} />
          <Route path="/opiniones/:id" element={<Stories />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
