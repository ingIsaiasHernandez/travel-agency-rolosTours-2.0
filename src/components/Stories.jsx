import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { stories } from "../data";


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
            <source src="/img/opinions.mp4" type="video/mp4" />
          </video>
        </div>
        <h1 className="about-us-heading">Opiniones</h1>
        <div className="stories-wrapper">

          {
            stories.map(item => (
              <div className="story-bg" key={item.id}>
                <div className="story">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="story-image"
                  />
                  <div className="story-text">
                    <h1 className="story-heading">{item.name}</h1>
                    <p className="story-paragraph subtitle">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>

            ))
          }

          <div className="story-bg">
            <div className="story center">
              <div className="story-text center">
                <h1 className="story-heading" style={{ textAlign: "center" }}>
                  ¡Sumérjete en Rolo Tours!

                  <button className="story-face-btn"><a href="https://www.facebook.com/LOSROLOTOURS">
                    Facebook <FaFacebook style={{ color: "white", margin: "0.5" }} />
                  </a></button>
                  <button className="story-insta-btn"><a href="https://www.instagram.com/rolo.tours">
                    Instagram <FaInstagramSquare style={{ color: "white", margin: "0.5" }} />

                  </a></button>
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
