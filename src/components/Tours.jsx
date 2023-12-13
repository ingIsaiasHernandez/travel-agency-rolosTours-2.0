import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

import { FaFilePdf } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { getDownloadURL, getStorage, ref } from "firebase/storage";

const storage = getStorage();


const Tours = () => {
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
              <div key={id} className={`card`}>
                <div className={`front-side`}>
                  <img
                    src={tour.imageUrl}
                    alt={`La imagen de ${tour.title}`}
                    className="card-image"
                  />
                  <h1 className="tour-name center">{tour.title}</h1>
                  <h1 className="tour-name-subtitle center">
                    fecha: {tour.createdAt.toDate().toLocaleDateString()}
                  </h1>

                  <div className="items-tour">
                    <button
                      className="navigation-button "
                      onClick={() => downloadDocument(tour.documentUrl)}
                    >
                      Detalles del viaje <FaFilePdf style={{ color: "white" }} />
                    </button>
                      
                      <a style={{margin: "auto"}} href="https://wa.me/523334610391"><IoLogoWhatsapp className="icon-tour" /></a>

                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};


export default Tours;
