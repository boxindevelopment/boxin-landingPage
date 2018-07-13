import React from 'react';
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "google-map-react"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCe1K--R4VOp8QNEwnRSZHCRuOqCR5ZC-0&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                position: null,
                onMarkerMounted: ref => {
                    refs.marker = ref;
                },

                onPositionChanged: () => {
                    const position = refs.marker.getPosition();
                    console.log(position.toString());
                }
            })
        },
    }),
    withScriptjs,
	withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} draggable={true} ref={props.onMarkerMounted} onPositionChanged={props.onPositionChanged} />}
    </GoogleMap>
    )

class SiteMaps extends React.PureComponent {
    state = {
        isMarkerShown: false,
    }


    render() {
        return (
            <div>
                <MyMapComponent isMarkerShown={true} />
            </div>
        )
    }
}


export default SiteMaps;

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const API_KEY='AIzaSyCe1K--R4VOp8QNEwnRSZHCRuOqCR5ZC-0';

// class SiteMaps extends Component {
// 	constructor(props){
//         super(props);

//     }
// 	static defaultProps = {
// 		center: {
// 			lat: -7.268190,
// 			lng: 109.491000
// 		},
// 		zoom: 8
// 	}
 
//   	render() {
// 		return (
// 			// Important! Always set the container height explicitly
// 			<div>
// 				<div style={{ height: '70vh', width: '100%' }}>
// 					<GoogleMapReact
// 						bootstrapURLKeys={{ key: API_KEY }}
// 						defaultCenter={this.props.center}
// 						defaultZoom={this.props.zoom}
// 					>
// 						<AnyReactComponent
// 							lat={-7.268190}
// 							lng={109.491000}
// 						/>
// 					</GoogleMapReact>
// 				</div>
// 			</div>
// 		);
// 	}
// }
 
// export default SiteMaps;