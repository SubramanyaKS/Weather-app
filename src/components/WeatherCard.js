import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/main.css";
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
import MiniCard from "./WeatherMiniCard";
import { useState } from "react";
import { celciusToFarenheit } from "../util/converter";

const WeatherCard = ({ data }) => {
  const {dark} = useContext(Theme);
  const [farenheit,setFarenheit] = useState(false);
  // const {state,dispatch} = useContext(Theme);

  const refresh = () => {
    window.location.reload();
  };
  const convertTemp=()=>{
    if(farenheit){
      setFarenheit(false);
    }
    else{
      setFarenheit(true);
    }
  }
  return (
    <Card className={dark?"card-dark":"card-light"} style={{ width: "85%" }}>
      <div
        className="image-card">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="Images"
        />
      </div>
      <h3>{data.main}</h3>
      <Card.Body style={{ marginTop: "5px" }}>
        <h1>{farenheit?celciusToFarenheit(data.temp): data.temp}{farenheit?"°F":"°C"}</h1>
        <Card.Title>
          <b>{data.name}</b>
        </Card.Title>
        <Card.Subtitle className="mb-5">{data.country}</Card.Subtitle>
        
        <Row>
          <Col>
          <MiniCard icon={faTemperature2} text="Feels Like: " cdata={farenheit?celciusToFarenheit(data.feels_like): data.feels_like} unit={farenheit?"°F":"°C"}  />
          <MiniCard icon={faLocation} text="Latitude: " cdata={data.lat}  />
          </Col>
          <Col>
          <MiniCard icon={faTemperature0} text="Minimum: " cdata={farenheit?celciusToFarenheit(data.min) :data.min} unit={farenheit?"°F":"°C"}  />
          <MiniCard icon={faLocation} text="Longitude: " cdata={data.lon}  />
          </Col>
          <Col>
          <MiniCard icon={faTemperatureHigh} text="Maximum: " cdata={farenheit?celciusToFarenheit(data.max): data.max} unit={farenheit?"°F":"°C"}  />
          <MiniCard icon={faDroplet} text="Humidity: " cdata={data.humidity} unit="%"  />
          </Col>
          
          
          <Col>
          <MiniCard icon={faGaugeSimpleMed} text="Pressure: " cdata={data.pressure} unit="Pa"  />
           <MiniCard icon={faWind} text="Wind Speed: " cdata={data.max} unit="km/hr"  />
          </Col>
          
          
    
        </Row>

        <Button className="button" color="blue" onClick={refresh}>
          <FontAwesomeIcon icon={faRefresh} spin />
        </Button>
        <Button className="button" color="blue" onClick={()=>convertTemp()}>
          {farenheit?"Celcius":"Farenheit"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
