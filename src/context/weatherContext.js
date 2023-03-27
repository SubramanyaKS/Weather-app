import { createContext, useState } from "react";

export const Weather = createContext();

const WeatherContext =({children})=>{
    const [state, setState] = useState("");
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
        <Weather.Provider value={{data,setData,state,setState}}>
            {children}
        </Weather.Provider>

    );

}

export default WeatherContext;