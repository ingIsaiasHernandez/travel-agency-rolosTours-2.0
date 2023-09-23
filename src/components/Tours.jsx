import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

const Tours = ({ cardEfect, changedCard }) => {
  const { id } = useParams();
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const toursRef = collection(db, "tours");
      const toursSnapshot = await getDocs(toursRef);
      const toursList = toursSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTours(toursList);
      
    }
    fetchData();
  }, []);


  return (
    <>
      <section className="popular-tours" id="tours">
        <h1 className="popular-tours-heading">Tours</h1>
        <div className="cards-wrapper">
          {
            Array.isArray(tours) && tours.map((tour, id) => (
              <div key={id} className={`card ${cardEfect ? "change" : ""}`}>
                <div className={`front-side`}>
                  <img
                    src={tour.imageUrl}
                    alt={`La imagen de ${tour.title}`}
                    className="card-image"
                  />
                  <h1 className="tour-name">hola</h1>
                  <ul className="card-list"></ul>
                  <button className="navigation-button" onClick={changedCard}>
                    Más info &gt;&gt;
                  </button>
                </div>
                <div className={`back-side center`}>
                  <button className="navigation-button" onClick={changedCard}>
                    &lt;&lt; Regresar
                  </button>
                  <h3 className="tour-price"></h3>
                  <button className="card-button-pdf">
                    <a href="../pdfs/RUTADIADEMUERTOS.pdf">Descargar PDF</a>
                  </button>
                  <button className="card-button-whats">
                    <a href="https://api.whatsapp.com/send?phone=+523334610391&text=Hola,%20me%20interesa%20el%20paquete%20'ruta%20día%20de%20muertos'">
                      Whatsapp
                    </a>
                  </button>
                </div>
              </div>
            ))
          }


        </div>
      </section>
    </>
  );
};

export default Tours;
