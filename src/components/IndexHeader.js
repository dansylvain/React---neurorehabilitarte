import React from "react";
import Image from "../assets/images/img-home.jpg"

class IndexHeader extends React.Component {
  render() {
    return (
      <div
        className="white-text-container background-image-container"
        style={{
          backgroundImage: 'url(' + Image + ')'
        }}
      >
        <div className="opacity" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Qué Pasa Pisha?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum
                dolor sit amet consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexHeader;
