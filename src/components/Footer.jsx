import { Link } from "react-router-dom";
import { navigation } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-list">
          {navigation.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.href}
                className="nav-link center scroll-content"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <p className="footer-paragraph">
          Copyright &copy; derechos reservados Rolo tours
        </p>
      </footer>
    </>
  );
};

export default Footer;
