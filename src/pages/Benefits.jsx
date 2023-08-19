import "../style.css";

const Benefits = () => {
  return (
    <section className="benefits" id="#Beneficios">
       <div className="benefit-video-container">
            <video className="bg-video" autoPlay muted loop>
                <source src="../public/img/video2.mp4" type="video/mp4" />
            </video>
        </div> 

      <h1 className="benefit-heading-principal">Beneficios y Políticas</h1>

      <div className="benefit-wrapper">
        <div className="benefit-bg">
          <div className="benefit">
            <div className="benefit-text">
              <h1 className="benefit-heading">Beneficios</h1>
              <p className="benefit-paragraph">
                <b>
                    Si has viajado con nosotros 3 veces, tendrás un 10% de descuento en todos los viajes posteriores, y siempre se te respetará el precio de preventa, además podrás elegir tu asiento cuando apartes.
                    Si has viajado con nosotros 6 veces, tendrás un 30% de descuento en tu próximo viaje, además de una camisa especial de nuestra agencia, y otros souvenirs.
                    Rifas de souvenirs y descuentos en todos los viajes.
                  </b>               
              </p>
            </div>
          </div>
        </div>

        <div className="benefit-bg">
          <div className="benefit">
            <div className="benefit-text">
              <h1 className="benefit-heading">Políticas</h1>
              <p className="benefit-paragraph">
                 <b>
                    Apartar con el monto especificado tus lugares.
                    Al menos 10 días de la salida segundo deposito, el resto al aborda el transporte en efectivo.
                    Los asientos se asignarán tomando en cuenta cuando apartaron y cuando realizaron segundo deposito.
                    No hay reembolso por cancelación por parte suya.
                    Si un compañero tuyo no puede asistir avisar 15 días antes, de lo contrario, el monto no puede ser transferible a ustedes.
                    Cualquier pasajero que no cumpla con las normas de respeto al grupo será expulsado del recorrido.
                    Si eres impuntal puede que el transporte no te espere, así que tendrás que reencontrarnos en el siguiente punto a visitar por tu cuenta. 
                    Si la unidad falla se regresará el monto correspondiente a las actividades por visitar.
                    Si la unidad falla se tiene que esperar a la siguiente unidad que nos auxilie.
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
