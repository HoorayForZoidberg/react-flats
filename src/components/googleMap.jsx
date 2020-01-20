import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 12,
        lng: 12
      },
      zoom: 11
    };
  }

  render() {
    return (
      <div className="map-container">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCWUeVUVnYwzMMXGuDvap1J2uW8yS523T8" }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <Marker
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMap;
