import React from "react";
import logo1 from "../assets/images/logo-01.png"
import logo2 from "../assets/images/logo-02.png"
import logo3 from "../assets/images/logo-03.png"

class IndexTrustBadges extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <img
            className="img-responsive page-base-image"
            src={logo1}
            alt="logo"
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-responsive page-base-image"
            src={logo2}
            alt="logo"
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-responsive page-base-image"
            src={logo3}
            alt="logo"
          />
        </div>
      </div>
    );
  }
}

export default IndexTrustBadges;
