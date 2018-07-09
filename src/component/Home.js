import React, { Component } from 'react';

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
								<p claclassNamess="lead-2">Store your unused item on our space and have a tidier and spacier home. Find a storage near you.</p>
								<p className="gap-xy">
								<div className="row">
									<div className="col-md-12 col-xl-12 mx-auto">
										<form className="input-round">
											<div className="form-group input-group input-group-lg">
												<input type="text" className="form-control" placeholder="e.g Jakarta Barat, Jakarta Utara, etc" />
												<div className="input-group-append">
													<button class="btn btn-primary" type="button">Search</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								</p>
							</div>
							<div className="col-md-6">
								<img src="../../src/assets/img/vector/banner-utma@2x.jpg" alt="..."/>
							</div>
						</div>
					</div>
				</header>
				<section className="text-white" style={{backgroundColor:"#50a1ff"}}>
					<div className="container">
						<div className="text-center">
							<h2 className="mb-5">The future of storing stuff</h2>
							<p className="lead mb-9">We pick and deliver your box to you. You dont even have to leave your house.</p>
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
							<div className="col-lg-4">
								<h3 className="">The most fare pricing plans ever.</h3>
								<div className="btn-group btn-group-toggle my-3" data-toggle="buttons">
									<label className="btn btn-round btn-outline-primary w-150">
										<input type="radio" name="pricing" value="daily" autocomplete="off" /> Daily
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
									<div className="col-md-6 col-xl-4">
										<div className="product-3">
											<a className="product-media" href="#">
												<img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
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
									<div className="col-md-6 col-xl-4">
										<div className="product-3">
											<a className="product-media" href="#">
												<img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
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
									<div className="col-md-6 col-xl-4">
										<div className="product-3">
											<a className="product-media" href="#">
												<img src="../../src/assets/img/boxin-img/box-kecil@2x.png" />
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

				<section className="section">
					<div className="container">
						<div className="text-center">
							<h2 className="mb-5">Still not convinced?</h2>
							<p className="lead mb-9">Clear your doubt away! Let us answer your questions.</p>
						</div>
						<div className="row gap-y text-center">
							<div className="col-md-4">
								<a href="" className="btn btn-round btn-outline-primary w-400">Apakah barang saya aman bersama boxin?</a>
								<br />
								<a href="" className="btn btn-round btn-outline-primary w-400">Bagaimana bila barang saya hilang?</a>
								<br />
								<a href="" className="btn btn-round btn-outline-primary w-400">Bagaimana bila saya lupa mengambil barang setelah masa berlaku berakhir?</a>
								<br />
								<a href="" className="btn btn-round btn-outline-primary w-400">Apakah saya perlu ke sana untuk mengambil barang?</a>
							</div>
							<div className="col-md-4">sd</div>
							<div className="col-md-4">sd</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;