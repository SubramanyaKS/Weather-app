import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import '../assets/main.css'
import { Theme } from '../context/ThemeContext';

const MiniCard = ({icon,text,cdata,unit}) => {
  const {dark} = useContext(Theme);
  return (
    <Card className={dark?"card-dark":"card-light"} style={{ width: "60%" }}>
        <Card.Text>
          <FontAwesomeIcon icon={icon} fade /> <b>{text} </b>{" "}
        </Card.Text>
        <Card.Text><b>{cdata} {unit}</b></Card.Text>
    </Card>
  )
}

export default MiniCard;