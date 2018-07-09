import React from 'react';
import Home from '../component/Home';

class Header extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark" data-navbar="smart">
					<div className="container">
						<div className="navbar-left">
							<a className="navbar-brand" href="#">
								<img className="logo-dark" src="../../src/assets/img/logo/boxin-logo@3x.png" alt="logo" />
							</a>
						</div>
						<section className="navbar-mobile">
							<nav className="nav nav-navbar ml-auto">
								<a className="nav-link active" href="#">Home</a>
								<a className="nav-link" href="#">Features</a>
								<a className="nav-link" href="#">Pricing</a>
								<a className="nav-link" href="#">Contact</a>
							</nav>
						</section>
						<a className="btn btn-round btn-primary">Download Now</a>
					</div>
				</nav>
				<Home />
			</div>
		);
	}
}

export default Header;