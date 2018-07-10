import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StatictHome from '../component/Home';
import Features from '../component/Features';
import Pricing from '../component/Pricing';
import Contact from '../component/Contact';

class Routes extends Component {
	render() {
		return (
			<Router>
			<div>
				 <Switch>
            		<Route exact path="/" component={StatictHome} />
            		<Route path="/features" component={Features} />
            		<Route path="/pricing" component={Pricing} />
            		<Route path="/contact" component={Contact} />
				</Switch>
			</div>
			</Router>
		);
	}
}

export default Routes;