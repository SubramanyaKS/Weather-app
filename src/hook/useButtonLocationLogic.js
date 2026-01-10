import { useContext, useEffect } from 'react';
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const useButtonLocationLogic = () => {
  const { state, dispatch } = useContext(WeatherDataContext);
  const { fetchWeatherData } = useWeatherData();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch({ type: 'SET_LAT', payload: latitude });
          dispatch({ type: 'SET_LON', payload: longitude });
        },
        (error) => {
          dispatch({ type: 'SET_ERROR', payload: error.message });
        }
      );
    } else {
      dispatch({ type: 'SET_ERROR', payload: "Geo Location Failed" });
    }
  }, [dispatch]);

  // Fetch when coordinates become available. Abort on cleanup.
  useEffect(() => {
    if (state.latitude != null && state.longitude != null) {
      const controller = new AbortController();
      fetchWeatherData({ lat: state.latitude, lon: state.longitude, signal: controller.signal }).catch(() => {});
      return () => controller.abort();
    }
  }, [state.latitude, state.longitude, fetchWeatherData]);

  const handleFetchWeather = () => {
    // Use last known coordinates to fetch
    fetchWeatherData({ lat: state.latitude, lon: state.longitude }).catch(() => {});
  };

  return { handleFetchWeather };
};

export default useButtonLocationLogic;
