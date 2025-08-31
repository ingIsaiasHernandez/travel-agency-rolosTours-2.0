import { aboutUs } from "../data";

const AboutUs = () => {
  return (
    <>
      <section className="about-us" id="">
        <h1 className="about-us-heading">Acerca de nosotros</h1>
        <div className="about-wrapper">
          {
            aboutUs.map(item => (
              <div className="about-bg" key={item.id}>
                <div className="about">
                  <div className="about-text">
                    <h1 className="about-heading">{item.title}</h1>
                    <p className="about-paragraph subtitle">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </section>
    </>
  );
};

export default AboutUs;
