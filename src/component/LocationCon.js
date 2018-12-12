import React, { Component } from 'react';
import axios from 'axios';
import { BASE_API_INFRASTRUCTURE } from '../config/url';
import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			city: []
		}
	}

	cityList() {
		axios.get(BASE_API_INFRASTRUCTURE + '/city')
		.then((res) => {
			let data = res.data.data
			this.setState({
				city: data
			})
		})
		.catch((err) => {
			console.log(err)
		})
	}

	componentDidMount() {
		this.cityList()
	}

	render() {
		let { city } = this.state
		return (		
            <div className="row gap-y justify-content-md-center">
                {
                    city.map((key) => {
                        return(
                            <div className="col-6 col-sm-2 text-c-responsive">
                                <img src="../../src/assets/img/app/pin@2x.png" /> <strong>{key.name}</strong>
                            </div>
                        )
                    })
                }
			</div>
		);
	}
}

export default Home;