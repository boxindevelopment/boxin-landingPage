import React, { Component } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SubFooter from '../layout/SubFooter';
class Contact extends Component {
	render() {
		return (
			<div>
				<Header />
				<header className="header h-fullscreen">
					<div className="container">
						<div className="row align-items-center h-100">
							<div className="col-lg-6 mr-auto">
								<h1 className="fw-600">Contact Us</h1>
								<p className="lead-2">Don’t hesitate to ask us anything! we are here to help you.</p>
								<form className="input-round">
									<div className="form-row">
										<div className="form-group col-md-6">
											<input className="form-control form-control-lg" type="text" name="firstname" placeholder="First Name" />
										</div>

										<div className="form-group col-md-6">
											<input className="form-control form-control-lg" type="text" name="lastname" placeholder="Last Name" />
										</div>

										<div className="form-group col-md-6">
											<input className="form-control form-control-lg" type="email" name="email" placeholder="Email" />
										</div>

										<div className="form-group col-md-6">
											<input className="form-control form-control-lg" type="text" name="phone" placeholder="Phone" />
										</div>
									</div>
									<div className="form-group">
										<textarea className="form-control form-control-lg" rows="4" placeholder="What do you have in mind?" name="message"></textarea>
									</div>
									<button className="btn btn-lg btn-primary" type="submit">Submit</button>
								</form>
							</div>
							<div className="col-md-4">
								<img src="../../src/assets/img/boxin-img/10@3x.png" alt="..."/>
							</div>
						</div>
					</div>
				</header>
				<SubFooter />
				<Footer />
			</div>
		);
	}
}

export default Contact;