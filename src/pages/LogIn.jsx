import "./Login.css";
import "../style.css";
import { Link } from "react-router-dom";

const LogIn = () => {
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
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                type="email"
                id="email"
                placeholder="Email"
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
              />
            </div>
            <br />

            <input
              type="checkbox"
              id="checkbox-1"
              className="mdl-checkbox__input"
              checked
            />

            <span className="keep-text mdl-checkbox__label">
              Keep me Signed In
            </span>
          </form>
        </div>

        <button className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
          <Link className="btn-text">Sign In</Link>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
