import { useState, useContext } from "react";
import { WeatherDataContext } from "../context/weatherDataContext";
import { fetchApi } from '../util/fetchapi';

export const useVoiceButtonLogic = ()=>{
    const { dispatch } = useContext(WeatherDataContext);
  const [listening, setListening] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (!listening) {
      setListening(true);
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';

      recognition.onresult = async (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        dispatch({ type: 'SET_CITY', payload: text });
        
        const result= await fetchApi(text);
        // console.log("result",result);
        dispatch({ type: 'SET_WEATHER_DATA', payload: result });
        
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.start();
    } else {
      window.speechSynthesis.cancel();
      setListening(false);
      
    }
  };
  return {handleClick,listening}

}