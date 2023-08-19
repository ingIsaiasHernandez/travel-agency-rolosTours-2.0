import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Tours = ({ cardEfect, changedCard }) => {
  const { id } = useParams();

  useEffect(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  }, [id]);

  return (
    <>
      <section className="popular-tours" id="tours">
        <h1 className="popular-tours-heading">Tours</h1>
        <div className="cards-wrapper">
          <div className={`card ${cardEfect ? "change" : ""}`}>
            <div className={`front-side`}>
              <img
                src="../public/img/diademuertos.jpg"
                alt="Forest"
                className="card-image"
              />
              <h1 className="tour-name"></h1>
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
        </div>
      </section>
    </>
  );
};

export default Tours;
