import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div
        className="footer text-white bt-0 py-3"
        style={{
          backgroundImage: "linear-gradient(135deg, #4481eb 0%, #04befe 100%)"
        }}
      >
        <div className="container pb-3">
          <div className="row">
            <div className="col-md-4 col-md-4 text-c-responsive">
              {/*<font style={{fontFamily:"Pacifico", fontSize:"36px"}}>boxin</font>*/}
              <img
                className="logo-dark img-logo"
                src="../../src/assets/img/logo/box-in-1-color(white).png"
                alt="logo"
              />
              <br />
              <small>Seize your life - we solve your space matter.</small>
            </div>
            <div className="col-md-4 text-center text-md-center mt-5 mt-md-8">
              <div className="social social-bg-dark">
                <a href="#" className="social-facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="social-twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="social-instagram">
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
            <div className="col-md-4 mt-5 mt-md-6 text-c-responsive">
              <div className="row">
                <div className="col-6 col-md-6 col-xl-6">
                  <div className="nav flex-column">
                    <Link to="/pricing" className="nav-link">
                      Pricing
                    </Link>
                    <Link to="/locations" className="nav-link">
                      Locations
                    </Link>
                    <Link to="/features" className="nav-link">
                      Features
                    </Link>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-6 text-c-responsive">
                  <div className="nav flex-column">
                    <Link to="/storage-rules" className="nav-link">
                      Storage Rules
                    </Link>
                    <Link to="/term-conditions" className="nav-link">
                      T&C
                    </Link>
                    <Link to="/faq" className="nav-link">
                      FAQ
                    </Link>
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

export default Footer;
