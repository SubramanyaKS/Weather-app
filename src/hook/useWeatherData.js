import { useContext } from "react";
import { WeatherDataContext } from "../context/weatherDataContext";

/**
 * Custom hook to fetch weather data from the API.
 * @param {string} url - The URL for fetching weather data.
 * @returns {Object} - An object containing the fetchWeatherData function.
 */

export function useWeatherData(url) {
  // Accessing weather data context
  const { dispatch } = useContext(WeatherDataContext);

  /**
   * Function to fetch weather data from the API.
   */
  const fetchWeatherData = async () => {
    if (url) {
      try {
        // Call the OpenWeatherMap API with the provided URL
        const response = await fetch(url);
        const result = await response.json();
        // Update the weather data state
        dispatch({ type: 'SET_WEATHER_DATA', payload: result });
        dispatch({ type: 'SET_ERROR', payload: "" });
      } catch (error) {
        console.error('Error occurred while fetching weather data:', error);
        const msg ="OOPS !! Error fetching weather data. Please try again later.";
        dispatch({ type: 'SET_ERROR', payload: msg });
      }
    } else {
      // Reset the weather data state
      dispatch({ type: 'SET_ERROR', payload: "Geo Location Failed" });
      
    }
  };

  return { fetchWeatherData };
}
