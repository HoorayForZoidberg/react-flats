import React from 'react';
import ReactDOM from 'react-dom';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Marker = () => {
  return (
    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" style={{ color: 'Coral' }} />
  );
};

export default Marker;
