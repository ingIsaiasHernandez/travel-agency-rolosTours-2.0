import { headerInformation, logoWords } from "../data.js"

const Header = () => {
  return (
    <>
      <header className="header center" id="home">
        <div className="header-text">
          <h1 className="heading">{headerInformation[0].title}</h1>
          <p className="header-paragraph">
            &ldquo;{headerInformation[0].subtitle}&rdquo;
          </p>
        </div>
        <img
          src={headerInformation[0].img}
          alt={headerInformation[0].alt}
          className="header-image"
        />
        <div className="logo">
          <h1>
            {
              logoWords.map(item => (
                <span className="center" key={item.id}>{item.word}</span>
              ))
            }
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;