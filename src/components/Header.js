import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Theme } from '../context/ThemeContext'
import "../assets/main.css";
import Switch from "react-switch";

const Header = () => {
    const{dark,setDark} = useContext(Theme);
  return (
    <Navbar bg={dark?"dark":"light"} variant={dark?"dark":"light"}>
        <Container>
          <Navbar.Brand href="#home">Weather App</Navbar.Brand>
          {/* <Button className="theme-button" variant={dark?"light":"dark"} onClick={()=>setDark((dark)=>!dark)}>{dark?"Light":"Dark"}</Button> */}
          <Switch checked={dark} onHandleColor="#000" offColor='#000' onColor="#fff" checkedIcon={false}  uncheckedIcon={false} onChange={()=>setDark((dark)=>!dark)}/>
        </Container>
      </Navbar>
  )
}

export default Header;