import React from 'react'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main.css";
import { faLocation, faTemperature0, faTemperature2, faTemperatureHalf, faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherCard = ({data}) => {
    const refresh = () => {
        window.location.reload();
      };
  return (
    <Card style={{ width: "20rem", alignItems: "center" }}>
              <img
                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                alt="Images"
              />
              <p>{data.main}</p>
              <Card.Body>
                <Card.Title><b>{data.name}</b></Card.Title>
                <Card.Subtitle className="mb-2">
                  {data.country}
                </Card.Subtitle>
                <Card.Text>
                <FontAwesomeIcon icon={faLocation} beatFade/> <b>Latitude: </b> {data.lat} <b>Longitude: </b> {data.lon}
                </Card.Text>
                <Card.Text>
                <FontAwesomeIcon icon={faDroplet} bounce /> <b>Humidity: </b> {data.humidity} %   
                </Card.Text>
                <Card.Text><FontAwesomeIcon icon={faGaugeSimpleMed} fade /><b>Pressure: </b>
                  {data.pressure} Pa</Card.Text>
                <Card.Text>
                <FontAwesomeIcon icon={faWind} flip/> <b>Wind Speed: </b> {data.wind_speed} km/hr
                </Card.Text>
                <Card.Text>
                <FontAwesomeIcon icon={faTemperatureHalf} shake/><b>Temperature</b> {data.temp} °C 
                </Card.Text>
                <Card.Text><FontAwesomeIcon icon={faTemperature2} shake /><b>Feels Like: </b>{" "}
                  {data.feels_like} °C</Card.Text>
                <Card.Text>
                <FontAwesomeIcon icon={faTemperature0} shake /> <b>Minimum: </b> {data.min} °C 
                </Card.Text>
                <Card.Text><FontAwesomeIcon icon={faTemperatureHigh} shake/><b>Maximum: </b> {data.max} °C
                </Card.Text>
                <Button className="button" color="blue" onClick={refresh}>
                  <FontAwesomeIcon icon={faRefresh} spin/>
                </Button>
              </Card.Body>
            </Card>
  )
}

export default WeatherCard