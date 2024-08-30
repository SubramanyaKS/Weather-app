import { useContext } from 'react'
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const useSearchBarLogic = () => {
    const { state, dispatch } = useContext(WeatherDataContext);
    const { fetchWeatherData } = useWeatherData(`${process.env.REACT_APP_API_LINK}/weather?q=${state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
      const handleChange = (value) => {
        if(value.length>=0){
          // console.log(value);
          dispatch({ type: 'SET_CITY', payload: value });
        }
        };
        const fetchDetails = (event) => {
          //const env = dotenv.config().parsed;
          event.preventDefault();
          // console.log(state.city);
          fetchWeatherData();
        };
    return{handleChange,fetchDetails};
}

export default useSearchBarLogic;