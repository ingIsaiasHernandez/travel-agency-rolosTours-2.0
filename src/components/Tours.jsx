import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import { FaFilePdf } from "react-icons/fa";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const storage = getStorage();

import PropTypes from "prop-types";

const Tours = ({ cardEffect }) => {
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
    };
    fetchData();
  }, []);

  const downloadDocument = (url) => {
    const storageRef = ref(storage, url);
    getDownloadURL(storageRef)
      .then((downloadURL) => {
        window.open(downloadURL, "_blank");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="popular-tours" id="tours">
        <h1 className="popular-tours-heading">Tours</h1>
        <div className="cards-wrapper">
          {Array.isArray(tours) &&
            tours.map((tour, id) => (
              <div key={id} className={`card ${cardEffect ? "change" : ""}`}>
                <div className={`front-side`}>
                  <img
                    src={tour.imageUrl}
                    alt={`La imagen de ${tour.title}`}
                    className="card-image"
                  />
                  <h1 className="tour-name">{tour.title}</h1>
                  <h1 className="tour-name-subtitle">
                    fecha: {tour.createdAt.toDate().toLocaleDateString()}
                  </h1>
                  <button
                    className="navigation-button left"
                    onClick={() => downloadDocument(tour.documentUrl)}
                  >
                    Detalles del viaje <FaFilePdf style={{ color: "white" }} />
                  </button>
                </div>
                {/* <div className={`back-side center`}>
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
                </div> */}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

Tours.propTypes = {
  cardEffect: PropTypes.bool.isRequired,
};


export default Tours;
