import React from 'react';
import '../assets/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation
} from "@fortawesome/free-solid-svg-icons";

const ButtonLocationUI = ({ state,handleFetchWeather }) => {
  return (
    <>
      <button className={state.dark?"button button-dark":"button button-light"}  onClick={handleFetchWeather}><b>Current Location <FontAwesomeIcon icon={faLocation}/></b></button>
    </>
  );
};

export default ButtonLocationUI;
