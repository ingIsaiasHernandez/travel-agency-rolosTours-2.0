import { useState } from "react";
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom";

import { FaReply } from "react-icons/fa";

import "./AdminPanel.css";
import VerticalTable from "../components/VerticalTable";

const AdminPanel = () => {

  const navigate = useNavigate();

  const [newTour, setNewTour] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [document, setDocument] = useState("");

  const handleNewTour = () => {
    setNewTour(!newTour);
  };


  async function onSubmit(event) {
    event.preventDefault();
    try {
      await signOut();
      console.log("salió de la cuenta")
      navigate("/login");
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <section className="popular-tours">

      <h1 className="popular-tours-heading">Panel de administración</h1>


      <button
        className="new-tour-btn center mdl-button mdl-button--raised mdl-button--colored"
        onClick={handleNewTour}>
        <span className="btn-text">
          Nuevo Tour &nbsp; &nbsp; +
        </span>
      </button>

      {
        newTour && <div className="overlay">
          <div className="post-form">
            <div className="post-back-img">
              <button
                className="create-btn  mdl-button mdl-button--raised mdl-button--colored"
                onClick={handleNewTour}>
                <span style={{ color: "rgba(33, 150, 243, 1)" }}>Salir</span>   <FaReply style={{ color: "rgba(33, 150, 243, 1)" }} />
              </button>
              <div className="post-in-text">
                <h2 className="active">Nuevo tour</h2>
              </div>
              <div className="layer"></div>
            </div>
            <div className="post-form-section">
              <h2 className="center">Postear nuevo viaje</h2>


              <form onSubmit={onSubmit}>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    className="mdl-textfield__input"
                    type="text"
                    placeholder="Tiluto del viaje"
                    name="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}

                  />
                </div>
                <br />
                <br />
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    pattern=".{8,}"
                    className="mdl-textfield__input"
                    type="password"
                    placeholder="Imagen del viaje"
                    name="password"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}

                  />
                  <br />
                  <br />
                </div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input
                    pattern=".{8,}"
                    className="mdl-textfield__input"
                    type="password"
                    placeholder="PDF del viaje"
                    name="password"
                    value={document}
                    onChange={(event) => setDocument(event.target.value)}

                  />
                </div>
                <br />


                {/* <span className="keep-text mdl-checkbox__label">
              mantenerme logeado
            </span>
            {
              loginError && <span className="center error-message">{loginError}</span>

            } */}
                <button
                  type="submit "
                  className="log-out-btn center mdl-button mdl-button--raised mdl-button--colored"
                >
                  <span className="btn-text">
                    Crear
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      }

      <div >
        <h1 className="popular-tours-heading">Lista de viajes</h1>
        <VerticalTable />
      </div>

    </section>
  );
};

export default AdminPanel;