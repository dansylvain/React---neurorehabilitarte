import React from "react";

class Videos extends React.Component {
  render() {
    return (
      <div className="section-container background-color-container white-text-container colorVerde">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>Videos SuperChulos</h2>
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
              <div className="fa-container"></div>
              <div className="text-center">
                <h3>Video 1</h3>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/B6NTQuozMUQ"
                  title="Introduction Video"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className="text-center">
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container"></div>
              <div className="text-center">
                <h3>Video 2</h3>
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
              <div className="fa-container"></div>
              <div className="text-center">
                <h3>Video 3</h3>
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

export default Videos;
