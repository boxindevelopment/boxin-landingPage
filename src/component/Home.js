import React, { Fragment, Component } from "react";
import Footer from "../layout/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import LocationCon from "./LocationCon";
import { BASE_API_ORDER } from "../config/url";
import CurrencyFormat from "react-currency-format";
import Loading from "../component/Loading";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxMonth: [],
      boxWeek: [],
      loading: true
    };
  }

  componentDidMount() {
    this.boxListMonth();
    this.boxListWeek();
  }

  boxListMonth() {
    axios
      .get(BASE_API_ORDER + "/box/list/3")
      .then(res => {
        let data = res.data.data;
        this.setState({
          boxMonth: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  boxListWeek() {
    axios
      .get(BASE_API_ORDER + "/box/list/2")
      .then(res => {
        let data = res.data.data;
        this.setState({
          boxWeek: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { boxMonth, boxWeek, loading } = this.state;
    return (
      <React.Fragment>
        <header className="header h-fullscreen">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-md-5 mr-auto">
                <h1 className="fw-600">Store your stuff better</h1>
                <br />
                <p className="lead-2">
                  Store your unused item on our space and have a tidier and
                  spacier home. Find a storage near you.
                </p>
                <p className="gap-xy">
                  <form className="input-round">
                    <div className="form-group input-group input-group-lg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g Jakarta Barat, Jakarta Utara, etc"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="../../src/assets/img/vector/banner-utma@2x.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </header>
        <section
          className="text-white py-7"
          style={{ backgroundColor: "#50a1ff" }}
        >
          <div className="container">
            <div className="text-center">
              <h2 className="mb-2">The future of storing stuff</h2>
              <p className="lead mb-7">
                We pick and deliver your box to you. You dont even have to leave
                your house.
              </p>
            </div>
            <div className="row gap-y text-center">
              <div className="col-md-3 col-xl-3">
                <p className="feature-icon">
                  <img src="../../src/assets/img/boxin-img/pick-your-things.svg" />
                </p>
                <p className="lead-1">Pick your things</p>
              </div>

              <div className="col-md-3 col-xl-3">
                <p className="feature-icon">
                  <img
                    src="../../src/assets/img/boxin-img/deliver-box.svg"
                    style={{ height: "62px" }}
                  />
                </p>
                <p className="lead-1">We deliver the box to you</p>
              </div>

              <div className="col-md-3 col-xl-3">
                <p className="feature-icon">
                  <img src="../../src/assets/img/boxin-img/truck.svg" />
                </p>
                <p className="lead-1">We store the box on our storage</p>
              </div>

              <div className="col-md-3 col-xl-3">
                <p className="feature-icon">
                  <img src="../../src/assets/img/boxin-img/scan-barcode.svg" />
                </p>
                <p className="lead-1">Keep track of your belongings</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gray">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-xl-4 text-c-responsive">
                <h3 className="">The most fare pricing plans ever.</h3>
                <div
                  className="btn-group btn-group-toggle my-7 nav nav-pills d-flex jv-content"
                  id="pills-tab"
                  role="tablist"
                >
                  <a
                    className="left-content btn btn-round btn-outline-primary w-150 nav-link active"
                    id="pills-weekly-tab"
                    data-toggle="pill"
                    href="#pills-weekly"
                    role="tab"
                    aria-controls="pills-weekly"
                    aria-selected="true"
                  >
                    Weekly
                  </a>
                  <a
                    className="right-content btn btn-round btn-outline-primary w-150 nav-link"
                    id="pills-month-tab"
                    data-toggle="pill"
                    href="#pills-month"
                    role="tab"
                    aria-controls="pills-month"
                    aria-selected="false"
                  >
                    Monthly
                  </a>
                </div>
                <div className="lead mt-5">
                  Our prices are very easy to understand. There&apos;s not any
                  extra or hidden fee. You just pay what is listed here.
                  <p className="small-3 fw-400">
                    <Link to="/pricing">See all pricing &gt;</Link>
                  </p>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade in show active"
                    id="pills-weekly"
                    role="tabpanel"
                    aria-labelledby="pills-weekly-tab"
                  >
                    <div className="row">
                      {loading ? (
                        <Loading />
                        ) : (
                          boxWeek.length > 0 &&
                          boxWeek.map((key, i) => {
                            return (
                              <div className="col-md-6 col-xl-4 text-center mt-4 mb-4">
                              {key.types_of_size.name === "Medium Box" ||
                              key.types_of_size.name === "Large Box" ? (
                                <div className="">
                                  <a className="product-media" href="#">
                                    <img
                                      className="img-responsive"
                                      src={key.types_of_size.image}
                                    />
                                  </a>
                                  <div className="product-detail mt-4">
                                    <h6>
                                      <a className="separator-sp" href="">
                                        <span>Available soon</span>
                                      </a>
                                    </h6>
                                    <div className="pb-3">
                                      <small className="text-lighter">
                                        {key.types_of_size.name}
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="">
                                  <a className="product-media" href="#">
                                    <img
                                      className="img-responsive"
                                      src={key.types_of_size.image}
                                    />
                                  </a>
                                  <div className="product-detail mt-4">
                                    <h6>
                                      <a className="separator-sp" href="">
                                        <CurrencyFormat
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix={"Rp."}
                                          value={key.price}
                                        />
                                        <span> / {key.type_duration.name}</span>
                                      </a>
                                    </h6>
                                    <div className="pb-3">
                                      <small className="text-lighter">
                                        {key.types_of_size.name}
                                      </small>
                                    </div>
                                    <a
                                      href="https://play.google.com/store/apps/details?id=com.twiscode.boxin"
                                      className="btn btn-round btn-outline-primary"
                                    >
                                      Book Now{" "}
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-month"
                    role="tabpanel"
                    aria-labelledby="pills-month-tab"
                  >
                    <div className="row justify-content-md-center">
                      {loading ? (
                        <Loading />
                      ) : (
                        boxMonth.length > 0 &&
                        boxMonth.map((key, i) => {
                          return (
                            <div className="col-md-6 col-xl-4 text-center mt-4 mb-4">
                              {key.types_of_size.name === "Medium Box" ||
                              key.types_of_size.name === "Large Box" ? (
                                <Fragment>
                                  <a className="product-media" href="#">
                                    <img
                                      className="img-responsive"
                                      src={key.types_of_size.image}
                                    />
                                  </a>
                                  <div className="product-detail mt-4">
                                    <h6>
                                      <a className="separator-sp" href="">
                                        <span>Available soon</span>
                                      </a>
                                    </h6>
                                    <div className="pb-3">
                                      <small className="text-lighter">
                                        {key.types_of_size.name}
                                      </small>
                                    </div>
                                  </div>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <a className="product-media" href="#">
                                    <img
                                      className="img-responsive"
                                      src={key.types_of_size.image}
                                    />
                                  </a>
                                  <div className="product-detail mt-4">
                                    <h6>
                                      <a className="separator-sp" href="">
                                        <CurrencyFormat
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix={"Rp."}
                                          value={key.price}
                                        />
                                        <span> / {key.type_duration.name}</span>
                                      </a>
                                    </h6>
                                    <div className="pb-3">
                                      <small className="text-lighter">
                                        {key.types_of_size.name}
                                      </small>
                                    </div>
                                    <a
                                      href="https://play.google.com/store/apps/details?id=com.twiscode.boxin"
                                      className="btn btn-round btn-outline-primary"
                                    >
                                      Book Now{" "}
                                    </a>
                                  </div>
                                </Fragment>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section py-7 text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="mb-4">Still not convinced?</h2>
                <p className="lead mb-7">
                  Clear your doubt away! Let us answer your questions.
                </p>
              </div>
            </div>
            <div className="row gap-y">
              <div className="col-md-9">
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <Link
                      to="/faq"
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Apakah barang saya aman bersama Boxin?
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Link
                      to="/faq"
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Bagaimana bila barang saya hilang?
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <Link
                      to="/faq"
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Bagaimana bila saya lupa mengambil barang setelah masa
                      penyimpanan berakhir?
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Link
                      to=""
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Apakah saya perlu kesana untuk mengambil barang?
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <Link
                      to="/faq"
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Bagaimana bila barang saya rusak?
                    </Link>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Link
                      to=""
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Bagaimana bila saya lupa password akun saya?
                    </Link>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <Link
                      to="/faq"
                      className="btn btn-round btn-outline-primary text-center w-400 no-rap"
                    >
                      Bagaimana bila saya tidak ada di rumah saat barang
                      diambil?
                    </Link>
                  </div>
                  <div className="col-md-6 text-center">
                    <Link to="/faq">
                      <strong>See all FAQ &gt;</strong>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <img src="../../src/assets/img/boxin-img/faq@3x.png" />
              </div>
            </div>
          </div>
        </section>
        <section className="text-white" style={{ backgroundColor: "#50a1ff" }}>
          <br />
          <br />
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-md-4 mr-auto">
                <h2 className="fw-300">Keep track of your belongings.</h2>
                <br />
                <p className="lead mb-2">
                  Manage all of your stuff in storage, easily schedule
                  appointments and keep track of them, tip your team, and more.
                  <br />
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
              <div className="col-md-8">
                <img
                  className="img-responsive hg-responsive"
                  src="../../src/assets/img/boxin-img/keep-track-of-your-belongings@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-4">We are here!</h2>
              <p className="lead mb-7">
                See is your area listed for our servuice.{" "}
                <a href="/locations">See all our locations &gt;</a>
              </p>
            </div>
            <LocationCon />
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
