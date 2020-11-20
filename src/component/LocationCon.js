import React, { Component } from "react";
import axios from "axios";
import { BASE_API_INFRASTRUCTURE } from "../config/url";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: [],
    };
  }

  cityList() {
    axios.get(BASE_API_INFRASTRUCTURE + "/city").then(
      (res) => {
        const data = res.data.data;
        if (data.length > 0) {
          data.map((city) => this.areaList(city));
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  areaList(city) {
    const { area } = this.state;
    const newArea = area;
    axios.get(BASE_API_INFRASTRUCTURE + "/area/" + city.id).then(
      (res) => {
        const data = res.data.message
          ? { name: res.data.message, city: city }
          : res.data.data[0];
        newArea.push(data);
        this.setState({
          area: newArea,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  componentDidMount() {
    this.cityList();
  }

  render() {
    const { area } = this.state;
    console.log("area", area);

    return (
      <div className="row">
        {area.map((data, index) => {
          const i = index;
          return (
            <div className="col-md-3 col-6 mt-5" key={i}>
              <div className="d-flex align-items-end mb-3">
                <img src="../../src/assets/img/app/pin@2x.png" alt="" />
                <h5 className="font-weight-bold ml-2 mb-0">{data.city.name}</h5>
              </div>
              <p className="fs-16 pl-1 ml-5 mb-2">{data.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
