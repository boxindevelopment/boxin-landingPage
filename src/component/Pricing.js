import React, { Component } from "react";
import Footer from "../layout/Footer";
import SubFooter from "../layout/SubFooter";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import { BASE_API_ORDER } from "../config/url";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxMonth: [],
      boxWeek: [],
      fee: []
    };
  }

  boxListMonth() {
    axios
      .get(BASE_API_ORDER + "/box/list/3")
      .then(res => {
        let data = res.data.data;
        this.setState({
          boxMonth: data
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
          boxWeek: data
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
    this.feeList();
  }

  render() {
    const { boxMonth, boxWeek, fee } = this.state;
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
            <div className="row align-items-center h-100">
              <div className="col-lg-12">
                <h1 className="">The most fare pricing plans ever.</h1>
                <p className="lead">
                  Our prices are very easy to understand. There's not any extra or hidden fee. You just pay what is listed here.
                </p>
                <div className="btn-group btn-group-toggle my-3 mb-8" data-toggle="buttons">
                  <label className="btn btn-round btn-outline-primary w-150">
                    <input type="radio" name="pricing" value="box" autoComplete="off" /> Box
                  </label>
                  <label className="btn btn-round btn-outline-primary w-150 active">
                    <input type="radio" name="pricing" value="room" autoComplete="off" checked="" /> Room
                  </label>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-md-4 col-xl-3 mb-6">
                <div className="">
                  <a className="product-media" href="#">
                    <img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
                  </a>
                  <div className="product-detail mt-4">
                    <h6>
                      <a href="">Rp. 20.000/weekly</a>
                    </h6>
                    <small className="text-lighter">Small Box ( 60 x 40 x 37 cm )</small>
                    <br />
                    <a href="" className="btn btn-round btn-outline-primary">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-3 mb-6">
                <div className="">
                  <a className="product-media" href="#">
                    <img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
                  </a>
                  <div className="product-detail mt-4">
                    <h6>
                      <a href="">Rp. 60.000/monthly</a>
                    </h6>
                    <small className="text-lighter">Small Box ( 60 x 40 x 37 cm )</small>
                    <br />
                    <a href="" className="btn btn-round btn-outline-primary">Book Now </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-3 mb-6">
                <div className="">
                  <a className="product-media" href="#">
                    <img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
                  </a>
                  <div className="product-detail mt-4">
                    <h6>
                      <a href="">Rp. 300.000/6 months</a>
                    </h6>
                    <small className="text-lighter">Small Box ( 60 x 40 x 37 cm )</small>
                    <br />
                    <a href="" className="btn btn-round btn-outline-primary">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-3 mb-6">
                <div className="">
                  <a className="product-media" href="#">
                    <img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
                  </a>
                  <div className="product-detail mt-4">
                    <h6>
                      <a href="">Rp. 550.000/annual</a>
                    </h6>
                    <small className="text-lighter">Small Box ( 60 x 40 x 37 cm )</small>
                    <br />
                    <a href="" className="btn btn-round btn-outline-primary">Book Now</a>
                  </div>
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
