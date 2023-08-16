import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonLocationUI = ({ handleFetchWeather }) => {
  return (
    <Button className='btn btn-primary' onClick={handleFetchWeather}>Current Location</Button>
  );
};

export default ButtonLocationUI;
