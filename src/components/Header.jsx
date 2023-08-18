

const Header = () => {
    return (
        <>
      <header className="header center" id="home">
        <div className="header-text">
          <h1 className="heading">Revolucionando el turismo</h1>
          <p className="header-paragraph">
            "Viajar te deja sin palabras; y luego te convierte en un
             cuentista"
          </p>
        </div>
        <img
          src="/public/img/air-balloon.png"
          alt="Header Image"
          className="header-image"
        />
        <div className="logo">
          <h1>
            <span className="center">R</span>
            <span className="center">o</span>
            <span className="center">l</span>
            <span className="center">o</span>
            <span className="center">T</span>
            <span className="center">o</span>
            <span className="center">u</span>
            <span className="center">r</span>
            <span className="center">s</span>
          </h1>
        </div>
      </header>
        </>
    );
};

export default Header;