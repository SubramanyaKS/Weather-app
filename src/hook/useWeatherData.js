import { useContext } from "react";
import { Weather } from "../context/weatherContext";

/**
 * Custom hook to fetch weather data from the API.
 * @param {string} url - The URL for fetching weather data.
 * @returns {Object} - An object containing the fetchWeatherData function.
 */

export function useWeatherData(url) {
  // Accessing weather data context
  const { setData,setError } = useContext(Weather);

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
        setData({
          id: result.id,
          name: result.name,
          country: result.sys.country,
          lat: result.coord.lat,
          lon: result.coord.lon,
          temp: result.main.temp,
          feels_like: result.main.feels_like,
          min: result.main.temp_min,
          max: result.main.temp_max,
          pressure: result.main.pressure,
          humidity: result.main.humidity,
          wind_speed: result.wind.speed,
          icon: result.weather[0].icon,
          main: result.weather[0].description,
        });
        setError('')
      } catch (error) {
        setData('')
        console.error('Error occurred while fetching weather data:', error);
        setError("OOPS !! Cannot find data for the query")
      }
    } else {
      // Reset the weather data state
      setData(null);
    }
  };

  return { fetchWeatherData };
}
