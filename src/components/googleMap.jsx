import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import Key from '../../secrets';

const GoogleMap = ({ coord }) => {
  return (
    <div className="map-container">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Key() }}
          defaultCenter={coord}
          defaultZoom={12}
        >
          <Marker
            lat={coord.lat}
            lng={coord.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
