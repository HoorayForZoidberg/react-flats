import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Flat extends Component {
  handleClick = () => {
    const { updateSelected, updateCoord, flat } = this.props;
    updateSelected(flat.name);
    updateCoord(flat.lat, flat.lng);
  }

  render() {
    const { flat, selected } = this.props;
    const cardClass = `card ${selected ? "active" : null}`;
    return (
      <div className={cardClass} style={{ backgroundImage: `url(${flat.imageUrl})` }} onClick={this.handleClick}>
        <div className="card-description">{flat.name}</div>
      </div>
    );
  }
}

export default Flat;
