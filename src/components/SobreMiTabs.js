import React from "react";
import { NavLink } from "react-router-dom";


class SobreMiTabs extends React.Component {
  render() {

    const style = {
      backgroundColor: "#74fcd4",
      opacity: "0.5"
      
    }
    return (
      <ul className="nav nav-tabs aboutTabs">
        <li className="nav-item">
          <NavLink className="about nav-link" activeStyle={style} to="/sobremi">
            Curículum
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="about nav-link" activeStyle={style} to="/colaboraciones">
            Colaboraciones
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SobreMiTabs;
