import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import  Button  from "react-bootstrap/Button";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
//import dotenv from  'dotenv'

const Main = () => {

  const [state, setState] = useState("");
  const [data, setData] = useState({
    id: 0,
    name: "",
    country: "",
    lat: "",
    lon: "",
    temp: "",
    feels_like: "",
    min: "",
    max: "",
    pressure: "",
    humidity: "",
    wind_speed: "",
    icon:"",
    main:"",
    
  });
  const refresh = () => {
    window.location.reload();
  }

  const handleChange = (value) => {
    setState(value);
    //fetchDetails();
  };
 
  const fetchDetails = (event) => {
    //const env = dotenv.config().parsed;
    event.preventDefault();
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
          main:result.weather[0].main,
         
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
  return (
    <>
      <div className="main"><br/>
        <h1 style={{ textAlign: "center", color: "white",fontFamily:"cursive" }}>Weather App</h1>
        <div className="search">
          <form onSubmit={fetchDetails}>
            <input
              placeholder="Enter the City"
              icon={faSearch}
              className="searchBar"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              id="outlined-basic"
              variant="outlined"
              label="Search"
            />
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "24px" }} />
          </form>
        </div>
        <br />
        {data.name.length > 0 ? (
          <div className="col mb-2  d-flex align-items-center card-show">
            <Card style={{ width: "20rem" ,alignItems:"center"}}>
            
            <img src = {`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="Images" />
              <p>{data.main}</p>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.country}
                </Card.Subtitle>
                <Card.Text>
                  <b>Latitude</b> {data.lat} <b>Longitude</b> {data.lon}
                </Card.Text>
                <Card.Text>
                  <b>Humidity</b> {data.humidity} % <b>Pressure</b>
                  {data.pressure} Pa
                </Card.Text>
                <Card.Text>
                  <b>Wind Speed</b> {data.wind_speed}
                </Card.Text>
                <Card.Text>
                  <b>Temperature</b> {data.temp} °C <b>Feels Like</b>{" "}
                  {data.feels_like} °C
                </Card.Text>
                <Card.Text>
                  <b>Minimum</b> {data.min} °C <b>Maximum</b> {data.max} °C
                </Card.Text>
                <Button className="button"  color='blue'  onClick={refresh} ><FontAwesomeIcon  icon={faRefresh}/></Button>
              </Card.Body>
            </Card>
            {/* <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={images} />
                <Card.ImgOverlay>
                  <Card.Title style={{ color: "black" }}>{data.name}</Card.Title>
                  <p><b>Longitude: </b>{data.lon} </p>
          
          <table>

            <thead>
              <tr>
                <th><b>Longitude </b></th>
                <th><b>Latitude </b></th>
                <th><b>Country </b></th>
                <th><b>Humidity </b></th>
                <th><b>Pressure </b></th>
                <th><b>Wind Speed</b></th>

              </tr>

            </thead>
            <tbody>
              <tr>
                <td> {data.lon}</td>
                <td> {data.lat}</td>
                <td> {data.country}</td>
                <td> {data.humidity}</td>
                <td> {data.pressure}</td>
                <td> {data.wind_speed}</td>
              </tr>
            </tbody>
            
            

          </table> 
          <br/>  
          <table>
          <thead>
              <tr>
              <th><b>Temperature </b></th>
               <th><b>Feels Like </b></th>
               <th><b>Minimum  </b></th>
               <th><b>Maximum </b></th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.temp}</td>
                <td>{data.feels_like}</td>
                <td>{data.min}</td>
                <td>{data.max}</td>
              </tr>
            </tbody>
            </table>       
            
                
                </Card.ImgOverlay>
          </Card>*/}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Main;
