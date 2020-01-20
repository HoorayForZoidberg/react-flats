import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Flats from './data/flats';
import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatName: "Charm at the Steps of the Sacre Coeur/Montmartre"
    };
  }

  selectFlat = (flat) => {
    const { selectedFlatName } = this.state;
    return selectedFlatName === flat.name;
  }

  updateSelected = (name) => {
    this.setState({
      selectedFlatName: name
    });
  }

  render() {
    const { updateCoord } = this.props;
    return (
      <div className="flat-list">
        {Flats.map((flat) => {
          return <Flat flat={flat} key={flat.name} selected={this.selectFlat(flat)} updateSelected={this.updateSelected} updateCoord={updateCoord} />;
        })}
      </div>
    );
  }
}

export default FlatList;
