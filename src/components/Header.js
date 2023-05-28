import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { Theme } from '../context/ThemeContext'
import "../assets/main.css";

const Header = () => {
    const{dark,setDark} = useContext(Theme);
  return (
    <Navbar bg={dark?"dark":"light"} variant={dark?"dark":"light"}>
        <Container>
          <Navbar.Brand href="#home">Weather App</Navbar.Brand>
          <Button className="theme-button" variant={dark?"light":"dark"} onClick={()=>setDark((dark)=>!dark)}>{dark?"Light":"Dark"}</Button>
        </Container>
      </Navbar>
  )
}

export default Header;