import React from 'react'
import SearchBarUI from './SearchBarUI'
import useSearchBarLogic from '../hook/SearchBarLogic'
import { useContext } from 'react';
import { WeatherDataContext } from '../context/weatherDataContext';

const SearchBar = () => {
    const {handleChange,fetchDetails} = useSearchBarLogic();
    const { state } = useContext(WeatherDataContext);
  return (
    <SearchBarUI handleChange={handleChange} state={state} fetchDetails={fetchDetails}/>
  )
}

export default SearchBar;