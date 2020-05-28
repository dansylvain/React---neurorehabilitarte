import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"



class CommonFooter extends React.Component {
  render() {
 
    const url = "https://mailchi.mp/09053732f5b6/neurorehabilitarte";

    const SimpleForm = () => <MailchimpSubscribe url={url}/>
    
    return (
      <footer>
        <div className="section-container footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4>Sobre Rehabilitarte</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  sit amet consectetur dolor
                </p>
              </div>
              <div className="col-md-4">
                <h4>Te gusta? Compártelo!</h4>
                <p>
                  <a
                    href="https://facebook.com/"
                    className="social-round-icon white-round-icon fa-icon"
                    title
                  >
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    className="social-round-icon white-round-icon fa-icon"
                    title
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    className="social-round-icon white-round-icon fa-icon"
                    title
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <h4>Subscríbete a la Newsletter</h4>
                {SimpleForm()}
                {/* <div id="mc_embed_signup">
                  <form
                    action="https://gmail.us4.list-manage.com/subscribe/post?u=a1e604cbe6aa9871ac07ad11b&id=ea31abd7ef"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    value=""
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div>
                        <div>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default CommonFooter;
