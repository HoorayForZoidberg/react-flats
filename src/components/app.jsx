import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './googleMap.jsx';
import FlatList from './flatList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <GoogleMap />
        <FlatList />
      </div>
    );
  }
}

export default App;
