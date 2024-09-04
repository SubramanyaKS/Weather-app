import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import "../assets/main.css";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToggleSwitch } from 'reactjs-toggleswitch';
import { useHeader } from '../hook/useHeader';

const Header = () => {
  const { changeTheme, state } = useHeader();

  return (
    <Navbar bg={state.dark ? "dark" : "light"} variant={state.dark ? "dark" : "light"}>
      <Container>
        <Navbar.Brand href="#home">Weather App</Navbar.Brand>
        <ToggleSwitch checked={state.dark} onToggle={changeTheme} thumbOnColor={'#000'} onColor="#131862" offColor='#add8e6'><FontAwesomeIcon style={{ color: !state.dark ? "#ffa500" : "#fff" }} icon={!state.dark ? faSun : faMoon} /></ToggleSwitch>
      </Container>
    </Navbar>
  )
}

export default Header;