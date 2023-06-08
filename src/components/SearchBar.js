import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Weather } from '../context/weatherContext';
import { useWeatherData } from '../hook/useWeatherData';
import { Theme } from '../context/ThemeContext';
import "../assets/main.css";

const SearchBar = () => {
    const {dark} = useContext(Theme);
    const {state,setState} = useContext(Weather);
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
  )
}

export default SearchBar