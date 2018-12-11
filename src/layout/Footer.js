import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
	render() {
		return (
			<div className="footer text-white bt-0 py-3" style={{backgroundImage: "linear-gradient(135deg, #4481eb 0%, #04befe 100%)"}}>
				<div className="container pb-3">
					<div className="row">
						<div className="col-md-4 col-md-4 text-c-responsive">
							<font style={{fontFamily:"Pacifico", fontSize:"36px"}}>boxin</font>
							<br />
							<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
						</div>
						<div className="col-md-3 text-center text-md-center mt-5 mt-md-8">
							<div className="social social-bg-dark">
								<a href="#" className="social-facebook">
									<i className="fa fa-facebook"></i>
								</a>
								<a href="#" className="social-twitter">
									<i className="fa fa-twitter"></i>
								</a>
								<a href="#" className="social-instagram">
									<i className="fa fa-instagram"></i>
								</a>
							</div>
						</div>
						<div className="col-md-5 mt-5 mt-md-6">
							<div className="row">
								<div className="col-4 col-md-5 col-xl-4">
									<div className="nav flex-column">
										<a href="" className="nav-link">About</a>
										<a href="/locations" className="nav-link">Locations</a>										
										<a href="" className="nav-link">Features</a>
									</div>
								</div>
								<div className="col-4 col-md-5 col-xl-4">
									<div className="nav flex-column">
										<a href="/pricing" className="nav-link">Pricing</a>										
										<a href="" className="nav-link">FAQ</a>
										<a href="" className="nav-link">Storage Rules</a>
									</div>
								</div>
								<div className="col-4 col-md-5 col-xl-4">
									<div className="nav flex-column">
										<a href="/term-conditions" className="nav-link">Term</a>
										<a href="" className="nav-link">Privacy</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;