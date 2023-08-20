import { Link } from "react-router-dom";
import { navigation } from "../data";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

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
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Link
          to="/login"
          className="center footer-paragraph"
          onClick={handleLinkClick}
        >
          ADMIN
        </Link>
        <p className="footer-paragraph">
          Copyright &copy; derechos reservados Rolo tours
        </p>
      </footer>
    </>
  );
};

export default Footer;
