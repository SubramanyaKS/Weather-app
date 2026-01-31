import { useContext } from 'react'
import { useWeatherData } from './useWeatherData';
import { WeatherDataContext } from '../context/weatherDataContext';

const useSearchBarLogic = () => {
    const { state, dispatch } = useContext(WeatherDataContext);
    const { fetchWeatherData } = useWeatherData();

    const handleChange = (value) => {
        if (value.length >= 0) {
            dispatch({ type: 'SET_CITY', payload: value });
        }
    };

    const fetchDetails = (event) => {
        event?.preventDefault();
        const query = state.city?.trim();
        if (!query) {
            dispatch({ type: 'SET_ERROR', payload: 'Please enter a city' });
            return;
        }
        fetchWeatherData({ q: query }).catch(() => {});
    };

    return { handleChange, fetchDetails };
}

export default useSearchBarLogic;