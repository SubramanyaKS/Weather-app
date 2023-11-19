import React from 'react'
import { faMicrophone,faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger } from 'react-bootstrap';
import { renderTooltip } from './RenderTooltip';

const VoiceButtonUI = ({listening,handleClick}) => {
  return (
    <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip({ message: "Voice search" })}
  >
    <button className="voice-button" onClick={(e) => handleClick(e)}>
    {listening ? <FontAwesomeIcon icon={faEllipsis} bounce/> : <FontAwesomeIcon icon={faMicrophone} />}
  </button>
  </OverlayTrigger>
  )
}

export default VoiceButtonUI