import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import '../assets/main.css'
import { WeatherDataContext } from '../context/weatherDataContext';

const MiniCard = ({icon,text,cdata,unit}) => {
  const {state} = useContext(WeatherDataContext);
  return (
    <Card className={state.dark?"card-dark":"card-light"} style={{ width: "60%" ,backgroundColor:"transparent"}}>
        <Card.Text>
          <FontAwesomeIcon icon={icon} fade /> <b>{text} </b>{" "}
        </Card.Text>
        <Card.Text><b>{cdata} {unit}</b></Card.Text>
    </Card>
  )
}

export default MiniCard;