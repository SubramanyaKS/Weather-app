import { useContext } from "react";
import { Weather } from "../context/weatherContext";

export const FetchDetails = () => {
    const {data,setData,state } = useContext(Weather);
    //const env = dotenv.config().parsed;
    // event.preventDefault();
    console.log(state);
    // console.log("ID",process.env.REACT_APP_API_KEY)

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
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

        if (typeof result === typeof data) {
          console.log("Subbu", result);
        }
        console.log(typeof result);
        console.log(data.main);
      })
      .catch((error) => {
        console.log(error);
      });
  };