import "./Login.css";
import "../style.css";
import { useState } from "react";

import { firebaseApp } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);

const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();


  async function onSubmit(event){
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginError(""); //Limpiar cualquier error anterior si el inicio de sesión tiene éxito
      console.log("Inicio de sesión exitoso")
      navigate("/admin");
    } catch (error) {
      console.log(error); // Agrega esta línea para imprimir detalles del error en la consola
      if (error.code === 'auth/user-not-found') {
        setLoginError("Usuario no encontrado!");
      } else {
        setLoginError("Ocurrió un error al iniciar sesión!");
      }
    } 
  }

  return (
    <div>
      <div className="signin">
        <div className="back-img">
          <div className="sign-in-text">
            <h2 className="active">Admin</h2>
          </div>
          <div className="layer"></div>
          <p className="point">&#9650;</p>
        </div>
        <div className="form-section">
          <form onSubmit={onSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                
              />
            </div>
            <br />
            <br />
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                pattern=".{8,}"
                className="mdl-textfield__input"
                type="password"
                id="password"
                placeholder="Pasword"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                
              />
            </div>
            <br />

            <input
              type="checkbox"
              id="checkbox-1"
              className="mdl-checkbox__input"
            />

            <span className="keep-text mdl-checkbox__label">
              mantenerme logeado
            </span>
            {
              loginError && <span className="center error-message">{loginError}</span>

            }
            <button
              type="submit "
              className="sign-in-btn mdl-button mdl-button--raised mdl-button--colored"
            >
              <span className="btn-text">
                Sign In
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
