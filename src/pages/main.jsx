import React, { useContext } from "react";
import "../assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Theme } from "../context/ThemeContext";
import { Weather } from "../context/weatherContext";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";
import LocationButton from "../components/LocationButton";

const Main = () => {
  const { dark } = useContext(Theme);
  const { data,error } = useContext(Weather);

  return (
    <>
      <div className={dark ? "main-dark" : "main"}>
        <br />
        <h1
          className="headline"
          style={dark ? { color: "#00ffff" } : { color: "#000" }}
        >
          Weather App
        </h1>
        <SearchBar />
        <br />
        <LocationButton/>
        <br/>
        
        {error?<h3>{error}</h3>:<WeatherDisplay data={data} />}
      </div>
    </>
  );
};
export default Main;
