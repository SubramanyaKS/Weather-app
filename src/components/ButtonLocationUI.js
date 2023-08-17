import React from 'react';
import '../assets/main.css';

const ButtonLocationUI = ({ state,handleFetchWeather }) => {
  return (
    <>
      <button className={state.dark?"button button-dark":"button button-light"}  onClick={handleFetchWeather}><b>Current Location</b></button>
    </>
  );
};

export default ButtonLocationUI;
