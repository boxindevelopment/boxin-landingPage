import React, { Component } from 'react';
import Footer from '../layout/Footer';
import SubFooter from '../layout/SubFooter';

class Features extends Component {
	render() {
		return (
			<div>
				<header className="header h-fullscreen">
					<div className="container">
						<div className="row reverse-mob align-items-center h-100">
							<div className="col-md-6 mr-auto mb-4">
								<h1 className="fw-600">Full-Service Storage. Seriously.</h1>
								<br />
								<p className="lead-2">From picking up your item, storing it, keeping track, till delivering your item safe and sound.</p>
								<p className="gap-xy">
									<a href="" className="btn btn-round btn-primary w-200">Download</a>
								</p>
							</div>
							<div className="col-md-4 mb-4">
								<img src="../../src/assets/img/boxin-img/pickup-delivery@3x.jpg" alt="..."/>
							</div>
						</div>
					</div>
				</header>
				<section className="section text-center bg-gray pt-6">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/boxin-img/pickup-delivery@2x.png" />
							</div>
							<div className="col-lg-9 col-xl-9 text-left">
								<h2>Pick up &amp; Delivery ( working hours )</h2>
								<p className="lead-2">
								We deliver your box to you and pick it up from you also to store it on the storage of your choice. We also delivery your box back to you ( additional charges may apply ).
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-xl-9 text-right">
								<h2>Keep Track of your Belongings ( 24/7 )</h2>
								<p className="lead-2">
								Manage all of your stuff in storage, easily schedule appointments and keep track of them, tip your team, and more.
								</p>
							</div>
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/boxin-img/4@2x.png" />
							</div>
						</div>
					</div>
				</section>
				<section className="section bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/boxin-img/security-care@2x.png" />
							</div>
							<div className="col-lg-9 col-xl-9 text-left">
								<h2>Security &amp; Care</h2>
								<p className="lead-2">
								We value your stuff as if it’s our own. Our facilities have got it all: cctv, alarms, and 24-hour security.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-xl-9 text-right">
								<h2>Pay what you see, no hidden cost</h2>
								<p className="lead-2">
								Our goal is to always deliver the best customer service and support experience. The boxin team is here for you 12 hours a day.
								</p>
							</div>
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/boxin-img/pay-what-you-see@2x.png" />
							</div>
						</div>
					</div>
				</section>
				<section className="section bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/boxin-img/best-cs@2x.png" />
							</div>
							<div className="col-lg-9 col-xl-9 text-left">
								<h2>The best customer services</h2>
								<p className="lead-2">
								Our goal is to always deliver the best customer service and support experience. The boxin team is here for you 12 hours a day.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section text-center py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-xl-12">
								<h1 className="mb-4">Our Storage Locations</h1>
								<p className="lead-2">See is your area listed for our servuice</p>
							</div>
						</div>
						<div className="row gap-y text-center">
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Jakarta</strong>
								<div className="nav flex-column">
									<small><a href="">See Map &gt;</a></small>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Bandung</strong>
								<div className="nav flex-column">
									<small><a href="">See Map &gt;</a></small>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Serpong</strong>
								<div className="nav flex-column">
									<small><a href="">See Map &gt;</a></small>
								</div>
							</div>
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Banten</strong>
								<div className="nav flex-column">
									<small><a href="">See Map &gt;</a></small>
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

export default Features;