import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main.css";
import { Theme } from "../context/ThemeContext";

import {
  faLocation,
  faTemperature0,
  faTemperature2,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniCard from "./MiniCard";

const WeatherCard = ({ data }) => {
  const {dark} = useContext(Theme);
  // const {state,dispatch} = useContext(Theme);

  const refresh = () => {
    window.location.reload();
  };
  return (
    <Card className={dark?"card-dark":"card-light"} style={{ width: "85%" }}>
      <div
        className="image-card"
      >
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="Images"
        />
      </div>
      <h3>{data.main}</h3>
      <Card.Body style={{ marginTop: "5px" }}>
        <h1>{data.temp}°C</h1>
        <Card.Title>
          <b>{data.name}</b>
        </Card.Title>
        <Card.Subtitle className="mb-5">{data.country}</Card.Subtitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
        >
          {/* shake fade bounce flip*/}
          <MiniCard icon={faTemperature2} text="Feels Like: " cdata={data.feels_like} unit="°C"  />
          <MiniCard icon={faTemperature0} text="Minimum: " cdata={data.min} unit="°C"  />
          <MiniCard icon={faTemperatureHigh} text="Maximum: " cdata={data.max} unit="°C"  />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
        <MiniCard icon={faLocation} text="Latitude: " cdata={data.lat}  />
        <MiniCard icon={faLocation} text="Longitude: " cdata={data.lon}  />
        <MiniCard icon={faDroplet} text="Humidity: " cdata={data.humidity} unit="%"  />
          
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
        >
           <MiniCard icon={faGaugeSimpleMed} text="Pressure: " cdata={data.pressure} unit="Pa"  />
           <MiniCard icon={faWind} text="Wind Speed: " cdata={data.max} unit="km/hr"  />
          
        </div>

        <Button className="button" color="blue" onClick={refresh}>
          <FontAwesomeIcon icon={faRefresh} spin />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
