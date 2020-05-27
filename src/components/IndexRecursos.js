import React from "react";
import PDF from '../assets/SEO.pdf'

class IndexRecursos extends React.Component {
  render() {
    return (
      <div className="section-container border-section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>Recursos</h2>
                <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing.
                  <br /> Porta non pulvinar neque laoreet. Viverra ipsum nunc
                  aliquet bibendum.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <a href={PDF} target="new">
                  <i className="far fa-file-pdf icone" />
                </a>
              </div>
              <div className="text-center">
                <h3>Carajo</h3>
              </div>
              <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <a href={PDF} target="new">
                  <i className="far fa-file-image icone" />
                </a>
              </div>
              <div className="text-center">
                <h3>Pisha</h3>
              </div>
              <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <a href={PDF} target="new">
                  <i className="far fa-file-video icone" />
                </a>
              </div>
              <div className="text-center">
                <h3>Cojone'</h3>
              </div>
              <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexRecursos;
