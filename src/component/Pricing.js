import React, { Component } from "react";
import Footer from "../layout/Footer";
import SubFooter from "../layout/SubFooter";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import { BASE_API_ORDER } from "../config/url";
import { goToTop } from 'react-scrollable-anchor';
import Loading from '../component/Loading';


class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxMonth: [],
      boxWeek: [],
      boxSixMonth: [],
      boxAnnual: [],
      fee: [],
      loading: true
    };
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

  boxListSixMonth() {
    axios
      .get(BASE_API_ORDER + "/box/list/7")
      .then(res => {
        let data = res.data.data;
        this.setState({
          boxSixMonth: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  boxListAnnual() {
    axios
      .get(BASE_API_ORDER + "/box/list/8")
      .then(res => {
        let data = res.data.data;
        this.setState({
          boxAnnual: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  feeList() {
    axios
      .get(BASE_API_ORDER + "/product/delivery-fee")
      .then(res => {
        let data = res.data.data;
        this.setState({
          fee: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.boxListMonth();
    this.boxListWeek();
    this.boxListSixMonth();
    this.boxListAnnual();
    this.feeList();
  }

  render() {
    goToTop()
    const { boxMonth, boxWeek, boxSixMonth, boxAnnual, fee, loading } = this.state;
    return (
      <div>
        <header className="header h-fullscreen pb-6">
          <div className="container">
            <div className="row reverse-mob align-items-center h-100">
              <div className="col-md-6 col-xl-5 mr-auto mb-4">
                <h1 className="fw-600">Best valued storage in town.</h1>
                <br />
                <p className="lead-2">
                  Easy and cheap. Now you can decluter your home with ease.
                </p>
                <p className="gap-xy">
                  <a href="" className="btn btn-round btn-primary w-200">
                    Download
                  </a>
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <img src="../../src/assets/img/boxin-img/8@3x.png" alt="..." />
              </div>
            </div>
          </div>
        </header>
        <section className="section text-center bg-gray pt-6">
          <div className="container">

            <div class="btn-group btn-group-toggle my-7 nav nav-pills d-flex justify-content-center" id="pills-tab" role="tablist">
              <a className="left-content btn btn-round btn-outline-primary w-150 nav-link active" id="pills-weekly-tab" data-toggle="pill" href="#pills-weekly" role="tab" aria-controls="pills-weekly" aria-selected="true">Weekly</a>
              <a className="center-content btn btn-round btn-outline-primary w-150 nav-link" id="pills-month-tab" data-toggle="pill" href="#pills-month" role="tab" aria-controls="pills-month" aria-selected="false">Monthly</a>
              <a className="center-content btn btn-round btn-outline-primary w-150 nav-link" id="pills-sixMonth-tab" data-toggle="pill" href="#pills-sixMonth" role="tab" aria-controls="pills-sixMonth" aria-selected="false">6 Months</a>
              <a className="right-content btn btn-round btn-outline-primary w-150 nav-link" id="pills-Annual-tab" data-toggle="pill" href="#pills-annual" role="tab" aria-controls="pills-annual" aria-selected="false">Annual</a>
            </div>

            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade in show active" id="pills-weekly" role="tabpanel" aria-labelledby="pills-weekly-tab">
                <div className="row justify-content-md-center">
                  {loading ? (
                    <div className="pt-4">
                      <Loading />
                    </div>) :
                    boxWeek.map((key, i) => {
                      return (
                        <div className="col-md-6 col-xl-3 mt-4 mb-4">
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
                                href=""
                                className="btn btn-round btn-outline-primary"
                              >
                                Book Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>


                <div class="tab-pane fade" id="pills-month" role="tabpanel" aria-labelledby="pills-month-tab">
                <div className="row justify-content-md-center">
                  {loading ? (
                    <div className="pt-4">
                      <Loading />
                    </div>) :
                    boxMonth.map((key, i) => {
                      return (
                        <div className="col-md-6 col-xl-3 mt-4 mb-4">
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
                                href=""
                                className="btn btn-round btn-outline-primary"
                              >
                                Book Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div class="tab-pane fade" id="pills-sixMonth" role="tabpanel" aria-labelledby="pills-sixMonth-tab">
                <div className="row justify-content-md-center">
                  {loading ? (
                    <div className="pt-4">
                      <Loading />
                    </div>) :
                    boxSixMonth.map((key, i) => {
                      return (
                        <div className="col-md-6 col-xl-3 mt-4 mb-4">
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
                                href=""
                                className="btn btn-round btn-outline-primary"
                              >
                                Book Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                    
                <div class="tab-pane fade" id="pills-annual" role="tabpanel" aria-labelledby="pills-annual-tab">
                <div className="row justify-content-md-center">
                  {loading ? (
                    <div className="pt-4">
                      <Loading />
                    </div>) :
                    boxAnnual.map((key, i) => {
                      return (
                        <div className="col-md-6 col-xl-3 mt-4 mb-4">
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
                                href=""
                                className="btn btn-round btn-outline-primary"
                              >
                                Book Now{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

            </div>
            
          </div>
        </section>
        <section className="section pb-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 text-c-responsive mb-4">
                <h1 className="mb-3">Pick Up</h1>
                <p className="lead">
                  You get a free pick up 1 time per box. Additional charges may
                  apply for other pick up or deliveries.
                </p>
              </div>
              <div className="col-lg-5 col-xl-4 text-center mb-5">
                <a className="product-media" href="#">
                  <img src="../../src/assets/img/boxin-img/pickup@2x.png" />
                </a>
                <div className="product-detail mt-4">
                  <h6>
                    <a href="">Pick Up</a>
                  </h6>
                  <p className="text-lighter">Free</p>
                </div>
              </div>
              <div className="col-lg-5 col-xl-3 text-center mb-5">
                <a className="product-media" href="#">
                  <img src="../../src/assets/img/boxin-img/delivery@2x.png" />
                </a>
                <div className="product-detail mt-4">
                  <h6>
                    <a href="">Delivery</a>
                  </h6>
                  <p className="text-lighter">
                    <CurrencyFormat
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp."}
                      value={fee && fee.fee}
                    />
                    <span> / Flat fee</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default Pricing;