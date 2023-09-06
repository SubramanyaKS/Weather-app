import React, { createContext, useReducer } from 'react';
import { weatherReducer } from '../reducer/reducer';

const initialState = {
  city: '',
  weatherData: null,
  error:"",
  latitude:null,
  longitude:null,
  dark:false,
  loading:false,
};

const WeatherDataContext = createContext();

const WeatherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(weatherReducer, initialState);
  
    return (
      <WeatherDataContext.Provider value={{ state, dispatch }}>
        {children}
      </WeatherDataContext.Provider>
    );
  };
  
  export { WeatherDataContext, WeatherProvider };