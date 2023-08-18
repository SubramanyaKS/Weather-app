import React, { useContext } from "react";
import "../assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";
import { WeatherDataContext } from "../context/weatherDataContext";
import ButtonLocation from "../components/ButtonLocation";

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
        <ButtonLocation/>
        <br/>
        {state.error?<h5 style={{color:"#f00"}}>{state.error}</h5>:<WeatherDisplay data={weatherData} />}
      </div>
    </>
  );
};
export default Main;
