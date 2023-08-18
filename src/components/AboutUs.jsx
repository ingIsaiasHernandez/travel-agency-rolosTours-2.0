const AboutUs = () => {
  return (
    <>
      <section className="about-us" id="">
        <h1 className="about-us-heading">Acerca de nosotros</h1>
        <div className="about-wrapper">
          <div className="about-bg">
            <div className="about">
              <div className="about-text">
                <h1 className="about-heading">Valores</h1>
                <p className="about-paragraph">
                  Todo nuestro personal es caracterizado por su responsabilidad,
                  amabilidad, confiabilidad, integridad, y pasión por su
                  trabajo.
                </p>
              </div>
            </div>
          </div>

          <div className="about-bg">
            <div className="about">
              <div className="about-text">
                <h1 className="about-heading">Misión</h1>
                <p className="about-paragraph">
                  LLevar a nuestros clients a vivir experiencias turisticas
                  únicas e inolvidables
                </p>
              </div>
            </div>
          </div>

          <div className="about-bg">
            <div className="about">
              <div className="about-text">
                <h1 className="about-heading">Visión</h1>
                <p className="about-paragraph">
                  Convertinos en la agencia con los viajes más fascinantes en
                  México{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
