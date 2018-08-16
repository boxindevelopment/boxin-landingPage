import React, { Component } from 'react';
import SubFooter from '../layout/SubFooter';
import Footer from '../layout/Footer';
import Map from './Map';

class DetailLocations extends Component {
	
	render() {
		const location = {
			lat: -6.215393,
			lng: 106.846671
		}
		return (
			<div>
				<header className="header h-fullscreen">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-xl-5">
								{/* <div className="h-700" data-provide="map" data-lat="-6.215393" data-lng="106.846671" data-zoom="11" data-markers="[-6.215393, 106.846671, 'Tebet Jkt', '../../src/assets/img/app/pin@2x.png']"> </div>*/}
								<Map center={location} />
							</div>
							<div className="col-lg-7 col-xl-7">
								<h1 className="fw-400">Jakarta</h1>
								<p className="lead mb-7">See all storage on Jakarta</p>
								
								<h5><img src="../../src/assets/img/app/pin@2x.png" /> Jakarta Utara</h5>
								<p>Jalan Pantai Mutiara Blok R No. 57, RT.10/RW.16, Pluit, Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14450</p>

								<h5><img src="../../src/assets/img/app/pin@2x.png" /> Jakarta Barat</h5>
								<p>Jalan Pantai Mutiara Blok R No. 57, RT.10/RW.16, Pluit, Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14450</p>

								<h5><img src="../../src/assets/img/app/pin@2x.png" /> Jakarta Timur</h5>
								<p>Jalan Pantai Mutiara Blok R No. 57, RT.10/RW.16, Pluit, Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14450</p>

								<h5><img src="../../src/assets/img/app/pin@2x.png" /> Jakarta Selatan</h5>
								<p>Jalan Pantai Mutiara Blok R No. 57, RT.10/RW.16, Pluit, Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14450</p>

								<h5><img src="../../src/assets/img/app/pin@2x.png" /> Jakarta Pusat</h5>
								<p>Jalan Pantai Mutiara Blok R No. 57, RT.10/RW.16, Pluit, Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14450</p>
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

export default DetailLocations;