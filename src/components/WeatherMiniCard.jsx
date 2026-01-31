import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import '../assets/main.css'

const MiniCard = ({icon,text,cdata,unit,dark}) => {
  return (
    <Card className={dark?"card-dark":"card-light"} style={{ width: "60%" ,backgroundColor:"transparent"}}>
        <Card.Text>
          <FontAwesomeIcon icon={icon} fade /> <b>{text} </b>{" "}
        </Card.Text>
        <Card.Text><b>{cdata} {unit}</b></Card.Text>
    </Card>
  )
}
export default React.memo(MiniCard);