import { useContext} from "react";
import { Weather } from "../context/weatherContext";
export function useWeatherData(searchTerm) {
    //using weather data context
    const {setData} = useContext(Weather);
    
    // Function to fetch weather data from API
    const fetchWeatherData = async () => {
      if (searchTerm) {
        try {
  
          // Call the OpenWeatherMap API with the search term
          const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          );
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
        } catch (error) {
          console.error('Error occurred while fetching weather data:', error);
        
        }
      } else {
        setData(null);
      }
    };
    return { fetchWeatherData };
  }
  