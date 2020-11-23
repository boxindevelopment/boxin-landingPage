import React, { Component } from "react";
import { goToTop } from "react-scrollable-anchor";
import axios from "axios";
import { BASE_API_INFRASTRUCTURE } from "../config/url";
import Map from "./Map";
import LocationCon from "./LocationCon";
import Footer from "../layout/Footer";
import SubFooter from "../layout/SubFooter";

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: [],
    };
  }

  componentDidMount() {
    this.areaList();
  }

  areaList() {
    axios.get(BASE_API_INFRASTRUCTURE + "/area").then(
      (res) => {
        if (res.data.data.length > 0) {
          const area = res.data.data.reduce((acc, data) => {
            acc.push({
              lat: parseFloat(data.latitude),
              lng: parseFloat(data.longitude),
            });
            return acc;
          }, []);
          this.setState({ area });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    goToTop();

    return (
      <div>
        <header className="header h-fullscreen">
          <div className="">
            <div className="col-xl-12 p-0">
              <Map area={this.state.area} />
            </div>
          </div>
        </header>
        <section className="pb-7">
          <div className="container">
            <div className="text-center">
              <h1 className="mb-3">Our Storage Locations</h1>
              <p className="lead">See is your area listed for our service</p>
            </div>
            <LocationCon />
          </div>
        </section>
        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default Locations;
