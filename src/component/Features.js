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
				<section className="section text-center bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-xl-3">
								<img src="../../src/assets/img/boxin-img/pickup-delivery@2x.png" />
							</div>
							<div className="col-lg-9 col-xl-9 text-left">
								<h2>Gratis pemakaian kotak Box-in.</h2>
								<p className="lead-2">
									Anda tidak perlu pusing memikirkan dan menyiapkan kardus untuk penyimpanan dipaket smallbox kami karena Paket penyewaan sudah termasuk pemakaian/penyewaan kotak Box-in dengan ukuran 60cmx40cmx37cm.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-xl-9 text-right">
								<h2>Harga yang flexible</h2>
								<p className="lead-2">
									Dengan pilihan waktu yang beragam, maka Anda memperoleh keuntungan lebih dalam mendapatkan harga yang paling sesuai dan discount yang lebih besar.
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
								<h2>Pengiriman yang terjamin</h2>
								<p className="lead-2">
									Khusus smallbox, bahkan Anda tidak perlu repot jika ada barang yang ingin ditukar, ditambah, atau diambil. Tinggal lakukan penentuan jadwal pengiriman dan pemilihan smallbox, maka Anda seakan memiliki ruang/kotak penyimpanan yang banyak dirumah Anda.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section bg-gray py-7">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-xl-9 text-right">
								<h2>Lihat barang Anda</h2>
								<p className="lead-2">
									Barang Anda yang tersimpan dapat dilihat sewaktu-waktu dan Anda dapat mengelola nya dengan mudah dengan aplikasi Box-in. Selain menyelesaikan masalah tempat penyimpanan, Box-in juga membantu Anda dalam mengelola dan mendaftar barang-barang yang disimpan. Anda tidak pelu pusing lagi mencari barang yang Anda ingini/butuhkan.
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
								<h2>Penjagaan dan Keamanan</h2>
								<p className="lead-2">
									Anda tidak perlu khawatir karena barang Anda dijaga oleh keamanan kami dan dipantau dengan CCTV selama 24 jam. Lokasi kami juga dilakukan pest-control dan pemantauan terhadap suhu ruangan untuk memastikan barang Anda terjaga dengan baik.
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