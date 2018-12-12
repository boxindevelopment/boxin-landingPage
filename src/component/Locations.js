import React, { Component } from 'react';
import SubFooter from '../layout/SubFooter';
import Footer from '../layout/Footer';
import { Link } from "react-router-dom";
import Map from './Map';
import LocationCon from './LocationCon';
import { goToTop } from 'react-scrollable-anchor';

class Locations extends Component {
	render() {
		goToTop()
		const location = {
			lat: -7.268190,
			lng: 109.491000
		}
		return (
			<div>
				<header className="header h-fullscreen">
					<div className="">
						<div className="col-lg-12 col-xl-12 p-0">
							<Map center={location} />
							{/* <div className="h-300" data-provide="map" data-lat="-7.268190" data-lng="109.491000" data-zoom="7" data-markers="[-7.249050, 112.751850, 'Twiscode Digital Agency', '../../src/assets/img/app/pin@2x.png'], [-7.972179, 112.634870, 'Jl. Diponegoro Malang', '../../src/assets/img/app/pin@2x.png'], [-6.215393, 106.846671, 'Tebet Jkt', '../../src/assets/img/app/pin@2x.png']"></div> */}
						</div>
					</div>
				</header>
				<section className="py-0 text-center pb-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-xl-12">
								<h1>Our Storage Locations</h1>
								<p className="lead">See is your area listed for our service</p>
							</div>
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