import React, { Component } from 'react';
import Footer from '../layout/Footer';
import SubFooter from '../layout/SubFooter';

class Home extends Component {
	render() {
		return (
			<div>
                <header className="header h-fullscreen pb-0">
                    <section className="text-white py-7" style={{backgroundColor:"#50a1ff"}}>
                        <div className="container">
                            <div className="text-center">
                                <h2 className="mb-2">Terms & Condition</h2>
                            </div>
                        </div>
                    </section>
                </header>

				<section className="section pt-8">
					<div className="container">
                        <div className="pb-2">
                            <p>
                                Diharapkan untuk membaca syarat dan ketentuan yang tertera dibawah ini dengan baik sebelum memesan atau menggunakan layanan dari situs dan atau mobile apps kami.
                            </p>
                            <p>
                                PT. Layanan Simpan Mandiri ("Box-in" / kami) adalah sebuah perseroan terbatas yang didirikan berdasarkan hukum Indonesia, yang berdomisili di komplek pergudangan central cakung blok F no 28 Jalan Cakung Cilincing, Jakarta Timur yang merupakan pemilik dan operator dari www.box-in.com dan mobile apps (“Box-in”). Box-in  sebagai penyedia Platform sarana penyewaan tempat berupa kotak/box atau tempat dengan luasan tertentu melalui situs www.box-in.com dan sebuah domain internet yang didaftarkan atas nama Box-in dan/atau Aplikasi iOS dan Android.
                            </p>
                            <p>
                                Untuk menggunakan layanan kami, anda harus terlebih dahulu terdaftar sebagai Pengguna kami. Dengan tetap mengakses Situs ini melalui telepon atau aplikasi telepon genggam kami, Anda setuju untuk terikat dengan Syarat dan Ketentuan ini. 
                            </p>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Hal-Hal Umum</p>
                            <ul>
                                <li>PT. Layanan Simpan Mandiri adalah suatu perseroan yang didirikan berdasarkan hukum Negara Republik Indonesia.</li>
                                <li>Layanan yang tersedia dalam Situs dan / atau Aplikasi ini merupakan aplikasi perangkat lunak yang berfungsi sebagai sarana untuk menghubungkan layanan penyelenggaraan penyewaan tempat berupa kotak atau tempat dengan luasan tertentu pada tempat yang dimiliki atau dikelola oleh Box-in.</li>
                            </ul>
                        </div>
				</section>
                <SubFooter />
				<Footer />
			</div>
		);
	}
}

export default Home;