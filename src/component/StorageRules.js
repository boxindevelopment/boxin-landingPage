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
                                <h2 className="mb-2">Storage Rules</h2>
                            </div>
                        </div>
                    </section>
                </header>

				<section className="section pt-8">
					<div className="container">
                        <div className="pb-2">
                            <p>
                                Dilarang menyimpan:
                            </p>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Hal-Hal Umum</p>
                            <ul>
                                <li>Barang dan surat berharga.</li>
                                <li>Barang yang dilarang oleh pejabat berwenang atau barang yagn memerlukan lisensi atau izin tertentu dari pejabat yang berwenang.</li>
                                <li>Binatang dan tumbuhan.</li>
                                <li>Barang-barang illegal atau berbahaya atau barang curian, termasuk namun tidak terbatas pada barang-barang yang mengandung bahan berbahaya atau beracun, obat-obatan atau material terlalang/illegal.</li>
                            </ul>
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