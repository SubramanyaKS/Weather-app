import React, { useContext, useState } from 'react';
import { faMicrophone,faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WeatherDataContext } from '../context/weatherDataContext';
import '../assets/voice.css'

const VoiceButton = () => {
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

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        dispatch({ type: 'SET_CITY', payload: text });
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

  return (
    <>
      <button className="voice-button" onClick={(e) => handleClick(e)}>
        {listening ? <FontAwesomeIcon icon={faEllipsis} /> : <FontAwesomeIcon icon={faMicrophone} />}
      </button>
    </>
  );
};

export default VoiceButton;