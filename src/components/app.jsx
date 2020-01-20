import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import Key from '../../secrets';
import FlatList from './flatList';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      coord: {
        lat: 48.88,
        lng: 2.35
      }
    };
  }

  updateCoord = (newLat, newLng) => {
    this.setState({
      coord: {
        lat: newLat,
        lng: newLng
      }
    });
  }

  center = () => {
    const { coord } = this.state;
    return {
      lat: coord.lat,
      lng: coord.lng
    };
  }

  render() {
    const { coord } = this.state;
    return (
      <div>
        <FlatList updateCoord={this.updateCoord} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: Key() }}
            defaultCenter={this.center()}
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
  }
}

export default App;
