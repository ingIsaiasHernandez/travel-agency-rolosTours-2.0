

const Header = () => {
    return (
        <>
      <header className="header center" id="home">
        <div className="header-text">
          <h1 className="heading">Aventuras inolvidables</h1>
          <p className="header-paragraph">
            &ldquo;Viva la experencia; vive la vida&rdquo;
          </p>
        </div>
        <img
          src="img/air-balloon.png"
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