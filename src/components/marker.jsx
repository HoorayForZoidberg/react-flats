import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Marker extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" style={{ color: 'Coral' }}/>
    );
  }
}

export default Marker;
