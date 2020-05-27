import React from "react";
import { NavLink } from "react-router-dom";


class SobreMiCurriculum extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="pricing-card  colorVerde pricing-primary">
            <h3>Evento 1</h3>
            <h6 className="price">
              18 <span>$/MO</span>
            </h6>
          </div>
          <div className="pricing-features">
            <ul className="features">
              <li>Primera chulada</li>
              <li>Segunda chulada</li>
              <li>Tercera Chulada</li>
            </ul>
            <NavLink to="/contacto" className="btn btn-primary" title>
              Me apunto!
            </NavLink>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing-card colorVerde pricing-primary">
            <h3>Evento 2</h3>
            <h6 className="price">
              18 <span>$/MO</span>
            </h6>
          </div>
          <div className="pricing-features">
            <ul className="features">
              <li>Primera chulada</li>
              <li>Segunda chulada</li>
              <li>Tercera Chulada</li>
            </ul>
            <NavLink to="/contacto" className="btn btn-primary" title>
              Me apunto!
            </NavLink>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing-card colorVerde pricing-primary">
            <h3>Evento 3</h3>
            <h6 className="price">
              18 <span>$/MO</span>
            </h6>
          </div>
          <div className="pricing-features">
            <ul className="features">
              <li>Primera chulada</li>
              <li>Segunda chulada</li>
              <li>Tercera Chulada</li>
            </ul>
            <NavLink to="/contacto" className="btn btn-primary" title>
              Me apunto!
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default SobreMiCurriculum;
