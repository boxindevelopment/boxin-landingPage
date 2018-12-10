import React, { Component } from 'react';
import Footer from '../layout/Footer';

class Home extends Component {
	render() {
		return (
			<div>
				<header className="header h-fullscreen">
					<div className="container">
						<div className="row align-items-center h-100">
							<div className="col-md-5 mr-auto">
								<h1 className="fw-600">Store your stuff better</h1>
								<br />
								<p className="lead-2">Store your unused item on our space and have a tidier and spacier home. Find a storage near you.</p>
								<p className="gap-xy">
									<form className="input-round">
										<div className="form-group input-group input-group-lg">
											<input type="text" className="form-control" placeholder="e.g Jakarta Barat, Jakarta Utara, etc" />
											<div className="input-group-append">
												<button className="btn btn-primary" type="button">Search</button>
											</div>
										</div>
									</form>
								</p>
							</div>
							<div className="col-md-6">
								<img src="../../src/assets/img/vector/banner-utma@2x.jpg" alt="..."/>
							</div>
						</div>
					</div>
				</header>
				<section className="text-white py-7" style={{backgroundColor:"#50a1ff"}}>
					<div className="container">
						<div className="text-center">
							<h2 className="mb-2">The future of storing stuff</h2>
							<p className="lead mb-7">We pick and deliver your box to you. You dont even have to leave your house.</p>
						</div>
						<div className="row gap-y text-center">
							<div className="col-md-3 col-xl-3">
								<p className="feature-icon">
									<img src="../../src/assets/img/boxin-img/pick-your-things.svg" />
								</p>
								<p className="lead-1">Pick your things</p>
							</div>
							
							<div className="col-md-3 col-xl-3">
								<p className="feature-icon">
									<img src="../../src/assets/img/boxin-img/deliver-box.svg" style={{height:"62px"}} />
								</p>
								<p className="lead-1">We deliver the box to you</p>
							</div>

							<div className="col-md-3 col-xl-3">
								<p className="feature-icon">
									<img src="../../src/assets/img/boxin-img/truck.svg" />
								</p>
								<p className="lead-1">We store the box on our storage</p>
							</div>

							<div className="col-md-3 col-xl-3">
								<p className="feature-icon">
									<img src="../../src/assets/img/boxin-img/scan-barcode.svg" />
								</p>
								<p className="lead-1">Keep track of your belongings</p>
							</div>
						</div>
					</div>
				</section>

				<section className="section bg-gray">
					<div className="container">
						<div class="row align-items-center h-100">
							<div className="col-lg-4 text-c-responsive">
								<h3 className="">The most fare pricing plans ever.</h3>
								<div className="btn-group btn-group-toggle my-3" data-toggle="buttons">
									<label className="btn btn-round btn-outline-primary w-150">
										<input type="radio" name="pricing" value="daily" autoComplete="off" /> Daily
									</label>
									<label className="btn btn-round btn-outline-primary w-150 active">
										<input type="radio" name="pricing" value="Monthly" autocomplete="off" checked="" /> Monthly
									</label>
								</div>
								<p className="lead mt-5">
									Our prices are very easy to understand. There&apos;s not any extra or hidden fee. You just pay what is listed here.
									<p className="small-3 fw-400">
										<a href="#">See all pricing &gt;</a>
									</p>
								</p>
							</div>
							<div className="col-lg-8">
								<div className="row">
									<div className="col-md-6 col-xl-4 mb-4">
										<div className="product-3">
											<a className="product-media" href="#">
												<img className="img-responsive" src="../../src/assets/img/boxin-img/box-kecil@3x.png" />
											</a>
											<div className="product-detail">
												<h6>
													<a href="">Rp. 100.000/day</a>
												</h6>
												<small className="text-lighter">Small Box ( 60 x 100 cm )</small>
												<br />
												<a href="" className="btn btn-round btn-outline-primary w-100">Book Now</a>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-xl-4 mb-4">
										<div className="product-3">
											<a className="product-media" href="#">
												<img className="img-responsive" src="../../src/assets/img/boxin-img/box-kecil@3x.png" />
											</a>
											<div className="product-detail">
												<h6>
													<a href="">Rp. 100.000/day</a>
												</h6>
												<small className="text-lighter">Medium Box ( 100 x 120 cm )</small>
												<br />
												<a href="" className="btn btn-round btn-outline-primary w-100">Book Now </a>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-xl-4 mb-4">
										<div className="product-3">
											<a className="product-media" href="#">
												<img className="img-responsive" src="../../src/assets/img/boxin-img/box-kecil@3x.png" />
											</a>
											<div className="product-detail">
												<h6>
													<a href="">Rp. 100.000/day</a>
												</h6>
												<small className="text-lighter">Big Box ( 200 x 300 cm )</small>
												<br />
												<a href="" className="btn btn-round btn-outline-primary w-100">Book Now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section py-7 text-center">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="mb-4">Still not convinced?</h2>
								<p className="lead mb-7">Clear your doubt away! Let us answer your questions.</p>
							</div>
						</div>
						<div className="row gap-y">
							<div className="col-md-9">
								<div className="row mb-3">
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Apakah barang saya aman bersama Boxin?</a>
									</div>
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Bagaimana bila barang saya hilang?</a>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Bagaimana bila saya lupa mengambil barang setelah masa penyimpanan berakhir?</a>
									</div>
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Apakah saya perlu kesana untuk mengambil barang?</a>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Bagaimana bila barang saya rusak?</a>
									</div>
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Bagaimana bila saya lupa password akun saya?</a>
									</div>
								</div>
								<div className="row mb-3">
									<div className="col-md-6 mb-3">
										<a href="" className="btn btn-round btn-outline-primary text-center w-400 no-rap">Bagaimana bila saya tidak ada di rumah saat barang diambil?</a>
									</div>
									<div className="col-md-6 text-center">
										<a href=""><strong>See all FAQ &gt;</strong></a>
									</div>
								</div>
							</div>
							<div className="col-md-3"><img src="../../src/assets/img/boxin-img/faq@3x.png" /></div>
						</div>
					</div>
				</section>
				<section className="text-white" style={{backgroundColor:"#50a1ff"}}>
					<br />
					<br />
					<div className="container">
						<div className="row align-items-center h-100">
							<div className="col-md-4 mr-auto">
								<h2 className="fw-300">Keep track of your belongings.</h2>
								<br />
								<p className="lead mb-2">
									Manage all of your stuff in storage, easily schedule appointments and keep track of them, tip your team, and more.
									<br />
								</p>
								<div class="d-flex">
									<div className="col-md-5 mb-5 pl-0">
										<a href=""><img className="img-scale-down" src="../../src/assets/img/app/badge-google.png" /></a>
									</div>
									<div className="col-md-5 mb-5 pr-0">
									<a href=""><img className="img-scale-down" src="../../src/assets/img/app/badge-apple.png" /></a>
									</div>
								</div>
							</div>
							<div className="col-md-8">
								<img className="img-responsive hg-responsive" src="../../src/assets/img/boxin-img/keep-track-of-your-belongings@2x.png" />
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="text-center">
							<h2 className="mb-4">We are here!</h2>
							<p className="lead mb-7">
								See is your area listed for our servuice. <a href="">See all our locations &gt;</a>
							</p>
						</div>
						<div className="row gap-y justify-content-md-center">
							<div className="col-6 col-sm-2 text-c-responsive">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Jakarta</strong>
								<div className="nav flex-column">
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
								</div>
							</div>
							<div className="col-6 col-sm-2 text-c-responsive">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Bandung</strong>
								<div className="nav flex-column">
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
								</div>
							</div>
							<div className="col-6 col-sm-2 text-c-responsive">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Serpong</strong>
								<div className="nav flex-column">
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
								</div>
							</div>
							<div className="col-6 col-sm-2 text-c-responsive">
								<img src="../../src/assets/img/app/pin@2x.png" /> <strong>Banten</strong>
								<div className="nav flex-column">
									<a href="" className="nav-link">Jakarta Timur</a>
									<a href="" className="nav-link">Jakarta Barat</a>
									<a href="" className="nav-link">Jakarta Selatan</a>
									<a href="" className="nav-link">Jakarta Utara</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default Home;