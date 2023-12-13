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

        {/* <div className="benefit-bg">
          <div className="benefit">
            <div className="benefit-text">
              <h1 className="benefit-heading center">Políticas</h1>
              <p className="benefit-paragraph right">
                <b>
                ⚠️ Apartar con el monto especificado tus lugares.<br />
                ⚠️ A más tardar 10 días antes de la salida realizar segundo deposito, el resto al aborda el transporte en efectivo. De lo contrario, se considerará cancelación y no habrá ningún tipo de reembolso.<br />
                ⚠️ Los asientos se asignarán tomando en cuenta cuando apartaron y cuando realizaron segundo deposito. <br />
                ⚠️ No hay reembolso por cancelación por parte suya. No es transferible a otros, u otro viaje.<br />
                ⚠️ Si un compañero tuyo cancela el monto no es transferible a ustedes, sólo a nuevas personas si se avisa a más tardar 10 días antes de la salida.<br />
                ⚠️ Cualquier pasajero que no cumpla con las normas de respeto al grupo será expulsado del recorrido.<br />
                ⚠️ Si eres impuntal puede que el transporte no te espere, así que tendrás que reencontrarnos en el siguiente punto a visitar por tu cuenta.<br />
                ⚠️ Si la unidad falla se regresará el monto correspondiente a las actividades por visitar.<br />
                ⚠️ Cada viajero es responsable de sus actos, de cuidar su integridad y  sus pertenencias.<br />
                </b>   
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Benefits;
