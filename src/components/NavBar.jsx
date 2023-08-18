import { Link } from "react-router-dom";

import "../style.css"

import { colors } from "../data"

const NavBar = ({menuOpen,toggleMenu }) => {



    return (
        <>
        

        <div className={`open-navbar-icon navbar-icon center `} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className="navbar-wrapper">
                <nav className="navbar">
                  <div className={`close-navbar-icon navbar-icon center ${menuOpen ? '' : 'change'}`} onClick={toggleMenu}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                  </div>
                  <div className="nav-list">

                    {
                      colors.map((item,index) =>{
                        return (
                          <Link key={index} to={item.href} style={{background: item.color}} className="nav-link center scroll-content">{item.name}</Link>

                        )
                      })
                    }
                    
                  </div>
                </nav>
              </div>
         
        </>
    );
};

export default NavBar;