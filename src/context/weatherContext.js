import { createContext, useState } from "react";

export const Weather = createContext();

const WeatherContext =({children})=>{
    const [state, setState] = useState("");
    const [lon,setLon] = useState('');
    const [lat, setLat] = useState('');
    const [error,setError] = useState('');
    const [data, setData] = useState({
        id: 0,
        name: "",
        country: "",
        lat: "",
        lon: "",
        temp: "",
        feels_like: "",
        min: "",
        max: "",
        pressure: "",
        humidity: "",
        wind_speed: "",
        icon: "",
        main: "",
      });
    
    return(
        <Weather.Provider value={{data,setData,state,setState,error,setError,lat,setLat,lon,setLon}}>
            {children}
        </Weather.Provider>

    );

}

export default WeatherContext;