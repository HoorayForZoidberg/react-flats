import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './googleMap.jsx';
import FlatList from './flatList.jsx';

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

  render() {
    return (
      <div>
        <FlatList updateCoord={this.updateCoord} />
        <GoogleMap coord={this.state.coord} />
      </div>
    );
  }
}

export default App;
