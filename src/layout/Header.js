import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
	render() {
		console.log(this.props.history)
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark" data-navbar="smart">
					<div className="container">
						<div className="navbar-left">
							<button className="navbar-toggler" type="button">☰</button>
							<a className="navbar-brand" href="/">
								<img className="logo-dark img-logo" src="../../src/assets/img/logo/box-in-1-color.png" alt="logo" />
							</a>
						</div>
						<section className="navbar-mobile">
							<nav className="nav nav-navbar ml-auto">
								<Link to="/" className={this.props.location.pathname == '/' ? 'nav-link active' : 'nav-link '}>Home</Link>
								<Link to="/features" className={this.props.location.pathname == '/features' ? 'nav-link active' : 'nav-link '}>Features</Link>
								<Link to="/pricing" className={this.props.location.pathname == '/pricing' ? 'nav-link active' : 'nav-link '}>Pricing</Link>
								<Link to="/contact" className={this.props.location.pathname == '/contact' ? 'nav-link active' : 'nav-link '}>Contact</Link>
							</nav>
							<a className="nav-link btn btn-round btn-primary">Download Now</a>
						</section>
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Header);