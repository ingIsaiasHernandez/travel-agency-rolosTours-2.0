import { useState } from "react";

import "../style.css";

import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Tours from "../components/Tours";
import Stories from "../components/Stories";

const Home = () => {
  const [cardEfect, setCardEfect] = useState(false);

  const changedCard = () => {
    setCardEfect(!cardEfect);
  };

  return (
    <>
      <Header />
      <AboutUs />
      <Tours cardEfect={cardEfect} changedCard={changedCard} />
      <Stories />
    </>
  );
};

export default Home;
