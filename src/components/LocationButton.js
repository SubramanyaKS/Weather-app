import React, { useContext } from 'react'
import { useWeatherData } from '../hook/useWeatherData';
import { Weather } from '../context/weatherContext';


const LocationButton = () => {
    const {lat,setLat,lon,setLon} = useContext(Weather);
    const { fetchWeatherData } = useWeatherData(`${process.env.REACT_APP_API_LINK}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
    
    // Get user's current location
    const fetchLocation=()=>{
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLat(latitude);
        setLon(longitude);
        fetchWeatherData();
    }
    function error(err) {
        console.log('Error getting current location:', err);
      }

  return (
    <button className='btn btn-primary' onClick={fetchLocation}>Current Location</button>
  )
}

export default LocationButton