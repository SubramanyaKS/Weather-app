import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main.css";
import {
  faLocation,
  faTemperature0,
  faTemperature2,
  faTemperatureHalf,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherCard = ({ data }) => {
  const refresh = () => {
    window.location.reload();
  };
  return (
    <Card style={{ width: "85%" }}>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
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
          <Card style={{ width: "20%" }}>
            <Card.Text>
              <FontAwesomeIcon icon={faTemperature2} shake />
              <b> Feels Like: </b> {data.feels_like} °C
            </Card.Text>
          </Card>
          <Card style={{ width: "20%" }}>
          <Card.Text>
            <FontAwesomeIcon icon={faTemperature0} shake /> <b> Minimum: </b>{" "}
            {data.min} °C
          </Card.Text>
          </Card>
          <Card style={{ width: "20%"}}>
          <Card.Text>
            <FontAwesomeIcon icon={faTemperatureHigh} shake />
            <b>Maximum: </b> {data.max} °C
          </Card.Text>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <Card style={{ width: "20%", }}>
        <Card.Text>
          <FontAwesomeIcon icon={faLocation} beatFade /> <b>Latitude: </b>{" "}
          {data.lat} 
        </Card.Text>
        </Card>
        <Card style={{ width: "20%"}}>
        <Card.Text>
          <FontAwesomeIcon icon={faLocation} beatFade /> <b>Longitude: </b>{" "}
          {data.lon} 
        </Card.Text>
          </Card>
          <Card style={{ width: "20%" }}>
        <Card.Text>
          <FontAwesomeIcon icon={faDroplet} bounce /> <b>Humidity: </b>{" "}
          {data.humidity} %
        </Card.Text>
        </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
        >
          <Card style={{ width: "20%" }}>
        <Card.Text>
          <FontAwesomeIcon icon={faGaugeSimpleMed} fade />
          <b>Pressure: </b>
          {data.pressure} Pa
        </Card.Text>
        </Card>
        <Card style={{ width: "20%" }}>
        <Card.Text>
          <FontAwesomeIcon icon={faWind} flip /> <b>Wind Speed: </b>{" "}
          {data.wind_speed} km/hr
        </Card.Text>
        </Card>
        </div>
        {/* <Card.Text>
                <FontAwesomeIcon icon={faTemperatureHalf} shake/><b>Temperature</b> {data.temp} °C 
                </Card.Text> */}

        <Button className="button" color="blue" onClick={refresh}>
          <FontAwesomeIcon icon={faRefresh} spin />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
