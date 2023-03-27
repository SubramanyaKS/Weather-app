import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card } from 'react-bootstrap';

const MiniCard = () => {
  return (
    <Card style={{ width: "20%" }}>
        <Card.Text>
          <FontAwesomeIcon icon={faWind} flip /> <b>Wind Speed: </b>{" "}
          {data.wind_speed} km/hr
        </Card.Text>
    </Card>
  )
}

export default MiniCard;