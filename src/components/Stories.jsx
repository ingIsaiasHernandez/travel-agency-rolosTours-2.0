import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Stories = () => {

  const { id } = useParams();

  useEffect(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  }, [id]);
  
  return (
    <>
      <section className="stories" id="stories">
        <div className="video-container">
          <video className="bg-video" autoPlay muted loop>
            <source src="/img/video.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="about-us-heading">Opiniones</h1>
        <div className="stories-wrapper">
          <div className="story-bg">
            <div className="story">
              <img
                src="img/story-img-1.jpg"
                alt="Customer image"
                className="story-image"
              />
              <div className="story-text">
                <h1 className="story-heading">Alva Robles</h1>
                <p className="story-paragraph">
                  Precio accesible, divertidas dinámicas y una excelente
                  organización por parte del guía. Increíble la cantidad de
                  atractivos que se visitan en tan poco tiempo, además se otorga
                  un buen espacio de descanso en cada viaje, súper para seguir
                  en la aventura! Muy buen trabajo!.
                </p>
              </div>
            </div>
          </div>

          <div className="story-bg">
            <div className="story">
              <img
                src="img/story-img-2.jpg"
                alt="Customer image"
                className="story-image"
              />
              <div className="story-text">
                <h1 className="story-heading">Alan Duran</h1>
                <p className="story-paragraph">
                  Excelente servicio que ofrecen de muy buena calidad ⭐️✨100%
                  recomendado, la verdad y súper buenos precios accesibles,
                  dense la oportunidad de viajar con ellos no se arrepentirán !!
                </p>
              </div>
            </div>
          </div>

          <div className="story-bg">
            <div className="story">
              <img
                src="img/story-img-3.jpg"
                alt="Customer image"
                className="story-image"
              />
              <div className="story-text">
                <h1 className="story-heading">Yajaira Muñoz</h1>
                <p className="story-paragraph">
                  Super recomendado, fuimos al tour de las grutas, son
                  puntuales, son amables, te aclaran todas tus dudas sin duda
                  alguna los recomiendo.
                </p>
              </div>
            </div>
          </div>

          <div className="story-bg">
            <div className="story">
              <img
                src="img/facebook.png"
                alt="Customer image"
                className="story-image"
              />
              <div className="story-text">
                <h1 className="story-heading">
                  <a href="https://www.facebook.com/LOSROLOTOURS/reviews">
                    Ver más comentarios...
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
