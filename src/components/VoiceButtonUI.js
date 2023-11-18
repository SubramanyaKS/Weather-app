import React from 'react'
import { faMicrophone,faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VoiceButtonUI = ({listening,handleClick}) => {
  return (
    <button className="voice-button" onClick={(e) => handleClick(e)}>
    {listening ? <FontAwesomeIcon icon={faEllipsis} /> : <FontAwesomeIcon icon={faMicrophone} />}
  </button>
  )
}

export default VoiceButtonUI