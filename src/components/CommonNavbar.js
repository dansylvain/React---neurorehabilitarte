import React from "react";
import logo from "../assets/images/logo.png"
import { NavLink } from "react-router-dom";
 

class CommonNavbar extends React.Component {
  render() {

    const style = {
      backgroundColor: "#74fcd4",
      opacity: "0.5",
      borderTopLeftRadius: "25px",
      borderTopRightRadius: "25px"
    }

    return (
      <header>
        <nav className="navbar  navbar-fixed-top navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle uarr collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse-uarr"
              >
                <span className="sr-only">Navegación</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <NavLink className="navbar-brand" to="/home" title>
                <img
                  src={logo}
                  className="navbar-logo-img"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse-uarr">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/home" title activeStyle={style}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sobremi" title activeStyle={style}>
                    {" "}
                    Sobre Mí
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/eventos" title activeStyle={style}>
                    {" "}
                    Eventos{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/videos" title activeStyle={style}>
                    {" "}
                    Videos{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recursos" title activeStyle={style}>
                    {" "}
                    Recursos{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacto" title activeStyle={style}>
                    {" "}
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default CommonNavbar;
