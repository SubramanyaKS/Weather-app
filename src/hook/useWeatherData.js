import { useContext, useCallback } from "react";
import { WeatherDataContext } from "../context/weatherDataContext";

/**
 * Custom hook to fetch weather data from the API.
 * Provides a `fetchWeatherData` function that accepts runtime params:
 *   fetchWeatherData({ q, lat, lon, units = 'metric', signal })
 */
export function useWeatherData() {
  const { dispatch } = useContext(WeatherDataContext);

  const fetchWeatherData = useCallback(async ({ q, lat, lon, units = "metric", signal } = {}) => {
    const base = process.env.REACT_APP_API_LINK;
    const key = process.env.REACT_APP_API_KEY;

    if (!base || !key) {
      const msg = 'Missing API configuration';
      dispatch({ type: 'SET_ERROR', payload: msg });
      throw new Error(msg);
    }

    let url;
    if (lat != null && lon != null) {
      url = `${base}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;
    } else if (q) {
      url = `${base}/weather?q=${encodeURIComponent(q)}&units=${units}&appid=${key}`;
    } else {
      const msg = 'No query or coordinates provided';
      dispatch({ type: 'SET_ERROR', payload: msg });
      throw new Error(msg);
    }

    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error('Network response was not ok or City name is invalid');
      }
      const result = await response.json();

      if (result) {
        dispatch({ type: 'SET_WEATHER_DATA', payload: result });
        dispatch({ type: 'SET_ERROR', payload: '' });
        return result;
      }

      throw new Error('Weather data not available');
    } catch (error) {
      // If the fetch was aborted, do not treat it as an error to show to the user
      if (error.name === 'AbortError') {
        return;
      }
      dispatch({ type: 'SET_ERROR', payload: error.message || 'Error fetching weather data' });
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, [dispatch]);

  return { fetchWeatherData };
}
