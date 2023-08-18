import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-list">
          <Link to="#home" className="nav-link center scroll-content">
            Inicio
          </Link>
          <Link to="#tours" className="nav-link center scroll-content">
            Tours
          </Link>
          <Link to="/Beneficios" className="nav-link center scroll-content">
            Beneficios y Políticas
          </Link>
          <Link to="/Opiniones" className="nav-link center scroll-content">
            Opiniones
          </Link>
        </div>
        <p className="footer-paragraph">
          Copyright &copy; derechos reservados Rolo tours
        </p>
      </footer>
    </>
  );
};

export default Footer;
