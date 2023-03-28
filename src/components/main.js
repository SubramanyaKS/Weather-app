import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./main.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherCard from "./WeatherCard";
import { Theme } from "../context/ThemeContext";
import { Button } from "react-bootstrap";
//import dotenv from  'dotenv'

const Main = () => {
  // const{state:theme,dispatch} = useContext(Theme);
  const {dark,setDark} = useContext(Theme);

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
    icon: "",
    main: "",
  });

  const handleChange = (value) => {
    setState(value);
    //fetchDetails();
  };

  // const dark =theme.state.dark;
  // const toggleTheme =()=>{
  //   if (dark)
  //     // dispatch({ type: "LIGHTMODE" });
  //     setDark(false);
      
  //   else
  //   setDark(true);
  //     // dispatch({ type: "DARKMODE" });


  // }
  console.log(dark);

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
  return (
    <>
      <div className={dark?"main-dark":"main"}>
        <br />
        
        <h1 className="headline"
          style={dark?{  color: "#00ffff"}:{color:"#000"}}
        >
          Weather App
        </h1>
        <div>
        {/* <label className="switch">
  <input type="checkbox" ={console.log("Hi")}/>
  <span className="slider round"></span>
</label> */}
        </div>
        <div className="search">
          <form onSubmit={fetchDetails}>
            <div className="input-search">
            <input
            type="text"
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
            <FontAwesomeIcon icon={faSearch} className="icon-switch"  style={dark?{ color:"#00ffff"}:{color:"#000"}} />
            </div>
          </form>
        </div>
        <br />
        {data.name.length > 0 ? (
          <div className="col   d-flex align-items-center card-show">
            <WeatherCard data={data} />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Main;