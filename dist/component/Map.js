import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const jkt={
	lat:-7.249050, lng:112.751850
};
const sby={
	lat:-7.972179, lng:112.634870
};

class Map extends React.PureComponent {
	constructor(props){
		super(props)
	}
	
	state = {
		isMarkerShown: false,
		isLocation: false,
		setZoom : false,
		markers:[
			{lat:-6.215393, lng: 106.846671},
			{lat:-7.249050, lng: 112.751850}
		]
	}

	componentDidMount() {
		this.delayedShowMarker()
	}

	delayedShowMarker = () => {
		setTimeout(() => {
		this.setState({ isMarkerShown: true })
		}, 3000)
	}

	handleMarkerClick = () => {
		this.setState({ isMarkerShown: false })
		this.delayedShowMarker()
	}

	render() {
		const MyMapComponent = compose(
			withProps({
				googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCe1K--R4VOp8QNEwnRSZHCRuOqCR5ZC-0&libraries=geometry,drawing,places",
				loadingElement: (<p>Loading</p>),
				containerElement: <div className="h-700" />,
				mapElement: <div style={{ height: `100%` }} />,
			}),
			withScriptjs,
			withGoogleMap
		)(props =>
			<GoogleMap
				defaultZoom={7}
				defaultCenter={props.centerLocation}
			>
				{/* {props.isMarkerShown && <Marker position={{ lat: -6.215393, lng: 106.846671 }} onClick={props.onMarkerClick} />} */}
				{props.markers.map((marker,i) => {
					return (
						props.isMarkerShown &&
						<Marker
							position={marker}
							title="Click to zoom"
							key={i}
							onClick={props.onMarkerClick}
						/>
					)
				})}
			  </GoogleMap>
		)
		return (
		<MyMapComponent
			centerLocation={this.props.center}
			isMarkerShown={this.state.isMarkerShown}
			onMarkerClick={this.handleMarkerClick}
			markers={this.state.markers}
		/>
		)
	}
}
export default Map