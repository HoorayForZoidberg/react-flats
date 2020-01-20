import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './googleMap.jsx';
import FlatList from './flatList.jsx';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      coord : {
        lat: 58,
        lng: 58
      }
    }
  }

  updateCoord = (newLat, newLng) => {
    this.setState({
      coord: {
        lat: newLat,
        lng: newLng
      }
    })
  }

  render() {
    return (
      <div>
        <GoogleMap coord={this.state.coord} />
        <FlatList updateCoord={this.updateCoord} />
      </div>
    );
  }
}

export default App;
