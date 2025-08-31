import "../style.css";

const Benefits = () => {
  return (
    <section className="benefits" id="#Beneficios">
      <div className="benefit-video-container">
        <video className="bg-video" autoPlay muted loop>
          <source src="/img/benefits.mp4" type="video/mp4" />
        </video>
      </div>

      <h1 className="benefit-heading-principal">Beneficios</h1>

      <div className="benefit-wrapper">
        <div className="benefit-bg">
          <div className="benefit">
            <div className="benefit-text">
              <p className="benefit-paragraph right">
                <b>

                  <li>⭐️ A partir de tu tercer viaje, siempre se te asignarán buenos lugares en el autobús, independientemente de cuando apartaste y cuando diste tu segundo depósito o liquidación. Además de increíbles souvenirs.</li>
                  <li>⭐️ En tu sexto viaje se te descontará un 10%. Además, disfruta de tus beneficios acumulados.</li>
                  <li>⭐️ En tu noveno viaje se te descontará un 25%. Además, disfruta de tus beneficios acumulados.</li>
                  <li>⭐️ En tu doceavo viaje tendrás un viaje totalmente gratis de dos días.</li>

                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
