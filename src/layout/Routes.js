import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StatictHome from "../component/Home";
import Features from "../component/Features";
import Pricing from "../component/Pricing";
import Contact from "../component/Contact";
import Locations from "../component/Locations";
import DetailLocations from "../component/DetailLocations";
import TermCondition from "../component/TermCondition";
import StorageRules from "../component/StorageRules";
import Faq from "../component/Faq";
import Header from "./Header";
import GAListener from './GAListener';

const NotFound = () => {
  return (
    <div>
      <center>
        <div className="container pt-13">
          <h4>
            Not found url <code>{location.pathname}</code>
          </h4>
        </div>
      </center>
    </div>
  );
};

class Routes extends Component {
  render() {
    return (
      <Router>
        <GAListener>
          <Header />
          <Route exact path="/" component={StatictHome} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/pricing-month" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/detail-locations" component={DetailLocations} />
          <Route exact path="/term-conditions" component={TermCondition} />
          <Route exact path="/storage-rules" component={StorageRules} />
          <Route exact path="/faq" component={Faq} />
          {/* <Route exact path="/*" component={NotFound} /> */}
        </GAListener>
      </Router>
    );
  }
}

export default Routes;
