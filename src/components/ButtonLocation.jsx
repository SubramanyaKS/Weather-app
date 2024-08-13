import React, { useContext } from 'react';
import useButtonLocationLogic from '../hook/ButtonLocationLogic';
import ButtonLocationUI from './ButtonLocationUI';
import { WeatherDataContext } from '../context/weatherDataContext';

const ButtonLocation = () => {
  const { handleFetchWeather } = useButtonLocationLogic();
  const {state} = useContext(WeatherDataContext);
  return <ButtonLocationUI state={state} handleFetchWeather={handleFetchWeather} />;
};

export default ButtonLocation;
