import { useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../context/weatherDataContext";
import { weatherimage } from "../util/images";

export const useWeatherCardLogic = (data)=>{
  const { state } = useContext(WeatherDataContext);
  const [farenheit, setFarenheit] = useState(false);
  const [background, setBackground] = useState(weatherimage.defaultImg);

  useEffect(() => {
    if (data.weather) {
      updateBackground();
    }
  }, [data]);

  const updateBackground = () => {
    const weatherCondition = data.weather[0].main;

    // Define background images for different weather conditions
    const backgrounds = {
      Clear: weatherimage.clearImg,
      Rain: weatherimage.rainImg,
      Snow: weatherimage.snowImg,
      Clouds: weatherimage.cloudImg,
      Fog:weatherimage.fogImg,
      Smoke:weatherimage.smokeImg,
      Haze:weatherimage.smokeImg,
      Mist:weatherimage.fogImg,
      Thunderstorm: "thunderstorm.jpg",
      // Add more as needed
    };

    // Set the background based on the weather condition
    setBackground(backgrounds[weatherCondition] || weatherimage.defaultImg);
  };

  const refresh = () => {
    window.location.reload();
  };
  const convertTemp = () => {
    if (farenheit) {
      setFarenheit(false);
    } else {
      setFarenheit(true);
    }
  };
  return {refresh,convertTemp,farenheit,state,background}
}