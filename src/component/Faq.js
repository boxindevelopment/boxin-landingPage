import React, { Component } from 'react';
import Footer from '../layout/Footer';
import SubFooter from '../layout/SubFooter';
import { Link } from "react-router-dom";
import { goToTop } from 'react-scrollable-anchor';

class Home extends Component {
	render() {
        goToTop()
		return (
			<div>
                <header className="header h-fullscreen pb-0">
                    <section className="text-white py-7" style={{backgroundColor:"#50a1ff"}}>
                        <div className="container">
                            <div className="text-center">
                                <h2 className="mb-2">FAQ</h2>
                            </div>
                        </div>
                    </section>
                </header>

				<section className="section pt-7">
					<div className="container">
                        <div className="pb-2">
                            <p>
                                Apakah barang saya aman bersama Box-in?
                                <li>
                                    Barang Anda yang tersimpan di area Box-in terjaga ketat dengan diawasi dengan tenaga keamanan dan dalam pemantauan CCTV selama 24 jam.
                                </li>
                            </p>
                            <p>
                                Bagaimana bila barang saya hilang?
                                <li>
                                    'Diganti dengan ‘bagaimana bila kotak saya hilang?' Jika kotak Anda terbukti rusak atau hilang yang diakibatkan oleh kelalaian Box-in, maka Box-in akan memberikan bantuan dalam bentuk nominal Rupiah maksimal 5X masa sewa bulanan sesuai produk yang dipilih.
                                </li>
                            </p>
                            <p>
                                Bagaimana bila saya lupa mengambil barang setelah masa penyimpanan berakhir?
                                <li>
                                    Aplikasi Box-in akan memberikan notification untuk mengingatkan Anda sebelum masa sewa berakhir dan tim Box-in juga akan membantu dalam melakukan pengecekan secara berkala dan menjalin komunikasi dengan Anda.
                                </li>
                            </p>
                            <p>
                                Apakah saya perlu kesana untuk mengambil barang?
                                <li>
                                    Box-in memberikan kemudahan bagi Anda untuk melakukan proses penukaran/pengambilan/penyimpanan barang-barang Anda yaitu dengan datang langsung atau jika memilih smallbox maka perencanaan pengantaran dapat dilakukan melalui aplikasi.
                                </li>
                            </p>
                            <p>
                                Bagaimana bila saya lupa password akun saya?
                                <li>
                                    Anda dapat menjalan proses untuk mereset password Anda melalui aplikasi Box-in. Setelah dilakukan konfirmasi untuk memastikan bahwa Anda adalah pihak yang berhak, maka proses pembuatan password baru akan dilakukan.
                                </li>
                            </p>
                        </div>
                    </div>
				</section>
                <SubFooter />
				<Footer />
			</div>
		);
	}
}

export default Home;