import React, { Component } from 'react';
import SubFooter from '../layout/SubFooter';
import Footer from '../layout/Footer';
import { Link } from "react-router-dom";
import Map from './Map';

class Locations extends Component {
	render() {
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
				<section className="py-0 text-center h-500">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-xl-12">
								<h1>Our Storage Locations</h1>
								<p className="lead">See is your area listed for our servuice</p>
							</div>
						</div>
						<div className="row gap-y justify-content-md-center">
							<div className="col-lg-3 col-xl-3">
								<div className="h-100" data-provide="map" data-lat="-6.215393" data-lng="106.846671" data-zoom="7" data-markers="[-6.215393, 106.846671, 'Tebet Jkt', '../../src/assets/img/app/pin@2x.png']"></div>
								<div className="nav flex-column mt-4">
									<strong>Jakarta</strong>
									<Link to="/detail-locations" className="nav-link">Jakarta Timur</Link>
									<Link to="/detail-locations" className="nav-link">Jakarta Barat</Link>
									<Link to="/detail-locations" className="nav-link">Jakarta Selatan</Link>
									<Link to="/detail-locations" className="nav-link">Jakarta Utara</Link>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3">
								<div className="h-100" data-provide="map" data-lat="-6.215393" data-lng="106.846671" data-zoom="7" data-markers="[-6.215393, 106.846671, 'Tebet Jkt', '../../src/assets/img/app/pin@2x.png']"></div>
								<div className="nav flex-column mt-4">
									<strong>Bandung</strong>
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3">
								<div className="h-100" data-provide="map" data-lat="-6.215393" data-lng="106.846671" data-zoom="7" data-markers="[-6.215393, 106.846671, 'Tebet Jkt', '../../src/assets/img/app/pin@2x.png']"></div>
								<div className="nav flex-column mt-4">
									<strong>Serpong</strong>
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3">
								<div className="h-100" data-provide="map" data-lat="-6.215393" data-lng="106.846671" data-zoom="7" data-markers="[-6.215393, 106.846671, 'Tebet Jkt', '../../src/assets/img/app/pin@2x.png']"></div>
								<div className="nav flex-column mt-4">
									<strong>Banten</strong>
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
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

export default Locations;