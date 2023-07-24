import React from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ["places"];

const MapContainer = () => {
  
  const [autocomplete, setAutocomplete] = React.useState("ty");

  const onLoad = (autoC) => setAutocomplete(autoC)

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace())
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCv3cHcYxI4YCfgNuOUEU3QfZk9XXThonM"
      libraries={libraries}
    >
      <GoogleMap
        // mapContainerStyle={containerStyle}
        // center={center}
        zoom={10}
      >
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer;
