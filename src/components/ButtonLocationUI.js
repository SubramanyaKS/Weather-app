import React from 'react';
import '../assets/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const ButtonLocationUI = ({ handleFetchWeather }) => {
  return (
      <button className="button"  onClick={handleFetchWeather}><b> <FontAwesomeIcon icon={faLocationDot}/></b></button>
  );
};

export default ButtonLocationUI;
