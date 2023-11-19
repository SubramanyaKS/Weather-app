import React from 'react';
import '../assets/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger } from 'react-bootstrap';
import { renderTooltip } from './RenderTooltip';

const ButtonLocationUI = ({ handleFetchWeather }) => {
  return (
    <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip({ message: "current location" })}
  >
      <button className="button"  onClick={handleFetchWeather}><b> <FontAwesomeIcon icon={faLocationDot}/></b></button>
  </OverlayTrigger>
  );
};

export default ButtonLocationUI;
