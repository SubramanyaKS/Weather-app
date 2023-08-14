import React, { useContext } from "react";
import "../assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";
import LocationButton from "../components/LocationButton";
import { WeatherDataContext } from "../context/weatherDataContext";

const Main = () => {
  const { state } = useContext(WeatherDataContext);
  const { weatherData } = state;
  return (
    <>
      <div className={state.dark ? "main-dark" : "main"}>
        <br />
        <h1
          className="headline"
          style={state.dark ? { color: "#00ffff" } : { color: "#000" }}
        >
          Weather App
        </h1>
        <SearchBar />
        <br />
        <LocationButton/>
        <br/>
        {state.error?<h3>{state.error}</h3>:<WeatherDisplay data={weatherData} />}
      </div>
    </>
  );
};
export default Main;
