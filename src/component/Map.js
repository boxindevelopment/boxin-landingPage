import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    isMarkerShown: false,
    isLocation: false,
    setZoom: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    const { isMarkerShown } = this.state;
    const { area } = this.props;

    console.log("area", area);

    const MyMapComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCe1K--R4VOp8QNEwnRSZHCRuOqCR5ZC-0&libraries=geometry,drawing,places",
        loadingElement: (
          <center>
            <p>Loading...</p>
          </center>
        ),
        containerElement: <div className="h-700" />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) => (
      <GoogleMap defaultZoom={7} defaultCenter={props.centerLocation}>
        {props.markers.map((marker, i) => {
          console.log("marker", marker);
          return (
            props.isMarkerShown && (
              <Marker
                position={marker}
                title="Click to zoom"
                key={i}
                onClick={props.onMarkerClick}
              />
            )
          );
        })}
      </GoogleMap>
    ));

    return (
      <MyMapComponent
        centerLocation={area[0]}
        isMarkerShown={isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        markers={area}
      />
    );
  }
}
export default Map;
