import { useContext, useEffect } from 'react';
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const API_URL = `${process.env.REACT_APP_API_LINK}/weather`;

const useButtonLocationLogic = () => {
  const { state, dispatch } = useContext(WeatherDataContext);
  const { fetchWeatherData } = useWeatherData(`${API_URL}?lat=${state.latitude}&lon=${state.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch({ type: 'SET_LAT', payload: latitude });
          dispatch({ type: 'SET_LON', payload: longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.log("Geolocation not available");
    }
  }, []);

  const handleFetchWeather = () => {
    fetchWeatherData();
  };

  return { handleFetchWeather };
};

export default useButtonLocationLogic;
