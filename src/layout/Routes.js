import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StatictHome from '../component/Home';
import Features from '../component/Features';
import Pricing from '../component/Pricing';
import Contact from '../component/Contact';
import Locations from '../component/Locations';
import DetailLocations from '../component/DetailLocations';
import TermCondition from '../component/TermCondition';
import StorageRules from '../component/StorageRules';
import Faq from '../component/Faq';
import Header from './Header';

const NotFound = () => {
	return (
		<div>
			<center>
				<div className="container pt-13">
					<h4>Not found url <code>{location.pathname}</code></h4>
				</div>
			</center>
		</div>
	)
}

class Routes extends Component {
	render() {
		return (
			<Router>
			<div>
				<Header />
				<Route exact="true" path="/" component={StatictHome} />
				<Route exact="true" path="/features" component={Features} />
				<Route exact="true" path="/pricing" component={Pricing} />
				<Route exact="true" path="/pricing-month" component={Pricing} />
				<Route exact="true" path="/contact" component={Contact} />
				<Route exact="true" path="/locations" component={Locations} />
				<Route exact="true" path="/detail-locations" component={DetailLocations} />
				<Route exact="true" path="/term-conditions" component={TermCondition} />
				<Route exact="true" path="/storage-rules" component={StorageRules} />
				<Route exact="true" path="/faq" component={Faq} />
			</div>
			
			</Router>
		);
	}
}

export default Routes;