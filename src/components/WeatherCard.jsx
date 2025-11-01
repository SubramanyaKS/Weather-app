import React from "react";
import { Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/main.css";
import {
  faLocation,
  faTemperature0,
  faTemperature2,
  faTemperatureHigh,
  faGaugeSimpleMed ,
  faDroplet,
  faRotateRight,
  faC,
  faF,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniCard from "./WeatherMiniCard";
import { celciusToFarenheit } from "../util/converter";
import "../assets/card.css";
import {ToggleSwitch} from 'reactjs-toggleswitch';
import { useWeatherCardLogic } from "../hook/useWeatherCardLogic";

const WeatherCard = ({ data }) => {
  const { refresh, convertTemp, farenheit, state,background } = useWeatherCardLogic(data);
  
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
