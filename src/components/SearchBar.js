import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { useWeatherData } from '../hook/useWeatherData';
import "../assets/main.css";
import { WeatherDataContext } from '../context/weatherDataContext';

const SearchBar = () => {
  const { state, dispatch } = useContext(WeatherDataContext);
  const { fetchWeatherData } = useWeatherData(`${process.env.REACT_APP_API_LINK}/weather?q=${state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
    const handleChange = (value) => {
        dispatch({ type: 'SET_CITY', payload: value });
      };
      const fetchDetails = (event) => {
        //const env = dotenv.config().parsed;
        event.preventDefault();
        // console.log(state.city);
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
            <FontAwesomeIcon icon={faSearch} className="icon-switch"  style={state.dark?{ color:"#00ffff"}:{color:"#000"}} />
            </div>
          </form>
        </div>
  )
}

export default SearchBar