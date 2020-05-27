import React, {Fragment} from "react";

class Contacto extends React.Component {
  render() {
    return (
      <div style={{ 
      }}>
      <div className="section-container no-padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">

            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-md-6">
                  <div id="mc_embed_signup">
                    <form
                      action="https://gmail.us4.list-manage.com/subscribe/post?u=a1e604cbe6aa9871ac07ad11b&id=ea31abd7ef"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_blank"
                      noValidate
                    >
                      <div id="mc_embed_signup_scroll">
                        <div>
                          <div className="colorVerde contactForm">
                            <h2>Subscribirse</h2>
                            <div className="indicates-required">
                              <span className="asterisk">*</span> requerido
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-EMAIL">
                                E-mail <span className="asterisk">*</span>
                              </label>
                              <input
                                type="email"
                                defaultValue
                                name="EMAIL"
                                className="required email"
                                id="mce-EMAIL"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-FNAME">Nombre </label>
                              <input
                                type="text"
                                defaultValue
                                name="FNAME"
                                className
                                id="mce-FNAME"
                              />
                            </div>
                            <div className="mc-field-group">
                              <label htmlFor="mce-LNAME">Apellido </label>
                              <input
                                type="text"
                                defaultValue
                                name="LNAME"
                                className
                                id="mce-LNAME"
                              />
                            </div>
                            <div id="mce-responses" className="clear">
                              <div
                                className="response"
                                id="mce-error-response"
                                style={{
                                  display: "none"
                                }}
                              />
                              <div
                                className="response"
                                id="mce-success-response"
                                style={{
                                  display: "none"
                                }}
                              />
                            </div>
                          </div>{" "}
                          {}
                          <div
                            style={{
                              position: "absolute",
                              left: "-5000px"
                            }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_a1e604cbe6aa9871ac07ad11b_ea31abd7ef"
                              tabIndex={-1}
                              defaultValue
                            />
                          </div>
                          <div className="clear">
                            <input
                              type="submit"
                              defaultValue="Subscribirme"
                              name="subscribe"
                              id="mc-embedded-subscribe"
                              className="button btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {}
                <div className="col-md-5 col-md-offset-1">
                  <h3>Natalia Tórtola Martín</h3>
                  <div>
                    <p>Ciudad de Cádiz, España</p>
                  </div>
                  <div>
                    <p>
                      neurorehabilitarte
                      <i className="fas fa-at" />
                      gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Contacto;
