import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Flats from './data/flats.jsx';
import Flat from './flat.jsx';

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatName: "Charm at the Steps of the Sacre Coeur/Montmartre"
    };
  }

  selectFlat = (flat) => {
    return this.state.selectedFlatName === flat.name;
  }

  updateSelected = (name) => {
    this.setState({
      selectedFlatName: name
    });
  }

  render() {
    return (
      <div className="flat-list">
        {Flats.map((flat) => {
          return <Flat flat={flat} key={flat.name} selected={this.selectFlat(flat)} updateSelected={this.updateSelected} />;
        })}
      </div>
    );
  }
}

export default FlatList;
