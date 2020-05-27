import React from "react";
import { NavLink } from "react-router-dom";


class SobremiTabsCol extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabs aboutTabs">
        <li className="nav-item">
          <NavLink className="active" to="/sobremi">
            Curículum
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="about nav-link" to="/colaboraciones">
            Colaboraciones
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SobremiTabsCol;
