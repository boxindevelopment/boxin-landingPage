import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark" data-navbar="smart">
					<div className="container">
						<div className="navbar-left">
							<button className="navbar-toggler" type="button">☰</button>
							<a className="navbar-brand" href="#">
								<img className="logo-dark" src="../../src/assets/img/logo/boxin-logo@3x.png" alt="logo" />
							</a>
						</div>
						<section className="navbar-mobile">
							<nav className="nav nav-navbar ml-auto">
								<Link to="/" className="nav-link active">Home</Link>
								<Link to="/features" className="nav-link">Features</Link>
								<Link to="/pricing" className="nav-link">Pricing</Link>
								<Link to="/contact" className="nav-link">Contact</Link>
							</nav>
							<a className="nav-link btn btn-round btn-primary">Download Now</a>
						</section>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;