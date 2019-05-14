import React, { Component } from "react";
class SubFooter extends Component {
  render() {
    return (
      <div>
        <section
          className="text-white py-0"
          style={{ backgroundColor: "#50a1ff" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row reverse-mob justify-content-md-center">
                  <div className="col-lg-6 col-xl-4 mb-8 mt-8">
                    <h2 className="mb-2">Get started now!</h2>
                    <p className="lead-2 mb-3">
                      Manage all of your stuff in storage, easily schedule
                      appointments and keep track of them, tip your team, and
                      more.
                    </p>
                    <div className="d-flex">
                      <div className="col-md-5 mb-5 pl-0">
                        <a href="https://play.google.com/store/apps/details?id=com.twiscode.boxin">
                          <img
                            className="img-scale-down"
                            src="../../src/assets/img/app/badge-google.png"
                          />
                        </a>
                      </div>
                      <div className="col-md-5 mb-5 pr-0">
                        <a href="https://play.google.com/store/apps/details?id=com.twiscode.boxin">
                          <img
                            className="img-scale-down"
                            src="../../src/assets/img/app/badge-apple.png"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <img src="../../src/assets/img/boxin-img/get-started@3x.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SubFooter;
