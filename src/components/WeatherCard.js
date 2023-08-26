import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/main.css";
import {
  faLocation,
  faTemperature0,
  faTemperature2,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faGaugeSimpleMed } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniCard from "./WeatherMiniCard";
import { useState } from "react";
import { celciusToFarenheit } from "../util/converter";
import { WeatherDataContext } from "../context/weatherDataContext";

const WeatherCard = ( {data} ) => {
  const {state} = useContext(WeatherDataContext);
  const [farenheit,setFarenheit] = useState(false);
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
    <Card className={state.dark?"card-dark":"card-light"} style={{ width: "85%" }}>
      <div
        className="image-card">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Images"
        />
      </div>
      <h3>{data.weather[0].description}</h3>
      <Card.Body style={{ marginTop: "5px" }}>
        <h1>{farenheit?celciusToFarenheit(data.main.temp): data.main.temp}{farenheit?"°F":"°C"}</h1>
        <Card.Title>
          <b>{data.name},{data.sys.country}</b>
        </Card.Title>
        
        <Row>
          <Col>
          <MiniCard icon={faTemperature2} text="Feels Like: " cdata={farenheit?celciusToFarenheit(data.main.feels_like): data.main.feels_like} unit={farenheit?"°F":"°C"}  />
          <MiniCard icon={faLocation} text="Latitude: " cdata={data.coord.lat}  />
          </Col>
          <Col>
          <MiniCard icon={faTemperature0} text="Minimum: " cdata={farenheit?celciusToFarenheit(data.main.temp_min) :data.main.temp_min} unit={farenheit?"°F":"°C"}  />
          <MiniCard icon={faLocation} text="Longitude: " cdata={data.coord.lon}  />
          </Col>
          <Col>
          <MiniCard icon={faTemperatureHigh} text="Maximum: " cdata={farenheit?celciusToFarenheit(data.main.temp_max): data.main.temp_max} unit={farenheit?"°F":"°C"}  />
          <MiniCard icon={faDroplet} text="Humidity: " cdata={data.main.humidity} unit="%"  />
          </Col>
                  
          <Col>
          <MiniCard icon={faGaugeSimpleMed} text="Pressure: " cdata={data.main.pressure} unit="Pa"  />
           <MiniCard icon={faWind} text="Wind Speed: " cdata={data.wind.speed} unit="km/hr"  />
          </Col>

        </Row>

        <button className={state.dark?"button button-dark":"button button-light"} onClick={refresh}>
          <FontAwesomeIcon icon={faRefresh} spin />
        </button>
        <button className={state.dark?"button button-dark":"button button-light"} onClick={()=>convertTemp()}>
          <b>{farenheit?"Celcius":"Farenheit"}</b>
        </button>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
