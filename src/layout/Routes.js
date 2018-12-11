import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StatictHome from '../component/Home';
import Features from '../component/Features';
import Pricing from '../component/Pricing';
import Contact from '../component/Contact';
import Locations from '../component/Locations';
import DetailLocations from '../component/DetailLocations';
import TermCondition from '../component/TermCondition';
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
				<Switch>
            		<Route exact path="/" component={StatictHome} />
            		<Route path="/features" component={Features} />
            		<Route path="/pricing" component={Pricing} />
            		<Route path="/contact" component={Contact} />
            		<Route path="/locations" component={Locations} />
            		<Route path="/detail-locations" component={DetailLocations} />
					<Route path="/term-conditions" component={TermCondition} />
					<Route path="*" component={NotFound} />				
				</Switch>
			</div>
			</Router>
		);
	}
}

export default Routes;