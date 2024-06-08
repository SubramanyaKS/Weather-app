import React, { useContext, useEffect } from "react";
import { Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/main.css";
import {
  faLocation,
  faTemperature0,
  faTemperature2,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { faRotateRight, faC, faF } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniCard from "./WeatherMiniCard";
import { useState } from "react";
import { celciusToFarenheit } from "../util/converter";
import { WeatherDataContext } from "../context/weatherDataContext";
import "../assets/card.css";
import defaultImg from '../assets/img/default.jpg';
import clearImg from '../assets/img/clear.jpg';
import snowImg from '../assets/img/snow.jpg';
import rainImg from '../assets/img/rain.jpg';
import cloudImg from '../assets/img/cloud.jpg';
import smokeImg from '../assets/img/smoke.jpg';
import fogImg from '../assets/img/fog.jpg';
import {ToggleSwitch} from 'reactjs-toggleswitch';

const WeatherCard = ({ data }) => {
  const { state } = useContext(WeatherDataContext);
  const [farenheit, setFarenheit] = useState(false);
  const [background, setBackground] = useState(defaultImg);

  useEffect(() => {
    if (data.weather) {
      updateBackground();
    }
  }, [data]);

  const updateBackground = () => {
    const weatherCondition = data.weather[0].main;

    // Define background images for different weather conditions
    const backgrounds = {
      Clear: clearImg,
      Rain: rainImg,
      Snow: snowImg,
      Clouds: cloudImg,
      Fog:fogImg,
      Smoke:smokeImg,
      Haze:smokeImg,
      Mist:fogImg,
      Thunderstorm: "thunderstorm.jpg",
      // Add more as needed
    };

    // Set the background based on the weather condition
    setBackground(backgrounds[weatherCondition] || defaultImg);
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
  return (
    <Card
      className={state.dark ? "card-dark" : "card-light"}
      style={{ width: "80%",backgroundImage: `url(${background})` }}
    >
      <div className="container-card">
        <div className="column">
          <div className="image-card">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="Images"
            />
          </div>
          {/* <p>{data.weather[0].main}</p> */}
          <h3 className={state.dark?"styled-text-dark":"styled-text-light"}>{data.weather[0].description}</h3>
          <h1 className={state.dark?"styled-text-dark":"styled-text-light"}>
            {farenheit ? celciusToFarenheit(data.main.temp) : data.main.temp}
            {farenheit ? "°F" : "°C"}
          </h1>
          <h6 className={state.dark?"styled-text-dark":"styled-text-light"}>
            <b>
              {data.name},{data.sys.country}
            </b>
          </h6>
          <ToggleSwitch checked={farenheit ? true : false} thumbOnColor="#fff"
            thumbOffColor="#000"
            offColor="#fff"
            onColor="#000"
            onToggle={() => convertTemp()}><FontAwesomeIcon
            style={{ color:farenheit?"#000":"#fff" }}
            icon={farenheit?faC:faF}
            
          /></ToggleSwitch>
        </div>

        <div className="column second">
          <div className="column-c">
            <MiniCard
            style={{backgroundImage: `url(${background})`}}
              icon={faTemperatureHigh}
              text="Maximum: "
              cdata={
                farenheit
                  ? celciusToFarenheit(data.main.temp_max)
                  : data.main.temp_max
              }
              unit={farenheit ? "°F" : "°C"}
            />
            <MiniCard
              icon={faLocation}
              text="Latitude: "
              cdata={data.coord.lat}
            />
            <MiniCard
              icon={faGaugeSimpleMed}
              text="Pressure: "
              cdata={data.main.pressure}
              unit="Pa"
            />
            <MiniCard
              icon={faWind}
              text="Wind Speed: "
              cdata={data.wind.speed}
              unit="km/hr"
            />
          </div>
          <div className="column-c">
            <MiniCard
              icon={faTemperature0}
              text="Minimum: "
              cdata={
                farenheit
                  ? celciusToFarenheit(data.main.temp_min)
                  : data.main.temp_min
              }
              unit={farenheit ? "°F" : "°C"}
            />
            <MiniCard
              icon={faLocation}
              text="Longitude: "
              cdata={data.coord.lon}
            />
            <MiniCard
              icon={faTemperature2}
              text="Feels Like: "
              cdata={
                farenheit
                  ? celciusToFarenheit(data.main.feels_like)
                  : data.main.feels_like
              }
              unit={farenheit ? "°F" : "°C"}
            />
            <MiniCard
              icon={faDroplet}
              text="Humidity: "
              cdata={data.main.humidity}
              unit="%"
            />
          </div>
          <button
            className={
              state.dark ? "button button-dark" : "button button-light"
            }
            onClick={refresh}
          >
            <FontAwesomeIcon icon={faRotateRight} spin />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
