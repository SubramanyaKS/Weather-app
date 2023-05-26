import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/main.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Theme } from "../context/ThemeContext";
import { Weather } from "../context/weatherContext";
import { useWeatherData } from "../hook/useWeatherData";
import WeatherDisplay from "../components/WeatherDisplay";

const Main = () => {
  const {dark} = useContext(Theme);
  const {data,state,setState} = useContext(Weather);
  const { fetchWeatherData } = useWeatherData(state);
  
const handleChange = (value) => {
    setState(value);
  };
  const fetchDetails = (event) => {
    //const env = dotenv.config().parsed;
    event.preventDefault();
    console.log(state);
    fetchWeatherData();
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
        <WeatherDisplay data={data}/>
      </div>
    </>
  );
};
export default Main;