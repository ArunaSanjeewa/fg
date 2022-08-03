import { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    fullscreenControl: false,
    zoomControlOptions: false

  };
}

export default function MapView(props) {


  useEffect(() => {
    console.log(props)

  }, []);
  // const defaultProps = {
  //   center: {
  //     lat: -35.7274938,
  //     lng: 174.3165604
  //   },
  //   zoom: 11
  // };

  return (

    // Important! Always set the container height explicitlys
    <div className="map-view-web" style={{ height: '100vh', width: '100%', borderRadius: 25, overflow: 'hidden' }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC7QjauaBLV9W__koQgy65PIuxYbcSPpfg" }}
        defaultCenter={{
          lat: -35.7274938,
          lng: 174.0588784
        }}
        yesIWantToUseGoogleMapApiInternals={true}
        defaultZoom={11}
        options={createMapOptions}
      // onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps, props.wildfires)} //Sadly this didn't work
      >
        {props.details.apiArray.map((w, i) =>
          <AnyReactComponent
            lat={w.formattedLocations[0].lat}
            lng={w.formattedLocations[0].lng}
            text=''
          />
        )}
      </GoogleMapReact>
    </div>
  );
}