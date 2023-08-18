import { useState } from "react";

import "../style.css";

import NavBar from "../components/navBar";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Tours from "../components/Tours";
import Stories from "../components/Stories";
import Footer from "../components/Footer";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cardEfect, setCardEfect] = useState(false);

  const changedCard = () => {
    setCardEfect(!cardEfect);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`container ${menuOpen ? "change" : ""}`}>
      <NavBar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <Header />
      <AboutUs />
      <Tours cardEfect={cardEfect} changedCard={changedCard} />
      <Stories/>
      <Footer/>
    </div>
  );
};

export default Home;
