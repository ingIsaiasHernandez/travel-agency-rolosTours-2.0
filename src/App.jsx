import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


import Home from "./pages/Home";
import Benefits from "./pages/Benefits";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import LogIn from "./pages/LogIn";
import AdminPanel from "./pages/AdminPanel";
import { PrivateRoute } from "./components/PrivateRoute";
import { firebaseApp } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {

  const auth = getAuth(firebaseApp);
  const [menuOpen, setMenuOpen] = useState(false);
  // Estado para almacenar la información del usuario autenticado
  const [user, setUser] = useState(null);


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        setUser(user);
      } else {
        // Si el usuario no está autenticado, establece el estado como null
        setUser(null);
      }
      
    });
    return () => unsubscribe();
  }, [auth]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <HashRouter>

      <div className={`container ${menuOpen ? "change" : ""}`}>
        <div className="tawkto">
          <TawkMessengerReact
            propertyId="6175de08f7c0440a591fc30f"
            widgetId="1fiq86v4u" />
        </div>
        <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours/:id" element={<Tours />} />
          <Route path="/beneficios" element={<Benefits />} />
          <Route path="/opiniones/:id" element={<Stories />} />
          <Route path="/login" element={<LogIn />} />
          <Route element={<PrivateRoute user={user}/>} > 
            <Route path="/admin" element={<AdminPanel/>} />
          </Route> 
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
