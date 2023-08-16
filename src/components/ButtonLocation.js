import React from 'react';
import useButtonLocationLogic from '../hook/ButtonLocationLogic';
import ButtonLocationUI from './ButtonLocationUI';

const ButtonLocation = () => {
  const { handleFetchWeather } = useButtonLocationLogic();

  return <ButtonLocationUI handleFetchWeather={handleFetchWeather} />;
};

export default ButtonLocation;
