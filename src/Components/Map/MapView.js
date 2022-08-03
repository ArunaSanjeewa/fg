import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';
import { faL } from "@fortawesome/free-solid-svg-icons";
import restaurants from '../../assets/restaurants.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const containerStyle = {
  width: '100%',
  height: '100%'
};


export default function MapView(props) {


  const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC7QjauaBLV9W__koQgy65PIuxYbcSPpfg"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])



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
  const center = {
    lat: props.defualt.isDefualtAddrers.lat,
    lng: props.defualt.isDefualtAddrers.lng
  };
  

  return isLoaded ? (

    // Important! Always set the container height explicitlys
    <div className="map-view-web" style={{ height: '100vh', width: '100%', borderRadius: 25, overflow: 'hidden' }}>

      
      <GoogleMap

        options={defaultMapOptions}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        //onLoad={onLoad}
        onUnmount={onUnmount}

      >
        {props.details.apiArray.map((w, i) =>
          <Marker
          icon={{

            url: restaurants,

           // anchor: new this.props.google.maps.Point(17, 46),

          // scaledSize: new window.google.maps.Size(40, 45)
          }}
            key={i}
            position={{ lat: w.formattedLocations[0].lat, lng: w.formattedLocations[0].lng }}
          // onClick={() => handleActiveMarker(id)}
          >

          

          </Marker>
        )}
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : <></>;
}