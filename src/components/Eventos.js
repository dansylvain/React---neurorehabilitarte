import React from "react";
import { NavLink } from "react-router-dom";
import Trees from "../assets/images/arbres.jpg"
import Falls from "../assets/images/cascade.jpg"
import Waves from "../assets/images/vagues.jpg"

class Eventos extends React.Component {
  render() {
    return (
      <div className="section-container border-section-container">
        <div className="container events">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>Proximos Eventos</h2>
                <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing.
                  <br /> Porta non pulvinar neque laoreet. Viverra ipsum nunc
                  aliquet bibendum.{" "}
                </p>
              </div>
            </div>
            <div className="imageContainer">
              <div className="col-md-4">
                <strong>
                  <h3 className="text-center">Mi Super Charla!</h3>
                </strong>
                <div className="imageEvent">
                  <NavLink to="/eventos">
                    <img src={Trees}
                      alt="trees"
                    />
                  </NavLink>
                </div>
                <div className="text-center">
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <strong>
                  <h3 className="text-center">Mi Super Charla!</h3>
                </strong>
                <div className="imageEvent">
                  <NavLink to="/eventos">
                    <img src={Falls} 
                      alt="falls"
                    />
                  </NavLink>
                </div>
                <div className="text-center">
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <strong>
                  <h3 className="text-center">Mi Super Charla!</h3>
                </strong>
                <div className="imageEvent">
                  <NavLink to="/eventos">
                    <img src={Waves} 
                      alt="waves"
                    />
                  </NavLink>
                </div>
                <div className="text-center">
                  <p>
                    Auctor augue mauris augue neque. Posuere lorem ipsum dolor
                    sit amet consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Eventos;
