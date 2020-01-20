import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Flat extends Component {
  handleClick = () => {
    this.props.updateSelected(this.props.flat.name);
  }

  render() {
    const cardClass = `card ${this.props.selected ? "active" : null}`;
    return (
      <div className={cardClass} style={{ backgroundImage: `url(${this.props.flat.imageUrl})` }} onClick={this.handleClick}>
        <div className="card-description">{this.props.flat.name}</div>
      </div>
    );
  }
}

export default Flat;
